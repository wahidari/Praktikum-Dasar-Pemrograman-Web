$(document).ready(function(){
	$("#FixError").hide();
	$("#FNameBlank").hide();
	$("#FNameNumber").hide();
	$("#LNameBlank").hide();
	$("#LNameNumber").hide();
	$("#AddressBlank").hide();
	$("#EmailBlank").hide();
	$("#EmailError").hide();
	$("#PhoneBlank").hide();
	$("#DateBlank").hide();
	$("#DateError").hide();
	$("#GenderBlank").hide();
	$('#Phone').mask('(000) 000-000');
});
var status, statuss, statusAddress, statusEmail, statusPhone, datestatus, FName, LName, Address, Email, Phone, day, month, year, gender, cc;

// If Save Button Clicked, This Function will be Executed
function main() {
	console.log("main func");
	getinput();
	var b = statusAddress && statusEmail && statusPhone;
	console.log("stat b = "+b);
	var namestatus = statuss && status;
	var a = all(namestatus, datestatus);
	console.log("stat a = "+a);
	var c = b && a;
	console.log("final stat = "+c);
	if (c == "true" && gender != "default") {
		clear();
		$("#successmodal").modal();
		document.getElementById("resultFName").innerHTML = FName;
		document.getElementById("resultLName").innerHTML = LName;
		document.getElementById("resultAddress").innerHTML = Address;
		document.getElementById("resultEmail").innerHTML =Email ;
		document.getElementById("resultPhone").innerHTML = Phone;
		document.getElementById("resultDate").innerHTML = day + "-" + month + "-" + year;
		document.getElementById("resultGender").innerHTML = gender;
	} 
	else if (a == "false" && gender != "default") {
		delError("Gender","");
	} 
}

// Get input from form
function getinput() {
	console.log("getinput func");
	FName = document.getElementById("FName").value;
	LName = document.getElementById("LName").value;
	Address = document.getElementById("Address").value;
	Email = document.getElementById("Email").value;
	Phone = document.getElementById("Phone").value;
	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;
	gender;
	if (document.getElementById("Male").checked == true) {
		gender = "Male";
	} else if (document.getElementById("Female").checked == true) {
		gender = "Female";
	} else {
		gender = "default";
	}
	cekEmpty(FName, LName, Address, Email, Phone, day, month, year, gender);
}

//cek empty input
function cekEmpty(FName, LName, Address, Email, Phone, day, month, year, gender) {
	console.log("cekEmpty func");
	if (FName == "" && LName == "" && Address == "" && Email == "" && Phone == "" && day == "Day" && month == "Month" && year == "Year" && gender == "default") {
		console.log("all empty");
		showError("all","");
		Error("all");
		$("#failedmodal").modal();
		
	} else {
		console.log("not empty at all");
		delError("all","");
		cekFName(FName);
		cekLName(LName);
		cekAddress(Address);
		cekEmail(Email);
		cekPhone(Phone);
		cekDate(day, month, year);
		if (gender == "default") {
			showError("Gender","Gender May Not Be Blank");
			Error("GenderBlank");
		} else{
			FixError("GenderBlank");
		}
	}
}

//cek Address
function cekAddress(address){
	console.log("cekAddress func");
	statusAddress = false;
	if (address == "") {
		$("#failedmodalname").modal();
		Error("AddressBlank");
		showError("Address", "Address May Not Be Blank");
		statusAddress = false;
	} else {
		statusAddress = true;
		delError("Address", "");
		FixError("AddressBlank");
	}
	return statusAddress;
}

//cek Email
function cekEmail(email)  {  
	console.log("cekEmail func");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	statusEmail = false;
	if(email == ""){
		$("#failedmodalname").modal();
		FixError("EmailError");
		Error("EmailBlank");
		showError("Email", "Email May Not Be Blank");
		statusEmail = false;
	}
	else if (!email.match(mailformat))  {   
		$("#failedmodalname").modal();
		FixError("EmailBlank");
		Error("EmailError");
		showError("Email", "You have entered an invalid email address!");
		statusEmail = false;
	}  
	else  {  
		statusEmail = true;
		delError("Email", "");
		FixError("EmailError");
		FixError("EmailBlank");
	}  
	return statusEmail;
}  

//cek Phone
function cekPhone(phone){
	console.log("cekPhone func");
	statusPhone = false;
	if (phone == "" || phone.length < 11) {
		$("#failedmodalname").modal();
		Error("PhoneBlank");
		showError("Phone", "Phone Number May Not Be Blank Or Less Than 10 Digits");
		statusPhone = false;
	} else {
		statusPhone = true;
		delError("Phone", "");
		FixError("PhoneBlank");
	}
	return statusPhone;
}
//cek First Name
function cekFName(FName) {
	console.log("cekFName func");
	var letters = /^[A-Za-z]+$/;
	status = false;
	if (FName == "") {
		$("#failedmodalname").modal();
		FixError("FNameNumber");
		Error("FNameBlank");
		showError("FName", "First Name May Not Be Blank");
		status = false;
	} else if (!FName.match(letters)) {
		$("#failedmodalname").modal();
		FixError("FNameBlank");
		Error("FNameNumber");
		showError("FName", "First Name May Not Contains Number");
		status = false;
	} else {
		status = true;
		delError("FName", "");
		FixError("FNameNumber");
		FixError("FNameBlank");
	}
	return status;
}

