let isLoggedIn=true;
let role="admin";

if (!isLoggedIn){
    console.log("please login");
}else if(role=="admin"){
    console.log("welcome admin");
}else{
    console.log("welcome user");
}