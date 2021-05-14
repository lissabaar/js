var cardItems = [];

// тут должен быть скрипт, реагирующий на действия пользователя и добавляющий выбранный товар в корзину/изменяющий количество, а пока вот так:
cardItems.push(items[2]);
cardItems.push(items[3]);
cardItems[0].count = 3;
cardItems[1].count = 5;

function countBasketPrice(card) {
    var sum = 0;
    for (i = 0; i < card.length; i++) {
        sum += card[i].price * card[i].count;
    }
    return sum;
}


// 4. *Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: 
// Пустая корзина должна выводить строку «Корзина пуста»; Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

var card = document.getElementById('user-card');

if (cardItems.length == 0) {
    var cardEmpty = document.createElement('div');
    cardEmpty.className = 'card-empty';
    cardEmpty.innerHTML = 'Корзина пуста.';
    card.appendChild(cardEmpty);
}

else {
    var totalCount = 0;
    for (i = 0; i < cardItems.length; i++) {
        var cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        cardItem.innerHTML = '<h3>' + cardItems[i].name + '</h3><span class="card-item-point">Цена: ' + cardItems[i].price + '</span><span class="card-item-point">Количество: ' + cardItems[i].count + '</span>';
        card.appendChild(cardItem);
        totalCount += cardItems[i].count;
    }

    var cardPrice = document.createElement('div');
    cardPrice.className = 'card-sum';
    cardPrice.innerHTML = 'В корзине: ' + totalCount + ' товаров на сумму ' + countBasketPrice(cardItems) + ' руб.'
    card.appendChild(cardPrice);
}


