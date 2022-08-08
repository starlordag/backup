class atm:
    def __init__(atm,card_number,pin_number):
        atm.card_number=card_number
        atm.pin_number=pin_number

    def cashWithDrawl(atm):
        print("taken out")

    def BalanceEnquiry(atm):
        print("What can we help with?")

    def Balance(atm):
        print("-$100")

    def PutCashIn(atm):
        print("+$100")

card = atm("1099992","80248")

print(card.cashWithDrawl())
print(card.BalanceEnquiry())
print(card.Balance())
print(card.PutCashIn())