from django.shortcuts import render

# Create your views here.
def board_list (req) :
        sess = req.session.get()
        print("보드 리스트")
        return render(req, 'board_list.html')

def board_write (req) :
        print("보드 글쓰기")
        return render(req, 'board_list.html')