# pylint: skip-file


POST https://beta.api.abiu.earth/estimate

{
    "type": "",
    "distance": 1000,
    "weight": 155
}

# Response providing total emissions in kg CO2 equivalent

{
    "source": "Source",
    "year": "2022",
    "region": "Region",
    "co2e" : 82.7
}
