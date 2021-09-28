from django.db import models

# Create your models here.
class User (models.Model):
    # 아래는 모델의 컬럼을 만들기 위한 구문
    userid = models.CharField(max_length=50, verbose_name='아이디')
    username = models.CharField(max_length=50, verbose_name='사용자명')
    password = models.CharField(max_length=50, verbose_name='비밀번호')
    email = models.EmailField(null=True, verbose_name='이메일')
    
    text = models.TextField(null=True, verbose_name='소개')
    registered = models.DateTimeField(auto_now_add=True, verbose_name='등록')
    GENDERS = ( ('M', '남성(Man)') , ('W', '여성(Woman)') )
    gender=models.CharField(max_length=1, verbose_name='성별', choices=GENDERS)

class Tproducts (models.Model) :
    tid = models.AutoField(primary_key=True)
    t_userid = models.CharField(max_length=50, verbose_name='아이디')
    tname = models.CharField(max_length=50, verbose_name="여행상품", unique=True)
    start_date = models.DateTimeField(auto_now_add=True, verbose_name='등록날짜')
    s_trip1 = models.DateField(verbose_name='출발날짜')
    s_trip2 = models.DateField(verbose_name='도착날짜')

    COUNTRY = (
        ('gr', '독일'), ('eng', '영국'), ('spa', '스페인'), ('net', '네덜란드'), ('ran', '프랑스'),
        ('ita', '이탈리아'), ('swi', '스위스'), ('cze', '체코'),
        ('sin', '싱가포르'), ('tur', '터키'), ('thi', '태국'), ('tai', '대만')
        )
    country=models.CharField(max_length=3, verbose_name='여행국가', choices=COUNTRY)

    COUNT = (('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'))
    count = models.CharField(max_length=1, verbose_name='인원수', choices=COUNT)

class User_and_T (models.Model):
    idid = models.AutoField(primary_key=True)
    U_id = models.ForeignKey("User", related_name="User", on_delete=models.CASCADE, db_column="User")
    T_id = models.ForeignKey("Tproducts", related_name="Tproducts", on_delete=models.CASCADE, db_column="Tproducts")

class Memo(models.Model):
    b_name = models.CharField(max_length=50, verbose_name='사용자명')
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    body = models.TextField()
    t_img = models.ImageField(blank=True, upload_to="images", null=True)
    def __str__(self):
        return self.title
    def summary(self):
        return self.body[:100]