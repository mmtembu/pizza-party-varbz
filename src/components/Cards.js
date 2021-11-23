import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image9 from '../images/generations.jpg'
import image2 from '../images/Scandal.jpg'
import image3 from '../images/uzalo.png'
import image4 from '../images/skeem-saam.jpg'
import image8 from '../images/img-8.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={image9}
                            text="Two iconic figures in the world of the cut-throat, media landscape and advertising industry."
                            label="Drama"
                            path="/services"
                        />
                        <CardItem 
                            src={image2}
                            text="Melting pot life depicted through the heightened and entertaining genre of soap."
                            label="Soap"
                            path="/services"
                        />
                        <CardItem 
                            src={image3}
                            text="Families set on a collision course that set motion a chain of events."
                            label="Drama | Soap"
                            path="/services"
                        />
                        <CardItem 
                            src={image4}
                            text="Series that follows the lives of three boys who grapple with tough conflicts."
                            label="Drama"
                            path="/services"
                        />
                        <CardItem 
                            src={image8}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Adrenaline"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
