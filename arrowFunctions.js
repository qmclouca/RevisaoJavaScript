//Função sem parâmetros
const sayHello = () => {
    console.log("Olá, mundo!");
};

const square = x => x * x;


//Função com 1 parâmetro

const squareP = x => x * x;

//Função com 2 ou mais parâmetros

const add = (a, b) => a + b;

//Função com corpo de múltiplas linhas:
const addM = (a, b) => {
    const sum = a + b;
    return sum;
};

//Função tradicional com this:
function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
        console.log("Timer: " + this.seconds);
    }, 1000);
}

const timer = new Timer();  // Imprimirá NaN pois o `this` dentro do setInterval não se refere ao objeto Timer.

//Função com this usando arrow function:
function TimerT() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log("TimerT: " + this.seconds);
    }, 1000);
}

const timer2 = new TimerT();  // Imprimirá 1, 2, 3,... como esperado.
