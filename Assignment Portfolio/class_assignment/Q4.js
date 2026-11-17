let isLoggedIn=true;
let role="admin";

if (!isLoggedIn){
    console.log("please kogin");
}else if(role=="admin"){
    console.log("welvcome admin");
}else{
    console.log("welcome user");
}