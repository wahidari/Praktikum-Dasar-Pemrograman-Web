var user, password;
window.onload = init;
function init(){
	$("#errorUser").show();
	$("#errorPassword").show();
}

function login(){
	user=document.getElementById("user").value.toLowerCase();
	password=document.getElementById("password").value.toLowerCase();
	if ((user =="" && password == "") || (user !="admin" && password != "admin")){
		showError("allWrong");
	} else if (user == "admin" && (password !="admin" || password =="")) {
		showError("passWrong");
	} else if (password == "admin" && (user!="admin" || user=="")) {
		showError("userWrong");
	} else if (user == "admin" && password == "admin"){
		window.location.reload();
		window.open("admin.html");
	}
}

function showError(msg){
	if (msg == "allWrong"){
		document.getElementById('errorUser').innerHTML = "Username Wrong";
		document.getElementById('errorPassword').innerHTML = "Password Wrong";
	} else if (msg == "userWrong"){
		document.getElementById('errorUser').innerHTML = "Username Wrong";
		document.getElementById('errorPassword').innerHTML = "";
	} else if (msg == "passWrong"){
		document.getElementById('errorUser').innerHTML = "";
		document.getElementById('errorPassword').innerHTML = "Password Wrong";
	}   
}