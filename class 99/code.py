import os
import shutil

path='/Users/aveeshagrawal/Desktop/class 99'
print("before copying the file:")
print(os.listdir(path))
source='/Users/aveeshagrawal/Desktop/class 99/test.txt'
destination='/Users/aveeshagrawal/Desktop/class 99/newfile.txt'
dest=shutil.copy(source,destination)
print("after copying the file")
print(os.listdir(path))

