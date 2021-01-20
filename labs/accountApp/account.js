let btn1= document.getElementById("createAccount");
let acctName= document.getElementById("accountName");
let acctdeposit=document.getElementById("deposit");
let displaytext=document.getElementById("textBox"); 

btn1.onclick=creatAccount;

let accounts=[];



function creatAccount(){

console.log(displaytext.value);

let account={
    accountName:"",
    deposit:""
    
};

let name=account.accountName=acctName.value;
let deposit=account.deposit=acctdeposit.value;
if(name&&deposit){
accounts.push(account);
print();
}// end of if

else{
    alert("please insert accountName and deposit!");
}

function print(){
    let str="";
    for(const acct of accounts){
       str= "Account Name:"+ acct.accountName+":"+" "+ acct.deposit+"\n"+str;  
    }

    console.log(str);
    
    displaytext.value=str;
}



   
}











