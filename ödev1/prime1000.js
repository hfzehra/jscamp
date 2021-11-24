//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

let count = 0;

console.log("1-1000 arası asal sayılar : ")
for (let i = 2; i <= 1000; i++) {

    let control = 0
    for (let j = 2; j < i; j++) {
        if (i%j == 0) {
            control++ ;
        }
    }
    if (control == 0) {
        console.log(i)
    }
}

