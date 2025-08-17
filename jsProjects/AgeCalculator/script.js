const  DOB = document.getElementById('DOB')
const display = document.getElementById('output')
const results =document.getElementById("results")





results.addEventListener('click',()=>{
    let newDOB = new Date(DOB.value)
    let currentDate = new Date().getFullYear()
    let age  = currentDate-newDOB.getFullYear()
     display.innerText = age
})
