import os

os.path.join('folder1', 'folder2', 'folder3')
os.sep
print(os.getcwd())

print(os.path.abspath('files.py'))
print(os.path.relpath('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py','C:\\Users'))
print(os.path.basename('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py'))

print(os.path.exists('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py'))
print(os.path.isfile('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py'))
print(os.path.isdir('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript'))

files = os.listdir('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript')
for filename in files:
    #if os.path.isfile(filename):
    None    
    
os.makedirs('C:\\Users\\Rising Edge\\Desktop\\things')