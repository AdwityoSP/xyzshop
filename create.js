const { DetailShoes } = require('./models')
const { MasterShoes } = require('./models')
const { StockShoes } = require('./models')

DetailShoes.create({
    id: 1,
    name: 'Air',
    color: ["White"],
    size: [41],
}, {
    id: 2,
    name: 'AirMax',
    color: ["Black"],
    size: [42],
})
    .then(DetailShoes => {
        console.log(DetailShoes)
    })

MasterShoes.create({
    id: 1,
    name: 'Nike',
    price: 1000000
}, {
    id: 2,
    name: 'Adidas',
    price: 1000000
})
    .then(MasterShoes => {
        console.log(MasterShoes)
    })

StockShoes.create({
    id: 1,
    masterId: 1,
    detailId: 1,
    stock: 1
}, {
    id: 2,
    masterId: 2,
    detailId: 2,
    stock: 2
})
    .then(StockShoes => {
        console.log(StockShoes)
    })