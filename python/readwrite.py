readFile = open('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\HelloKev.txt', 'w')
#content = readFile.read()
#print(content)
readFile.write('Hello hello hello')
#print(content)
readFile.close()

readFile = open('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\HelloKev.txt', 'a')
readFile.write('\nHello hello hello')
readFile.close()

import shelve
shelfFile = shelve.open('mydata')
shelfFile['cats'] = ['Zophie', 'Taric', 'Garen', 'Twisted Fate']
shelfFile.close()

shelfFile = shelve.open('mydata')
print(shelfFile['cats'])

