// express
// node.js 를 위한 빠르고 개방적인 웹 프레임 워크

const express = require( 'express' );
const app = express();
const port = 8000;
const body = require( 'body-parser' );

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

app.get( '/form', ( req, res ) => {
    res.render('form');
});

//post로 값이 넘어오면 사용한다.
app.post('/form_s', ( req, res ) => {
    console.log(req.body)
    var nnnn = req.body.nnnn;
    var aaaa = req.body.aaaa;
    res.render( 'form_s', { nnnn:nnnn, aaaa:aaaa })
    res.send('잘~ 들어왔다');
});
//웹 브라우저에 보낼때는 res.send or render 를 통해 보내게 된다.

// 아래 app을 들을 준비가 되었는데, 9999포트로 접속할 때 아래를 실행시킬것이다.
app.listen( port, () => {
    console.log('331');
});