// Функция для отрисовки блюд
function renderDishes() {
    const categories = ['soup', 'main', 'drink'];
    const categoryNames = { soup: 'Супы', main: 'Главные блюда', drink: 'Напитки' };
    const container = document.querySelector('.menu-main');
    container.innerHTML = ''; // Очищаем контейнер перед отрисовкой

    categories.forEach(cat => {
        // Фильтруем и сортируем по алфавиту
        const filteredDishes = dishes
            .filter(d => d.category === cat)
            .sort((a, b) => a.name.localeCompare(b.name));

        // Создаем секцию
        const section = document.createElement('section');
        section.className = 'menu-section';
        section.innerHTML = `<h2>${categoryNames[cat]}</h2><div class="dishes-grid" id="grid-${cat}"></div>`;
        
        const grid = section.querySelector('.dishes-grid');

        // Создаем карточки
        filteredDishes.forEach(dish => {
            const card = document.createElement('div');
            card.className = 'dish-card';
            card.setAttribute('data-dish', dish.keyword);
            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <p class="dish-price">${dish.price} ₽</p>
                <p class="dish-name">${dish.name}</p>
                <p class="dish-weight">${dish.count}</p>
                <button>Добавить</button>
            `;
            grid.appendChild(card);
        });

        container.appendChild(section);
    });

    // После отрисовки навешиваем обработчики на кнопки
    attachButtonListeners();
}
