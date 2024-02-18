const price = 60.00;

const products = [
    {
        name: "Colcci",
        image: "colcci-blue",
        color: "blue"
    },
    {
        name: "Colcci",
        image: "colcci-laranja",
        color: "orange"
    },
    {
        name: "Colcci",
        image: "colcci-red-front",
        color: "red"
    },
    {
        name: "Diesel",
        image: "dielsel-logominimal",
        color: "black"
    },
    {
        name: "Diesel",
        image: "diesel-branca",
        color: "white"
    },
    {
        name: "Diesel",
        image: "diesel-black",
        color: "black"
    },
    {
        name: "Ellus",
        image: "ellus-preta",
        color: "black"
    },
    {
        name: "Jhon Stone",
        image: "jhonstone-black-minimal",
        color: "black"
    },
    {
        name: "Jhon Stone",
        image: "jhonstone-branca",
        color: "white"
    },
    {
        name: "Jhon Stone",
        image: "jhonstone-cinza-nome",
        color: "grey"
    },
    {
        name: "Jhon Stone",
        image: "jhonstone-green",
        color: "green"
    },
    {
        name: "Jhon Stone",
        image: "jhonstone-logo",
        color: "black"
    },
    {
        name: "Levis",
        image: "levis-black-aside",
        color: "black"
    },
    {
        name: "Levis",
        image: "levis-black",
        color: "black"
    },


]


const containerProducts = document.querySelector('.container');

products.forEach((product) => {
    containerProducts.insertAdjacentHTML('beforeend',`                <article class="card-product">
    <img src="Assets/Images/${product.image}.jpg" alt="">
    <div class="card-product-bottom">
        <span>${product.name}</span>
        <span>Preço: ${price},00 R$</span>
        <a class="main-button" href="">Comprar
        </a>
    </div>
</article>`)
});

const btnCloseMenu = document.querySelector('.menu-btn-close');
const btnOpenMenu = document.querySelector('.menu')
const menu = document.querySelector('.menu-open');

btnCloseMenu.addEventListener('click',()=>{
    menu.classList.add('-hide')
});

btnOpenMenu.addEventListener('click',() => {
    menu.classList.remove('-hide')
});




