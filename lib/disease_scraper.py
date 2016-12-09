import wikipedia
import json
import sys
import re
import string
import urllib2
from bs4 import BeautifulSoup
import pdb

# rare_diseases = "https://en.wikipedia.org/w/index.php?title=Category:Rare_diseases"


page_name = "https://en.wikipedia.org/w/index.php?title=Category:Rare_diseases&from="
# page_name = ""
links = set()

for c in string.ascii_lowercase:
  opener = urllib2.build_opener()
  opener.addheaders = [('User-agent', 'Mozilla/5.0')] #wikipedia needs this

  resource = opener.open(page_name + c)

  print(page_name + c)

  data = resource.read()
  resource.close()
  soup = BeautifulSoup(data, "html.parser")

  links |= set(map(lambda t: t.get("href")[6:].encode(sys.getdefaultencoding()),
               soup.find(id="mw-pages").find(class_="mw-category").find_all("a")))


replacers = [('%E2%80%93', '_'), ('%C3%A9', 'e'), ('%C3%B6', 'o')]
print(len(links))
for link in links:
  print 'fetching', link
  try:
    for r, s in replacers:
      link = link.replace(r, s)
    page = wikipedia.page(link)
  except wikipedia.exceptions.PageError:
    print 'bad link:', link

  # print(page.content)

# regex = r"<a.*?>(.*?)<\/a>"
# symptoms = json.loads(open('../symptoms.js', 'r').read())
# symptoms_regex = ""
# group_count = 0

# symptoms_array = set()
# complete_symptom_list = set()

# for symptom in symptoms['symptoms']:
#   group_count += 1
#   symptoms_array.add(
#     symptom.encode(sys.getdefaultencoding())
#   )

#   if group_count == 100:
#     # we must batch the regex match since there is a 100 group count limit
#     symptoms_array = list(symptoms_array)
#     symptoms_regex = "|".join(symptoms_array)
#     sd_matches = re.findall(r'%s' % symptoms_regex, disease.content, re.IGNORECASE)

#     for sd_match in sd_matches:
#       sd_match = sd_match.encode(sys.getdefaultencoding()).lower()
#       complete_symptom_list.add(sd_match)

#     symptoms_array = set()
#     symptoms_regex = ""
#     group_count = 0



# print(complete_symptom_list)