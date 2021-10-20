function ClearAll() {
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";

}

function SetCookies() {
    document.cookie = "name=" + '' + document.getElementById("name").value + "|number=" + document.getElementById("number").value;
}

function GetCookies() {
    var array = document.cookie.split('|');
    for (var I = 0; I < array.length; I++) {
        var det = array[I].split('=');
        document.getElementById(det[0]).innerHTML = det[1];
        console.log(det);
    }
}