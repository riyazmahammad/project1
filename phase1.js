var userData=[];

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone= document.getElementById("phone")
const Subject= document.getElementById("Subject")
const textarea= document.getElementById("textarea")	
const selectElement = document.querySelector('select');


form.addEventListener("submit", function(event){

    event.preventDefault();
    validate();
	
});

function validate()
{
    let nameValue = username.value.trim()
	let emailValue = email.value.trim()
   let phoneValue = phone.value.trim()
   let SubjectValue = Subject.value.trim()
   let textareaValue = textarea.value.trim()
   let selectedOption = selectElement.options[selectElement.selectedIndex];
    //User name check

    if(nameValue==='' ){
        setError(username,'User name cannot be empty.')
    }
    else if(nameValue.length<3){
        setError(username,'User name should be minimum 3 characters.')
    }
    else if(nameValue.search(/^[A-Za-z]+$/){

    setError(username,'Please enter a valid name.')
     }
    else{        
        setSuccesss(username,'User successful.')
    }
    //email check :
    if(emailValue===''){
        setError(email,'E-mail cannot be empty.')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter valid E-mail Id')
    }
    else{        
        setSuccesss(email)
    }

     //phone number check :

     if(phoneValue==""){
         
        setError(phone,'Please enter phone number.')        
    }
    else if(phoneValue.length<10){
        setError(phone,'Please enter 10 digit phone number.') 
    }
    else if(phoneValue.length>10){
        setError(phone,'Please enter valid number.') 
    }
	else {
	setSuccesss(phone)
   
	}
    
    //Subject check :
    if(SubjectValue==""){
         
        setError(Subject,'Please enter subject.')        
    }
    else if(SubjectValue.length<3){
        setError(Subject,'Please enter min 3 characters.') 
    }
    else if (SubjectValue.search(/[a-z,0-9,A-Z,@]/)){
        setError(Subject,'Please enter alphanumaric.')
    
    }
   else{
        setSuccesss(Subject) 
    }
  //comment check:
  if(textareaValue==""){
         
    setError(textarea,'Please enter comment.')        
}
else if(textareaValue.length<3){
    setError(textarea,'Please enter min 3 characters.') 
}else{
    setSuccesss(textarea) 
}
   
    function setError(input,message){
        let parent = input.parentElement;
        let p = parent.querySelector('p')
        p.innerText = message
       p.style.visibility='visible';
    }
    function setSuccesss(input,message){
        let parent = input.parentElement;
		let p = parent.querySelector('p')
		p.style.visibility='hidden';
    }
    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }

    
	if( nameValue != "" && nameValue.length>=3 && emailValue !="" && phoneValue !="" && phoneValue.length==10 && SubjectValue!="" && SubjectValue.length>3 && textareaValue!="" && textareaValue.length>3)
	{
		window.alert("*Registration Successful*");
	let user={
username:nameValue,
email:emailValue,
phonenumber:phoneValue,
selectedOption:selectedOption.value,
Subject:SubjectValue,
Comment:textareaValue,
};
userData.push(user);		
	
console.log(userData);
	
};

} 



