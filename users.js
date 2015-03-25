/*function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
    }
}
*/
//users/get_active_users_by_rating
$(document).ready(function get_active_users_by_rating()
{
	postinfo ={
		url:'users/get_active_users_by_rating',
		usrpage:1, //עמודים בשביל לדפדפ בין היוזרים במערכתץ פה את שלוחת את מספר עמוד הבא שאת רוצה לראות.
		numofusrs:20 //number of users per page
	}
	ajaxCall(postinfo,function(response){
		result ='';
		if(response.error[0].code != 0)
			alert(JSON.stringify(response.error));
		else
		{	
		usrs = response.data.usrs;
			for(i=0; i < usrs.length; i++)
			{
				result = result +'<div class = "img-with-text" id= '+i+' ">';
				result = result+'<img class = "face"'+i+'  src="'+ usrs[i]['usrimgurl']+'"/>';
				result = result+ /*'<img class = "badge" src = "prize_winner.png"/>*/ '<p class ="name">'+usrs[i]['usrfirstname']+" "+usrs[i]['usrlastname']+'</p>';
				//result  = result + '<p class ="lastname">'+ usrs[i]['usrlastname']+'</p></div>';
				result= result + '<p class = "rating">'+usrs[i]['usrrating']+'</p></div>';
			}
			
					
			document.getElementById("allUsers").innerHTML =  result;
		}
	    
		//$('#'+(my_id).val()).click(function(){
	  // $("").fadeIn("slow");
	  // alert("works!");
	  // $("#overlay_div").fadeIn("slow");
	   $.map( usrs , function( val, i ) {
            $('#'+i).click(function(){
				
				//insert data to div
				$("#overlay_div").fadeIn("slow");
				//$("#overlay_div").append('usrs.firstName[0]');
				//var add_pic = 'hi';
				//document.getElementById("overlay_pic").innerHTML =  add_pic;
			//	$("#overlay_pic").append('<div id="overlay_div"');
			//$("#overlay_pic").append(usrs[i]);
			var popusr = $( "#"+[i] ).clone().addClass("user_popup");
			$( "#overlay_pic" ).html(popusr) //איך לנמוע הוספת תמונות בלחיצה נוספת ואיך לשנות את צבע הטקסט??
                // $('#'+i).click(function(){
				//$("#overlay_div").fadeIn("slow");
				//$("#overlay_pic").empty(i);
			  // $( "#"+[i] ).clone().addClass("user_popup").html( "#overlay_pic" )
            });

		  });
       });
    $("#close_btn").click(function(){
	//$("#x ").fadeOut("fast");
	//$("#overlay_pic").remove('add_pic');
	$("#overlay_div").fadeOut("fast");
	$("#overlay_pic").empty(i);

	});
	});
	//});
	 
/*changing text
<div id="one">
       <div class="first"></div>
       <span>"Hi I am text"</span>
       <div class="second"></div>
       <div class="third"></div>
</div>
Replace your text:

$(document).ready(function() {
   $('#one span').text('Hi I am replace');
});
 */
	 