//cek Last Name
function cekLName(LName) {
	console.log("cekLName func");
	var letters = /^[A-Za-z]+$/;
	statuss =false;
	if (LName == "") {
		$("#failedmodalname").modal();
		FixError("LNameNumber");
		Error("LNameBlank");
		showError("LName", "Last Name May Not Be Blank");
		statuss = false;
	} else if (!LName.match(letters)) {
		$("#failedmodalname").modal();
		FixError("LNameBlank");
		Error("LNameNumber");
		showError("LName", "Last Name May Not Contains Number");
		statuss = false;
	} else {
		statuss = true;
		delError("LName", "");
		FixError("LNameNumber");
		FixError("LNameBlank");
	}
	return statuss;
}

//cek date
function cekDate(day, month, year) {
	console.log("cekDate func");
	if (day == "Day" || month == "Month" || year == "Year"){
		$("#failedmodalname").modal();
		FixError("DateError");
		showError("Date", "Day, Month & Year May Not Be Blank");
		Error("DateBlank");
		datestatus = false;
	} else if ((day == "31" && month == "February") || (day == "30" && month == "February")) {
		$("#failedmodalname").modal();
		FixError("DateBlank");
		showError("Date", "30 & 31 Februari Can't Be Used");
		Error("DateError");
		datestatus = false;
	} else if (day == "31" && month == "April") {
		$("#failedmodalname").modal();
		FixError("DateBlank");
		showError("Date", "31 April Can't Be Used");
		Error("DateError");
		datestatus = false;
	} else if (day == "31" && month == "June") {
		$("#failedmodalname").modal();
		FixError("DateBlank");
		showError("Date", "31 June Can't Be Used");
		Error("DateError");
		datestatus = false;
	} else if (day == "31" && month == "September") {
		$("#failedmodalname").modal();
		FixError("DateBlank");
		showError("Date", "31 September Can't Be Used");
		Error("DateError");
		datestatus = false;
	} else if (day == "31" && month == "November") {
		$("#failedmodalname").modal();
		FixError("DateBlank");
		showError("Date", "31 November Can't Be Used");
		Error("DateError");
		datestatus = false;
	} else {
		delError("Date", "");
		FixError("DateError");
		FixError("DateBlank");
		datestatus = true;
	}
	return datestatus;
}

//show error below input
function showError(tag, message) {
	if (tag == "all") {
		document.getElementById("errorFName").innerHTML = "First Name May Not Be Blank";
		document.getElementById("errorLName").innerHTML = "Last Name May Not Be Blank";
		document.getElementById("errorAddress").innerHTML ="Address May Not Be Blank";
		document.getElementById("errorEmail").innerHTML = "Email May Not Be Blank";
		document.getElementById("errorPhone").innerHTML = "Phone Number May Not Be Blank Or Less Than 10 Digits";
		document.getElementById("errorDate").innerHTML = "Date, Month & Year May Not Be Blank";
		document.getElementById("errorGender").innerHTML = "Gender May Not Be Blank";
		
	} else if (tag == "FName") {
		document.getElementById("errorFName").innerHTML = message;
	} else if (tag == "LName") {
		document.getElementById("errorLName").innerHTML = message;
	} else if (tag == "Address") {
		document.getElementById("errorAddress").innerHTML = message;
	} else if (tag == "Email") {
		document.getElementById("errorEmail").innerHTML = message;
	} else if (tag == "Phone") {
		document.getElementById("errorPhone").innerHTML = message;
	} else if (tag == "Date") {
		document.getElementById("errorDate").innerHTML = message;
	} else if (tag == "Gender") {
		document.getElementById("errorGender").innerHTML = message;
	}
}

//clear error below input
function delError(tag, message) {
	if (tag == "all") {
		document.getElementById("errorFName").innerHTML = message;
		document.getElementById("errorLName").innerHTML = message;
		document.getElementById("errorAddress").innerHTML = message;
		document.getElementById("errorEmail").innerHTML = message;
		document.getElementById("errorPhone").innerHTML = message ;
		document.getElementById("errorDate").innerHTML = message;
		document.getElementById("errorGender").innerHTML = message;
		
	} else if (tag == "FName") {
		document.getElementById("errorFName").innerHTML = message;
	} else if (tag == "LName") {
		document.getElementById("errorLName").innerHTML = message;
	} else if (tag == "Address") {
		document.getElementById("errorAddress").innerHTML = message;
	} else if (tag == "Email") {
		document.getElementById("errorEmail").innerHTML = message;
	} else if (tag == "Phone") {
		document.getElementById("errorPhone").innerHTML = message;
	} else if (tag == "Date") {
		document.getElementById("errorDate").innerHTML = message;
	} else if (tag == "Gender") {
		document.getElementById("errorGender").innerHTML = message;
	}
}

