function randomizeC(){
    let lunchOptions = ['Rice', 'Ugali', 'Spaghetti', 'Pasta']
    let randomOption = lunchOptions[Math.floor(Math.random()*lunchOptions.length)]
    let selectedd = document.getElementById('selectedC')
    selectedd.innerText = randomOption
}
function selectedOptionC(){
    let selectElement = document.getElementById('carbohydrates')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedC')
    selectedd.innerText = selectedValue
}
function randomizeP(){
    let lunchOptions = ['Beef', 'Fish', 'Lentils', 'Greengrams', 'Goatmeat', 'Beans']
    let randomOption = lunchOptions[Math.floor(Math.random()*lunchOptions.length)]
    let selectedd = document.getElementById('selectedP')
    selectedd.innerText = randomOption
}
function selectedOptionP(){
    let selectElement = document.getElementById('protein')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedP')
    selectedd.innerText = selectedValue
}
function randomizeV(){
    let lunchOptions = ['Spinach', 'Kales', 'Cabbage', 'Terere']
    let randomOption = lunchOptions[Math.floor(Math.random()*lunchOptions.length)]
    let selectedd = document.getElementById('selectedV')
    selectedd.innerText = randomOption
}
function selectedOptionV(){
    let selectElement = document.getElementById('vitamins')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedV')
    selectedd.innerText = selectedValue
}

