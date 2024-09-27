const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const Order = require('./components/Order_details');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json()); 

const uri = 'mongodb+srv://princeco10673:Maurya200@cluster0.el2za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/api/orders', async (req, res) => {
    console.log('Request body:', req.body); 
    try {
        const orderData = req.body;  
        const newOrder = new Order(orderData); 
        await newOrder.save(); 
        console.log('Received order:', orderData);
        res.status(201).json({ message: 'Order received successfully', order: newOrder });
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
