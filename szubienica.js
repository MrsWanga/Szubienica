var keys = new Array(20);
keys[0] = "lekkoatletyka";
keys[1] = "interpunkcja";
keys[2] = "telekomunikacja";
keys[3] = "metamorfoza";
keys[4] = "kolorowanka";
keys[5] = "Antyterrorystyczna grupa świerszczy";
keys[6] = "M jak Miłość";
keys[7] = "móżdżek";
keys[8] = "Within Temptation";
keys[9] = "Nie boję się gdy ciemno jest";
keys[10] = "Drugi raz pisze się szybciej";
keys[11] = "Saanah";
keys[12] = "Ania z Zielonego Wzgórza";
keys[13] = "Adam Mickiewicz";
keys[14] = "Tylko mnie kochaj";
keys[15] = "Nic nie może przecież wiecznie trwać";
keys[16] = "Miłość w Zakopanem";

var key = keys[Math.floor(Math.random() * 15)];

key = key.toUpperCase();

var count = key.length;
var ile_skuch=0;

var yes = new Audio("yes.wav");
var no = new Audio ("no.wav");

var key1 = "";
var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

for (i=0; i<count; i++){
    if(key.charAt(i)==" ")key1=key1+" ";
    else key1=key1+"-";
}
function print_key(){
    document.getElementById("sentence").innerHTML = key1;
}

window.onload = start;

function start(){
    var letters ="";
    for(i=0; i<=34; i++){
        var element="lit" + i;
        letters = letters + '<div class="letter" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if((i+1)%7==0) letters=letters+'<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML=letters;

    print_key();
}
String.prototype.ustawZnak= function (miejsce, znak){
    if(miejsce>this.length-1) return this.toString();
    else{
        return this.substr(0,miejsce)+znak+this.substr(miejsce+1)
    }
}

function sprawdz(nr){
    var trafiona = false;

    for(i=0; i<count; i++){
        if(key.charAt(i)==litery[nr]){
            key1=key1.ustawZnak(i,litery[nr]);
            trafiona=true;
        }
    }

    if(trafiona==true){
        yes.play();
        var element="lit" + nr;
        document.getElementById(element).style.background ="#003300";
        document.getElementById(element).style.color ="#00C000";
        document.getElementById(element).style.border ="3px solid #00C000";
        document.getElementById(element).style.cursor ="default";

        print_key()
    }else{
        no.play();
        var element="lit" + nr;
        document.getElementById(element).style.background ="#330000";
        document.getElementById(element).style.color ="#C00000";
        document.getElementById(element).style.border ="3px solid #C00000";
        document.getElementById(element).style.cursor ="default";
        document.getElementById(element).setAttribute("onclick",";"); // dezaktywujemy literkę która już spowodowała skuchę


        //skucha
        ile_skuch++;
        var obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("image").innerHTML='<img src="'+obraz+'"alt="" />';
    }

    //wygrana
    if(key==key1){
        document.getElementById("alphabet").innerHTML='<div style="color: green">Tak jest! Podano prawidłowe hasło:</div></br>'+key+
            '</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

    //wygrana
    if(ile_skuch==9){
        document.getElementById("alphabet").innerHTML='<div style="color: darkred">Przegrana! Prawidłowe hasło:</br>'+key+
            '</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

}