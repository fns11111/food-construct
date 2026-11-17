const dishes = [
    // ===== СУПЫ (6) =====
    { keyword: "borsch", name: "Борщ с говядиной", price: 280, category: "soup", kind: "meat", count: "300 г", image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=400&auto=format&fit=crop" },
    { keyword: "mushroom_soup", name: "Крем-суп из белых грибов", price: 320, category: "soup", kind: "veg", count: "250 г", image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=400&auto=format&fit=crop" },
    { keyword: "tom_yam", name: "Том Ям с креветками", price: 450, category: "soup", kind: "fish", count: "350 г", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400&auto=format&fit=crop" },
    { keyword: "gaspacho", name: "Гаспачо", price: 250, category: "soup", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=400&auto=format&fit=crop" },
    { keyword: "ukha", name: "Уха по-фински", price: 350, category: "soup", kind: "fish", count: "350 г", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&auto=format&fit=crop" },
    { keyword: "solyanka", name: "Солянка мясная", price: 380, category: "soup", kind: "meat", count: "350 г", image: "https://images.unsplash.com/photo-1548943487-a2e4d43b4850?q=80&w=400&auto=format&fit=crop" },

    // ===== ГЛАВНЫЕ БЛЮДА (6) =====
    { keyword: "carbonara", name: "Паста карбонара", price: 390, category: "main", kind: "meat", count: "280 г", image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=400&auto=format&fit=crop" },
    { keyword: "chicken", name: "Куриное филе с овощами", price: 420, category: "main", kind: "meat", count: "310 г", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&auto=format&fit=crop" },
    { keyword: "plov", name: "Плов с бараниной", price: 350, category: "main", kind: "meat", count: "350 г", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&auto=format&fit=crop" },
    { keyword: "salmon", name: "Лосось на гриле", price: 550, category: "main", kind: "fish", count: "250 г", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=400&auto=format&fit=crop" },
    { keyword: "cod", name: "Треска с овощами", price: 480, category: "main", kind: "fish", count: "280 г", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&auto=format&fit=crop" },
    { keyword: "vegan_bowl", name: "Веган-боул с тофу", price: 380, category: "main", kind: "veg", count: "300 г", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop" },

    // ===== САЛАТЫ И СТАРТЕРЫ (6) =====
    { keyword: "caesar", name: "Салат Цезарь", price: 320, category: "salad", kind: "meat", count: "200 г", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=400&auto=format&fit=crop" },
    { keyword: "greek_salad", name: "Греческий салат", price: 280, category: "salad", kind: "veg", count: "220 г", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop" },
    { keyword: "tuna_salad", name: "Салат с тунцом", price: 350, category: "salad", kind: "fish", count: "180 г", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&auto=format&fit=crop" },
    { keyword: "caprese", name: "Капрезе", price: 300, category: "salad", kind: "veg", count: "150 г", image: "https://images.unsplash.com/photo-1592415486689-125cbbfc5ef9?q=80&w=400&auto=format&fit=crop" },
    { keyword: "bruschetta", name: "Брускетта с томатами", price: 220, category: "salad", kind: "veg", count: "120 г", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=400&auto=format&fit=crop" },
    { keyword: "hummus_plate", name: "Хумус с овощами", price: 250, category: "salad", kind: "veg", count: "200 г", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=400&auto=format&fit=crop" },

    // ===== НАПИТКИ (6) =====
    { keyword: "tea", name: "Чай черный с чабрецом", price: 150, category: "drink", kind: "hot", count: "400 мл", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop" },
    { keyword: "cappuccino", name: "Капучино", price: 180, category: "drink", kind: "hot", count: "300 мл", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=400&auto=format&fit=crop" },
    { keyword: "latte", name: "Латте", price: 200, category: "drink", kind: "hot", count: "350 мл", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop" },
    { keyword: "lemonade", name: "Домашний лимонад", price: 200, category: "drink", kind: "cold", count: "500 мл", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop" },
    { keyword: "iced_tea", name: "Холодный чай", price: 180, category: "drink", kind: "cold", count: "400 мл", image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=400&auto=format&fit=crop" },
    { keyword: "orange_juice", name: "Апельсиновый сок", price: 170, category: "drink", kind: "cold", count: "300 мл", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400&auto=format&fit=crop" },

    // ===== ДЕСЕРТЫ (6) =====
    { keyword: "tiramisu", name: "Тирамису", price: 350, category: "dessert", kind: "medium", count: "150 г", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400&auto=format&fit=crop" },
    { keyword: "cheesecake", name: "Чизкейк", price: 320, category: "dessert", kind: "medium", count: "120 г", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop" },
    { keyword: "eclair", name: "Эклер", price: 180, category: "dessert", kind: "small", count: "80 г", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=400&auto=format&fit=crop" },
    { keyword: "macaron", name: "Макарон", price: 150, category: "dessert", kind: "small", count: "50 г", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400&auto=format&fit=crop" },
    { keyword: "brownie", name: "Брауни", price: 220, category: "dessert", kind: "small", count: "90 г", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop" },
    { keyword: "cake_slice", name: "Кусок торта", price: 250, category: "dessert", kind: "large", count: "200 г", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop" }
];
