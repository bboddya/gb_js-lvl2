function Cards(id, imgUrl, name, count) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.name = name;
    this.count = count;
}

var myCard1 = new Cards(1,'img/nature_sm_1.jpg', 'Товар 1', 325);
var myCard2 = new Cards(2,'img/nature_sm_2.jpg', 'Товар 2', 735);
var myCard3 = new Cards(3,'img/nature_sm_3.jpg', 'Товар 3', 234);

var counter = 0;

var mas = [myCard1, myCard2, myCard3];

function init() {
    var catalog = document.getElementById("div");
    for (var i = 0; i < mas.length; i++) {

        var item = document.createElement('div');
        item.classList.add('card');
    
        var itemImg = document.createElement('img');
        itemImg.classList.add('card-img-top');
        itemImg.src = mas[i].imgUrl;
        item.appendChild(itemImg);
        
        var itemDescr = document.createElement('div');
        itemDescr.classList.add('card-body');
        item.appendChild(itemDescr);
    
        var itemName = document.createElement('h5');
        itemName.classList.add('name');
        itemName.classList.add('card-title');
        itemName.appendChild(document.createTextNode(mas[i].name));
        itemDescr.appendChild(itemName);
    
        var itemCount = document.createElement('p');
        itemCount.classList.add('count');
        itemCount.classList.add('card-text');
        itemCount.appendChild(document.createTextNode(mas[i].count + "\u20bd"));
        itemDescr.appendChild(itemCount);
    
        var itemBtn = document.createElement('a');
        itemBtn.classList.add('btn-primary');
        itemBtn.classList.add('btn');
        itemBtn.setAttribute('href', '#');
        itemBtn.appendChild(document.createTextNode('Добавить в корзину'));
        itemBtn.addEventListener('click', addToCart);
        itemDescr.appendChild(itemBtn);
        
        catalog.appendChild(item);
    }
}

var sum_count = document.querySelector('.sum_count');
    
function addToCart(obj) {
    
};


window.onload = init;