//Discentes: Sthephani Souza Fernandes, Rafael Souza Regis
//Disciplina: Arquitetura de Software

//Breve descrição do código: sistema de montagem de lanche na rede de fastfood Subway, simula um pedido feito online pelo usuário.
//Padrão de projeto: Builder

type Pao = 'Italiano Branco'|'Integral'|'Três Queijos'|'Parmesão e Orégano';
type Recheio = 'Carne Seca com Cream Cheese'|'Frango Empanado'|'Frango Defumado com Cream Cheese'|'Steak Churrasco'|'Vegetariano';
type Queijo = 'Cheddar'|'Suíço'|'Mussarela (ralada)';
type Salada = 'Alface'|'Tomate'|'Azeitona Preta'|'Picles'|'Pepinos'|'Pimentão'|'Cebola Roxa'|'Rúcula';
type Molho = 'Cebola Aguidoce'|'Chipotle'|'Barbecue'|'Parmesão'|'Maionese Temperada'|'Mostarda e Mel'|'Supreme';

class Lanche {
    constructor(
        public pao: Pao,
        public recheio: Recheio,
        public queijo: Queijo,
        public salada: Salada[],
        public molho: Molho
    ) {}
}

class LancheBuilder {
    private lanche: Lanche;

    constructor() {
        this.lanche = new Lanche(
            'Parmesão e Orégano',
            'Steak Churrasco',
            'Cheddar',
            ['Alface','Tomate','Cebola Roxa'],
            'Barbecue'
        );
    }

    setPao(pao: Pao) {
        this.lanche.pao = pao;
        return this;
    }

    setRecheio(recheio: Recheio) {
        this.lanche.recheio = recheio;
        return this;
    }

    setQueijo(queijo: Queijo) {
        this.lanche.queijo = queijo;
        return this;
    }

    addSalada(salada: Salada) {
        this.lanche.salada.push(salada);
        return this;
    }

    setMolho(molho: Molho) {
        this.lanche.molho = molho;
        return this;
    }

    build() {
        return this.lanche
    }
}

const lanche1 = new LancheBuilder()
    .setPao('Integral')
    .setRecheio('Frango Defumado com Cream Cheese')
    .setQueijo('Suíço')
    .addSalada('Rúcula')
    .addSalada('Pepinos')
    .addSalada('Tomate')
    .setMolho('Mostarda e Mel')
    .build();
console.log(lanche1);

const lanche2 = new LancheBuilder()
    .setPao('Três Queijos')
    .setRecheio('Frango Empanado')
    .setQueijo('Mussarela (ralada)')
    .addSalada('Alface')
    .addSalada('Cebola Roxa')
    .addSalada('Azeitona Preta')
    .setMolho('Chipotle')
    .build();
console.log(lanche2);

const lanche3 = new LancheBuilder()
    .setPao('Três Queijos')
    .setRecheio('Vegetariano')
    .setQueijo('Suíço')
    .addSalada('Alface')
    .addSalada('Tomate')
    .addSalada('Pepinos')
    .setMolho('Cebola Aguidoce')
    .build();
console.log(lanche3);