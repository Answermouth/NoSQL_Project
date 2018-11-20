import json

def mergefiles(input_filename1, input_filename2, output_filename, array_property_name1, array_property_name2):
    input_file1 = open(input_filename1, "r")
    input_file2 = open(input_filename2, "r")

    output_file = open(output_filename, "w")

    lines1 = input_file1.readlines()
    lines2 = input_file2.readlines()

    output_array = []

    for i in range(len(lines1)):
        split_line1 = lines1[i].split('\t')
        split_line2 = lines2[i].split('\t')
        split_line1[-1] = split_line1[-1].strip()
        split_line2[-1] = split_line2[-1].strip()
        output_array.append({'code': split_line1[0], array_property_name1: [], array_property_name2: []})

        for j in range(1, len(split_line1)):
            output_array[i][array_property_name1].append(split_line1[j])

        for k in range(1, len(split_line2)):
            output_array[i][array_property_name2].append(split_line2[k])

    output_file.write(json.dumps(output_array))

    input_file1.close()
    input_file2.close()
    output_file.close()


mergefiles("Sample_Labels.txt", "sample_domains.txt", "sample_labels_domains.json", "labels", "domains")