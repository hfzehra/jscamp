/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)*/

function isPrime(number) {
    let count =0;
    for (let index = 2; index < number; index++) {
        if (number%index == 0) {
            count ++;
        }    
    }
    if (count == 0) {
        return true
    }
    else{
        return false
    }
}

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) 
            console.log(numbers[i] + " Asal Sayıdır")
        
        else 
            console.log(numbers[i] + " Asal sayı değildir")
    }
}

findPrime(10,13,3,2)





