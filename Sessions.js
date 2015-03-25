function clickmenu(sessionName){
//alert("hi");
//alert(document.getElementsByClassName("col-lg-8"));
document.getElementById("sessionLocation").innerHTML = sessionName;
};


//get element - change text div
function get_active_users_by_rating()
{
	postinfo ={
		url:'users/get_active_users_by_rating',
		usrpage:1, //עמודים בשביל לדפדפ בין היוזרים במערכתץ פה את שלוחת את מספר עמוד הבא שאת רוצה לראות.
		numofusrs:20 //number of users per page
	}
	ajaxCall(postinfo,function(response){
		result ='';
		if(response.error.length > 0 )
			alert(JSON.stringify(response.error));
		else
		{	
			usrs = response.data.usrs;
			for(i=0; i < usrs.length; i++)
			{
				result = result +'<div class = "img-with-text">';
				result = result+'<img id = "face"'+i+'  src="'+ usrs[i]['usrimgurl']+'"/>';
				result = result+ /*'<img class = "badge" src = "prize_winner.png"/>*/ '<p class ="name">'+usrs[i]['usrfirstname']+" "+usrs[i]['usrlastname']+'</p></div>';
				//result  = result + '<p class ="lastname">'+ usrs[i]['usrlastname']+'</p></div>';
			}
			
			
			document.getElementById("allUsers").innerHTML =  result;
		}
		
	});
	
}