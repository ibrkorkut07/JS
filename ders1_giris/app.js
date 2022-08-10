// ===================================// konsol
// console.log("Hello Javascript");
// alert("dikkat");
// console.warn("bu bir uyaridir");
// console.error("bu bir hatadir");
// prompt("adiniz?");

// =========== DEGISKEN TANIMLAMA =======//
// =========== VAR ======================//
var isim = "can";
// Modern JS de var kullanimi, herkesin heryerden ulasabildigi bir degisken oldugu icin,
// biraz azaldi. Gerekmedikce kullanilmamakta.
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);   // number
// bu kodlari internet uzerinde gormek icin index.html dosyasina gelip sag click yapip
// "open with live server" i seciyoruz

// =========== CONST ======================//
// const degiskeni sadece bulundugu yerde kullanilabilir ve degistiremez (non-primitive ler haric)
// js de mumkunse const, yoksa let, o da mumkun degilse var tercih edilmelidir. Cunku js de cok kolay
// degisiklik yapilabilir (biz degerimizin herkes tarafindan o kadar da kolay degistirilmesini istemeyiz)
// let ve var bu konularda problem cikarabilirler
const piSayisi = 3.14;
// const piSayisi= 3;  --> bu yazilirsa hata verir
const isim1 = "Osman";
console.log(typeof isim1);   // string

// const number;   // hatali yazim, baslangicta bir deger atanmali

// =========== LET ======================//
// Kullanim yeri sabit ama degeri bulundugu yerde sabit degiskenler olusturmak icin kullanilir
// let i sadece olusturdugum yerden cagirabiliyor (var dan farki bu). Mesela if yapisi icerisinde let 
// kullandiysam if disindan o let degiskenini cagiramiyoruz 
let fiyat;
fiyat =10;
console.log(typeof fiyat);  // number
console.log(fiyat);  // 10
fiyat = "Erdem";
console.log(typeof fiyat);  // string
console.log(fiyat);  // Erdem

// string tanimlamak icin 3 farkli karakter kullanilabilir
let name1="Ali";
let name2='Ali';
let name3=`Ali`;   // backtick button is to the left of (number) 1 button
console.log("name3: " + name3);

// =========== ARITMETIK OPERATORLER ======================//
const kola=5;
const cips=4;
const ekmek=3;
console.log(kola+cips+ekmek);   // 12
console.log("toplam fiyat: " , kola+cips+ekmek);   // , yerine java daki gibi + da kullanilabilir

// veya atama yaparak da yapabiliriz
const toplamFiyat = kola+cips+ekmek;
console.log(toplamFiyat);   // 12

const ad="can";
const soyad="canan";
console.log(ad + " " + soyad);

const s1=7;
let s2="7";
console.log(s1 + s2);

console.log("benim adim " + ad + ", yasim " + s1);

// =========== TEMPLATE LITERAL ======================//
console.log(`benim adim ${ad}, yasim ${s1}`);   // backtick daha kolay yazmamizi sagliyor
// aradaki + isaretlerini yazmamiza gerek kalmiyor ama variable i ${} icine yaziyoruz

const taban = 2;
const ust = 3;
console.log(taban**ust);

// mod alma
const sayi = 123;
const birlerBasamagi = sayi%10;
console.log(birlerBasamagi);

// == ve === ile karsilastirma 
const s3=5;
const s4="5";
console.log(s3==s4);   // true (sadece degerleri karsilastir)
console.log(s3===s4);   // false (degerleri ve data turlerini karsilastir)

// type degisimleri
const para="100";
console.log(para+15);   // 10015
console.log(Number(para)+15);   // 115

const sayi5=56;
console.log(String(sayi5)+sayi5);   // 5656
console.log(sayi5);   // 56 (atama olmadigi icin)
console.log(typeof sayi5);   // number

const degerString = "sayi5";
console.log(typeof degerString);   // string
console.log(degerString);   // sayi5
const degerString2 = ""+sayi5+"";
console.log(degerString2);   // 56
console.log(typeof degerString2);   // string
