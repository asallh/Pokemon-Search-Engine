# Writing packagees to read CSV file and write a new JSON file
import csv, json, os

csvFilePath = 'Pokemon Data/pokemon.csv'
jsonFilePath ='pokemon_data.json'

# read csv file and add to data
pokemon_data={}
with open(csvFilePath,'r') as csvFile:
    csvReader = csv.DictReader(csvFile)
    for row in csvReader:
        pokemon_name=row['Name']
        pokemon_data[pokemon_name]={
            'ID':row['ID'],
            'Name': row['Name'],
            'Type1':row['Type1'],
            'Type2':row['Type2'],
            'AgainstNormal':row['AgainstNormal'],
            'AgainstFire':row['Against-Fire'],
            'AgainstWater':row['Against-Water'],
            'AgainstElectric':row['Against-Electric'],
            'AgainstGrass':row['Against-Grass'],
            'AgainstIce':row['Against-Ice'],
            'AgainstFighting':row['Against-Fighting'],
            'AgainstPoison':row['Against-Poison'],
            'AgainstGround':row['Against-Ground'],
            'AgainstFlying':row['Against-Flying'],
            'AgainstPsychic':row['Against-Psychic'],
            'AgainstBug':row['Against-Bug'],
            'AgainstRock':row['Against-Rock'],
            'AgainstGhost':row['Against-Ghost'],
            'AgainstDragon':row['Against-Dragon'],
            'AgainstDark':row['Against-Dark'],
            'AgainstSteel':row['Against-Steel'],
            'AgainstFairy':row['Against-Fairy']
        }
json_data= json.dumps(pokemon_data,indent=4)

with open(jsonFilePath,'w') as jsonFile:
    json.dump(pokemon_data, jsonFile, indent=4)

# Encountered name some images with jpeg extension as opposed to png -> used to convery any jpegs to png format to allign with program usage
def rename_files(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(".jpg"):
            new_filename = filename[:-4] + ".png"
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed '{filename}' to '{new_filename}'")

rename_files("Pokemon Data/images")


