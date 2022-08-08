class Car(object):
    def __init__(self,model,color,company,speed_limit):
        self.color=color
        self.model=model
        self.company=company
        self.speed_limit=speed_limit

    def start(self):
        print("started")

    def stop(self):
        print("stopped")

    def accelerate(self):
        print("vroom vroom")

    def changegear(self):
        print("locked and loaded")

audi = Car("A6","black","Audi","100")

print(audi.color)
print(audi.model)
print(audi.company)
print(audi.speed_limit)

print(audi.start())
print(audi.stop())
print(audi.accelerate())
print(audi.changegear())