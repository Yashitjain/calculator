var blocks = document.getElementsByClassName("block");
var exp=0;
var ans = 0;
var open = 0;
var close = 0;


document.addEventListener("keydown",(e)=>{
    console.log(e);
    console.log("type=>"+typeof(e.key));
    if(eval(e.key=="+" || e.key=="-" || e.key=="*" || e.key=="/" || e.key=="%" || e.key=="Enter" || e.key%1==0 )){
        click_funcn(e.key);
    }
    
})

for(let i=0;i<blocks.length;i++){
    blocks[i].addEventListener("click",function (){
        var value= blocks[i].innerHTML;
        console.log(value);
        click_funcn(value);
    });
}



function click_funcn(value){
    // var value = value;
    if(exp==0 && (value=="+" || value=="-" || value=="*" || value=="/" || value=="%" )){
        exp=0;
        ans=0;
        document.getElementById("screen").textContent=exp;
    }else if(value=="C"){
        exp=exp.substring(0,exp.length-1);
        if(exp.length==0){
            document.getElementById("screen").innerHTML=0;
        }else{
            document.getElementById("screen").innerHTML=exp;
        }
    }
    else if(value=="CE"){
        exp=0;
        ans=0;
        open=0;
        close=0;
        document.getElementById("screen").textContent=ans;
    }else if(value=="()"){
        if(((exp[exp.length-1]=='+' || exp[exp.length-1]=='-' || exp[exp.length-1]=='*' || exp[exp.length-1]=='%' || exp[exp.length-1]=='/') || exp=="0" || exp=="")||exp[exp.length-1]=="("){
            if(exp==0){
                document.getElementById("screen").textContent=exp;

            }else{
                open+=1;
                exp=exp+"(";
                document.getElementById("screen").textContent=exp;
            }
            
        }
        if(eval(open>=close && ( exp[exp.length-1]==")" || (exp[exp.length-1])>=0 && eval(exp[exp.length-1])<=9) )){
            close+=1;
            exp=exp+")";
            document.getElementById("screen").textContent=exp;
        }
        document.getElementById("screen").textContent=exp;
    }else if(exp==0 && value!="="){
        exp=value;
        document.getElementById("screen").textContent=exp;
    }else if(value=="=" || value=="Enter"){
        ans=eval(exp);
        document.getElementById("screen").textContent=ans;
        ans=0;
        exp=0;
    }else if(((value=='+' || value=='-' || value=='*' || value=='%' || value=='/')) && ((eval((exp[exp.length-1])>=0 && eval(exp[exp.length-1])<=9)) || exp[exp.length-1]==")")){
        exp=exp+""+value;
        document.getElementById("screen").textContent=exp;
    }else if((value>=0 && value<=9) && ((exp[exp.length-1]>=0 && exp[exp.length-1]<=9) || eval((exp[exp.length-1])=='+' || exp[exp.length-1]=='-' || exp[exp.length-1]=='*' || exp[exp.length-1]=='%' || exp[exp.length-1]=='/' || exp[exp.length-1]=="("))){
        exp=exp+""+value;
        document.getElementById("screen").textContent=exp;
    }
    else {
        // exp=exp+""+value;
        document.getElementById("screen").textContent=exp;
    }    

}