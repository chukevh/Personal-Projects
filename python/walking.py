import os

for folderName, subfolders, filenames in os.walk('C:\\Users\\Rising Edge\\Desktop\\coding\\'):
    print('folders are ' + folderName)
    print('subfolders are ' + str(subfolders))
    print('filenames are ' + str(filenames))

