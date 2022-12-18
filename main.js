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
    //const insertInfoButton = document.querySelector('.botaoenviar');
    //const reloadButton = document.querySelector('.botao');

    //insertInfoButton.addEventListener('click', getFormSubmit, false);
    //reloadButton.addEventListener('click', clear, false);

    const name = info.querySelector('.nome').value;
    const surname = info.querySelector('.sobrenome').value;
    const weight = info.querySelector('.peso').value;
    const height = info.querySelector('.altura').value;

    let mainDataBase = new Data(name, surname, weight, height);

    return mainDataBase;
}

function seeData(){
    dataVector.push(formDataScope());
    console.log(dataVector);

    const index = dataVector.length-1;

    let registered = document.querySelector('#resp');
    let mHeiht = dataVector[index].height/100
    let imc = dataVector[index].weight/(mHeiht*mHeiht);
    let state = '';
    if(imc < 18.5)
        state = 'Magreza';
    if(imc >= 18.5 && imc<=24.9)
        state = 'Ideal';
    if(imc >= 25 && imc<=29)
        state = 'Sobrepeso';
    if(imc >= 30 && imc<=39.9)
        state = 'Obesidade';
    if(imc >= 40)
        state = 'Obesidade Mórbida';

    registered.innerHTML += "________________________<br>";
    registered.innerHTML += `ID do usuário:${dataVector.length}<br>`;
    registered.innerHTML += `Nome: ${dataVector[index].name}<br>`;
    registered.innerHTML += `Sobrenome: ${dataVector[index].surname}<br>`;
    registered.innerHTML += `Peso: ${dataVector[index].weight}kg <br>`;
    registered.innerHTML += `Altura: ${dataVector[index].height}cm\n<br>`;
    registered.innerHTML += `IMC: ${imc.toFixed(1)} correspondente à ${state}<br><br>`;
} 

function isNumber(name, surname, weight, height) {
     let verif = false;


    if(isNaN(parseFloat(name)) && isNaN(parseFloat(surname)) && !isNaN(parseFloat(weight)) && !isNaN(parseFloat(height))){
        verif = true;
    }

    return verif;
}
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
    location.reload(true);
}
function stop(){
    alert("Insira valores válidos e preencha os campos corretamente!");
    clear();
}