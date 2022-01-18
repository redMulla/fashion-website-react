import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>High range fashion</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='./images/man-fashion.jpg'
                        text='Discover the latest trends in men and women&#180;s fashion and style.'
                        label='Clothing'
                        path='/clothing'
                        />
                        <CardItem
                        src='./images/kids-fashion.jpg'
                        text='At Fashion, discover a wide selection of children and baby clothing.'
                        label='Kids'
                        path='/kids'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='./images/perfume.jpg'
                        text='Find discount perfume, discounts on leading brands of cheap women&#180;s perfumes &amp; men&#180;s colognes.'
                        label='Perfumes'
                        path='/perfumes'
                        />
                        <CardItem
                        src='./images/watch.jpg'
                        text='Purchase from trendy and traditional jewellery to the latest styles of brand name shoes &amp; accessories for Men, Women &amp; Kids.'
                        label='Accessories'
                        path='/accessories'
                        />
                        <CardItem
                        src='./images/tailor.jpg'
                        text='Get men&#180;s &amp; women&#180;s fashion tips and style advice daily from the experts.'
                        label='Clothing'
                        path='/clothing'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
