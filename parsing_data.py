import json

def parsing(input_filename, output_filename, array_property_name1, array_property_name2, array_property_name3):
    input_file = open(input_filename, "r")

    output_file = open(output_filename, "w")

    lines = input_file.readlines()

    output_array = []

    for i in range(1,len(lines)):
    #for i in range (3):
        split_line = lines[i].split('\t')
        split_line[-1] = split_line[-1].strip()
        output_array.append({'code': split_line[0], array_property_name1: [], array_property_name2: [], array_property_name3: [], 'Entry_name': split_line[1], 'Status': split_line[2], 'Protein_names' : split_line[3], 'Gene_names' : split_line[4]})

        for j in range(1, len(split_line)):
            indices_domaines = []
            compteur_domaines = 0
            chaine = str(split_line[j])
            while (compteur_domaines < len(chaine)):
                if "IPR0" in chaine[compteur_domaines:]:
                    indices_domaines.append(chaine[compteur_domaines:].find("IPR0") + compteur_domaines)
                    compteur_domaines = indices_domaines[-1] + 1
                else:
                    break
            for m in range (len(indices_domaines)):
                output_array[i-1][array_property_name1].append(chaine[indices_domaines[m]:indices_domaines[m]+9])
            indices_go_terms = []
            compteur_go_terms = 0
            while (compteur_go_terms < len(chaine)):
                if "[GO:" in chaine[compteur_go_terms:]:
                    indices_go_terms.append(chaine[compteur_go_terms:].find("[GO:") + compteur_go_terms)
                    compteur_go_terms = indices_go_terms[-1] + 1
                else:
                    break
            for n in range (len(indices_go_terms)):
                output_array[i-1][array_property_name3].append(chaine[indices_go_terms[n]+1:indices_go_terms[n]+11])
            if j == len(split_line)-1:
                if split_line[j] != "":                    
                    output_array[i-1][array_property_name2]= split_line[j].split('; ')


    output_file.write(json.dumps(output_array))

    input_file.close()
    output_file.close()


parsing("Data.tab", "Clean_Data.json", "domains", "EC_numbers", "GO_terms")
