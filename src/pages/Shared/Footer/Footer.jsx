import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div >
            <div className=' text-center d-flex justify-content-center'>
                <p className='ms-4'><FaFacebook></FaFacebook></p>
                <p className='ms-4'><FaTwitter></FaTwitter></p>
                <p className='ms-4'><FaGoogle></FaGoogle></p>
                <p className='ms-4'><FaInstagram></FaInstagram></p>

            </div>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: Recipe Hub
                
            </div>
        </div>
    );
};

export default Footer;