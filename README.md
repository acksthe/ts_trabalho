Sistema de montagem de lanche estilo rede de fastfood Subway, simulando um pedido 
feito online pelo usuário.

Nosso projeto é uma implementação do padrão Builder no cenário de montagem de um 
sanduíche no estilo da franquia Subway. A ideia principal foi criar, de forma organizada, 
um objeto que possui várias etapas e muitas opções. No código, cada etapa é 
configurada separadamente: pão, recheio, queijo, saladas, molhos e adicionais. Assim, 
depois de configurado, o Builder consegue gerar um lanche completo ao final da 
utilização. O método build() pega tudo o que foi escolhido durante o processo e 
devolve o lanche montado com as escolhas do usuário.

Em uma arquitetura real, isso poderia ser implementado na camada de serviços, 
principalmente em sistemas que envolvem pedidos personalizados, como seria o caso de
aplicativos de delivery (iFood, Delivery Much e outros). Alguns exemplos de utilização seriam:

Um sistema da própria Subway para registrar os lanches feitos. Em uma visão mais ampla, 
esses dados poderiam servir para análise de consumo, como descobrir quais adicionais 
são mais pedidos dependendo do recheio.

App de delivery oferecendo personalização completa do lanche no momento do pedido.

Em um restaurante comum, poderia funcionar como um gerador de pedidos que depois 
seria enviado para a cozinha.

Os principais benefícios do Builder são facilitar a criação de objetos complexos de forma 
mais intuitiva e organizada, permitindo que o processo inteiro seja construído passo a passo, 
sem precisar de um construtor enorme e cheio de parâmetros.

//Passos de instalaçõa e execução:  
npm init -y
npm install typescript ts-node --save-dev
npx tsc --init

Para executar: npx ts-node Trabalho1.ts

Em seguida utilizamos os slides usados de exemplos em aula para implementar o código, ja haviam sido apresentados
exemplos de implemntação com Builder anteriormente. As principais dificuldades que enfrentamos foram implementar o código para
o tema que tínhamos em mente e que funcionasse corretamente.

Em certo momento da implementação tentamos utilizar o "public salada: Salada" como um array de saladas, implementando com 'addSalada' 
no 'lancheBuilder', onde o usuario poderia escolher mais de uma opção e fossem armazenadas no array, porém enfrentamos um 
problema em que os 3 'consts' de lanche estavam acumulando as opções de salada no mesmo array, e a saída não estava saindo como o esperado.
Para solucionar esse problemas decidimos separar a Salada em 3 opções não obrigatórias.
