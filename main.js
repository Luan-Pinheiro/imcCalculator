class Data {
    constructor(name, surname, weight, height) {
        this.name = name,
        this.surname = surname,
        this.weight = weight,
        this.height = height;
    }
}

let dataVector = [];
document.querySelector('#dataRes').style.display = 'none';

function formDataScope(){
    document.querySelector('#dataRes').style.display = 'block';
    const info = document.querySelector('#info');
    const name = info.querySelector('.nome').value;
    const surname = info.querySelector('.sobrenome').value;
    const weight = info.querySelector('.peso').value;
    const height = info.querySelector('.altura').value;

    let mainDataBase = new Data(name, surname, weight, height);

    return mainDataBase;
}

function seeData(){
    dataVector.push(formDataScope());

    const index = dataVector.length-1;

    let registered = document.querySelector('#resp');
    let item = document.createElement('option')
    let mHeiht = dataVector[index].height/100
    let imc = dataVector[index].weight/(mHeiht*mHeiht);
    let state = '';
    if(imc < 18.5)
        state = 'Magro';
    if(imc >= 18.5 && imc<=24.9)
        state = 'Ideal';
    if(imc >= 25 && imc<=29)
        state = 'Sobrepeso';
    if(imc >= 30 && imc<=39.9)
        state = 'Obeso';
    if(imc >= 40)
        state = 'Obeso mórbido';

    item.innerHTML += `ID:${dataVector.length}`;        
    item.text += `  ${dataVector[index].name} `;
    item.text += `  ${dataVector[index].surname} `;
    item.text += `  ${dataVector[index].weight}kg `;
    item.text += `  ${dataVector[index].height}cm `;
    item.text += `  ${imc.toFixed(1)} ${state}`;
    registered.appendChild(item);
} 

function isNumber(name, surname, weight, height) {
     let verif = false;


    if(isNaN(parseFloat(name)) && isNaN(parseFloat(surname)) && !isNaN(parseFloat(weight)) && !isNaN(parseFloat(height))){
        verif = true;
    }

    return verif;
}

const button = document.getElementsByTagName("button");

function changeColorb1(){
    button[0].style.background = "#d6cbcb";
    button[0].style.color = "black"
}  
function returnOriginalColorb1(){
    button[0].style.background = "#dd1616";
    button[0].style.color = "#d6cbcb";
} 
function changeColorb2(){
    button[1].style.background = "#d6cbcb";
    button[1].style.color = "black"
}  
function returnOriginalColorb2(){
    button[1].style.background = "#dd1616";
    button[1].style.color = "#d6cbcb";
} 
button[0].addEventListener('mouseover', changeColorb1, false);
button[0].addEventListener('mouseout', returnOriginalColorb1, false);
button[1].addEventListener('mouseover', changeColorb2, false);
button[1].addEventListener('mouseout', returnOriginalColorb2, false);

function verify(){
    
    const info = document.querySelector('#info');
    const objAux = {
        name: '',
        surname: '',
        weight: '',
        height: ''
    }

    objAux.name = info.querySelector('.nome').value;
    objAux.surname = info.querySelector('.sobrenome').value;
    objAux.weight = info.querySelector('.peso').value;
    objAux.height = info.querySelector('.altura').value;

    let aux = isNumber(objAux.name, objAux.surname,objAux.weight, objAux.height);
    (aux) ? seeData() : stop();
}

function clear(){
    location.reload();
    console.log('FOI');
}

function stop(){
    alert("Insira valores válidos e preencha os campos corretamente!");
    clear();
}