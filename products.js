const menuItems = {
    foods: [
        { id: 'omelette', name: ' املت ربی', price: 70000 },
        { id: 'omgoje', name: 'املت گوجه', price: 77000 },
        { id: 'sosom', name: 'سوسیس املت', price: 82000 },
        { id: 'omturk', name: 'املت ترکی', price: 113000 }
    ],
    drinks: [
        { id: 'coffee', name: 'قهوه', price: 25000 },
        { id: 'tea', name: 'چای', price: 15000 },
        { id: 'juice', name: 'آبمیوه', price: 20000 },
        { id: 'milk', name: 'شیر', price: 18000 }
    ]
};

function getMenuOptions(type) {
    const items = type === 'food' ? menuItems.foods : menuItems.drinks;
    return items.map(item => 
        `<option value="${item.id}">${item.name} (${item.price.toLocaleString()} تومان)</option>`
    ).join('');
}

function getPrice(itemId) {
    const allItems = [...menuItems.foods, ...menuItems.drinks];
    const item = allItems.find(i => i.id === itemId);
    return item ? item.price : 0;
}

function getItemName(itemId) {
    const allItems = [...menuItems.foods, ...menuItems.drinks];
    const item = allItems.find(i => i.id === itemId);
    return item ? item.name : '';
} 