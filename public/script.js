class List {
    items = []

    constructor(item = []) {
        this.item = []
    }

    add(item) {
        this.items.push(item)
        this.render()
    }

    remove() {
        //todo
    }

    render() {
        this.items.forEach(product => {
            product.render()
        })
    }
}

class ProductList extends List {
    _cartInstance = null
    
    constructor(CartInstance) {
        super()
        this._cartInstance = CartInstance

        let products = this.fetchProduct()
        products.then(() => {
            this.render()
        })
    }

    fetchProduct () {
       const result = fetch('http://localhost:3000/database/page1.json')
       return result 
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.items = data.data.map(cur => {
                return new Product(cur, this._cartInstance)
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        const placeToRender = document.querySelector(".card_list");
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this.items.forEach(product => {
                product.render(placeToRender)
            })
        }
    }
}

class Cart extends List {
    constructor() {
        super()
        this.init()
    }
    
    init() {
        const block = document.createElement('div')
        block.classList.add('cart')

        const list = document.createElement('div')
        list.classList.add('cart_list')
        block.appendChild(list)

        const ButtonInstnce = new Button('Корзина', () => {
            list.classList.toggle('show')       
        })
        block.appendChild(ButtonInstnce.getTemplate())
        
        const placeToRender = document.querySelector('.cart_list')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }
    }

    render() {
        const placeToRender = document.querySelector('.cart_list')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this.items.forEach(product => {
                product.render(placeToRender)
            }) 
        }
    }
}
class Product {
    imgUrl = null;
    name = '';
    count = 0;
    _cartInstance = null;

    constructor({name, imgUrl, count}, CartInstance) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.count = count;
        this._cartInstance = CartInstance
    }

    render(placeToRender) {
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('card');
            block.innerHTML = `
            <img src="${this.imgUrl}" class="card-img">
            <div class="card-body">
            <h5 class="name card-title">${this.name}</h5>
            <span class="count card-text">${this.count} \u20bd</span>
            </div>
            `
            const AddButton = new Button('Добавить в корзину', () => {
                this._cartInstance.add(new ProductCart(this))
            });
            block.appendChild(AddButton.getTemplate());
            
            placeToRender.appendChild(block);
        }
    }
}

class ProductCart extends Product {
    constructor(props) {
        super(props)
    }
    
    render(placeToRender) {
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `${this.name} = ${this.count}`
            placeToRender.appendChild(block)
        }
    }
}

const CartInstance = new Cart()
const ListInstance = new ProductList(CartInstance)