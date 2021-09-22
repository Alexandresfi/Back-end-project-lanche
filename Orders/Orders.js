const uuid = require('uuid')

module.exports = {
    orders: [
        {
            id: "lalgumas coisas",
            order: "O pedido em si",
            clientName: "Eu mesmo",
            price: 50.00,
            status:"Em preparação"
        }
    ],

    getAll(){
        return this.orders;
    },

    NewOrders(order, clientName, price, status){
        this.orders.push({
            id: uuid.v4(), order,
            clientName, price,status
        })

    },

    PutOrder(index, id,order, clientName, price, status){
        
            this.orders[index] ={id,order, clientName,price, status}
         
    },

    DeleteOrder(index,){
            this.orders.splice(index,1);
    },

    GetOrder(index){
            return this.orders[index];
    },

    OrderOK(index){
    
        return this.orders[index].status = "Pronto";
    }


}