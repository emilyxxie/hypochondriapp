import re
regex = r"<a.*?>(.*?)<\/a>"
data = open('symptoms_original.txt', 'r').read()
matches = re.findall(regex, data)

symptoms = symptom()
# for match in matches:
#   symptoms_json['symptoms'].append(match)

for match in matches:
  if "(" in match:
    in_parens = match[match.find("(") + 1: match.find(")")].lower().strip()
    if in_parens not in symptoms_array:
      symptoms_array.add(in_parens.lower())
      group_count += 1
    match = match[:match.find("(")]
  symptoms_array.add(match.lower().strip())
  group_count += 1

symptoms_json = {'symptoms' : []}

import io, json
with io.open('../symptoms.js', 'w', encoding='utf-8') as f:
  f.write(unicode(json.dumps(symptoms_json, ensure_ascii=False)))