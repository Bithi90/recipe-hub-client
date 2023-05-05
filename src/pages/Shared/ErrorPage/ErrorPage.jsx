import React from 'react';
import errorPage from '../../../assets/divi-404-page-template-desktop-preview.gif';

const ErrorPage = () => {
    return (
        <div className='fixed-top'>
            <img className='w-100' src={errorPage} alt="" />
           
        </div>
    );
};

export default ErrorPage;