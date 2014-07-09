'use strict';
// exports 為 nodejs 的 top-level global 變數相當於 Browser 上的 window。


var test = function(){
	console.log('test function is invoked!');
}


// 官方寫法
// exports.test = test;

// 你也可以這樣寫
this.test = test;
