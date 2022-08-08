import random

print("number guessing game!!!!!! OoO")
number = random.randint(1,10)
chances = 0

print("guess a number between 0 and 11:")
while chances<5:
    guess=int(input("enter your guess please omg:"))
    if guess==number:
        print("congrats omgggggg you can flex to your friends")
        break
    elif guess>number:
        print("GO LOWER OMG")
    else:
        print("GO HIGHER WOWOWOOWOWOWOOW OMG")
    chances=chances+1

print("You are the worst player ever")


        