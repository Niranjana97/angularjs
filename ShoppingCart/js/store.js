//----------------------------------------------------------------
// store (contains the products)

function store() {
    this.products = [
        new product("phone1", "Gionee s6", 130.6, 90),
        new product("phone2", "Lenovo K3 note", 150, 90),
        new product("phone3", "Lenovo vibe", 143.5, 120),
        new product("phone4", "Samsung galaxy", 110.3, 50),
        new product("phone5", "Moto G3 ", 160.77, 100),
        new product("phone6", "Micromax Canvas ", 165.33, 50),
        new product("phone7", "Acer Liquid Z530", 149.43, 100),
        new product("phone8", "Acer Liquid E3", 154.39, 50),
       
    ];
    
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
