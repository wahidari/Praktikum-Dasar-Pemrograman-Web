var id_materi;
window.onload = init;

function loadJSON(callback) {
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
    $('#materitambahan').hide();
    loadData();
}

function loadData(){
    loadJSON(function(response) {
        myObj = JSON.parse(response);
        id_materi = Object.keys(myObj).length;
        loadMateri(myObj);
        loadMateriModal(myObj);
    });
}

//load materi ke thumbnail
function loadMateri(myObj){
    var count = Object.keys(myObj).length;
    var konten = "";
    if (count > 0){
        $('#materitambahan').show();
        for (var i = 0; i < count; i++) {
            konten += "<div class=\"col-md-3\">\n";  
            konten += "<div class=\"thumbnail\">\n";
            konten += "<img src=\"img/css/css.png\" class=\"img-responsive\" alt=\"...\">\n";
            konten += "<div class=\"caption\">\n";
            konten += "<h3>" + myObj[i].judul + "</h3>\n";
            konten += "<p>" + myObj[i].subjudul + "</p>\n";
            konten += "<p><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#"+myObj[i].id+"\">Buka</button></p>\n";
            konten += "</div>\n";
            konten += "</div>\n";
            konten += "</div>\n";
        }
        document.getElementById('materi').innerHTML = konten ;
    }
}

//load materi ke modal
function loadMateriModal(myObj){
    var count = Object.keys(myObj).length;
    var konten = "";
    for (var i = 0; i < count; i++) {
        konten += "<div class=\"modal fade\" id=\""+ myObj[i].id +"\" tabindex=\"-1\" role=\"dialog\">\n";
        konten += "<div class=\"modal-dialog modal-lg\" role=\"document\">\n";
        konten += "<div class=\"modal-content\">\n";
        konten += "<div class=\"modal-header\">\n";
        konten += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n";
        konten += "<h3 class=\"modal-title\">"+ myObj[i].judul +"</h3>\n";
        konten += "</div>\n";
        konten += "<div class=\"modal-body\">\n";
        konten += "<h4 class=\"modal-title\">"+ myObj[i].subjudul +"</h4>\n";
        konten += "<p class=\"p-small\">" + myObj[i].konten + "</p>\n";
        konten += "<p class=\"p-small\"><i> <u>Syntax HTML:</u></i> </p>\n";
        konten += "<pre style=\"background-color:#212121;\"><code class=\"language-markup\">\n";
        konten += myObj[i].kode;
        konten += "</code></pre>\n";
        konten += "<p class=\"p-small\"><i> <u>Syntax CSS:</u></i> </p>\n";
        konten += "<pre style=\"background-color:#212121;\"><code class=\"language-markup\">\n";
        konten += myObj[i].kode1;
        konten += "</code></pre>\n";
        konten += "<img src=\""+ myObj[i].gambar +"\" class=\"img-responsive\" alt=\"\">\n";
        konten += "</div>\n";
        konten += "<div class=\"modal-footer\">\n";
        konten += "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n";
        konten += "</div>\n";
        konten += "</div>\n";
        konten += "</div>\n";
        konten += "</div>\n";
    }
    console.log(konten);
    document.getElementById('materiModal').innerHTML =  konten ;
}