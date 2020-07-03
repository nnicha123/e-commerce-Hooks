import React, { useState, useEffect } from 'react'
import './Favourites.css'
import axios from 'axios'
import cake2 from './cakes/redglazed.jpg'

function Favourites() {

    const [favourite, setFavourite] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/favourites').then(res => setFavourite(res.data))
    }, [])

    const removeLike = (id) => {
        axios.delete('http://localhost:5000/api/favourites/' + id).then(res => console.log(res.data))
        axios.get('http://localhost:5000/api/favourites').then(res => setFavourite(res.data))
    }

    return (
        <div className="favouritesOuterDiv">
            <div className="favourites">
                <h3>FAVOURITES</h3>
                {favourite.map((el, index) => <div className="arrangeLikes" key={el._id}>
                    <div className="favouriteStart">
                        <img src={cake2} alt="cake" />
                        <div>{el.title}</div>
                    </div>
                    <div className="favouriteEnd" onClick={() => removeLike(el._id)}>
                        <div>Remove</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Favourites
