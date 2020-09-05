import tkinter
from tkinter import messagebox
from tkinter import *
import random

answers = [
    "redmond",
    "hyderabad",
    "software",
    "project",
    "python"]

words = [
    list("morednd"),
    list("baderaehy"),
    list("soreawft"),
    list("jropect"),
    list("nptoyh")]

scoreVal=0
num =  random.randrange(0, len(words), 1)

def start():
    global words,answers,num
    VarLabel.config(text = words[num])

def resetAnswer():
    global words,answers,num
    num = random.randrange(0, len(words), 1)
    random.shuffle(words[num])
    VarLabel.config(text=words[num])
    score.config(text="Score : "+str(scoreVal))
    Input.delete(0, END)


def checkans():
    global words,answers,num,scoreVal
    var = Input.get()
    if var == answers[num]:
        scoreVal+=1
        messagebox.showinfo("Success", "Right Answer")
        resetAnswer()
    else:
        messagebox.showerror("Error", "Try Again.")
        Input.delete(0, END)




root = tkinter.Tk()
root.geometry("350x400+100+200")
root.title("MAQ Jumble")
root.configure(background = "#99A49B")

score=Label(
  root,
  text="Score : "+str(scoreVal),
  font =("Symbol", 10),
  bg = "#99A49B",
)
score.pack(padx=100)

VarLabel = Label(
    root,
    text = "Your here",
    font =("Symbol", 20),
    bg = "#99A49B",
    fg = "#080808",
)
VarLabel.pack(pady = 20,ipady=30,ipadx=20)


ans1 = StringVar()
Input = Entry(
    root,
    font = ("Verdana", 16),
    textvariable = ans1,
)
Input.pack(ipady=5,ipadx=5)

btncheck = Button(
    root,
    text = "Check",
    font = ("Symbol", 15),
    width = 17,
    bg = "#4c4b4b",
    fg = "#6ab04c",
    relief = SUNKEN,
    command = checkans,
)
btncheck.pack(pady = 40)

btnreset = Button(
    root,
    text = "New Word",
    font = ("Symbol", 15),
    width = 16,
    bg = "#4c4b4b",
    fg = "#EA425C",
    relief = GROOVE,
    command = resetAnswer,
)
btnreset.pack()

start()
root.mainloop()
import tkinter
from tkinter import messagebox
from tkinter import *
import random

answers = [
    "redmond",
    "hyderabad",
    "software",
    "project",
    "python"]

words = [
    list("morednd"),
    list("baderaehy"),
    list("soreawft"),
    list("jropect"),
    list("nptoyh")]

scoreVal=0
num =  random.randrange(0, len(words), 1)

def start():
    global words,answers,num
    VarLabel.config(text = words[num])

def resetAnswer():
    global words,answers,num
    num = random.randrange(0, len(words), 1)
    random.shuffle(words[num])
    VarLabel.config(text=words[num])
    score.config(text="Score : "+str(scoreVal))
    Input.delete(0, END)


def checkans():
    global words,answers,num,scoreVal
    var = Input.get()
    if var == answers[num]:
        scoreVal+=1
        messagebox.showinfo("Success", "Right Answer")
        resetAnswer()
    else:
        messagebox.showerror("Error", "Try Again.")
        Input.delete(0, END)




root = tkinter.Tk()
root.geometry("350x400+100+200")
root.title("MAQ Jumble")
root.configure(background = "#99A49B")

score=Label(
  root,
  text="Score : "+str(scoreVal),
  font =("Symbol", 10),
  bg = "#99A49B",
)
score.pack(padx=100)

VarLabel = Label(
    root,
    text = "Your here",
    font =("Symbol", 20),
    bg = "#99A49B",
    fg = "#080808",
)
VarLabel.pack(pady = 20,ipady=30,ipadx=20)


ans1 = StringVar()
Input = Entry(
    root,
    font = ("Verdana", 16),
    textvariable = ans1,
)
Input.pack(ipady=5,ipadx=5)

btncheck = Button(
    root,
    text = "Check",
    font = ("Symbol", 15),
    width = 17,
    bg = "#4c4b4b",
    fg = "#6ab04c",
    relief = SUNKEN,
    command = checkans,
)
btncheck.pack(pady = 40)

btnreset = Button(
    root,
    text = "New Word",
    font = ("Symbol", 15),
    width = 16,
    bg = "#4c4b4b",
    fg = "#EA425C",
    relief = GROOVE,
    command = resetAnswer,
)
btnreset.pack()

start()
root.mainloop()
