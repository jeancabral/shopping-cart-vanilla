const produtos = document.querySelector('#lista-de-produto')

const cart = document.querySelector('#sacola tbody')


loadEventListeners();

function loadEventListeners() {
    //escuta o evento de adicionar o carrinho
    produtos.addEventListener('click', addtoCart);

    function addtoCart(e) {
        if (e.target.classList.contains('adicionar')) {
            //pega os valores do produto
            const item = e.target.parentElement.parentElement;
            getProduct(item);
        }
    }
}

function getProduct(item) {
    //cria o objeto
    const produto = {
        produto: item.querySelector('h4').textContent,
        valor: item.querySelector('.preco span').textContent,
        id: item.querySelector('a').getAttribute('data-id')
    }
    addToCart(produto);
}

function addToCart(item) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <tr>
            <td>
                ${item.produto}
            </td>
            <td>
                ${item.valor}
            </td>
            <td>
                <a href="#" class="remove" data-id="${item.id}">X</a>
            </td>
        </tr>
    `;

    cart.appendChild(row);
}

//esvaziar sacola
document.querySelector("a#esvaziar-sacola").addEventListener("click", ()=>{
    let rows = document.querySelectorAll("table#sacola tbody")[0].childNodes
    while(rows)
         document.querySelectorAll("table#sacola tbody")[0].removeChild(rows[0])  
})