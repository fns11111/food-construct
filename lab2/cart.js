let cart = { soup: null, main: null, drink: null, salad: null, dessert: null };

function attachButtonListeners() {
    const buttons = document.querySelectorAll('.dish-card button');
    buttons.forEach(btn => {
        // Удаляем старый обработчик, чтобы не было дублей при перерисовке
        btn.replaceWith(btn.cloneNode(true)); 
    });

    document.querySelectorAll('.dish-card button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.dish-card');
            const keyword = card.getAttribute('data-dish');
            const dish = dishes.find(d => d.keyword === keyword);
            if (dish) addToCart(dish, card);
        });
    });
}

function addToCart(dish, card) {
    const allCards = document.querySelectorAll(`.dish-card[data-dish]`);
    allCards.forEach(c => {
        if (dishes.find(d => d.keyword === c.getAttribute('data-dish')).category === dish.category) {
            c.classList.remove('selected');
        }
    });
    card.classList.add('selected');
    cart[dish.category] = dish;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    const totalBlock = document.getElementById('cart-total');
    
    const isEmpty = !cart.soup && !cart.main && !cart.drink && !cart.salad && !cart.dessert;
    
    if (isEmpty) {
        cartList.innerHTML = '<p class="cart-empty">Ничего не выбрано</p>';
        totalBlock.style.display = 'none';
    } else {
        totalBlock.style.display = 'block';
        let total = 0;
        let html = '';

        const categories = {
            soup: { name: 'Суп', empty: 'Блюдо не выбрано' },
            main: { name: 'Главное блюдо', empty: 'Блюдо не выбрано' },
            salad: { name: 'Салат', empty: 'Блюдо не выбрано' },
            drink: { name: 'Напиток', empty: 'Напиток не выбран' },
            dessert: { name: 'Десерт', empty: 'Десерт не выбран' }
        };

        for (const key in categories) {
            if (cart[key]) {
                html += `<div class="cart-item"><span>${categories[key].name}:</span> <span>${cart[key].name}</span> <span>${cart[key].price} ₽</span></div>`;
                total += cart[key].price;
            } else {
                html += `<div class="cart-item"><span>${categories[key].name}:</span> <span>${categories[key].empty}</span></div>`;
            }
        }

        cartList.innerHTML = html;
        document.getElementById('total-price').textContent = `${total} ₽`;
        
        // Обновляем скрытые поля формы
        document.getElementById('input-soup').value = cart.soup ? cart.soup.keyword : '';
        document.getElementById('input-main').value = cart.main ? cart.main.keyword : '';
        document.getElementById('input-drink').value = cart.drink ? cart.drink.keyword : '';
        document.getElementById('input-salad').value = cart.salad ? cart.salad.keyword : '';
        document.getElementById('input-dessert').value = cart.dessert ? cart.dessert.keyword : '';
    }
}
