import json

inputFile = open("Sample_Labels.txt", "r")
outputFile = open("sample_labels.json", "w")

lines = inputFile.readlines()

outputArray = []

for i in range(len(lines)):
    line = lines[i]
    splitLine = lines[i].split('\t')
    splitLine[-1] = splitLine[-1].strip()
    outputArray.append({'code': splitLine[0], 'domains': []})

    for j in range(1, len(splitLine)):
        outputArray[i]['domains'].append(splitLine[j])

print(outputArray)

print(json.dumps(outputArray))

outputFile.write(json.dumps(outputArray))

inputFile.close()
outputFile.close()
