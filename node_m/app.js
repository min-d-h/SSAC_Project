// express
// node.js 를 위한 빠르고 개방적인 웹 프레임 워크

const express = require( 'express' );
const app = express();
const port = 8000;
const body = require( 'body-parser' );

var mysql = require( 'mysql' );
var conn = mysql.createConnection({
	user: 'root',
	password: 'mindhq!@3',
	database: 'min'
});



app.set( 'view engine', 'ejs'); 
// view의 확장인 ejs 를 사용하도록 도와주는 장치..?
app.set( 'views', __dirname + '/views');
// views파일을 사용할 수 있도록 절대경로를 지정해 놓는것.
app.use( '/aaa', express.static( __dirname + '/static' ));
// use는? use는 경로를 타지않고, 
// dirname = 절대경로인데, static이라는 폴더이름을 사용하겠다.
// /aaa 는 가상경로를 지정해주는 것. 보안이슈를 정해주는 것.
app.use( body.urlencoded( { extended:false } ) );
app.use( body.json() );


app.get('/', ( req, res ) => {
    res.render('test');
});

app.get('/test', ( req, res ) => {
    res.render( 'test', { id:5, name:'alsehd' } );
});

//#########################
// chats
//#########################
app.get( '/chat1', ( req, res ) => {
    console.log(req.url)
    res.render('chat1');
});
app.get( '/chat2', ( req, res ) => {
    res.render('chat2');
});
//#########################
//메인
//#########################
app.get( '/main', ( req, res ) => {
    res.render('main');
});

//#########################
//로그인
//#########################
app.get( '/login', ( req, res ) => {
    res.render('login');
});
app.post('/login_s', ( req, res ) => {
    console.log(req.body)
    // console.log(req.query)
    // console.log(req.headers)
    // console.log('여기는 쿠키다!'+req.headers.cookie)
    var nnnn = req.body.nnnn;
    var aaaa = req.body.aaaa;
    var eeer = "페이지를 확인하세요.";
    var ssss = "select * from sec_t where id='"+nnnn+"';";
    // var ssss = "select * from sec_t where id='hanjo';";
    // var abcd = conn.query (ssss, function( err, res ) {
    //     if( err ){
    //         console.log( 'failed!! : ' + err );
    //     }
    //     else {
    //         console.log( "okokok" );
    //     }
    // });
    conn.query (ssss, function( err, ress ) {
        if (err){
            console.log ( "잘못된 정보" );
        }
        else {
            for (var i = 0; i < ress.length; i++) {
                console.log ( "아이디 : " + ress[i]["id"] );
                console.log ( "이름 : " + ress[i]["name"] );
                console.log ( "생일 : " + ress[i]["birthday"] );
                console.log ( ress.length );
                console.log ( ress );
            };
            console.log("for mooooon : "+asdasd)
        }
        res.render( 'login_s', { err:err, res:ress })
    });
});

// 웹 브라우저에 보낼때는 res.send or render 를 통해 보내게 된다.
// 아래 app을 들을 준비가 되었는데, 9999포트로 접속할 때 아래를 실행시킬것이다.
app.listen( port, () => {
    console.log('331');
})