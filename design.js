var ran = Math.ceil((Math.random()*100)+1 );
var count = 0;
var s="";
var ans=0;
document.getElementById("add").onclick=function(){
    var a =parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(s.length==0)
    {
        s=s+a;
    }
    else{
        s=s+"+"+a;
    }
    document.getElementById("answ").textContent=ans;

    
}
document.getElementById("sub").onclick=function(){
    var a =parseInt(document.getElementById("n1").value);
    ans=ans-a;
    if(s.length==0)
    {
        s=s+a;
    }
    else{
        s=s+"-"+a;
    }
    document.getElementById("answ").textContent=ans;

    
}
document.getElementById("mul").onclick=function(){
    var a =parseInt(document.getElementById("n1").value);
    ans=ans*a;
    if(s.length==0)
    {
        s=s+a;
    }
    else{
        s=s+"*"+a;
    }
    document.getElementById("answ").textContent=ans;

    
}
document.getElementById("div").onclick=function(){
    var a =parseInt(document.getElementById("n1").value);
    ans=ans/a;
    if(s.length==0)
    {
        s=s+a;
    }
    else{
        s=s+"/"+a;
    }
    document.getElementById("answ").textContent=ans;

    
}
function e(){
    document.getElementById("his").textContent = s;
}

function num(){
    var a = "You Won";
    var b = "Number is lesser than this";
    var c= "Number is greater than this";
    if(document.getElementById("n1").value == ran)
    {
    document.getElementById("info").textContent= a;
}
else if(document.getElementById("n1").value < ran){
    document.getElementById("info").textContent= c;
    count++;
    }
    else{
        document.getElementById("info").textContent= b;
        count++;
    }
    document.getElementById("cou").textContent=count;
 }
