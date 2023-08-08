import re

phoneRegex = re.compile(r'\d\d\d\d\d\d\d\d\d\d')
mo = phoneRegex.findall('Hi my number is 0435455236')
print(mo)

manRegex = re.compile(r'Hu(Rain)?man')
mo = manRegex.search("I'm a HuRainman")
print(mo)

manRegex = re.compile(r'Hu(Rain)*man')
mo = manRegex.search("I'm a HuRainRainman")
print(mo)

digitRegex = re.compile(r'(\d){3,5}')
mo = digitRegex.search("1234")
print(mo)
mo = digitRegex.search("15135")
print(mo)

phoneRegex1 = re.compile(r'((\d\d\d)-(\d\d\d-\d\d\d\d))')
mo = phoneRegex1.findall("123-124-1234 is my primary number, 234-345-3456 is my secondary number")
print(mo)

groceryList = re.compile(r'\d+\s[^,]*')
mo = groceryList.findall("50 chips, 3 apples, 10 mandarins, 4 cans of tuna")
print(mo)

nameRegex = re.compile(r'First name: (.*) Last name: (.*)')
mo = nameRegex.findall("First name: Kevin Last name: Chu")
print(mo)

agentRegex = re.compile(r'Agent (\w)\w+')
#mo = agentRegex.search("Agent Kevin give the secret docos to Agent Erica")
mo = agentRegex.sub(r"Agent \1****", "Agent Kevin give the secret docos to Agent Erica")
print(mo)

phoneCommentRegex = re.compile(r'''
\d\d\d      # area code
-
\d\d\d      # number
-
\d\d\d\d    # number again
''', re.VERBOSE)