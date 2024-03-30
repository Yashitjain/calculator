var blocks = document.getElementsByClassName("block");
var exp=0;
var ans = 0;

// for(let i=0;i<blocks.length;i++){
//     console.log("button")
//     blocks[i].addEventListener("keydown",(e)=>{
//         var value = e.key;
//         console.log(e);
//         console.log(e.key);
//         if(value==blocks[i].innerHTML){
//             click_funcn(value);
//         }
//     })
// }


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
    }
    else if(value=="CE"){
        exp=0;
        ans=0;
        document.getElementById("screen").textContent=ans;
    }else if(exp==0 && value!="="){
        exp=value;
        document.getElementById("screen").textContent=exp;
    }else if(value=="()"){
        if(exp[exp.length-1]!='+' && exp[exp.length-1]!='-' && exp[exp.length-1]!='*' && exp[exp.length-1]!='%' && exp[exp.length-1]!='/'){
            exp=exp+")";
            document.getElementById("screen").textContent=exp;
        }else if((exp[exp.length-1]=='+' || exp[exp.length-1]=='-' || exp[exp.length-1]=='*' || exp[exp.length-1]=='%' || exp[exp.length-1]=='/') || exp=="0" || exp==""){
            exp=exp+"(";
            document.getElementById("screen").textContent=exp;
        }
        document.getElementById("screen").textContent=exp;
    }else if(value=="=" || value=="Enter"){
        ans=eval(exp);
        document.getElementById("screen").textContent=ans;
        ans=0;
        exp=0;
    }
    else {
        exp=exp+""+value;
        document.getElementById("screen").textContent=exp;
    }    

}