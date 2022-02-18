var Student = {
    name : "Efe",
    surname : "Çetinkaya",
    age:18,

    showInfo(){
        console.log(this.name + this.surname + this.age)
    }
} //showInfo fonksiyonu içerisinde name, surname ve age değişkenlerini tanımlamadık ve o değişkenleri nesneden aldık. 
//"This" kullanımı bir nevi Türkçe'deki "mevzubahis" sözcüğüne karşılık gelmektedir.
Student.showInfo();

//****************** */
//Class Kullanımı

class Car {
    constructor(color,year,horsePower){
this.color = color;
this.year =  year;
this.horsePower = horsePower;
    }
    showCarInfo(){
        console.log("Color: " +this.color);
        console.log("Year: " +this.year);
        console.log("Horse Power: " +this.horsePower);
    }
}

var Mercedes = new Car("black",2015,170) //Car class'ını kullanarak bir object oluşturdum.
Mercedes.color = "White"; //Dışarıdan müdahale ile değiştirebiliyorum.
Mercedes.showCarInfo(); //Class'ın property'si olan methodu çağırarak arabanın özelliklerini görüntüledim.

var BMW = {    //var BMW = { } demek var BMW = new Object(){ } demenin kısa yoludur.
    color : "blue",
    year: 2019,
    horsePower: 200,
    showCarInfo(){console.log("Color: " +this.color);
    console.log("Year: " +this.year);
    console.log("Horse Power: " +this.horsePower);}
}
BMW.showCarInfo() //Mercedes'te yaptığım gibi nitelikleri Class'a atayım ondan objectler türetmem BMW'de yaptığım gibi nitelikleri
//teker teker objectlere atamamdan daha kolay olacaktır.


//**************** */
//Return kullanımı

function CalculateIt(x,y){
    return x + y
}
let a = 5;
let b = 7;
let c = CalculateIt(a,b); //Burada fonksiyonun geriye yani çağrıldığı yere döndürdüğü değer c değişkeninin değeri olacaktır.
console.log(c) //Bu yüzden return kelimesini kullanmadığımız takdirde undefined sonucunu alırız çünkü fonksiyon işlemi yapsa da
//geriye bir değer döndürmemiştir.

//***************** */
//Static Kullanımı
class Ogrenci{
    constructor(not,sinif,ad){
        this.not = not;
        this.sinif = sinif;
        this.ad = ad;
    }
    static Proffession = "student";
    Meslek = "öğrenci";
    static SelamVer(){
          console.log("Ben öğrenciyim!")
    }

   Greeting(){
       console.log("Hi, my name is "+this.ad + " I'm at " + this.sinif + "th grade and I've had " +this.not)
   }
}

var Efe = new Ogrenci(79,11,"Efe");
Efe.Greeting();   //Normal bi fonksiyon olan Greeting'e bir obje aracılığı ile ulaşabildim.
Ogrenci.SelamVer(); //Static bir fonksiyon olan SelamVer'e object olmadan ulaşabildim.
console.log(Efe.Meslek);  //Aynı durum geçerli.
console.log(Ogrenci.Proffession);//Aynı durum geçerli.

