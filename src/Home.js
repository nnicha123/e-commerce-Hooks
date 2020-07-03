import React, { Component } from 'react'
import './Home.css'
import cake1 from './cakes/blackwedding.PNG'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
import cake5 from './cakes/bluewedding.PNG'
import cake6 from './cakes/lightpinkcake.PNG'
import cake7 from './cakes/macaroons.PNG'
import cake8 from './cakes/orangecake.PNG'
import cake9 from './cakes/pinkcake1.PNG'
import cake10 from './cakes/redglazed.jpg'
import cake11 from './cakes/turquoise.PNG'
import cake12 from './cakes/pinkcake2.PNG'
import axios from 'axios'
import {Button} from 'antd'
import { ShoppingFilled,HeartFilled,UserOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';

class Home extends Component {
    state = {
        cakes: [
            { image: cake1,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:30},
            { image: cake2,title: 'The pink jolly cupcake',paragraph: 'The most delicate pink cupcake ever made!',price:20},
            { image: cake3,title: 'The chocolate drip cake',paragraph: 'Topped with sour raspberries and 3 icecream layers',price:25},
            { image: cake4,title: 'The icecream cone cake',paragraph: 'Sprinkled with joy and dripping with delicious jam',price:12},
            { image: cake5,title: 'The blue wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:13},
            { image: cake6,title: 'The light pink cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:10},
            { image: cake7,title: 'Colorful Macaroons',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:23},
            { image: cake8,title: 'Soft Orange Cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:43},
            { image: cake9,title: 'Strawberry pink',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:52},
            { image: cake10,title: 'The Red-glazed cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:13},
            { image: cake11,title: 'Ocean cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:34},
            { image: cake12,title: 'The Pink drip cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:40},
        ],
        liked: [{ image: cake12,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped',price:12},],
        checkOut:[]
    }
    checkLike = (index) => {
        const likedItem = this.state.cakes[index]
        console.log(likedItem)
        axios.post('http://localhost:5000/api/favourites',likedItem).then(res => console.log(res))
    }
    checkOutItem = (index) => {
        const newCheckout = this.state.cakes[index]
        axios.post('http://localhost:5000/api/checkouts',newCheckout).then(res => console.log(res))
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <div className="promotion">
                        <h3>The best promotions ever!</h3>
                    </div>
                </div>
                <div className="advertisementText">
                    Choose from a wide range of products!
                </div>
                <div className="products">
                    <div className="productCardWrapper">
                        {this.state.cakes.map((cake, index) => <div className="productCard">
                            <img src={cake.image} alt="cake" />
                            <div className="title">{cake.title}</div>
                            <p className="description">{cake.paragraph}</p>
                            <div className="icons">
                                <Button   icon={<HeartFilled style={{fontSize:'25px'}}/>} style={{color:'maroon',background:'white',border:'none'}} onClick={() => this.checkLike(index)}></Button>
                                <Button  icon={<ShoppingFilled style={{fontSize:'25px'}}/>} style={{color:'maroon',background:'white',border:'none'}} onClick={() => this.checkOutItem(index)}></Button>
                                <Button  icon={<UserOutlined style={{fontSize:'25px'}}/>} style={{color:'maroon',border:'none',background:'white'}}></Button>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className="advertisementText" style={{ textAlign: 'center' }}>
                    Hope you enjoyed the page!
                </div>
            </div>
        )
    }
}

export default Home
