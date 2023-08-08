import shutil
shutil.copy('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py','C:\\Users\\Rising Edge\\Desktop\\coding\\')
shutil.copy('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\files.py','C:\\Users\\Rising Edge\\Desktop\\coding\\filesf.py')
shutil.copytree('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\', 'C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\test')
shutil.move('C:\\Users\\Rising Edge\\Desktop\\coding\\files.py', 'C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\test')

shutil.rmtree('C:\\Users\\Rising Edge\\Desktop\\coding\\javascript\\test')
