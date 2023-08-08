#initialise board
board = {'top L':'', 'top M':'', 'top R':'',
         'mid L':'', 'mid M':'', 'mid R':'',
         'bot L':'', 'bot M':'', 'bot R':''}

#print board
for square in board:
    if board[square] is '':
        if 'L' in square:
                print("|", end="")
        print("   |", end="")
        if 'R' in square:
            print("\n")

#initialise player
player = "X"

while(True):
    print("Hello " + player + " , please select a spot on the board, top, mid, bot, followed by L, M, R")
    choice = input()
    board[choice] = player

    #print board
    for square in board:
        if board[square] is '':
            if 'L' in square:
                print("|", end="")
            print("   |", end="")
            if 'R' in square:
                print("\n")
        elif board[square] is 'X':
            if 'L' in square:
                print("|", end="")
            print(" X |", end="")
            if 'R' in square:
                print("\n")
        elif board[square] is 'O':
            if 'L' in square:
                print("|", end="")
            print(" O |", end="")
            if 'R' in square:
                print("\n")
    
    #switch player
    if player == "X":
        player = "O"
    elif player == "O":
        player = "X"

