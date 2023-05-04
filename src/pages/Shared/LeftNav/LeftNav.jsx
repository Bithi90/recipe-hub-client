import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LeftNav = () => {
    return (
        <div>
            <div>
                <h2 className='mb-4'>Login With</h2>
            <Button className='mb-2' variant="info"><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div>
                

            </div>
        </div>
    );
};

export default LeftNav;