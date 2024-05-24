function randomizeB(){
    let breakfastOptions = ['Cornflakes', 'Eggs', 'Bacon', 'Bread']
    let randomOption = breakfastOptions[Math.floor(Math.random()*breakfastOptions.length)]
    let selectedd = document.getElementById('selectedB')
    selectedd.innerText = randomOption
}
function selectedOptionB(){
    let selectElement = document.getElementById('breakfast')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedB')
    selectedd.innerText = selectedValue
}
