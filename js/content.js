/*
    ARQUIVO DE CONTEÚDO DO LIVRO.
    O CONTEÚDO QUE VAI APARECER NO SEU HTML É INCLUÍDO POR ESSE ARQUIVO. CASO TENHA CONHECIMENTO EM JAVASCRIPT, VOCÊ PODE 
    EDITAR ESSE ARQUIVO PARA ADICIONAR MAIS CONTEÚDO AO SEU LIVRO.
*/

const bookContent = {

    //ATENÇÃO! EDITE SOMENTE NA ÁREA ONDE VOCÊ VAI ENCONTRAR A MENSAGEM "SUBSTITUA O CONTEÚDO ENTRE ASPAS"

    nome_do_livro: "O que ele está construindo?", // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO NOME DO SEU LIVRO
    nome_do_arquivo_da_capa: "cover.jpg", // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO NOME DO ARQUIVO DA CAPA DO SEU LIVRO
    link_de_compra: "https://www.amazon.com.br/dp/B0GG5MK85D", // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO LINK DE COMPRA DO SEU LIVRO
    elementos_do_livro: [
        // OS ELEMENTOS DO LIVRO PRECISAM ESTAR NA ORDEM QUE VOCÊ DESEJA QUE ELES APAREÇAM NO HTML.
        // CADA ELEMENTO É UM OBJETO COM DUAS PROPRIEDADES: "tipo" E "conteudo".
        /* 
           ESSES SÃO OS TIPOS QUE VOCÊ PODE USAR:
           - TÍTULO DO CAPÍTULO
           - SUBTÍTULO DO CAPÍTULO
           - PARÁGRAFO DE ABERTURA
           - PARÁGRAFO
           - CITAÇÃO
           - CHAMADA (TEXTO EM DESTAQUE DO INÍCIO COM ALGUM TEXTO QUE VOCÊ QUEIRA COLOCAR EM EVIDÊNCIA)
           - IMAGEM (SOMENTE IMAGENS CENTRAIS. EM CASOS ESPECIAIS, ME CONSULTE NO E-MAIL DE TRABALHO)

           !!! MANTENHA ESSES NOMES EXATAMENTE COMO ESTÃO AQUI, INCLUSIVE COM OS ACENTOS !!!

           PARA INCLUIR NEGRITO OU ITÁLICO NO TEXTO, USE A MARCAÇÃO HTML À SEGUIR: <b>NEGRITO</b> E <i>ITÁLICO</i>.
        */
        // O CONTEÚDO É O TEXTO QUE VOCÊ DESEJA QUE APAREÇA NO SEU HTML.
        {
            tipo: "CHAMADA",
            conteudo: 'Um trecho do meu novo livro chamado "O QUE ELE ESTÁ CONSTRUINDO" disponível na loja da Amazon para compra digital' // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "TÍTULO DO CAPÍTULO",
            conteudo: 'Quarta feira. Dia 3.' // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO DE ABERTURA",
            conteudo: '<i>Sons excruciantes. Uma serra serrando plástico? Garfos riscando vidros? Uma mulher agonizando e gritando? Espera... não é um som. É uma visão.</i>'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '04:32 da manhã. Beni acorda com uma luz azul suave no rosto. Acorda como se fosse a luz do sol batendo no olho. Quase que instantaneamente ele sai da cama e vai para a janela. Ou ele sempre estivera ali na janela?'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'A redoma é estranha, mas já é familiar. E isso brilhando no meio? É uma luz azul. Parece uma silhueta de uma caixa feita de luz azul. Seria a TV? Essa corneta – abafada no meio da estática – tocando uma música sínica de um talkshow genérico qualquer. A música murmura. Beni estranhou muito porque a música parecia vir de trás da cabeça dele.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '<b>08:35...</b>'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'Beni bate na porta da frente da redoma.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '“madeira...” – pensou Beni. Da janela do outro lado da rua, a figura loira de Margarida acompanha a ação como se estivesse vendo uma notícia repentina na TV.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'Não demora 30 segundos e passos estão vindo em direção à porta. Ela abre e um homem sério, negro e alto; está parado diante de Beni e espera a justificativa para ter sido perturbado.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Bom dia, vizinho! Eu sou Beni e venho para lhe dar as boas-vindas em nome de nossa rua!'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— ...'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'Beni segue olhando para ele como se o relógio tivesse parado logo após sua fala. A resposta do vizinho vai trazer o tempo de volta. Margarida também olha como se estivesse ali do lado de Beni. Ela aguarda uma resposta de uma pergunta que ela nem sabe qual é.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'Os pássaros voam, as baratas brincam no bueiro...'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Bom dia.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Está gostando da nova locação? – Beni pergunta enquanto tenta sondar o interior do recinto. Não se vê quase nada. Somente algum ponto de luz aqui e ali. Ao menos dá para ver que se trata de um cômodo – somos pessoas muito receptivas e nos conhecemos todos.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Sim, é uma boa locação. – Beni ri da confirmação como se tivesse ouvido uma piada suja. Continua:'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Bem... nós sempre fazemos um encontro amistoso entre nós quando chega alguém novo, sabe. Para nos conhecermos melhor. Dar a oportunidade de uma vivência pacífica e amistosa.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '<i>Amistoso amistoso amistosa amisto amis</i>'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Desculpe, qual seu nome mesmo?'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Benieoseu?'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Prazer, Beni. Meu nome é Inno. Gostaria de conversar mais, mas no momento estou realmente ocupado. Estou terminando de instalar alguns fios.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: '— Claro! Sempre haverá uma outra oportunidade para conversarmos! Saia um momento mais tarde para você conhecer os outros.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'Não houve mais palavras. Uma mão se joga no ar e bate firmemente com outra em um aperto firme. Porta se fecha.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        {
            tipo: "PARÁGRAFO",
            conteudo: 'A bela silhueta jovial de Margarida na janela.'  // SUBSTITUA O CONTEÚDO ENTRE ASPAS PELO TEXTO DO SEU PARÁGRAFO
        },
        

        // INCLUA MAIS ELEMENTOS AQUI, SE NECESSÁRIO. REPITA A ESTRUTURA ACIMA. NÃO SE ESQUEÇA DE COLOCAR VÍRGULA NO FINAL DE CADA ELEMENTO!
    ],

}