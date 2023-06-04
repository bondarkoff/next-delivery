import React from 'react';

const Price = ({ price }) => {
    return (
        <p>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'UAH',
            }).format(price)}
        </p>
    );
};

export default React.memo(Price);
