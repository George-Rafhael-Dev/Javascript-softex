class Carro {
    public marca: String
    public cor: String
    public placa: String
    public modelo: String
    public ano: Number

    constructor(marca, cor, placa, modelo, ano){
        this.cor = cor
        this.marca = marca
        this.placa = placa
        this.modelo = modelo
        this.ano = ano

    }

    ligar(){
        console.log("vruumm")
    }
    desligar(){
        console.log("katchaw")
    }
}

const carro1 = new Carro('fit', 'rosa', 'pig123', 'porcao', 2025)
const carro2 = new Carro('bat', 'azul', 'ahh', 'sim', 2040)

carro1.ligar();
carro1.desligar();

console.log(carro2.ano)
