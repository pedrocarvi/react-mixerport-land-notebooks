import React from 'react';

const ProductLayoutOne = ({ title, subtitle, description, imageSrc, productRoute }) => {
    return (
        <div className="section product">
            <div className="section-sub-container">
                <h2>{subtitle}</h2>
                <h3>{title}</h3>
                <p className='product-description'>{description}</p>
                <a href={productRoute} target='_blank'>
                    <button className='btn-info'>Más información</button>
                </a>
                <img src={imageSrc} alt={`${title.toLowerCase().replace(/ /g, '-')}`} className='product-image' />
            </div>
        </div>
    );
};

export default ProductLayoutOne;
