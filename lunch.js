function randomizeC(){
    let select = document.getElementById('carbohydrates')
    let options = select.children
    let randomOption = Math.floor(Math.random()*options.length)
    select.value = options[randomOption].value
    let selectedd = document.getElementById('selectedC')
    selectedd.innerText = select.value
    let imageUrl = '';
    switch(select.value){
        case 'Rice':
            imageUrl = 'url(rice.jpg)';
            break;
        case 'Ugali':
            imageUrl = 'url(ugali.jpg)';
            break;
        case 'Spaghetti':
            imageUrl = 'url(spaghetti.jpg)';
            break;
        case 'Pasta':
            imageUrl = 'url(pasta.jpg)';
            break;
        case 'Potatoes':
            imageUrl = 'url(potatoes.jpg)';
            break;
        case 'Chapatti':
            imageUrl = 'url(chapati.jpg)';
            break;

        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}
function selectedOptionC(){
    let selectElement = document.getElementById('carbohydrates')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedC')
    selectedd.innerText = selectedValue
    let imageUrl = '';
    switch(selectedValue){
        case 'Rice':
            imageUrl = 'url(rice.jpg)';
            break;
        case 'Ugali':
            imageUrl = 'url(ugali.jpg)';
            break;
        case 'Spaghetti':
            imageUrl = 'url(spaghetti.jpg)';
            break;
        case 'Pasta':
            imageUrl = 'url(pasta.jpg)';
            break;
        case 'Potatoes':
            imageUrl = 'url(potatoes.jpg)';
            break;
        case 'Chapatti':
            imageUrl = 'url(chapati.jpg)';
            break;

        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}


function randomizeP(){
    let select = document.getElementById('protein')
    let options = select.children
    let randomOption = Math.floor(Math.random()*options.length)
    select.value = options[randomOption].value
    let selectedd = document.getElementById('selectedP')
    selectedd.innerText = select.value
    let imageUrl = '';
    switch(select.value){
        case 'Beef':
            imageUrl = 'url(beef.jpg)';
            break;
        case 'Fish':
            imageUrl = 'url(fish.jpg)';
            break;
        case 'Beans':
            imageUrl = 'url(beans.jpg)';
            break;
        case 'Goat':
            imageUrl = 'url(beef.jpg)';
            break;
        case 'Lentils':
            imageUrl = 'url(lentils.jpg)';
            break;
        case 'Greengrams':
            imageUrl = 'url(lentils.jpg)';
            break;
        case 'Chicken':
            imageUrl = 'url(chicken.jpg)';
            break;
            

        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}
function selectedOptionP(){
    let selectElement = document.getElementById('protein')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedP')
    selectedd.innerText = selectedValue
    let imageUrl = '';
    switch(selectedValue){
        case 'Beef':
            imageUrl = 'url(beef.jpg)';
            break;
        case 'Fish':
            imageUrl = 'url(fish.jpg)';
            break;
        case 'Beans':
            imageUrl = 'url(beans.jpg)';
            break;
        case 'Goat':
            imageUrl = 'url(beef.jpg)';
            break;
        case 'Lentils':
            imageUrl = 'url(lentils.jpg)';
            break;
        case 'Greengrams':
            imageUrl = 'url(lentils.jpg)';
            break;
        case 'Chicken':
            imageUrl = 'url(chicken.jpg)';
            break;
            

        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}


function randomizeV(){
    let select = document.getElementById('vitamins')
    let options = select.children
    let randomOption = Math.floor(Math.random()*options.length)
    select.value = options[randomOption].value
    let selectedd = document.getElementById('selectedV')
    selectedd.innerText = select.value
    let imageUrl = '';
    switch(select.value){
        case 'Cabbage':
            imageUrl = 'url(cabbage.jpg)';
            break;
        case 'Veggies':
            imageUrl = 'url(veggies.jpg)';
            break;
        case 'Spinach':
            imageUrl = 'url(greens.jpg)';
            break;
        case 'Kales':
            imageUrl = 'url(greens.jpg)';
            break;
        case 'Terere':
            imageUrl = 'url(greens.jpg)';
            break;         
        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}
function selectedOptionV(){
    let selectElement = document.getElementById('vitamins')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedV')
    selectedd.innerText = selectedValue
    let imageUrl = '';
    switch(selectedValue){
        case 'Cabbage':
            imageUrl = 'url(cabbage.jpg)';
            break;
        case 'Veggies':
            imageUrl = 'url(veggies.jpg)';
            break;
        case 'Spinach':
            imageUrl = 'url(greens.jpg)';
            break;
        case 'Kales':
            imageUrl = 'url(greens.jpg)';
            break;
        case 'Terere':
            imageUrl = 'url(greens.jpg)';
            break;         
        default:
                imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}

