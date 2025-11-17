//Discentes: Sthephani Souza Fernandes, Rafael Souza Regis
//Disciplina: Arquitetura de Software

//Breve descrição do código: sistema de montagem de lanche no estilo fastfood 'Subway', simula um pedido feito online pelo usuário.
//Padrão de projeto: Builder

type Pao = 'Italiano Branco'|'Integral'|'Três Queijos'|'Parmesão e Orégano';
type Recheio = 'Carne Seca com Cream Cheese'|'Frango Empanado'|'Frango Defumado com Cream Cheese'|'Steak Churrasco'|'Vegetariano';
type Queijo = 'Cheddar'|'Suíço'|'Mussarela (ralada)';
type Salada = 'Alface'|'Tomate'|'Azeitona Preta'|'Picles'|'Pepinos'|'Pimentão'|'Cebola Roxa'|'Rúcula';
type Molho = 'Cebola Aguidoce'|'Chipotle'|'Barbecue'|'Parmesão'|'Maionese Temperada'|'Mostarda e Mel'|'Supreme';
type Adicional = 'Bacon'|'Pepperoni'|'Presunto'|'Salame'|'Cheddar Cremoso';

class Lanche {
    constructor(
        public pao: Pao,
        public recheio: Recheio,
        public queijo?: Queijo,
        public salada1?: Salada,
        public salada2?: Salada,
        public salada3?: Salada,
        public molho?: Molho,
        public adicional?: Adicional
    ) {}
}

class LancheBuilder {
    private lanche: Lanche;

    constructor() {
        this.lanche = new Lanche(
            'Parmesão e Orégano',
            'Steak Churrasco',
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

    setSalada1(salada1: Salada) {
        this.lanche.salada1 = salada1;
        return this;
    }

    setSalada2(salada2: Salada) {
        this.lanche.salada2 = salada2;
        return this;
    }

    setSalada3(salada3: Salada) {
        this.lanche.salada3 = salada3;
        return this;
    }

    setMolho(molho: Molho) {
        this.lanche.molho = molho;
        return this;
    }

    setAdicional(adicional: Adicional) {
        this.lanche.adicional = adicional;
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
    .setSalada1('Rúcula')
    .setSalada2('Pepinos')
    .setSalada3('Tomate')
    .setMolho('Mostarda e Mel')
    .setAdicional('Bacon')
    .build();
console.log(lanche1);

const lanche2 = new LancheBuilder()
    .setPao('Três Queijos')
    .setRecheio('Frango Empanado')
    .setQueijo('Mussarela (ralada)')
    .setSalada1('Alface')
    .setSalada2('Cebola Roxa')
    .setSalada3('Azeitona Preta')
    .setMolho('Chipotle')
    .build();
console.log(lanche2);

const lanche3 = new LancheBuilder()
    .setPao('Três Queijos')
    .setRecheio('Vegetariano')
    .setQueijo('Suíço')
    .setSalada1('Alface')
    .setSalada2('Tomate')
    .setSalada3('Pepinos')
    .setMolho('Cebola Aguidoce')
    .setAdicional('Cheddar Cremoso')
    .build();
console.log(lanche3);
