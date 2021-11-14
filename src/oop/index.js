 class Customer {
     constructor(id,cunstumerNumber){

        this.id=id
        this.cunstumerNumber=cunstumerNumber;
     }
 }

 //aşağıdaki ifade this'e karşılık gelir.Bu şekilde log kısmında okuyabiliriz
 let customer =new Customer(1,"12345");

 //prototyping
 custumer.name ="Zehra"
 console.log(customer.id)

 class IndividualCustomer extends Customer{
     //normal customer nesnesinden çekiyor
     constructor(firstName,id,cunstumerNumber){
         super(id,cunstumerNumber)
         this.firstName =firstName
     }
 }