// =========== KARAR YAPILARI =======//
// IF-ELSE
const s1 = Number(prompt("1. sayiyi giriniz")); 
// const s1 = prompt("1. sayiyi giriniz"); seklinde de yazabiliriz ama yukaridaki sekliyle veya
// const s1 = +prompt("1. sayiyi giriniz"); seklinde prompt un onune + yazarak bunun bir sayi 
// oldugunu anlayacak. Bu sadece toplama islemleri icin gerekiyor cunku kelimeler (string) 
// uzerinde carpma, cikarma veya bolme islemleri olmaz 
const islem = prompt("1 islem giriniz");
const s2 = +prompt("2. sayiyi giriniz");
let sonuc=0;
if (islem=="+") {
    sonuc=s1+s2;  
    // console.log("Toplama sonucu: " + sonuc);  // Toplama sonucu: 16
} else if (islem=="-") {
    sonuc=s1-s2;
    // console.log("Cikartma sonucu: " + sonuc);  // Cikartma sonucu: 8
}else if (islem=="*") {
    sonuc=s1*s2;
    // console.log("Carpma sonucu: " + sonuc);  // Carpma sonucu: 48
} else if (islem=="/") {
    sonuc =s1/s2;
    // console.log("Bolme sonucu: " + sonuc);  // Bolme sonucu: 3
}
    console.log(sonuc);
    console.log(`${s1} ${islem} ${s2} = ${sonuc}`);