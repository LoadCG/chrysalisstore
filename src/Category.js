import React from 'react';
import Card from './Card.js';
import Card2 from './Card2.js';

const Category = () => {
    return (
        <div className='d-grid ' style={{backgroundColor:'#332f2b', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px', zIndex:'12'}}>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Category;