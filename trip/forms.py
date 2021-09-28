from django import forms
from .models import Memo

class MemoUpdate(forms.ModelForm):
    class Meta:
        model = Memo
        fields = ['title','body']