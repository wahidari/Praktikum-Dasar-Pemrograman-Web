var status, statuss, datestatus, FName, LName, day, month, year, gender, cc;

// If Save Button Clicked, This Function will be Executed
function main() {
	getinput();
	var namestatus = statuss && status;
	var a = all(namestatus, datestatus);
	if (a == "true" && gender != "default") {
		clear();
		$("#successmodal").modal();
		document.getElementById("resultFName").innerHTML = FName;
		document.getElementById("resultLName").innerHTML = LName;
		document.getElementById("resultDate").innerHTML = day + "-" + month + "-" + year;
		document.getElementById("resultGender").innerHTML = gender;
	} 
	else if (a == "false" && gender != "default") {
		delError("Gender","");
	} 
}

// Get input from form
function getinput() {
	FName = document.getElementById("FName").value;
	LName = document.getElementById("LName").value;
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
	cekEmpty(FName, LName, day, month, year, gender);
}

//cek empty input
function cekEmpty(FName, LName, day, month, year, gender) {
	if (FName == "" && LName == "" && day == "Day" && month == "Month" && year == "Year" && gender == "default") {
		showError("all","");
		Error("all");
		$("#failedmodal").modal();
	} else {
		delError("all","");
		cekFName(FName);
		cekLName(LName);
		cekDate(day, month, year);
		if (gender == "default") {
			showError("Gender","Gender May Not Be Blank");
			Error("GenderBlank");
		} else{
			FixError("GenderBlank");
		}
	}
}

//cek First Name
function cekFName(FName) {
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
		document.getElementById("errorDate").innerHTML = "Date, Month & Year May Not Be Blank";
		document.getElementById("errorGender").innerHTML = "Gender May Not Be Blank";
	} else if (tag == "FName") {
		document.getElementById("errorFName").innerHTML = message;
	} else if (tag == "LName") {
		document.getElementById("errorLName").innerHTML = message;
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
		document.getElementById("errorDate").innerHTML = message;
		document.getElementById("errorGender").innerHTML = message;
	} else if (tag == "FName") {
		document.getElementById("errorFName").innerHTML = message;
	} else if (tag == "LName") {
		document.getElementById("errorLName").innerHTML = message;
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
	document.getElementById("errorDate").innerHTML = "";
	document.getElementById("errorGender").innerHTML = "";
	$("#FixError").hide();
	$("#FNameBlank").hide();
	$("#FNameNumber").hide();
	$("#LNameBlank").hide();
	$("#LNameNumber").hide();
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
	} else if (focusto == "DateBlank") {
		document.getElementById("day").focus();
	} else if (focusto == "DateError") {
		document.getElementById("day").focus();
	} else if (focusto == "GenderBlank") {
		document.getElementById("Male").focus();
	}
}

