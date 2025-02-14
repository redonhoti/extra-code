document.getElementById("password").addEventListener("input",function (){
    const password=this.value;

    const upperCasePattern=/[A-Z]/;
    const lowerCasePattern=/[a-z]/;
    const numberPattern=/[0-9]/;
    const specialCharPattern=/[!@#$%^&*(),.?":{}|<>]/;

    updateValidation(
        "upperCase",
        upperCasePattern.test(password)
    );
    updateValidation(
        "lowerCase",
        lowerCasePattern.test(password)
    );
    updateValidation(
        "number",
        numberPattern.test(password)
    );
    updateValidation(
        "specialChar",
        specialCharPattern.test(password)
    );
});
function updateValidation(elementId,isValid){
    const element=document.getElementById(elementId);
        const icon=element.querySelector("i");

        if(isValid){
            element.classList.remove("invalid");
            element.classList.add("valid");
            icon.classList.remove("bi-shield-x");
            icon.classList.add("bi-shield-x");

        }
        else{
            element.classList.remove("invalid");
            element.classList.add("valid");
            icon.classList.remove("bi-shield-x");
            icon.classList.add("bi-shield-x");
        }
}