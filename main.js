import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [{
    id: 1,
    nome: 'Vestido Rosa',
    marca: 'Zara',
    preco: 150,
    nomeArquivoImagem: 'prod1.jpg',
    feminino: true,
    }, 
    {
    id: 2,
    nome: 'Bolsa Dior',
    marca: 'Dior',
    preco: 340,
    nomeArquivoImagem: 'prod2.jpg',
    feminino: true,
    },
    { 
    id: 3,
    nome: 'Vestido Azul',
    marca: 'Dior',
    preco: 250,
    nomeArquivoImagem: 'prod3.jpg',
    feminino: true,
    },
    {
    id: 4,
    nome: 'Calça Jeans',
    marca: 'Fairy',
    preco: 200,
    nomeArquivoImagem: 'prod4.jpg',
    feminino: true,
    },
    {
    id: 5,
    nome: 'Salto Borboletas',
    marca: 'Butterfly',
    preco: 185,
    nomeArquivoImagem: 'prod5.jpg',
    feminino: true,
    },
    {
    id: 6,
    nome: 'Princess Cropped',
    marca: 'Stardoll',
    preco: 120,
    nomeArquivoImagem: 'prod6.jpg',
    feminino: true,
    }
]

for(const produtoCatalogo of catalogo){
    const cartaoProduto = `<div class=" border-solid border-2 border-sky-300 flex flex-col justify-between
     w-48 m-5" id="card-produto-${produtoCatalogo.id}">
<img 
    src="/assets/${produtoCatalogo.nomeArquivoImagem}" 
    alt="vestido rosa"
    style="height: 300px"
/>
<p class='marca'>${produtoCatalogo.marca}</p>
<p class='nome'>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}

inicializarCarrinho();


