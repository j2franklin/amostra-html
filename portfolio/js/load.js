const header = document.querySelector('header');

// load header
header.innerHTML = `
    <div class="header-container">
        <div class="logo-slogan">
            <figure>
                <img src="img/diagraman-logo.svg" alt="Diagraman logo: a design agency creating unique identities for unique ideas" />
            </figure>
        </div>
        
        <button class="mobile-menu-btn" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="nav-menu">
            <ul>
                <li><a href="../index.html">Início</a></li>
                <li><a href="../services.html">Serviços</a></li>
                <li><a href="../about.html">Sobre mim</a></li>
                <li><a href="../contact.html">Contato</a></li>
            </ul>
        </nav>
    </div>
`;

// Lógica para abrir/fechar o menu no mobile
const btn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

// abrir conteúdo do menu de trabalhos
document.querySelector('#aba-editorial').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btn-menu-editorial').style.display = 'block';
    if( document.querySelector('#btn-menu-marketing').style.display = 'block' ){
        document.querySelector('#btn-menu-marketing').style.display = 'none';
    }
});

document.querySelector('#aba-marketing').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#btn-menu-marketing').style.display = 'block';
    if( document.querySelector('#btn-menu-editorial').style.display = 'block' ){
        document.querySelector('#btn-menu-editorial').style.display = 'none';
    }
});

const grid = document.getElementById("portfolio-grid");
const abas = document.querySelectorAll("#aba-trabalhos .aba-button");

abas.forEach(aba => {
    aba.addEventListener("click", () => {
        const category = aba.dataset.category;
        loadCategory(category);
    });
});


