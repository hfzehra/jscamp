//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function friend(number) {

    let total = 0 ;
    for (let i = 1; i < number; i++) {
        
        if (number%i == 0) {
            total = total + i
        }
    }
    return total
}

function findFriend (number1 , number2){
    if (friend(number1) == number2 && friend(number2) ==number1) {
        console.log(number1 + ":" + number2 + " arkadaş sayıdır")
    }
    else
    console.log(number1 + ":" + number2 + " arkadaş sayı değildir.")
}

findFriend(10,15)
findFriend(220,284)