class List {
    items = []

    constructor() {
        let products = this.fetchProduct()
        products = products.map(cur => {
            return new Product(cur)
        })
        this.items.push(...products)
        this.render()
    }

    fetchProduct () {
        return [
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
            {name: 'Salamander', imgUrl: 'img/salamander.jpg', count: 3456},
        ]
    }

    render() {
        this.items.forEach(product => {
            product.render()
        })
    }
}

class Product {
    imgUrl = null;
    name = '';
    count = 0;

    constructor({name, imgUrl, count}) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.count = count;
    }

    addToCart() {
        const cartList = document.querySelector(".cart__list");
        const sumCount = document.querySelector(".sum-count");
        let sum = 0, price;
        if (cartList) {
            let item = document.createElement('div');
            item.classList.add('sm-card');
            item.innerHTML = `Товар: ${this.name} = ${this.count}`;

            price = this.count
            sum += price;

            console.log(sum)
            console.log(price)
            console.log(this.count)
            cartList.appendChild(item);
            sumCount.textContent = `Стоимость покупки:${sum}`;
        }
    }

    render() {
        const catalog = document.getElementById("div");
        if (catalog) {
            let item = document.createElement('div');
            item.classList.add('card');
        
            let itemImg = document.createElement('img');
            itemImg.classList.add('card-img-top');
            itemImg.src = this.imgUrl;
            item.appendChild(itemImg);
            
            let itemDescr = document.createElement('div');
            itemDescr.classList.add('card-body');
            item.appendChild(itemDescr);
        
            let itemName = document.createElement('h5');
            itemName.classList.add('name');
            itemName.classList.add('card-title');
            itemName.appendChild(document.createTextNode(this.name));
            itemDescr.appendChild(itemName);
        
            let itemCount = document.createElement('p');
            itemCount.classList.add('count');
            itemCount.classList.add('card-text');
            itemCount.appendChild(document.createTextNode(this.count + "\u20bd"));
            itemDescr.appendChild(itemCount);
        
            let itemBtn = document.createElement('a');
            itemBtn.classList.add('btn-primary');
            itemBtn.classList.add('btn');
            itemBtn.setAttribute('href', '#');
            itemBtn.appendChild(document.createTextNode('Добавить в корзину'));
            itemBtn.addEventListener('click', () => {
                this.addToCart()
            });
            itemDescr.appendChild(itemBtn);
            
            catalog.appendChild(item);
        }
    }
}


const ListInstance = new List()