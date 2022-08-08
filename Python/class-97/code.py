intro=input("enter your introduction")

charactercount=0
wordcount=1
for i in intro:
    charactercount=charactercount+1
    if(i==' '):
        wordcount=wordcount+1
print("no. of words in the sentance:")
print(wordcount)    
print("no.of characters in the sentance:")
print(charactercount)