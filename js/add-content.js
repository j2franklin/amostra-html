document.querySelector("#book-cover").innerHTML = `
    <figure>
        <img class="img-cover" src="img/${bookContent.nome_do_arquivo_da_capa}" alt="Audiodescrição: Essa é a capa do livro. Fim da audiodescrição." />
    </figure>
`;

document.querySelector("#mode-toggle").innerHTML = `
    <button
        class="btn-mode"
        id="toggle-mode-button"
        aria-label="Alternar modo claro e escuro"
        title="Alternar modo claro e escuro">
    </button>
`;

let bookExcerptHTML = "";

bookContent.elementos_do_livro.forEach((element) => {
    switch (element.tipo) {
        case "TÍTULO DO CAPÍTULO":
            bookExcerptHTML += `<h1 class="chapter-title">${element.conteudo}</h1>`;
        break;
        case "SUBTÍTULO DO CAPÍTULO":
            bookExcerptHTML += `<h2 class="chapter-subtitle">${element.conteudo}</h2>`;
        break;
        case "PARÁGRAFO DE ABERTURA":
            bookExcerptHTML += `<p class="opening-paragraph">${element.conteudo}</p>`;
        break;
        case "PARÁGRAFO":
            bookExcerptHTML += `<p class="paragraph">${element.conteudo}</p>`;
        break;
        case "CITAÇÃO":
            bookExcerptHTML += `<blockquote class="quote">${element.conteudo}</blockquote>`;
        break;
        case "CHAMADA":
            bookExcerptHTML += `<p class="callout">${element.conteudo}</p>`;
        break;
        case "IMAGEM":
            bookExcerptHTML += `
                <figure class="image-center">
                    <img src="img/${element.conteudo}" alt="Audiodescrição: Descrição da imagem aqui. Fim da audiodescrição." />
                </figure>
                `;
        break;
    }
});

document.querySelector("#book-excerpt").innerHTML = bookExcerptHTML;

const comprar = document.querySelector("#call-to-action");

comprar.addEventListener("click", () => {
    window.open(bookContent.link_de_compra, '_blank');
});