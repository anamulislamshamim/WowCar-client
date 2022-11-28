import React from 'react';
import { MdOutlineMoneyOffCsred, MdLocalConvenienceStore } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const WhyChooseWowCar = () => {
    const cardData = [
        {
            icon:<MdOutlineMoneyOffCsred />,
            name:"Free",
            description:"No haggling, no fees, just great prices"
        },
        {
            icon:<MdLocalConvenienceStore />,
            name:"Convenient",
            description:"3000+ trusted partners to buy or sell within a few clicks"
        },
        {
            icon:<VscWorkspaceTrusted />,
            name:"Trusted",
            description:"100s of independent reviews and the world’s most popular car"
        }
    ]
    return (
        <div className='mt-20'>
            <h1 className='text-center text-3xl font-bold'>The free, easy way to change your car online</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 my-20 gap-4'>
                {
                    cardData.map((item, idx) => <div key={ idx } className="shadow-md py-5">
                        <p className='text-5xl py-5' style={{"display":"flex","justifyContent":"center"}}>{item.icon}</p>
                        <h1 className='text-center pb-5 font-bold text-2xl'>{ item.name }</h1>
                        <p className='text-center w-3/5 mx-auto'>{ item.description }</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyChooseWowCar;