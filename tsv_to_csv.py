import json


def convert_to_json(input_filename, output_filename):
    input_file = open(input_filename, "r")
    output_file = open(output_filename, "w")

    lines = input_file.readlines()

    output_array = []

    for i in range(len(lines)):
        split_line = lines[i].split('\t')
        split_line[-1] = split_line[-1].strip()
        output_array.append({'code': split_line[0], 'domains': []})

        for j in range(1, len(split_line)):
            output_array[i]['domains'].append(split_line[j])

    output_file.write(json.dumps(output_array))

    input_file.close()
    output_file.close()


convert_to_json("Sample_Labels.txt", "sample_labels.json")
convert_to_json("sample_domains.txt", "sample_domains.json")
