// Отрисовка блока с комбо-ланчами
function renderCombos() {
    const combosSection = document.createElement('section');
    combosSection.className = 'combos-section';
    combosSection.innerHTML = `
        <h2>Доступные варианты ланча</h2>
        <div class="combos-grid">
            <!-- Комбо 1 -->
            <div class="combo-card">
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='borsch').image}" alt="Суп"><p>Суп</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='carbonara').image}" alt="Главное"><p>Главное блюдо</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='caesar').image}" alt="Салат"><p>Салат</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='tea').image}" alt="Напиток"><p>Напиток</p></div>
            </div>
            <!-- Комбо 2 -->
            <div class="combo-card">
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='tom_yam').image}" alt="Суп"><p>Суп</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='chicken').image}" alt="Главное"><p>Главное блюдо</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='lemonade').image}" alt="Напиток"><p>Напиток</p></div>
            </div>
            <!-- Комбо 3 -->
            <div class="combo-card">
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='mushroom_soup').image}" alt="Суп"><p>Суп</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='greek_salad').image}" alt="Салат"><p>Салат</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='iced_tea').image}" alt="Напиток"><p>Напиток</p></div>
            </div>
            <!-- Комбо 4 -->
            <div class="combo-card">
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='salmon').image}" alt="Главное"><p>Главное блюдо</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='bruschetta').image}" alt="Салат"><p>Салат</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='cappuccino').image}" alt="Напиток"><p>Напиток</p></div>
            </div>
            <!-- Комбо 5 -->
            <div class="combo-card">
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='plov').image}" alt="Главное"><p>Главное блюдо</p></div>
                <div class="combo-item"><img src="${dishes.find(d=>d.keyword==='orange_juice').image}" alt="Напиток"><p>Напиток</p></div>
            </div>
        </div>
        <div class="dessert-info">
            <p>Десерты можно добавить в любой вид ланча</p>
        </div>
    `;
    
    // Вставляем блок с комбо после блока с меню (main), но перед формой
    const main = document.querySelector('.menu-main');
    main.after(combosSection);
}

// Валидация комбо при отправке формы
function validateCombo() {
    const hasSoup = cart.soup !== null;
    const hasMain = cart.main !== null;
    const hasSalad = cart.salad !== null;
    const hasDrink = cart.drink !== null;
    const hasDessert = cart.dessert !== null;

    // Проверяем, есть ли хотя бы одно блюдо
    if (!hasSoup && !hasMain && !hasSalad && !hasDrink && !hasDessert) {
        showNotification("Ничего не выбрано. Выберите блюда для заказа");
        return false;
    }

    // Проверяем наличие напитка (он есть во всех комбо)
    if (!hasDrink) {
        showNotification("Выберите напиток");
        return false;
    }

    // Проверяем остальные условия
    if (hasSoup && !hasMain && !hasSalad) {
        showNotification("Выберите главное блюдо/салат/стартер");
        return false;
    }

    if (!hasSoup && !hasMain && hasSalad) {
        showNotification("Выберите суп или главное блюдо");
        return false;
    }

    if (!hasSoup && !hasSalad && !hasMain && hasDrink) {
        showNotification("Выберите главное блюдо");
        return false;
    }

    // Если дошли до сюда — комбо валидно (или только десерт, но задание требует хотя бы что-то из основного)
    return true;
}

// Функция показа уведомления
function showNotification(message) {
    // Удаляем старое уведомление, если есть
    const oldNotif = document.querySelector('.notification-overlay');
    if (oldNotif) oldNotif.remove();

    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';
    
    const notifBox = document.createElement('div');
    notifBox.className = 'notification-box';
    notifBox.innerHTML = `
        <p>${message}</p>
        <button class="notif-ok">Окей</button>
    `;
    
    overlay.appendChild(notifBox);
    document.body.appendChild(overlay);

    // Закрытие по кнопке
    notifBox.querySelector('.notif-ok').addEventListener('click', () => {
        overlay.remove();
    });
}
