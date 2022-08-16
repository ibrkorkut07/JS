//============= FONKSIYONLAR ===================
//! 1. YONTEM: FUNCTION DECLARATION
// DECLARATION yontemi ile fonksiyonun tanimlanmasi cagrilmasindan
// once veya sonra olabilir

// fonksiyonun tanimlanmasi
// function yazdirAd () {
//     console.log("Hakan");
// }

// // fonksiyonun cagrilmasi
// yazdirAd();

// const sayimiz = prompt("bir sayi giriniz");

// console.log(tekCift(sayimiz));

// function tekCift(sayimiz){
// return sayimiz%2==0 ? `${sayimiz} cifttir` : `${sayimiz} tektir`
// }

//! 2. YONTEM: FUNCTION EXPRESSION (Bu yointem daha yaygin)
// const num = prompt("sayi gir");
// function ciftMi(num) {
//     return num%2==0 ? "cift" : "tek";
// }
// console.log(ciftMi(num));

//verilen 3 sayidan en buyuk sayiyi bulunuz
// const num1 = prompt("1. sayiyi giriniz");
// const num2 = prompt("2. sayiyi giriniz");
// const num3 = prompt("3. sayiyi giriniz");
// let enBuyukSayi = 0;

// function buyukSayiyiYaz(num1, name2, name3) {
//     if (num1>num2 && num1>num3) {
//             enBuyukSayi = num1;       
//         } if (num2>num1 && num2>num3) {
//             enBuyukSayi = num2;       
//         } else {       
//           enBuyukSayi = num3;
//     }
//     return enBuyukSayi;
// }
// console.log(buyukSayiyiYaz(num1, num2, num3));

//! 3. YONTEM: FUNCTION ARROW (ok)
// const num4 = prompt("sayi gir");
// const tekMi = num4 => (num4%2==0 ? "cift sayi" : "tek sayi");
// console.log(tekMi(num4));

const tab = prompt("bir sayi girin");
const us = prompt("bir sayi girin");

const usluSayiSonuc = (tab, us) =>tab**us;

console.log(usluSayiSonuc(tab, us));




