from PIL import Image, ImageOps
from IPython.display import display
import random
import json
# import sys

### NECESSARY INFO



leftbackgrounds = ["Sea", "Star", "Moon", "Street", "Night", "Window", "SYRE", "Train"] #8 types
leftbackgroundweights = [25, 25, 20, 15, 5, 4, 4, 2]

rightbackgrounds = ["Sea", "Star", "Moon", "Street", "Night", "Window", "SYRE", "Train"] #8 types
rightbackgroundweights = [25, 25, 20, 15, 5, 4, 4, 2]

baronees = ["Marcus", "Sam & Finlay", "Elliott", "Daniel", "Alice & Bob", "Loudie", "Sign Gang 4 Life", "Bitch Better Have My Plant", "Backpack Kid",  "I'm Outtie", "Shaggy", "It's like whatever man",  "Greg", "Kevin", "I'm onto ya", "AHHHHH", "Ayee i'm walking over here", "They went that-a way", "I'm not even that angry", "Running Man From The Feds", "Dylan...", "An Actual Orange"  ] #22 types
baroneeweights = [5, 5, 5, 5, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

flowers = ["None", "1", "2", "3", "4", "5", "6"] #7 types
flowerweights = [40, 10, 10, 10, 10, 10, 10]

marks = ["None", "Gas", "Ninja", "Skull & Bones", "Dual Wield", "AK-47"] #6 types
markweights = [95, 1, 1, 1, 1, 1]

# specialbackgrounds = ["None", "Blue", "Yellow", "Tree", "Sea"] #5 types
# specialbackgroundsweights = [98, 0.5, 0.5, 0.5, 0.5]

### MAPPING

leftbackgroundfiles = {
    "Sea": "BGL1",
    "Star": "BGL2",
    "Moon": "BGL3",
    "Street": "BGL4",
    "Night": "BGL5",
    "Window": "BGL6",
    "SYRE": "BGL7",
    "Train": "BGL8",
}

rightbackgroundfiles = {
    "Sea": "BGR1",
    "Star": "BGR2",
    "Moon": "BGR3",
    "Street": "BGR4",
    "Night": "BGR5",
    "Window": "BGR6",
    "SYRE": "BGR7",
    "Train": "BGR8",
}

baroneefiles = {
    "Marcus": "BR1",
    "Sam & Finlay": "BR2",
    "Elliott": "BR3",
    "Daniel": "BR4",
    "Alice & Bob": "BR5",
    "Loudie": "BR6",
    "Sign Gang 4 Life": "BR7",
    "Bitch Better Have My Plant": "BR8",
    "Backpack Kid": "BR9",
    "I'm Outtie": "BR10",
    "Shaggy": "BR11",
    "It's like whatever man": "BR12",
    "Greg": "BR13",
    "Kevin": "BR14",
    "I'm onto ya": "BR15",
    "AHHHHH": "BR16",
    "Ayee i'm walking over here": "BR17",
    "They went that-a way": "BR18",
    "I'm not even that angry": "BR19",
    "Running Man From The Feds": "BR20",
    "Dylan...": "BR21",
    "An Actual Orange": "BR22",
}

flowerfiles = {
    "None": "NONE",
    "1": "FL1",
    "2": "FL2",
    "3": "FL3",
    "4": "FL4",
    "5": "FL5",
    "6": "FL6",
}

markfiles = {
    "None": "NONE",
    "Gas": "MK1",
    "Ninja": "MK2",
    "Skull & Bones": "MK3",
    "Dual Wield": "MK4",
    "AK-47": "MK5",
}

specialfiles = {
    "None": "NONE",
    "Blue": "SP1",
    "Yellow": "SP2",
    "Tree": "SP3",
    "Sea": "SP4",
}

## TRAIT GENERATION

TOTAL_BARONEES = 10000

traits = []

def createCombo():
    
    trait = {}

    trait["Left Background"] = random.choices(leftbackgrounds, leftbackgroundweights)[0]
    trait["Right Background"] = random.choices(rightbackgrounds, rightbackgroundweights)[0]
    trait["Baronee Base"] = random.choices(baronees, baroneeweights)[0]
    trait["Flower"] = random.choices(flowers, flowerweights)[0]
    trait["Mark"] = random.choices(marks, markweights)[0]
    trait["Special Background"] = random.choices(specialbackgrounds, specialbackgroundsweights)[0]

    
    if trait in traits:
        return createCombo()
    else:
        return trait
    
for i in range(TOTAL_BARONEES):
    
    newtraitcombo = createCombo()
    
    traits.append(newtraitcombo)
    
## UNIQUE CHARACTERS
def allUnique(x):
    seen = list()
    return not any(i in seen or seen.append(i) for i in x)

print(allUnique(traits))

# ADD TOKEN IDS TO JSON

i = 0
for item in traits:
    item["tokenId"] = i
    i = i + 1

    
# GET TRAIT COUNTS

leftbackgroundcounts = {}
for item in leftbackgrounds:
    leftbackgroundcounts[item] = 0
    
rightbackgroundcounts = {}
for item in rightbackgrounds:
    rightbackgroundcounts[item] = 0
    
baroneecounts = {}
for item in baronees:
    baroneecounts[item] = 0
    
flowercounts = {}
for item in flowers:
    flowercounts[item] = 0
    
markcounts = {}
for item in marks:
    markcounts[item] = 0
    
specialbackgroundcounts = {}
for item in specialbackgrounds:
    specialbackgroundcounts[item] = 0
    

 
    
oneofonecounts = 0

signatures = [5,15]

for character in traits:
    if character["tokenId"] in signatures:
        oneofonecounts += 1
    else:    
#     print(character)
        leftbackgroundcounts[character["Left Background"]] += 1
        rightbackgroundcounts[character["Right Background"]] += 1
        baroneecounts[character["Baronee Base"]] += 1
        flowercounts[character["Flower"]] += 1
        markcounts[character["Mark"]] += 1
        specialbackgroundcounts[character["Special Background"]] += 1

    
print("left background:", leftbackgroundcounts)
print("right background:", rightbackgroundcounts)
print("baronee background:", baroneecounts)
print("flower background:", flowercounts)
print("mark background:", markcounts)
print("special background:", specialbackgroundcounts)

# WRITE METADATA TO JSON FILE

with open('test5.json', 'w') as outfile:
    json.dump(traits, outfile, indent=4)

#### IMAGE GENERATION
    
for item in traits:

    im1 = Image.open(f'./backgrounds-l-2/{leftbackgroundfiles[item["Left Background"]]}.png').convert('RGBA')
    im2 = Image.open(f'./backgrounds-r-2/{rightbackgroundfiles[item["Right Background"]]}.png').convert('RGBA')
    im3 = Image.open(f'./specials-2/{specialfiles[item["Special Background"]]}.gif').convert('RGBA')
    im4 = Image.open(f'./flowers-2/{flowerfiles[item["Flower"]]}.png').convert('RGBA')
    im5 = Image.open(f'./marks-2/{markfiles[item["Mark"]]}.png').convert('RGBA')
    im6 = Image.open(f'./baronees-2/{baroneefiles[item["Baronee Base"]]}.png').convert('RGBA')
    

    #Create each composite
    com1 = Image.alpha_composite(im1, im2)
    com2 = Image.alpha_composite(com1, im3)
    com3 = Image.alpha_composite(com2, im4)
    com4 = Image.alpha_composite(com3, im5)
    com5 = Image.alpha_composite(com4, im6)

    #Convert to RGB
#     rgb_im = com4.convert('RGB')
    rgb_im = com5.convert('RGB')
    display(rgb_im.resize((400,400), Image.NEAREST))

    file_name = str(item["tokenId"]) + ".jpg"
    rgb_im.save("./output-6/" + file_name)
    print(f'{str(item["tokenId"])} done')
    
# READ METADATA IF YOU ALREADY HAVE A JSON FILE

with open("test5.json", 'r') as f:
        traits = json.load(f)