const { Router } = require('express');
const express = require('express');
const orders = require('../Orders/Orders');
const routes = express.Router();

const checked = (req, res, next)=>{
    const {order, clientName, price, status} = req.body;
    if(order =="" || price==""|| clientName==""|| status==""){
        res.status(400).send({error:"some field is empty"})
    }else{
        next();
    }
}

const checkedID = (req, res, next)=>{
    const {id} = req.params;
    const index = orders.orders.findIndex( Order => Order.id === id);
    if(index < 0){
        return res.status(400).send({error:"order not found"});
    }else{
        req.ID = id;
        req.Index = index;
        next();
    }
}

routes.use(express.json());

routes.get('/all', (req, res)=>{
    res.send(orders.getAll());
})

routes.get("/order/:id", checkedID, (req, res)=>{
    const index = req.Index;
    res.send(orders.GetOrder(index))

})

routes.post('/order/neworder', checked, (req, res)=>{
    const {order, clientName, price, status} = req.body;
    orders.NewOrders(order,clientName,price,status);
    return res.status(200).send("Pedido confirmado!");
})

routes.put('/order/uporder/:id', checkedID, checked, (req,res)=>{
    const id = req.ID;
    const index = req.Index;
    const {order, clientName, price, status} = req.body;
    orders.PutOrder(index, id,order, clientName, price, status);
    res.send(`Pedido atualizado com sucesso ${order}`);
})

routes.delete('/order/delete/:id', checkedID, (req, res)=>{
    const index = req.Index;
    orders.DeleteOrder(index);
    res.send("<p>Order deletado com sucesso</p>");

})

routes.patch('/order/ok/:id', checkedID, (req, res)=>{
    const index = req.Index;
    orders.OrderOK(index);
    res.send("Order finish!")
})

module.exports= routes;