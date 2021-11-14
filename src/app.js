// console.log("Merhaba Kodlama.io")

// //JS type safe değildir.
// let dolarBugun = 9.30

// let dolarDun = 9.20
// dolarDun = "9.20"
// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun)

// const euroDun = 11.2
// //euroDun = 11

// console.log(euroDun)

// //array
// //camelCasing
// //PascalCasing
// let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

// console.log("<ul>")
// for(let i = 0;i<konutKredileri.length;i++){
//     console.log("<li>"+konutKredileri[i]+"</li>")
// }
// //selam
// console.log("</ul>")

// {/* <ul>
//     <li>Konut kredisi</li>
//     <li>Emlak Konut Kredisi</li>
//     <li>Kamu Konut Kredisi</li>
// </ul> */}

// console.log(konutKredileri)

let student={id:1,name:"Zehra"}

function save(ogrenci,puan=100) {
     console.log(ogrenci.name + " : " + puan )
    
}
save(student,50);

//rest (params,varArgs) geriye kalan anlamına gelir. array haline getiririz
let showProducts = function (id,...products) {
     console.log(id)
     console.log(products[0]) //bir arraydir. Array içinde array olayıdır. Buna rest parametre denir. Üç nokta kullannıldığı için
}

// showProducts(10,["elma","armut"]) //rest çıktısı

//console.log(Math.max(1,5,2,9,13,56,89,12)) //rest türündedir

//spread (ayrıştırmak demektir). Elimizdeki arrayi ayrıştırırız
let points =[1,2,56,12,89,45,3]
console.log(...points) //spread işlemi yaptı
console.log(Math.max(...points))  //yukardaki işlemin spread şeklinde yapılmasıdır
console.log(..."ABC","D")

//Destructuring -> Elimizdeki arrayin değerini değişikenlere atama yöntemidir
//kelime anlamı parçalamaktır

let populations = [1000,2000,3000] //bunları değişkene atamak istiyoruz

let [small,medium,high] =populations //yukardaki değerleri sırasıyla atar

function SomeFunc([small1],number) {
     console.log(small1)
}

console.log(populations)

//let {ıd,name} = category //objeyi destructure eder


