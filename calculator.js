var input=document.querySelector("#btn0");

function bat(x){
    if(input.value==0)
    input.value=x;
    else
    input.value+=x;
}

function ans(){
    input.value=eval(input.value);
}

function clean(){
        
    document.form.textview.value ="";    
 }


