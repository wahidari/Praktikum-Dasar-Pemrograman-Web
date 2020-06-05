var id_materi,id_matericss;
window.onload = init;

//load HTML
function loadJSON(callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data.txt", true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(xmlhttp.response);
        }
    };
    xmlhttp.send();
}

//Load CSS
function loadJSONCSS(callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "datacss.txt", true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(xmlhttp.response);
        }
    };
    xmlhttp.send();
}

function init(){
    $('jmlmaterihtml').hide();
    $('jmlmatericss').hide();
    loadData();
    loadDataCss();
}

//Load jumlah HTML
function loadData(){
    loadJSON(function(response) {
        myObj = JSON.parse(response);
        id_materi = Object.keys(myObj).length;
        if (id_materi > 0){
            $('jmlmaterihtml').show();
            document.getElementById("jmlmaterihtml").innerHTML =" ( " + id_materi + " Tambahan Materi )";
        }
    });
}

//Load jumlah CSS
function loadDataCss(){
    loadJSONCSS(function(response) {
        myObj = JSON.parse(response);
        id_matericss = Object.keys(myObj).length;
        if (id_matericss > 0){
            $('jmlmatericss').show();
            document.getElementById("jmlmatericss").innerHTML =" ( " + id_matericss + " Tambahan Materi )";
        }
    });
}

//simpan data HTML
function simpanData(){
    id_materi ++;
    var inputjudul =$('#inputjudul').val();
    var inputsubjudul=$('#inputsubjudul').val();
    var inputkonten=$('#inputkonten').val();
    var inputkode=$('#inputkode').val();
    var inputgambar =$('#inputgambar').val();
    var daftar_data = { "id":id_materi, "judul": inputjudul, "subjudul":inputsubjudul, "konten":inputkonten, "kode":inputkode, "gambar":inputgambar};
    sendData(daftar_data);
}

//simpan data CSS
function simpanDataCSS(){
    id_matericss ++;
    var inputjudul =$('#inputjudulcss').val();
    var inputsubjudul=$('#inputsubjudulcss').val();
    var inputkonten=$('#inputkontencss').val();
    var inputkode=$('#inputkodecss').val();
    var inputkode1=$('#inputkodecss1').val();
    var inputgambar=$('#inputgambarcss').val();
    var daftar_data = { "id":id_matericss, "judul": inputjudul, "subjudul":inputsubjudul, "konten":inputkonten, "kode":inputkode, "kode1":inputkode1, "gambar":inputgambar};
    sendDataCSS(daftar_data);
}

//kirim data html
function sendData(daftar_data){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "send.php", true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xmlhttp.send(JSON.stringify(daftar_data));
    loadData();
    location.reload();
}

//kirim data css
function sendDataCSS(daftar_data){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "sendcss.php", true);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xmlhttp.send(JSON.stringify(daftar_data));
    loadData();
    location.reload();
}