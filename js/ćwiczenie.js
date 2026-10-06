/*
let seats=15;
let enrolled=0;

function Zwiększ() {
    if(enrolled<12){
        enrolled++;
        console.log(enrolled);
    }
     if(enrolled==12){
        console.log("Brak wolnych miejsc");
    }
    if(seats>0){
        seats--;
    }

}

console.log("Katalog warsztatów uruchomiony");
const tittle="Pierwsza strona";
const seats2=12;
const enrolled2=4;

function getFreeSeats(seats2,enrolled2){
    return seats2-enrolled2;
}

const FreeSeats=getFreeSeats(seats2,enrolled2);
console.log(FreeSeats);
console.log(getFreeSeats(12,11));
console.log(getFreeSeats(12,12));
*/

let seats;
let enrolled;
let tittle;
let slogan;
let course;

function setSeats(seatsToSet){
     return seats=seatsToSet;
    //return seats;
}

function getSeats(){
    return seats;
}

function setEnrolled(enrolledToSet){
     return enrolled=enrolledToSet;
    //return enrolled;
}

function getEnrolled(){
    return enrolled;
}

function setCourse(courseToSet){
    return switch(courseToSet){
        case 1:
            course='JavaScript';
            break;
        case 2:
            course='React';
            break;
        case 3:
            course="Angular";
            break;
        case 4:
            course='Vite';
            break;
        default:
            course='Brak kursu';
    }
}

function getCourse(){
    return course;
}

function setTittle(tittleToSet){
    return tittle=tittleToSet;
    //return tittle;
}

function getTittle(){
    return tittle;
}

function setSlogan(sloganToSet){
    return slogan=sloganToSet;
    //return slogan;
}

function getSlogan(){
    return slogan;
}

function MakeHeader(){
    console.log(`Kurs: ${course}`);
    console.log(`${enrolled}/${seats} uczestników`);
    console.log(`Slogan: ${slogan}`);

    console.log("Kurs"+ getCourse());
    console.log(getEnrolled()+"|"+getSeats()+"uczestników");
    console.log(getSlogan());
}

function prepareApp(){
    setCourse(1);
    setEnrolled(12);
    setSeats(24);
    setSlogan("Zapisz sie na kurs juz teraz");
}

MakeHeader();
prepareApp();
