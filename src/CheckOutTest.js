import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CheckOut.css'
import cake1 from './cakes/cupcake.PNG'


function CheckOutTest() {
    const [checkout, setCheckOut] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0;
        axios.get('http://localhost:5000/api/checkouts')
            .then(res => {
                setCheckOut(res.data)
                for (let i = 0; i < res.data.length; i++) total += res.data[i].price
                setTotal(total)
            })
    }, [])

    const removeLike = (id) => {
        axios.delete('http://localhost:5000/api/checkouts/' + id).then(res => { console.log(res.data) })
        axios.get('http://localhost:5000/api/checkouts')
            .then(res => {
                let total = 0;
                setCheckOut(res.data)
                for(let i=0;i<res.data.length;i++) total += res.data[i].price
                setTotal(total)
            })
    }

    return (
        <div className="checkoutOuterDiv">
                <div className="checkout">
                    <h3>CHECKOUT</h3>
                    {checkout.map((el, index) => <div className="arrangeLikes" key={el._id}>
                        <div className="checkOutStart">
                            <img src={cake1} alt="cake" />
                            <div>{el.title}</div>
                        </div>
                        <div className="checkOutRight">
                            <div>${el.price}</div>
                            <button className="checkOutEnd" onClick={() => removeLike(el._id)}>Remove</button>
                        </div>
                    </div>)}
                    <div className="arrangeLikes total" >
                        <div>Total:</div>
                        <div>${total}</div>
                    </div>
                </div>
            </div>
    )
}

export default CheckOutTest
