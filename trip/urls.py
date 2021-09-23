from django.urls import path
from . import views

urlpatterns = [
        path('login/', views.login, name="login"),
        path('login_s/', views.login_s, name="login_s"),
        path('logout/', views.logout, name="logout"),
        path('tal/', views.tal, name="tal"),

        path('signup/', views.signup, name="signup"),
        path('signup_s/', views.signup_s, name="signup_s"),

        path('reset/', views.reset, name="reset"),
        path('search/', views.search, name="search"),
        path('pw_search1/', views.pw_search1, name="pw_search1"),

        path('mypage/', views.mypage, name="mypage"),

        path('main/', views.main, name="main"),
        path('payment/', views.payment, name="payment"),
        path('cart/', views.cart, name="cart"),
        path('m_ticket/', views.m_ticket, name="m_ticket"),
]
