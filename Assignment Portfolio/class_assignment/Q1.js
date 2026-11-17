let price=60;

if(price>=100){
    dprice=price-(0.20*price);
}else if(price>=50 && price<=99.99){
    dprice=price-(0.10*price);
}else{
    dprice=price;
}
console.log(dprice);