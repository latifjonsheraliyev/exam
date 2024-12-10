import React from 'react';
import apple from '../../../assets/Photos/Product-Details/apple.png';
import canon from '../../../assets/Photos/Product-Details/canon.png';
import lenovo from '../../../assets/Photos/Product-Details/lenovo.png';
import samsung from '../../../assets/Photos/Product-Details/samsung.png';
import sony from '../../../assets/Photos/Product-Details/sony.png';
import huawei from '../../../assets/Photos/Product-Details/huawei.png';
import topBanner from '../../../assets/Photos/Product-Details/topBanner.png';

const TopBrands = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Title Section */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-8">
                Top Brands
            </h1>
            <div className="divider divider-neutral my-4"></div>

            {/* Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12 my-12 sm:my-16 lg:my-28">
                <div className="flex justify-center items-center">
                    <img src={apple} className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" alt="Apple" />
                </div>

                <div className="flex justify-center items-center">
                    <img src={sony} className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain" alt="Sony" />
                </div>

                <div className="flex justify-center items-center">
                    <img src={samsung} className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" alt="Samsung" />
                </div>

                <div className="flex justify-center items-center">
                    <img src={canon} className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain" alt="Canon" />
                </div>

                <div className="flex justify-center items-center">
                    <img src={huawei} className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain" alt="Huawei" />
                </div>

                <div className="flex justify-center items-center">
                    <img src={lenovo} className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain" alt="Lenovo" />
                </div>
            </div>

            {/* Top Banner */}
            <div className="w-full relative">
                <img
                    src={topBanner}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    alt="Top Brands Banner"
                />
            </div>
        </div>
    );
};

export default TopBrands;