/*
$(document).ready(function() {
 $('#search_user').click(function(){
   $(".img-with-text").hide();
   var my_search = $('#search_by_letter').val();
   //alert(my_search);
   for(i=0; i<usrs.length; i++)
 {
   var firstName = usrs[i].usrfirstname; // returns the first name in the i place of usrs
   var lowerFirstName =firstName.toLowerCase(); //lowercases firstname
   var lastName = usrs[i].usrlastname;
   var lowerLastName =lastName.toLowerCase();
        if (lowerFirstName.indexOf(my_search) >= 0 || lowerLastName.indexOf(my_search) >= 0)
            {
         //alert(i);
		        
		 //show users who answer the condition
		var show_me = $(".img-with-text")[i];
		$(show_me).show();
             }
        //else
         //   {
		
         //    }
			  
}
return false;
 //alert("im searching!");
}
);
   
});
*/ //this time with keyup
$(document).ready(function() {
 $('#search_by_letter').keyup(function(){
   $(".img-with-text").hide();
   var my_search = $('#search_by_letter').val();
   //alert(my_search);
   for(i=0; i<usrs.length; i++)
 {
   var firstName = usrs[i].usrfirstname; // returns the first name in the i place of usrs
   var lowerFirstName =firstName.toLowerCase(); //lowercases firstname
   var lastName = usrs[i].usrlastname;
   var lowerLastName =lastName.toLowerCase();
        if (lowerFirstName.indexOf(my_search) >= 0 || lowerLastName.indexOf(my_search) >= 0)
            {
         //alert(i);
		        
		 //show users who answer the condition
		var show_me = $(".img-with-text")[i];
		$(show_me).show();
             }
        //else
         //   {
		         //    }
}
return false;
 //alert("im searching!");
}
);
   
});
$(document).ready(function() {
 $('#search_for_rating').keyup(function(){
   $(".img-with-text").hide();
   var my_rating_search = $('#search_for_rating').val();
   //alert(my_search);
   for(i=0; i<usrs.length; i++)
 {
   var firstName = usrs[i].usrfirstname; // returns the first name in the i place of usrs
   var lowerFirstName =firstName.toLowerCase(); //lowercases firstname
   var lastName = usrs[i].usrlastname;
   var lowerLastName =lastName.toLowerCase();
        if (lowerFirstName.indexOf(my_rating_search) >= 0 || lowerLastName.indexOf(my_rating_search) >= 0)
            {
         //alert(i);
		        
		 //show users who answer the condition
		var show_me = $(".img-with-text")[i];
		$(show_me).show();
             }
        //else
         //   {
		         //    }
}
return false;
 //alert("im searching!");
}
);
   
});

//$(document).ready(function(){
   // $('#0').click(function(){
	  // $("").fadeIn("slow");
	//   alert("works!");
	//   $("#overlay_div").fadeIn("slow");
	//});
    //$("#close_button").click(function(){
	  // $("#x ").fadeOut("fast");
	  // $("# x_div").fadeOut("fast");
	//});
//});
//$('#allUsers').modal('show')
 
 //var modal_usrs = $(".img-with-text").clone().addClass("modal_allUsers");
 $( "#users_in_modal" ).html("#0") ; 

//var str = "foobar";
//var containsFoo = str.indexOf('foo') >= 0; 
/*$(".box").each(function() {
        var cur = $(this);
        if(cur.html().indexOf(query) == -1) {
            cur.hide("fast");
        }
        else {
            cur.show("fast");
        }
    });*/

/*$("#search_by_letter").on("keyup", function() {
   var key = this.value;
    $(".name").each(function() {
       var $this = $(this);
       $this.toggle($(this).text().indexOf(key) >= 0);
    });
});*/

/*var inputString = "this is home";
var findme = "home";

if ( inputString.indexOf(findme) > -1 ) {
    alert( "found it" );
} else {
    alert( "not found" );
}*/
/*$('#box').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('#list > li').show();           
    } else {
        $('#list > li').each(function(){
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
}); */

//find a way to pass result inside the function
/*$(function(){
    $(".name").slice(0, 3).show(); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $(".name:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
        if($(".name:hidden").length == 0){ // check if any hidden divs still exist
            alert("No more users"); // alert if there are none left
        }
    });
});*/
/*function get_active_users_by_rating()
{
    alert("hi");
		//"usrtoken":"some_token",
		//"usrpage":"last_appearing_usr_id", //optional
		//"numofusrs":"5"
	}
//what we get
postinfo = {
		"usrtoken":"some_token",
		"data":[
			{
			"userid":"usrid",
			"userfbid":"fb_id",
			"userfirstname":"first_name",
			"userlastname":"last_name",
			"usrrating":"rating",
			"usrimgurl":"img_url",
			"usrstatus":"status"
			}
		]
	}
	*/
	/*onstatechange = function(data){
	if(data.error != '')
	{
		alert(JSON.stringify(data.error));
	}
	else
		alert('hello');
};
 ajaxCall(postinfo,onstatechange);
/*	
	{
	
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

function get_active_users_by_rating(response)
 {
	result ='';
	usrs = response.data.usrs;
	for(i=0; i< usrs.length; i++){
	   result = result +'<div class = "img-with-text">';
	   result = result+'<img id = "face"'+i+'  src="'+ usrs[i]['usrimgurl']+'"/>';
	   result = result+ '<img class = "badge" src = "prize_winner.png"/><p class ="name">'+ usrs[i]['usrfirstname']+'</p></div>';
	}
	document.body.innerHTML =  result; 
};

};*/
