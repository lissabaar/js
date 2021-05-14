// 5. *Сделать так, чтобы товары в каталоге выводились при помощи JS: Создать массив товаров (сущность Product); 
// При загрузке страницы на базе данного массива генерировать вывод из него. 
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

var items = [
    {
        id: 0,
        name: 'LG',
        price: 50,
        color: 'Черный'
    },
    {
        id: 1,
        name: 'Samsung',
        price: 150,
        color: 'Красный'
    },
    {
        id: 2,
        name: 'Apple',
        price: 20,
        color: 'Белый'
    },
    {
        id: 3,
        name: 'Dell',
        price: 10,
        color: 'Белый'
    },
    {
        id: 4,
        name: 'LG',
        price: 50,
        color: 'Черный'
    },
    {
        id: 5,
        name: 'Samsung',
        price: 150,
        color: 'Красный'
    },
    {
        id: 6,
        name: 'Apple',
        price: 20,
        color: 'Белый'
    },
    {
        id: 7,
        name: 'Dell',
        price: 10,
        color: 'Белый'
    }
]

var catalog = document.getElementById('catalog');

for (i = 0; i < items.length; i++) {
    var catalogItem = document.createElement('article');
    catalogItem.className = 'catalog-item-card';
    catalogItem.innerHTML = '<h3>' + items[i].name + '</h3><span class="card-item-point">Цена: ' + items[i].price + '</span><span class="card-item-point">Цвет: ' + items[i].color + '</span>';
    catalog.appendChild(catalogItem)

    var catalogItemButton = document.createElement('button');
    catalogItemButton.className = 'catalog-item-button';
    catalogItemButton.innerHTML = 'Добавить в корзину';
    catalogItem.appendChild(catalogItemButton)

}