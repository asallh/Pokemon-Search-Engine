# Writing packagees to read CSV file and write a new JSON file
import csv, json

csvFilePath = 'Pokemon Data/pokemon.csv'
jsonFilePath ='pokemon_data.json'

# read csv file and add to data
pokemon_data={}
with open(csvFilePath,'r') as csvFile:
    csvReader = csv.DictReader(csvFile)
    for row in csvReader:
        pokemon_name=row['Name']
        pokemon_data[pokemon_name]={
            'Name': row['Name'],
            'Type1':row['Type1'],
            'Type2':row['Type2']
        }
json_data= json.dumps(pokemon_data,indent=4)

with open(jsonFilePath,'w') as jsonFile:
    json.dump(pokemon_data, jsonFile, indent=4)


