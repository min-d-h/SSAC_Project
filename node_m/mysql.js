var express = require('express');
var app = express();
var mysql = require( 'mysql' );


var conn = mysql.createConnection({
	user: 'root',
	password: 'mindhq!@3',
	database: 'min'
});

app.listen( 8000, function () {
    // conn.connect( ( err ) => {
	// 	if ( err ) console.log( err );
	// 	else console.log( "DB connected successfully!" );
    // });


    // insert 예제
    // insert는 하나만 넣게 되니까 입력줄 하나 넣고 로그 확인.

    // var ssss = "insert into sec_t (id, pw, name, gender, birthday) values ('asdfasdf', '102030', '베잳갸', 'male', '1991-02-01');" 
    // conn.query (ssss, function(err) {
    //     if( err ){
	// 		console.log( 'failed!! : ' + err );
	// 	}
	// 	else {
	// 		console.log( "data inserted!" );
	// 	}
    // });

    // select 예제
    // res == select로 검색한 내역을 저장하는 곳.

    // var ssss = "select * from sec_t;";
    // conn.query (ssss, function( err, res ) {
    //     for (var i = 0; i < res.length; i++) {
    //         console.log ( "아이디 : " + res[i]["id"] );
    //         console.log ( "이름 : " + res[i]["name"] );
    //     }
    // });

    var ssss = "delete from sec_t where id='widowmaker';" 
    conn.query (ssss, function(err) {
        if( err ){
			console.log( 'failed!! : ' + err );
		}
		else {
			console.log( "data reset!! contents confrim" );
		}
    });

    // "'"+ req.body.name +"'" ==== html 에서 넘어온 값을 DB로 저장 한 값을 넣는거.
});