//Show This Error Below Form If The Input Is Incorrect
function Error(eror){
	$("#FixError").show();
	if (eror == "all") {
		$("#FNameBlank").show();
		$("#LNameBlank").show();
		$("#AddressBlank").show();
		$("#EmailBlank").show();
		$("#PhoneBlank").show();
		$("#DateBlank").show();
		$("#GenderBlank").show();
	} 
	else if (eror == "FNameBlank") {
		$("#FNameBlank").show();
	} 
	else if (eror == "FNameNumber") {
		$("#FNameNumber").show();
	} 
	else if (eror == "LNameBlank") {
		$("#LNameBlank").show();
	} 
	else if (eror == "LNameNumber") {
		$("#LNameNumber").show();
	}
	else if (eror == "AddressBlank") {
		$("#AddressBlank").show();
	}
	else if (eror == "EmailBlank") {
		$("#EmailBlank").show();
	}
	else if (eror == "EmailError") {
		$("#EmailError").show();
	}  
	else if (eror == "PhoneBlank") {
		$("#PhoneBlank").show();
	}  
	else if (eror == "DateBlank") {
		$("#DateBlank").show();
	} 
	else if (eror == "DateError") {
		$("#DateError").show();
	} 
	else if (eror == "GenderBlank") {
		$("#GenderBlank").show();
	}
	else{
		$("#FixError").show();
	}
}

//Clear This Error Below Form If The Input Is Correct
function FixError(tag){
	if (tag == "FNameBlank"){
		$("#FNameBlank").hide();
	} else if (tag == "FNameNumber") {
		$("#FNameNumber").hide();
	} else if (tag == "LNameBlank") {
		$("#LNameBlank").hide();
	} else if (tag == "LNameNumber") {
		$("#LNameNumber").hide();
	} else if (tag == "AddressBlank") {
		$("#AddressBlank").hide();
	} else if (tag == "EmailBlank") {
		$("#EmailBlank").hide();
	} else if (tag == "EmailError") {
		$("#EmailError").hide();
	} else if (tag == "PhoneBlank") {
		$("#PhoneBlank").hide();
	} else if (tag == "DateBlank") {
		$("#DateBlank").hide();
	} else if (tag == "DateError") {
		$("#DateError").hide();
	} else if (tag == "GenderBlank") {
		$("#GenderBlank").hide();
	}
}

//Check All Result True Or False
function all(name, date) {
	var allstatus = date && name;
	return allstatus;
}

//Clear All Error 
function clear() {
	document.getElementById("errorFName").innerHTML = "";
	document.getElementById("errorLName").innerHTML = "";
	document.getElementById("errorAddress").innerHTML = "";
	document.getElementById("errorEmail").innerHTML = "";
	document.getElementById("errorPhone").innerHTML = "" ;
	document.getElementById("errorDate").innerHTML = "";
	document.getElementById("errorGender").innerHTML = "";
	
	$("#FixError").hide();
	$("#FNameBlank").hide();
	$("#FNameNumber").hide();
	$("#LNameBlank").hide();
	$("#LNameNumber").hide();
	$("#AddressBlank").hide();
	$("#EmailBlank").hide();
	$("#EmailError").hide();
	$("#PhoneBlank").hide();
	$("#DateBlank").hide();
	$("#DateError").hide();
	$("#GenderBlank").hide();
}

//show modal if clear button clicked
function clearform(){
	$("#successmodalclear").modal();
}

function FocusError(focusto) {
	if (focusto == "FNameBlank") {
		document.getElementById("FName").focus();
	} else if (focusto == "FNameNumber") {
		document.getElementById("FName").focus();
	} else if (focusto == "LNameBlank") {
		document.getElementById("LName").focus();
	} else if (focusto == "LNameNumber") {
		document.getElementById("LName").focus();
	} else if (focusto == "AddressBlank") {
		document.getElementById("Address").focus();
	} else if (focusto == "EmailBlank") {
		document.getElementById("Email").focus();
	} else if (focusto == "EmailError") {
		document.getElementById("Email").focus();
	} else if (focusto == "PhoneBlank") {
		document.getElementById("Phone").focus();
	} else if (focusto == "DateBlank") {
		document.getElementById("day").focus();
	} else if (focusto == "DateError") {
		document.getElementById("day").focus();
	} else if (focusto == "GenderBlank") {
		document.getElementById("Male").focus();
	}
}

