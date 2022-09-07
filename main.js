

function cartMenu() {
    const cartToggle = document.getElementById('cart-shop')
    const cart = document.getElementById('cart')
    const cartClose = document.getElementById('cart-close')

    if (cartToggle) {
        cartToggle.addEventListener('click', function () {
            cart.classList.toggle('show-cart')
        })
    }

    if (cartClose) {
        cartClose.addEventListener('click', function () {
            cart.classList.remove('show-cart')
        })
    }
}

cartMenu()

if (document.getElementById('header')) {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    })
}


const hoodies = {
    units: 0,
    stock: 10,
    name: "Hoodies",
    price: 14,
    subtotal: function () {
        return this.units * this.price;
    },
}

const shirts = {
    units: 0,
    stock: 14,
    name: "Shirts",
    price: 24,
    subtotal: function () {
        return this.units * this.price;
    },
}
const sweatshirts = {
    units: 0,
    stock: 19,
    name: "Sweatshirts",
    price: 24,
    subtotal: function () {
        return this.units * this.price;
    },
}


let totalItems = 0;
let totalPrice = 0;
const addHoodie = document.querySelector('.addHoodie');
const addShirt = document.querySelector('.addShirt');
const addSweatshirt = document.querySelector('.addSweatshirt');
const cartAddHoodie = document.querySelector('.cartAddHoodie');
const cartAddShirt = document.querySelector('.cartAddShirt');
const cartAddSweatshirt = document.querySelector('.cartAddSweatshirt');
const cartRemoveHoodie = document.querySelector('.cartRemoveHoodie');
const cartRemoveShirt = document.querySelector('.cartRemoveShirt');
const cartRemoveSweatshirt = document.querySelector('.cartRemoveSweatshirt');
const trashHoodie = document.querySelector('.trashHoodie');
const trashShirt = document.querySelector('.trashShirt');
const trashSweatshirt = document.querySelector('.trashSweatshirt');
const count = document.querySelector('.count');
const countCart = document.querySelector('.countCart');
const checkout = document.querySelector('.cart__btn');
const cartTotalPrice = document.querySelector('.cartTotalPrice');
const unitsHoodies = document.querySelector('.unitsHoodies');
const unitsShirts = document.querySelector('.unitsShirts');
const unitsSweatshirts = document.querySelector('.unitsSweatshirts');
const subtotalHoodies = document.querySelector('.subtotalHoodies');
const subtotalShirts = document.querySelector('.subtotalShirts');
const subtotalSweatshirts = document.querySelector('.subtotalSweatshirts');


function addItem(item) {
    if (item.stock <= item.units) {
        alert("Out of stock!");
    } else {
        item.units += 1;
        checkTotals();
    }
    updateInfo();
    cartEmpty();
}

function removeItem(item) {
    if (item.units != 0) {
        item.units -= 1;
        checkTotals();
    }
    updateInfo();
    cartEmpty();
}

addHoodie.addEventListener('click', addItem.bind(this, hoodies));
addShirt.addEventListener('click', addItem.bind(this, shirts));
addSweatshirt.addEventListener('click', addItem.bind(this, sweatshirts));
cartAddHoodie.addEventListener('click', addItem.bind(this, hoodies));
cartAddShirt.addEventListener('click', addItem.bind(this, shirts));
cartAddSweatshirt.addEventListener('click', addItem.bind(this, sweatshirts));
cartRemoveHoodie.addEventListener('click', removeItem.bind(this, hoodies));
cartRemoveShirt.addEventListener('click', removeItem.bind(this, shirts));
cartRemoveSweatshirt.addEventListener('click', removeItem.bind(this, sweatshirts));
trashHoodie.addEventListener('click', () => {
    hoodies.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
trashShirt.addEventListener('click', () => {
    shirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
trashSweatshirt.addEventListener('click', () => {
    sweatshirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
checkout.addEventListener('click', () => {
    hoodies.units = 0;
    shirts.units = 0;
    sweatshirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
    alert('Thank you for your purchase!');
});

function cartEmpty() {
    if (totalItems > 0) {
        document.querySelector('.cart__empty').classList.add('cart__hide');
    } else {
        document.querySelector('.cart__empty').classList.remove('cart__hide');
    }
    if (hoodies.units > 0) {
        document.querySelector('#hoodies').classList.remove('cart__hide');
    } else {
        document.querySelector('#hoodies').classList.add('cart__hide');
    }
    if (shirts.units > 0) {
        document.querySelector('#shirts').classList.remove('cart__hide');
    } else {
        document.querySelector('#shirts').classList.add('cart__hide');
    }
    if (sweatshirts.units > 0) {
        document.querySelector('#sweatshirts').classList.remove('cart__hide');
    } else {
        document.querySelector('#sweatshirts').classList.add('cart__hide');
    }
}

function checkTotals() {
    totalItems = hoodies.units + shirts.units + sweatshirts.units;
    totalPrice = hoodies.subtotal() + shirts.subtotal() + sweatshirts.subtotal();
    if (totalItems > 0) {
        checkout.disabled = false;
    } else {
        checkout.disabled = true;
    }
}

function updateInfo() {
    count.textContent = totalItems;
    console.log(totalItems);
    countCart.textContent = totalItems;
    console.log(totalItems);
    cartTotalPrice.textContent = `$${totalPrice}.00`;
    unitsHoodies.textContent = `${hoodies.units} units`;
    unitsShirts.textContent = `${shirts.units} units`;
    unitsSweatshirts.textContent = `${sweatshirts.units} units`;
    subtotalHoodies.textContent = `Subtotal: $${hoodies.subtotal()}.00`;
    subtotalShirts.textContent = `Subtotal: $${shirts.subtotal()}.00`;
    subtotalSweatshirts.textContent = `Subtotal: $${sweatshirts.subtotal()}.00`;
}


function darkTheme() {
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    const selectedTheme = window.localStorage.getItem('selected-theme')
    const selectedIcon = window.localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        window.localStorage.setItem('selected-theme', getCurrentTheme())
        window.localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

darkTheme()