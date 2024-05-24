function randomizeS(){
    let lunchOptions = ['Cookies', 'Biscuits', 'Peanuts', 'Crisps']
    let randomOption = lunchOptions[Math.floor(Math.random()*lunchOptions.length)]
    let selectedd = document.getElementById('selectedS')
    selectedd.innerText = randomOption
}

function selectedOption(){
    let selectElement = document.getElementById('snacks')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedS')
    selectedd.innerText = selectedValue
}

