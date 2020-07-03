import React, { Component } from 'react'
import cake1 from './cakes/blackwedding.PNG'

class Test2 extends Component {
    state = {
        liked: [{ image: cake1,title: 'The black wedding cake',paragraph: 'The most beautiful cake ever with chocolate and rose topped'}]
    }

    render() {
        return (
            <div>
                {this.props.cake}
                <button onClick={() => this.props.changeCake(this.state.newCake)}>Click</button>
            </div>
        )
    }
}

export default Test2
