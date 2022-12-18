class Data {
    constructor(nome, sobrenome, peso, altura) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.peso = peso,
        this.altura = altura;
    }
}

let dataVector = [];

document.querySelector('#dataRes').style.display = 'none';

function escopoDeDadosFormulario(){
    console.log("FOI escopoDeDadosFormulario()");
    const formulario = document.querySelector('.form');

    formulario.addEventListener('submit', getFormSubmit);

    function getFormSubmit(evt){
        evt.preventDefault();

        console.log("FOI getFormSubmit(evt)");

        const nome = formulario.querySelector('.nome').value;
        const sobrenome = formulario.querySelector('.sobrenome').value;
        const peso = formulario.querySelector('.peso').value;
        const altura = formulario.querySelector('.altura').value;

        let mainDataBase = new Data(nome, sobrenome, peso, altura);

        function seeData(){
            let i = 0;
            console.log("FOI seeData()");
            dataVector.push(mainDataBase);
            console.log(dataVector);
            document.querySelector('#dataRes').style.display = 'block';
            let registered = document.querySelector('#resp');
            while(i< dataVector.length){
                registered.innerHTML += `ID do usuário:000${i+1}<br>`;
                registered.innerHTML += `Nome: ${dataVector[i].nome}<br>`;
                registered.innerHTML += `Sobrenome: ${dataVector[i].sobrenome}<br>`;
                registered.innerHTML += `Peso: ${dataVector[i].peso}kg <br>`;
                registered.innerHTML += `Altura: ${dataVector[i].altura}cm\n<br>`;
                registered.innerHTML += `IMC: Calculando...<br>`;
                i++;    
            }
            return dataVector;
        }
        seeData();
    }

}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function verify(){
    const formulario = document.querySelector('.form');

    const objAux = {
        nome: '',
        sobrenome: '',
        peso: '',
        altura: ''
        
    }

    objAux.nome = formulario.querySelector('.nome').value;
    objAux.sobrenome = formulario.querySelector('.sobrenome').value;
    objAux.peso = formulario.querySelector('.peso').value;
    objAux.altura = formulario.querySelector('.altura').value;

    (isNumber(objAux.peso) && isNumber(objAux.altura)) ? escopoDeDadosFormulario() : parar();

}

function limpar(){
    location.reload();
}

function parar(){
    alert("Insira valores válidos");
    location.reload();
}