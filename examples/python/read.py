import json
from pathlib import Path


DATA_DIRECTORY = Path(__file__).parents[2] / "cites_distracts"


def load_json(filename):
    return json.loads((DATA_DIRECTORY / filename).read_text(encoding="utf-8"))


cities = load_json("cities.json")
districts = load_json("1-NJF.json")
najaf = next(city for city in cities if city["key"] == "NJF")

print(f'{najaf["name"]} ({najaf["key"]})')
print(f"Districts: {len(districts)}")
print("First district:", districts[0])