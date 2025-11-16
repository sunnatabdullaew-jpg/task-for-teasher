const NameInput = document.querySelector('#name')
const DateInput = document.querySelector('#date')
const EmailInput = document.querySelector('#email')
const AgeInput = document.querySelector('#age')
const MaleButton = document.querySelector('#male')
const FemaleButton = document.querySelector('#female')
const OtherButton = document.querySelector('#other')
const ResultNameInput = document.querySelector('#profile-name')
const ResultDateInput = document.querySelector('#profile-date')
const ResultEmailInput = document.querySelector('#profile-email')
const ResultAgeInput = document.querySelector('#profile-age')
const ResultGenderInput = document.querySelector('#profile-gender')
const ResultClearButton = document.querySelector('#clear')
const ResultProfileClearButton = document.querySelector('#profile-clear')
const ClearButton = document.querySelector('#clear')
const SaveButton = document.querySelector('#save')


SaveButton.addEventListener('click' , (e) =>{
    e.preventDefault();
    ResultNameInput.textContent = NameInput.value.toUpperCase() 
    ResultDateInput.textContent = DateInput.value.trim() 
    ResultEmailInput.textContent = EmailInput.value.trim() 
    let Age = 2025 - AgeInput.value.trim()
    if(Age >= 0){
        ResultAgeInput.textContent = Age
    }else if(2025 >= Age){
        alert("Xato yosh kiritingiz")
    }
})

MaleButton.addEventListener('click' , (e) =>{
    e.preventDefault();
    ResultGenderInput.textContent = "Male"
})

FemaleButton.addEventListener('click' , (e) =>{
    e.preventDefault();
    ResultGenderInput.textContent = "Female"
})

OtherButton.addEventListener('click' , (e) =>{
    e.preventDefault();
    ResultGenderInput.textContent = "Other"
})

ClearButton.addEventListener('click' , (e) =>{
    NameInput.value = ""
    DateInput.value = ""
    EmailInput.value = ""
    AgeInput.value = ""
})
ResultClearButton.addEventListener('click' , (e) =>{
    ResultNameInput.textContent = ""
    ResultDateInput.textContent = ""
    ResultEmailInput.textContent = ""
    ResultAgeInput.textContent = ""
    ResultGenderInput.textContent = ""
})