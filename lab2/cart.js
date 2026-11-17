let cart = {
    soup: null,
    main: null,
    drink: null
};

// Навешиваем обработчики на кнопки "Добавить"
function attachButtonListeners() {
    const buttons = document.querySelectorAll('.dish-card button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.dish-card');
            const keyword = card.getAttribute('data-dish');
            const dish = dishes.find(d => d.keyword === keyword);
            
            if (dish) {
                addToCart(dish, card);
            }
        });
    });
}

// Добавление в корзину
function addToCart(dish, card) {
    // Убираем выделение со всех карточек этой категории
    const allCards = document.querySelectorAll(`.dish-card[data-dish]`);
    allCards.forEach(c => {
        if (dishes.find(d => d.keyword === c.getAttribute('data-dish')).category === dish.category) {
            c.classList.remove('selected');
        }
    });

    // Выделяем текущую карточку
    card.classList.add('selected');

    // Записываем в корзину
    cart[dish.category] = dish;
    updateCartUI();
}

// Обновление интерфейса корзины
function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const totalBlock = document.getElementById('cart-total');
    
    // Проверяем, пусто ли
    const isEmpty = !cart.soup && !cart.main && !cart.drink;
    
    if (isEmpty) {
        cartList.innerHTML = '<p class="cart-empty">Ничего не выбрано</p>';
        totalBlock.style.display = 'none';
    } else {
        totalBlock.style.display = 'block';
        let total = 0;
        let html = '';

        // Суп
        if (cart.soup) {
            html += `<div class="cart-item"><span>Суп:</span> <span>${cart.soup.name}</span> <span>${cart.soup.price} ₽</span></div>`;
            total += cart.soup.price;
        } else {
            html += `<div class="cart-item"><span>Суп:</span> <span>Блюдо не выбрано</span></div>`;
        }

        // Главное
        if (cart.main) {
            html += `<div class="cart-item"><span>Главное блюдо:</span> <span>${cart.main.name}</span> <span>${cart.main.price} ₽</span></div>`;
            total += cart.main.price;
        } else {
            html += `<div class="cart-item"><span>Главное блюдо:</span> <span>Блюдо не выбрано</span></div>`;
        }

        // Напиток
        if (cart.drink) {
            html += `<div class="cart-item"><span>Напиток:</span> <span>${cart.drink.name}</span> <span>${cart.drink.price} ₽</span></div>`;
            total += cart.drink.price;
        } else {
            html += `<div class="cart-item"><span>Напиток:</span> <span>Напиток не выбран</span></div>`;
        }

        cartList.innerHTML = html;
        document.getElementById('total-price').textContent = `${total} ₽`;
    }
}
