"use strict"
// -----------header
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    if (scrollDistance > lastScrollTop && scrollDistance > header.offsetHeight) {
        header.classList.add('_move');
        main.style.marginTop = null;
    }
    else if (scrollDistance === 0) {
        header.classList.remove('_move');
        main.style.marginTop = null;

    }
    else {
        header.classList.remove('_move');
        // main.style.marginTop = `${header.offsetHeight}px`;
    }
    lastScrollTop = scrollDistance;
})

// ---------------burger

const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
    const popup = document.querySelector('.popup');
    headerBurger.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        popup.classList.toggle('_active');
        headerBurger.classList.toggle('_active');
        const main = document.querySelector('.main');
        main.addEventListener('click', () => {
            popup.classList.remove('_active');
            headerBurger.classList.remove('_active');
            document.body.classList.remove('_lock');

        })
        const footer = document.querySelector('.footer');
        footer.addEventListener('click', () => {
            popup.classList.remove('_active');
            headerBurger.classList.remove('_active');
            document.body.classList.remove('_lock');

        })
    })
}

// -------------change size-------------

const productSize = document.querySelector('.product__size');
const sizeList = document.querySelector('.size__list');
const body = document.querySelector('body');

productSize.addEventListener('click', () => {
    sizeList.classList.toggle('_visible');
    productSize.classList.toggle('_open');

});


// -------------product__size----------

const sizeChange = document.querySelectorAll('.size__change');
for (let i = 0; i < sizeChange.length; i++) {
    sizeChange[i].addEventListener('click', () => {
        let sizeChangeValue = sizeChange[i].innerHTML;
        productSize.setAttribute('data-size', `${sizeChangeValue}`);
        document.querySelector('.product__size span').innerHTML = `${sizeChangeValue}`;
    })
}

// ---------------product_cart------------

const cartPlus = document.querySelector('.cart__plus');
const cartMinus = document.querySelector('.cart__minus');
const cartAmount = document.querySelector('.cart__amount');
cartAmount.setAttribute('data-amount', '1');
cartPlus.addEventListener('click', () => {
    let cartAmountValue = +document.querySelector('.cart__amount').innerHTML;
    document.querySelector('.cart__amount').innerHTML = (cartAmountValue + 1);
    cartAmount.setAttribute('data-amount', `${cartAmountValue + 1}`);
})
cartMinus.addEventListener('click', () => {
    let cartAmountValue = +document.querySelector('.cart__amount').innerHTML;
    if (cartAmountValue > 0) {
        document.querySelector('.cart__amount').innerHTML = (cartAmountValue - 1);
        cartAmount.setAttribute('data-amount', `${cartAmountValue - 1}`);
    }
})

// --------------------------Add to cart

const cartAddButoon = document.querySelector('.cart__add');
const sizeMessage = document.querySelector('.size__message');
const sizeMessageTwo = document.querySelector('.size__message-2')
const productMajor = document.querySelector('.product__title');
cartAddButoon.addEventListener('click', () => {
    switch (sizeMessage.classList.contains("message-active")) {
        case false:
            sizeMessage.classList.add("message-active");
            let cartAmount = +document.querySelector('.cart__amount').innerHTML;
            let productSizeData = productSize.getAttribute('data-size');
            if (cartAmount != 0 && productSizeData != 'none') {
                sizeMessage.innerHTML = `Товар '${productMajor.innerHTML}' в количестве ${cartAmount} единиц добавлен в корзину`;
            }
            else if (productSizeData == 'none') {
                sizeMessage.innerHTML = "Выберите размер";
            }
            else {
                sizeMessage.innerHTML = "Выберите количество единиц товара";
            }

            setTimeout(function () {
                sizeMessage.classList.remove("message-active");
            }, 3000)
            break;
        case true:
            sizeMessageTwo.classList.add("message-active");
            let cartAmountTwo = +document.querySelector('.cart__amount').innerHTML;
            let productSizeDataTwo = productSize.getAttribute('data-size');
            if (cartAmountTwo != 0 && productSizeDataTwo != 'none') {
                sizeMessageTwo.innerHTML = `Товар '${productMajor.innerHTML}' в количестве ${cartAmountTwo} единиц добавлен в корзину`;
            }
            else if (productSizeDataTwo == 'none') {
                sizeMessageTwo.innerHTML = "Выберите размер";
            }
            else {
                sizeMessageTwo.innerHTML = "Выберите количество единиц товара";
            }

            setTimeout(function () {
                sizeMessageTwo.classList.remove("message-active");
            }, 3000)

    }
})


// --------------------favourites
const sizeMessageThree = document.querySelector('.size__message-3');
const sizeMessageFour = document.querySelector('.size__message-4');
const cartFavourites = document.querySelector('.cart_favourites');
cartFavourites.addEventListener('click', () => {
    if (cartFavourites.classList.contains('_colorRed')) {
        cartFavourites.classList.toggle('_colorRed');
        cartFavourites.setAttribute('data-favourites', '0');
        if (sizeMessageThree.classList.contains("message-active")) {
            sizeMessageFour.classList.add("message-active");
            sizeMessageFour.innerHTML = "Убрано из избранного";
            setTimeout(function () {
                sizeMessageFour.classList.remove("message-active");;
            }, 2000);
        }
        else {
            sizeMessageThree.classList.add("message-active");
            sizeMessageThree.innerHTML = "Убрано из избранного";
            setTimeout(function () {
                sizeMessageThree.classList.remove("message-active");;
            }, 2000);
        }

    }
    else if (!cartFavourites.classList.contains('_colorRed')) {
        cartFavourites.classList.toggle('_colorRed');
        if (sizeMessageThree.classList.contains("message-active")) {
            sizeMessageFour.classList.add("message-active");
            cartFavourites.setAttribute('data-favourites', '1');
            sizeMessageFour.innerHTML = "Добавлено в избранное";
            setTimeout(function () {
                sizeMessageFour.classList.remove("message-active");;
            }, 2000);
        }
        else {
            sizeMessageThree.classList.add("message-active");
            cartFavourites.setAttribute('data-favourites', '1');
            sizeMessageThree.innerHTML = "Добавлено в избранное";
            setTimeout(function () {
                sizeMessageThree.classList.remove("message-active");;
            }, 2000);
        }

    }

})

// -------------------main photo
const asideAll = document.querySelectorAll('.aside >div>img');
const photoMajor = document.querySelector('.photo__major img');

for (let i = 0; i < asideAll.length; i++) {
    asideAll[i].addEventListener('click', () => {
        let attribute = asideAll[i].getAttribute('src');
        photoMajor.setAttribute('src', `${attribute}`);
    })
}
// --------------asidephoto




// -----------footer------


let input = document.querySelector('.footer__input');
input.addEventListener('input', function () {
    let value = this.value;
    let check;
    check = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/.test(value);

    this.classList.remove('valid');
    this.classList.remove('invalid');

    if (check) {
        input.classList.add('valid');

    }
    else {
        input.classList.add('invalid');

    }
});
const formSubscribe = document.querySelector('.footer__form');
formSubscribe.onsubmit = function (evt) {
    if (!input.classList.contains('valid')) {
        evt.preventDefault();
        input.classList.add('invalid');
    }
}