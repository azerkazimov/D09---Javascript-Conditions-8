// 1. Aşağıda verilən kod nümunələrinin nəticələri və səbəbləri detallı şəkildə izah edin

a=10;
if(a){
    console.log("a is true");
    a+=20;
}else{
    console.log("a is false");
}
console.log(a)

/*
elan olunmuş "a" dəyişənə "10" dəyəri təyin etdiyimiz üçün "a" boolean true olur və onun üçün 
"if-else condition" birinci vəziyyəti alir consola => // a is true / a=10+20=30 qaytaracaq
*/

// =========================================================================================================

a=10;
if(!a){
    console.log("a is true");
    a+=20;
}else{
    console.log("a is false");
}
console.log(a);

/*
Bu misaldaki condition birinci vəziyyəti "!a" dəyəri (boolean false) aldiğı halda onun ilə əməliyyat aparıb onun 
üstünə 20 gələcək, amma "!a"-nin dəyəri false oluğu üçün error verecek. 
Console ==> a is false / 10; 
*/

// =========================================================================================================
// 2. Aşağıda adları qeyd olunan funksiyaların kodlarını tamamlayın

function getBiggestNumber(a,b){
    if (a > b) {
		console.log(a);
	} else {
		console.log(b);
	}
}
getBiggestNumber(10, 5);

// OR

let getBiggestNumber = (a, b) => (a > b ? a : b);
console.log(getBiggestNumber(10, 5));

// =========================================================================================================

function printNumbersFrom1To100(a,b) {
  for (let i = a; i <= b; i++) {
    console.log(i)
  }  
}
printNumbersFrom1To100(1, 100);
