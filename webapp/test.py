from tkinter import *

class MyApp(Tk):
    def __init__(self):
        super().__init__()
        self.title("My App")
        self.geometry("500x500")
        self.resizable(False, False)
        self.createcommand()
    def createcommand(self):
        Button(self, text='确定').pack()
        Button(self, text='取消').pack()


if __name__ == "__main__":
    app = MyApp()
    app.mainloop()