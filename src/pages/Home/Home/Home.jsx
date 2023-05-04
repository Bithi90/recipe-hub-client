import React from 'react';
import baner from '../../../assets/images (3).jpg';

const Home = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img className='w-50' src={baner} alt="" />
            <div className='text-center pt-4 '>
                <h1>𝓦𝓮𝓵𝓬𝓸𝓶𝓮 <br /> To My <br /> ℝ𝕖𝕔𝕚𝕡𝕖 ℍ𝕦𝕓</h1>
                <h1 className='.text-danger-emphasis'>𝒴𝑜𝓊 𝒞𝒶𝓃 𝐹𝒾𝓃𝒹 𝒯𝒽𝑒 𝑅𝑒𝒸𝒾𝓅𝑒 <br /> 𝒴𝑜𝓊 𝐿𝒾𝓀𝑒 𝐼𝒻 𝒴𝑜𝓊 𝒲𝒶𝓃𝓉</h1>
            </div>
        </div>
    );
};

export default Home;