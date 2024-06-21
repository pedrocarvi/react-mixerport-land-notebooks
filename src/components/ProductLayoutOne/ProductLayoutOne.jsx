import React from 'react';

const ProductLayoutOne = ({ title, subtitle, description, imageSrc }) => {
    return (
        <div className="section product">
            <div className="section-sub-container">
                <h2>{subtitle}</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className='btn-info'>Más información</button>
                <img src={imageSrc} alt={`${title.toLowerCase().replace(/ /g, '-')}`} width={500} />
            </div>
        </div>
    );
};

export default ProductLayoutOne;
