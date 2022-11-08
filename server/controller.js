const houses = require('./db.json')
const globalId = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    }, 
    
    deleteHouse: (req, res) => {
        let index  = houses.findIndex(houses => +houses.id === +req.params.id)
        houses.splice(index, 1)

        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        
        houses.push(newHouse)
        res.status(200).send(houses)

        globalId++
    },

    updateHouse: (req, res) => {        
        let {type} = req.body //str of plus or minus
        let {id} = req.params

        let index = houses.findIndex(house => +house.id === +id)
        if(type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus' && houses[index].price > 0) {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === 'minus' && houses[index].price <= 0) {
            res.status(400).send('Cannot go below $0!')
        }

    }

}