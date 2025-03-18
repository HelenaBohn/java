console.log("hello world")

function print(msg) {
    console.log(msg)
}

// questao 1
let n = 5;
function VerificarPar(num){
    if (num % 2 == 0) {
        print("Par");
    } else {
        print("impar");
    }
}
VerificarPar(n)

//questao 2
let nmr1 = 27
let nmr2 = 33
function calcular(n1, n2) {
    print(n1 + n2)
    print(n1 - n2)
    print(n1 * n2)
    print(n1 / n2)
}
calcular(nmr1, nmr2)

//questao 3
for (count = 10; count > 0; count--) {
    print(count)
}

//questao 4
let texto = "JavaScript"
function inverterTexto(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    print(joinArray)
}
inverterTexto(texto)

//questao 5
let string = "salve"
function CountCaracter(str) {
    print(str.length)
}
CountCaracter(string)

//questao 6
let carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: "1996"
}
print(carro.modelo)

//questao 7
let nome = "Helena"
let msg = ", essas são as músicas em alta!"
function mensagemPersonalizada(name, message) {
    print("Olá " + name + message);
}
mensagemPersonalizada(nome, msg)

//questao 8
let n1 = 9
let n2 = 7
let n3 = 10
function media(nm1, nm2, nm3) {
    print((nm1 + nm2 + nm3)/3)
}
media(n1, n2, n3)

//questao 9
for (let i = 1; i < 21; i++) {
    if (i % 3 == 0) {
        print(i + " é multiplo de 3")
    } else {
        print(i + " não é multiplo de 3")
    }
}

//questao 10
// não consegui fazer