const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dataDirectory = path.join(root, 'iraqi-cities-districts-data');
const requiredCityFields = ['id', 'name', 'key', 'country_id', 'ebhar_id', 'alwaseet_id'];
const requiredDistrictFields = [
  'id',
  'name',
  'state_id',
  'is_prime_supported',
  'prime_id',
  'ebhar_id',
];

function readJson(filename) {
  const fullPath = path.join(dataDirectory, filename);
  try {
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (error) {
    throw new Error(`${filename}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertFields(record, fields, filename, index) {
  for (const field of fields) {
    assert(Object.prototype.hasOwnProperty.call(record, field), `${filename}[${index}] is missing ${field}`);
  }
}

function main() {
  const cities = readJson('cities.json');
  assert(Array.isArray(cities), 'cities.json must contain an array');

  const cityIds = new Set();
  const cityKeys = new Set();
  for (const [index, city] of cities.entries()) {
    assertFields(city, requiredCityFields, 'cities.json', index);
    assert(!cityIds.has(city.id), `cities.json has duplicate id ${city.id}`);
    assert(!cityKeys.has(city.key), `cities.json has duplicate key ${city.key}`);
    cityIds.add(city.id);
    cityKeys.add(city.key);
  }

  const districtFiles = fs
    .readdirSync(dataDirectory)
    .filter((filename) => /^\d+-[A-Z]+\.json$/.test(filename));
  const districtIds = new Set();
  let districtCount = 0;

  for (const filename of districtFiles) {
    const match = /^(\d+)-([A-Z]+)\.json$/.exec(filename);
    const expectedId = Number(match[1]);
    const expectedKey = match[2];
    const city = cities.find((candidate) => candidate.id === expectedId);
    assert(city, `${filename} does not have a matching city id`);
    assert(city.key === expectedKey, `${filename} does not match city key ${city.key}`);

    const districts = readJson(filename);
    assert(Array.isArray(districts), `${filename} must contain an array`);
    for (const [index, district] of districts.entries()) {
      assertFields(district, requiredDistrictFields, filename, index);
      assert(district.state_id === expectedId, `${filename}[${index}] has the wrong state_id`);
      assert(typeof district.is_prime_supported === 'boolean', `${filename}[${index}] has a non-boolean is_prime_supported`);
      assert(!districtIds.has(district.id), `duplicate district id ${district.id}`);
      districtIds.add(district.id);
      districtCount += 1;
    }
  }

  assert(districtFiles.length === cities.length, 'Every city must have one district file');
  console.log(`Validated ${cities.length} cities and ${districtCount} districts.`);
}

try {
  main();
} catch (error) {
  console.error(`Validation failed: ${error.message}`);
  process.exitCode = 1;
}