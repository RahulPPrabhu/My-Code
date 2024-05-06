from cryptohash import sha256
import json

content_dict = {}

with open("schema.graphql", "r") as rd:
    lines = rd.readlines()
    query = ""
    print_flag = False
    for line in lines:
        if "type" in line:
            print_flag = True
        if print_flag:
            line = line.rstrip('\n')
            query += line
            if "}" in line:
                print_flag = False
                key = sha256(query)
                content_dict[key] = query
                query = ""

with open("queries.json", "w") as wt:
    json.dump(content_dict, wt, indent=4)

print(content_dict)
