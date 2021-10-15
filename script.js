function seterror(id,error){
    element=document.getElementById(id)
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function formvalidation(){
   var returnvalue=true;
    var name=document.forms['myform']['fname'].value;
    if(name.length<5){
        seterror("name","length of name is too short");
        returnvalue=false;
    }
    if(name==number){
        seterror("name","name cannot be number");
        returnvalue=false;
    }
     var email=document.forms['myform']['femail'].value;
     if(email.length>25){
         seterror("email","email length is too big")
         returnvalue=false;
     }
     var number=document.forms['myform']['fnumber'].value;
     if(number.length !=10){
         seterror("number","please enter valid contact number");
         returnvalue=false;
     }
    
}
