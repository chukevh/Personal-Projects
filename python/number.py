import random

print("Hello, what's your name")
name = input()

print("Hi " + name + " I'm thinking of a number between 1-10")
#! python3

num = random.randint(1,10)


for guessesTaken in range(1,7):
    print("Take a guess")
    guess = int(input())

    if guess == num:
        break
    elif guess < num:
        print("Too low!")
    elif guess > num:
        print("Too high")


if guess == num:
    print("Congrats, you guessed right!")
else:
    print("Bad luck budd, try again next time")