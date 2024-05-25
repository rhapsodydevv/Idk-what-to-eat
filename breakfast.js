function randomizeB(){
    let select = document.getElementById('breakfast')
    let options = select.children
    let randomOption = Math.floor(Math.random()*options.length)
    select.value = options[randomOption].value
    let selectedd = document.getElementById('selectedB')
    selectedd.innerText = select.value
    let imageUrl = ''
    switch(select.value){
        case 'Cornflakes':
            imageUrl = 'url(cornflakes.jpg)';
            break;
        case 'Eggs':
            imageUrl = 'url(eggs.jpg)'
            break;
        case 'Bacon':
            imageUrl = 'url(bacon.jpg)'
            break;
        case 'Bread':
            imageUrl = 'url(Bread.jpg)'
            break;
        case 'Pancake':
            imageUrl = 'url(pancake.jpg)'
            break;
        default:
            imageUrl = '';
        
    }
    selectedd.style.backgroundImage = imageUrl
    
}


function selectedOptionB(){
    let selectElement = document.getElementById('breakfast')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedB')
    selectedd.innerText = selectedValue
    let imageUrl = ''
    switch(selectedValue){
        case 'Cornflakes':
            imageUrl = 'url(cornflakes.jpg)';
            break;
        case 'Eggs':
            imageUrl = 'url(eggs.jpg)'
            break;
        case 'Bacon':
            imageUrl = 'url(bacon.jpg)'
            break;
        case 'Bread':
            imageUrl = 'url(Bread.jpg)'
            break;
        case 'Pancake':
            imageUrl = 'url(pancake.jpg)'
            break;
        default:
            imageUrl = '';
        
    }
    selectedd.style.backgroundImage = imageUrl
}

function randomizeS(){
    let select = document.getElementById('snacks')
    let options = select.children
    let randomOption = Math.floor(Math.random()*options.length)
    select.value = options[randomOption].value
    let selectedd = document.getElementById('selectedS')
    selectedd.innerText = select.value
    let imageUrl = '';
    switch(select.value){
        case 'Apple':
            imageUrl = 'url(apple.jpg)';
            break;
        case 'Avocado':
            imageUrl = 'url(avocado.jpg)';
            break;
        case 'Banana':
            imageUrl = 'url(banana.jpg)';
            break;
        case 'Cake':
            imageUrl = 'url(cake.jpg)';
            break;
        case 'Cookies':
            imageUrl = 'url(cookies.jpg)';
            break;
        case 'Crisps':
            imageUrl = 'url(crisps.jpg)';
            break;
        case 'Cupcake':
            imageUrl = 'url(cupcakes.jpg)';
            break;
        case 'Grapes':
            imageUrl = 'url(grapes.jpg)';
            break;
        case 'Mango':
            imageUrl = 'url(mango.jpg)';
            break;
        case 'Nuts':
            imageUrl = 'url(nuts.jpg)';
            break;
        case 'Orange':
            imageUrl = 'url(orange.jpg)';
            break;
        case 'Pineapple':
            imageUrl = 'url(pineapple.jpg)';
            break;
        case 'Watermelon':
            imageUrl = 'url(watermelon.jpg)';
            break;

        default:
            imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}


function selectedOption(){
    let selectElement = document.getElementById('snacks')
    let selectedValue = selectElement.value
    let selectedd = document.getElementById('selectedS')
    selectedd.innerText = selectedValue
    let imageUrl = '';
    switch(selectedValue){
        case 'Apple':
            imageUrl = 'url(apple.jpg)';
            break;
        case 'Avocado':
            imageUrl = 'url(avocado.jpg)';
            break;
        case 'Banana':
            imageUrl = 'url(banana.jpg)';
            break;
        case 'Cake':
            imageUrl = 'url(cake.jpg)';
            break;
        case 'Cookies':
            imageUrl = 'url(cookies.jpg)';
            break;
        case 'Crisps':
            imageUrl = 'url(crisps.jpg)';
            break;
        case 'Cupcake':
            imageUrl = 'url(cupcakes.jpg)';
            break;
        case 'Grapes':
            imageUrl = 'url(grapes.jpg)';
            break;
        case 'Mango':
            imageUrl = 'url(mango.jpg)';
            break;
        case 'Nuts':
            imageUrl = 'url(nuts.jpg)';
            break;
        case 'Orange':
            imageUrl = 'url(orange.jpg)';
            break;
        case 'Pineapple':
            imageUrl = 'url(pineapple.jpg)';
            break;
        case 'Watermelon':
            imageUrl = 'url(watermelon.jpg)';
            break;

        default:
            imageUrl = '';
    }
    selectedd.style.backgroundImage = imageUrl
}