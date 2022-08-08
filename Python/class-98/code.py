def countwordsfromfile():
    filename=input("Enter the file name pleeeaassse i beg of you:")
    noofwords=0
    file=open(filename,'r')
    for line in file:
        words=line.split()
        noofwords=noofwords+len(words)
    print("no of words:")
    print(noofwords)
countwordsfromfile()