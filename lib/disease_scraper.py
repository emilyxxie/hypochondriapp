import wikipedia
import json
import sys
import re

disease = wikipedia.page('Cerebral_salt-wasting_syndrome')

regex = r"<a.*?>(.*?)<\/a>"
data = open('symptoms_original.txt', 'r').read()
matches = re.findall(regex, data)

symptoms_regex = ""
group_count = 0

symptoms_array = set()
complete_symptom_list = set()

for match in matches:
  if "(" in match:
    in_parens = match[match.find("(") + 1: match.find(")")].lower().strip()
    if in_parens not in symptoms_array:
      symptoms_array.add(in_parens.lower())
      group_count += 1
    match = match[:match.find("(")]
  symptoms_array.add(match.lower().strip())
  group_count += 1


  if group_count == 100:
    # we must batch the regex match since there is a 100 group count limit
    symptoms_array = list(symptoms_array)
    symptoms_regex = "|".join(symptoms_array)
    sd_matches = re.findall(r'%s' % symptoms_regex, disease.content)

    for sd_match in sd_matches:
      sd_match = sd_match.encode(sys.getdefaultencoding())
      complete_symptom_list.add(sd_match)

    symptoms_array = set()
    symptoms_regex = ""
    group_count = 0


print(complete_symptom_list)



# symptoms_regex = "(leaking urine)|(hair loss)|(dizziness)|(weakness)|(vertigo)"

# for