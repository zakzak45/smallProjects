 let bill = document.getElementById('number1')
 let tipPercent = document.getElementById('number2')
 let output = document.getElementById('results')
 let calc = document.getElementById('calculate')

 




calc.addEventListener('click',()=>{
    let tip = bill.value*(1+tipPercent.value/100)
    let total = (bill+tip)
      output.innerText =total
    
})