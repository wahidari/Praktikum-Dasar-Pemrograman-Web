function input(){
	var nip, nama, jk, umur, penghasilan, status;
	status = true;
	var letters = /^[A-Za-z]+$/;
	nip = document.getElementById("nip").value;
	nama = document.getElementById("nama").value;
	jk = document.getElementById("jk").value;
	umur = document.getElementById("umur").value;
	penghasilan = document.getElementById("penghasilan").value;
	if (nip == "" || nip.match(letters)){
		status = false;
	} 
	if (nama == "" || !nama.match(letters)){
		status = false;
	} 
	if (jk == "" || !jk.match(letters)){
		status = false;
	}
	if (umur == "" || umur.match(letters)){
		status = false;
	}
	if (penghasilan == "" || penghasilan.match(letters)){
		status = false;
	}
	if (status){
		console.log(nip);
		console.log(nama);
		console.log(jk);
		console.log(umur);
		console.log(penghasilan);
		inputTabel(nip, nama, jk, umur, penghasilan);
	} else if(!status){
		alert("error input");
	}
}

function inputTabel(nip, nama, jk, umur, penghasilan){
	console.log("input table func");
	var table = document.getElementById("Tabel");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = nip;
	cell2.innerHTML = nama;
	cell3.innerHTML = jk;
	cell4.innerHTML = umur;
	cell5.innerHTML = penghasilan;
	Sorting();
}

function Sorting() {
	var tabel, baris, selesai, i, barisAwal, barisAkhir, pindah;
	tabel = document.getElementById("Tabel");
	selesai = true;
	while (selesai) {
		selesai = false;
		baris = tabel.getElementsByTagName("TR");
		for (i = 1; i < (baris.length - 1); i++) {
			pindah = false;
			barisAwal = baris[i].getElementsByTagName("TD")[4];
			barisAkhir = baris[i + 1].getElementsByTagName("TD")[4];
     		if (barisAwal.innerHTML.toLowerCase() < barisAkhir.innerHTML.toLowerCase()) {
			pindah= true;
			break;
		}
	}
	if (pindah) {
		baris[i].parentNode.insertBefore(baris[i + 1], baris[i]);
		selesai = true;
	}
}
}
