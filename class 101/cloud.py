import dropbox 

class Transferdata:
    def __init__(self,access_token):
        self.access_token=access_token
    def upload_file(self,file_from,file_to):
        dbx=dropbox.Dropbox(self.access_token)
        f=open(file_from,'rb')
        dbx.files_upload(f.read(),file_to)

def main():
    access_token='sl.BGGl7iq8gWekzT_DMCJLlaDx7Aujqlqdyba0KM0rdfRd9a68Ifz9qFjss2mGkjMiqBL9Cbl00nH2pdSCIt4a2eLHXSHtKxypwdbyAtdFaUFKCTQkKN2IDHdvNpGeXGal169z0H-gg9U'
    transferdata=Transferdata(access_token)
    file_from=input('enter the file path to tranfer :-')
    file_to=input("eneter the full path to upload to dropbox :-")
    transferdata.upload_file(file_from,file_to)
    print("file has been moved for your convinience!")

main()