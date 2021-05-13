import os

def changeName(dir):
    path = "../pic/" + dir
    filepath =  os.listdir(path)
    print(filepath)

    for i in filepath:
        tmp = i.split(" ")
        if (len(tmp)>1):
            tmp[0] = tmp[0] + tmp[1]
        os.rename(os.path.join(path,i),os.path.join(path,tmp[0]))


changeName("zhu")
