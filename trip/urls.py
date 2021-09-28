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

        #한 줄 게시판 만들기
        path('memo/', views.memo, name="memo"),
        path('m_home/', views.m_home, name="m_home"),
        path('m_create/', views.m_create, name="m_create"),
        # path('m_detail/', views.m_detail, name="m_detail"),
        path('m_detail/<int:memo_id>/', views.m_detail, name='m_detail'),
        path('update/<int:memo_id>/', views.update, name='update'),
        path('delete/<int:memo_id>/', views.delete, name='delete'),
]
