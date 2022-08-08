import os
import shutil

path = '/Users/aveeshagrawal/Desktop/class 99'
print("before moving the files:")
print(os.listdir(path))
source='/Users/aveeshagrawal/Desktop/class 99/newfile.txt'
destination='/Users/aveeshagrawal/Desktop/class 99/My Folder'
dest=shutil.move(source,destination)
print("after a succeful moving of a file, these are the results, unfortunatly, we had to kill the old one...")
print(os.listdir(path))