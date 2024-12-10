import React from 'react';
import Marquee from "react-fast-marquee";
import progress1 from '../../../assets/Photos/Product-Details/progressIcon1.png'
import progress2 from '../../../assets/Photos/Product-Details/progressIcon2.png'
import progress3 from '../../../assets/Photos/Product-Details/progressIcon3.png'
import progress4 from '../../../assets/Photos/Product-Details/progressIcon4.png'
const Progress = () => {
    return (
        <div className='mx-20 my-20'>
            <Marquee speed={60} gradientWidth={100} gradient={true} pauseOnClick={true} className="h-full gap-20 my-10">
                {/* card 1 */}
                <div className="card bg-base-100 mr-44">
                    <div className="card-body items-center">
                        <img src={progress1} className='w-16 h-16' alt="" />
                        <p className='text-2xl'>Latest and Greatest Tech</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 mr-44">
                    <div className="card-body items-center">
                        <img src={progress2} className='w-16 h-16' alt="" />
                        <p className='text-2xl'>Guarantee</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 mr-44">
                    <div className="card-body items-center">
                        <img src={progress3} className='w-24 h-16' alt="" />
                        <p className='text-2xl'>Free Shipping over 1000$</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 ">
                    <div className="card-body items-center">
                        <img src={progress4} className='w-16 h-16' alt="" />
                        <p className='text-2xl'>24/7 Support</p>
                    </div>
                </div>

            </Marquee>
        </div>
    );
};

export default Progress;