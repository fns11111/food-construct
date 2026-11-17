function renderDishes() {
    const categories = [
        { key: 'soup', name: 'Супы', filters: [{key: 'fish', label: 'Рыбный'}, {key: 'meat', label: 'Мясной'}, {key: 'veg', label: 'Вегетарианский'}] },
        { key: 'main', name: 'Главные блюда', filters: [{key: 'fish', label: 'Рыбное'}, {key: 'meat', label: 'Мясное'}, {key: 'veg', label: 'Вегетарианское'}] },
        { key: 'salad', name: 'Салаты и стартеры', filters: [{key: 'fish', label: 'Рыбный'}, {key: 'meat', label: 'Мясной'}, {key: 'veg', label: 'Вегетарианский'}] },
        { key: 'drink', name: 'Напитки', filters: [{key: 'hot', label: 'Горячий'}, {key: 'cold', label: 'Холодный'}] },
        { key: 'dessert', name: 'Десерты', filters: [{key: 'small', label: 'Маленькая порция'}, {key: 'medium', label: 'Средняя порция'}, {key: 'large', label: 'Большая порция'}] }
    ];
    
    const container = document.querySelector('.menu-main');
    container.innerHTML = '';

    categories.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'menu-section';
        
        // Создаем заголовок и фильтры
        let filtersHTML = '<div class="filters">';
        cat.filters.forEach(f => {
            filtersHTML += `<button class="filter-btn" data-category="${cat.key}" data-kind="${f.key}">${f.label}</button>`;
        });
        filtersHTML += '</div>';

        section.innerHTML = `<h2>${cat.name}</h2>${filtersHTML}<div class="dishes-grid" id="grid-${cat.key}"></div>`;
        container.appendChild(section);

        // Отрисовываем карточки для этой категории
        renderCategory(cat.key, null); // null значит "без фильтра"
    });

    // Навешиваем обработчики на фильтры
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            const kind = e.target.getAttribute('data-kind');
            
            // Переключаем класс active
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active');
                renderCategory(category, null); // Сбрасываем фильтр
            } else {
                // Убираем active со всех кнопок этой категории
                document.querySelectorAll(`.filter-btn[data-category="${category}"]`).forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderCategory(category, kind);
            }
        });
    });
}

// Функция для отрисовки карточек конкретной категории с учетом фильтра
function renderCategory(category, filterKind) {
    const grid = document.getElementById(`grid-${category}`);
    if (!grid) return;
    grid.innerHTML = ''; // Очищаем сетку

    let filtered = dishes.filter(d => d.category === category);
    if (filterKind) {
        filtered = filtered.filter(d => d.kind === filterKind);
    }
    
    // Сортируем по алфавиту
    filtered.sort((a, b) => a.name.localeCompare(b.name));

    filtered.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.setAttribute('data-dish', dish.keyword);
        
        // Проверяем, выбрано ли это блюдо в корзине, чтобы сразу подсветить
        const isSelected = (cart[category] && cart[category].keyword === dish.keyword);
        if (isSelected) card.classList.add('selected');

        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <p class="dish-price">${dish.price} ₽</p>
            <p class="dish-name">${dish.name}</p>
            <p class="dish-weight">${dish.count}</p>
            <button>Добавить</button>
        `;
        grid.appendChild(card);
    });

    // Переподключаем кнопки "Добавить", так как карточки пересоздались
    attachButtonListeners();
}
