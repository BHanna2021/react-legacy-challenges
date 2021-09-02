// url for fetch: https://dog.ceo/api/breeds/image/random
/*
return message in JSON:
{
    "message": "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",
    "status": "success"
}
*/

import React, { Component } from'react';

export class DogImage extends Component {
    constructor() {
        super()
        this.state = {
            dogPic: 'string',
            apiMssg: 'string'
        }
    }

    fetchDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
        }).then(res => res.json())
        .then (res => {
            this.setState({
                dogPic: res.message,
                apiMssg: res.status
            });
        })
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.fetchDogPic()
    }

    render() {
        return(
            <div>
            <img src={this.state.dogPic} alt="This should be a dog pic." style={{height: '50%', width: '50%'}} />
            <br />
            <button onClick={this.fetchDogPic}>New Dog!</button>
            </div>
        )
    }
}