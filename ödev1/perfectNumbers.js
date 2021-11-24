//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

console.log("1000'e kadar olan mükemmel sayılar :")
for (let i = 1; i < 1000; i++) {
    
    let number = 0 ;
    for (let j = 1; j < i; j++) {
        if (i%j == 0) {
            number = number + j ;
        }
    }
    
    if (number == i) {
        console.log(i)
    }
}