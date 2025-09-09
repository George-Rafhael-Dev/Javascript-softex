import { Veiculo } from "./Veiculo";

    export class F1 extends Veiculo{
        public tamanho : number;
        
        constructor(tamanho, roda, placa){
            super (roda, placa)
            this.tamanho = tamanho
    }

    velocidade(){}
}