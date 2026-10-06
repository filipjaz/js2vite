console.log('Katalog warsztatów uruchomiony');
console.log('Projekt: Katalog warsztatów');
console.log('Wyniki będą wyświetlane tutaj :)');

console.log("Katalog warsztatów uruchomiony");
console.log("Pierwsza strona");
console.log(12);
console.log(true);
console.log(typeof "Pierwsza strona");
console.log(typeof 12);
console.log(typeof true);
console.log(typeof "Tekst");
console.log(typeof null);
console.log(typeof 3.14);

console.log(12+1);
console.log("12"+1);
console.log(12>4);
console.log("12"*3);
console.log(10%3);
console.log(12==3);

const tittle="Pierwsza strona";
const seats=12;
let enrolled=4;
console.log(tittle,seats,enrolled);
enrolled=5;
console.log(tittle,seats,enrolled);
//Przywracamy punkt startowy następnej lekcji
enrolled=4;
//Zmiana wartości seats
//seats=13;
console.log(tittle,seats,enrolled);

console.log(`${tittle}: wolne ${seats-enrolled} z ${seats}`);
console.log('${tittle}: wolne ${seats-enrolled} z ${seats}');
console.log("${tittle}: wolne ${seats-enrolled} z ${seats}");

//Instrukcje warunkowe
let enrolled2=12;
let tittle2=(enrolled2==12) ? "Kurs zamknięty, brak wolnych miejsc" : "Kurs otwarty, wolnych miejsc 11 z 12";
if(enrolled2>10){
    console.log("Kurs na zamknięciu ! ostatnie dwa miejsca");
}else if(enrolled2<2){
    console.log("Kurs stworzony! mnóstwo miejsc dostępnych");
}
else{
    console.log("Kurs w przygotowaniu");
}

let enrolled3=4;
let tittle3='';

switch(enrolled3){
    case 0:
        tittle3='Kurs otwarty! Wszystkie miejsca wolne ';
        console.log("Jestem w bloku 0");
        break;
    case 6:
        tittle3='Kurs popoularny! Połowa miejsc wolnych ';
        console.log("Jestem w bloku 6");
        break;
    case 12:
        tittle3='Kurs zamknięty! Wszystkie miejsca zajęte ';
        console.log("Jestem w bloku 12");
        break;
    default:
        tittle3='Kurs w przygotowaniu-kurs zawieszony, prace trwają ';
        console.log("debug note-maintanance");
}