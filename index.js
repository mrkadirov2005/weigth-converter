const inputs=document.getElementById('input')
console.log(inputs)
const grams=document.getElementById('outputGrams')
console.log(grams)
const pounds=document.getElementById('outputPounds')
const ounces=document.getElementById('outputOunces')
const outputWindow=document.getElementById('output-window')






outputWindow.style.display='none'
// console.log(pounds)


inputs.addEventListener('input', converter)


function converter(event){
    const inputValue=event.target.value; 
    if(inputValue){
        outputWindow.style.display="block"
    }

    if(!inputValue){
        outputWindow.style.display="none"
        return
    }
    
    
    console.log(inputValue)

    grams.innerText=inputValue*1000
    ounces.innerText=inputValue*32.274
    pounds.innerText=inputValue*2.205
}