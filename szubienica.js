function Key(name, category) {
        this.name=name
        this.category=category;
}

let keys = new Array(20);
keys[0] = new Key("lekkoatletyka", "Sport");
keys[1] = new Key("familiada", "Program telewizyjny");
keys[2] = new Key("Jeden z dziesięciu", "Program telewizyjny");
keys[3] = new Key("skoki naciarskie", "Sport");
keys[4] = new Key("kolorowanka", "Rzecz");
keys[5] = new Key("Świerszcz", "Zwierzę");
keys[6] = new Key("M jak Miłość", "Telewizja");
keys[7] = new Key("móżdżek", "Część ciała");
keys[8] = new Key("Within Temptation", "Zespół");
keys[9] = new Key("Nie boję się gdy ciemno jest", "Muzyka");
keys[10] = new Key("Drugi raz pisze się szybciej", "Powiedzenie");
keys[11] = new Key("Saanah", "Muzyka");
keys[12] = new Key("Ania z Zielonego Wzgórza", "Literatura");
keys[13] = new Key("Adam Mickiewicz", "Literatura");
keys[14] = new Key("Tylko mnie kochaj", "Film");
keys[15] = new Key("Nic nie może przecież wiecznie trwać", "Muzyka");
keys[16] = new Key("Miłość w Zakopanem", "Tytuł piosenki");
keys[17] = new Key("Chrząszcz", "Zwierzę");
keys[18] = new Key("Dźdźownica", "Zwierzę");
keys[19] = new Key("Dwutlenek węgla", "Chemia");
keys[20] = new Key("Cieszmy się kochać ludzi tak szybko odchodzą", "Przysłowie");
keys[21] = new Key("Gdyby kózka nie skakała toby nóżki nie złamała", "Przysłowie");
keys[22] = new Key("Szermierka", "Sport");
keys[23] = new Key("Kwas deoksyrybonukleinowy", "Biochemia");
keys[24] = new Key("Partycja", "Informatyka");

let key = keys[Math.floor(Math.random() * 25)];
let cat = key.category.toUpperCase();
key = key.name.toUpperCase();

let count = key.length;
let ile_skuch=0;

const yes = new Audio("yes.wav");
const no = new Audio ("no.wav");

let key1 = "";
let litery = new Array(35);

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

function print_category(){
    document.getElementById("category").innerHTML = cat;
}

for (let i = 0; i < count; i++){
    if (key.charAt(i) === " ") key1 = key1 + " ";
    else key1 = key1 + "-";
}

function print_key(){
    document.getElementById("sentence").innerHTML = key1;
}

window.onload = start;

function start(){
    let letters = "";
    for (let i = 0; i <= 34; i++){
        let element = "lit" + i;
        letters = letters + '<div class = "letter" onclick = "sprawdz('+i+')" id = "'+element+'">' + litery[i] + '</div>';
        if ((i + 1) % 7 === 0) letters=letters+'<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML=letters;
    print_category();
    print_key();
}
String.prototype.ustawZnak= function (miejsce, znak){
    if (miejsce>this.length-1) return this.toString();
    else {
        return this.substr(0, miejsce)+znak+this.substr(miejsce + 1)
    }
}

function sprawdz(nr){
    let trafiona = false;

    for (let i = 0; i < count; i++){
        if (key.charAt(i) === litery[nr]){
            key1 = key1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if (trafiona === true){
        yes.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        print_key()
    } else{
        no.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";"); // dezaktywujemy literkę która już spowodowała skuchę


        //skucha
        ile_skuch++;
        let obraz = "img/s"+ile_skuch+".jpg";
        document.getElementById("image").innerHTML = '<img src = "'+obraz+'" alt = "" />';
    }

    //wygrana
    if (key === key1){
        document.getElementById("alphabet").innerHTML = '<div style = "color: green">Tak jest! Podano prawidłowe hasło:</div></br>' + key +
            '</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

    //wygrana
    if (ile_skuch === 9){
        document.getElementById("alphabet").innerHTML = '<div style = "color: darkred">Przegrana! Prawidłowe hasło:</div></br>' + key +
            '</br></br><span class = "reset" onclick = "location.reload()">JESZCZE RAZ?</span>'
    }

}