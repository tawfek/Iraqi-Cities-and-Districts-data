const fs = require('node:fs');
const path = require('node:path');

const dataDirectory = path.join(__dirname, '..', '..', 'iraqi-cities-districts-data');
const cities = JSON.parse(
  fs.readFileSync(path.join(dataDirectory, 'cities.json'), 'utf8'),
);
const districts = JSON.parse(
  fs.readFileSync(path.join(dataDirectory, '1-NJF.json'), 'utf8'),
);

const najaf = cities.find((city) => city.key === 'NJF');

console.log(`${najaf.name} (${najaf.key})`);
console.log(`Districts: ${districts.length}`);
console.log('First district:', districts[0]);