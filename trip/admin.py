from django.contrib import admin
from .models import User, Tproducts, User_and_T

# Register your models here.
# admin - 관리자 페이지를 보기위한 페이지


admin.site.register(User)
admin.site.register(Tproducts)
admin.site.register(User_and_T)
# 관리자 페이지에 등록하겠다 (이녀석을)
