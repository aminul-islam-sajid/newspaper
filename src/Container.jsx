import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='px-16'>
            {children}
        </div>
    );
};

export default Container;