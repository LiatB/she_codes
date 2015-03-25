 /*window.fbAsyncInit = function() {
    FB.init({
      appId      : '464672693671175',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));  */

 function login()
 {
//temporary login function only to get token
	postinfo ={
		fbid:"10202869980061851",
		url:'login/fb_login_test'
	}
	ajaxCall(postinfo,function(response){
		location = 'users.html';
	});

 
 
/*var email = $("#email").val();
var password = $("#password").val();
    postinfo = {
      url:"/login/login",
	  usreml:email,
	  usrpwrd:password
    }
	onstatechange = function(response){
	//alert(JSON.stringify(response));
		window.location.href = "users.html";
	}
	ajaxCall(postinfo,onstatechange);*/

 }
// add function fb_login (same as login())
 function fb_login()
 {
    postinfo = {
      url:"/login/login",
	  usreml:"koomasha@gmail.com",
	  usrpwrd:"12345"
    }
	onstatechange = function(response){
	//alert(JSON.stringify(response));
		window.location.href = "users.html";
	}
	ajaxCall(postinfo,onstatechange);

 } 
 function show_users(data)
 {
	result = '';
for(i=0;i<data.usrs.length;i++){
    
   result = result +'<div class = "img-with-text">';
   result = result+'<img id = "face"  src="'+ data[i]['usrimgurl']+'"/>';
   result = result+ '<img class = "badge" src = "prize_winner.png"/><p class ="name">'+ data[i]['usrname']+'</p></div>';
  
  
 //alert(result);
     
 }
document.body.innerHTML =  result; 
};

function register() {
	
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;

postinfo = {
		usreml: email ,
		usrpwrd: password,
		usrfirstname:firstName, //optional
		usrlastname:lastName, //optional
		usrphone:"0506523652", //optional
		usrimgurl:"http://test.com/pic.png", //optional
		url: "/login/sign_up"
}
onstatechange = function(data){
	if(data.error != '')
	{
		alert(JSON.stringify(data.error));
	}
	else
		alert('hello');
};
 ajaxCall(postinfo,onstatechange);

};
/*
$(document).ready(function(){
$("form-horizontal").validate({
  rules: {
    email:
	password:
  
  
  
  
  }




});



};)





*/