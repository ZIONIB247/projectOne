// selection
const form =document.getElementById("formWrapper")
const showSuccessMessage= document.querySelector(".success")
const showFailureMessage= document.querySelector(".failure")

// this is are default registered user

const username="ikenna"
const password="123456"
const usernameOne="Boma"
const passwordOne="Admin"
const userthree= "dave"
const passwordthree="dave234" 

// function to handle submit for the form

 const handleSubmit= (event) => {
    // this prevent normal behaviour of the form
    event.preventDefault() 

    const formDatails = new FormData(form)

    // logic to check and validate if the user details inputed is correct

     if(
        formDatails.get("username")===username &&
        formDatails.get("password")===password
     ){
        (showSuccessMessage.style.display= "block"),(showFailureMessage.style.display="none")
     }
     else if(
        formDatails.get("username")===usernameOne &&
        formDatails.get("password")===passwordOne
     ){
        (showSuccessMessage.style.display= "block"),(showFailureMessage.style.display="none")
     }
     else if(
        formDatails.get("username")===userthree &&
        formDatails.get("password")===passwordthree
     ){
        (showSuccessMessage.style.display= "block"),(showFailureMessage.style.display="none")
     }
    else{
        (showFailureMessage.style.display="block"),(showSuccessMessage.style.display="none")
    }
 }

 form.addEventListener('submit' ,handleSubmit)