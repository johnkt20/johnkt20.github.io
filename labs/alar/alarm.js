let but=document.getElementById("go");
let tim= document.getElementById("sec");
let min=document.getElementById("min");

but.onclick=backcolor;


console.log(4);


function backcolor(){
    let count1= min.value;
    let count=tim.value;
   
  
    dosec();
  
  function dosec(){
    if(!tim.value) {count=0;};
    console.log(count);
   let timerId= setInterval( ()=>
   {if(count<0&& count1==0)
    { clearInterval(timerId);document.body.style.background="red";}
   else if(count==0&&count1>0){
    tim.value=count; 
       count=59;
       count1=count1-1;
       min.value=count1;
   }
else{
     tim.value=count; count=count-1;
    }
},1000);


  }
}
