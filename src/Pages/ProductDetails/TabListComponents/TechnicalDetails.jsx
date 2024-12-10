import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const TechnicalDetails = ({ product }) => {
    const { name, modelName, rate, screenSize, processor, gpuBrand, driveSize, color, brand, WebCam, WarrantyDetails, Speaker, KeyboardType, BatteryCapacity } = product;
    return (
        <div id='Technical-Details' className='my-20 lg:max-w-screen-2xl mx-auto'>
            <h1 className='text-3xl  font-semibold mb-6 text-[#0C68F4]'>Technical Details</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-blue-200 text-blue-800'>
                            <th></th>
                            <th className='text-2xl  font-semibold'>Name</th>
                            <th className='text-2xl font-semibold'>Description</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        <tr >
                            <th className='text-xl'>1</th>
                            <td className='text-2xl font-semibold '>Name</td>
                            <td className='text-xl font-semibold text-gray-500'>{name}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th className='text-xl'>2</th>
                            <td className='text-2xl font-semibold'>Model Name</td>
                            <td className='text-xl font-semibold text-gray-500'>{modelName}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th className='text-xl'>3</th>
                            <td className='text-2xl font-semibold'>Brand</td>
                            <td className='text-xl font-semibold text-gray-500'>{brand}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th className='text-xl'>4</th>
                            <td className='text-2xl font-semibold'>Rate</td>
                            <td className='text-xl font-semibold text-gray-500'>{rate}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th className='text-xl'>5</th>
                            <td className='text-2xl font-semibold'>Display</td>
                            <td className='text-xl font-semibold text-gray-500'>{screenSize}</td>
                        </tr>
                        {/* row 6 */}
                        <tr >
                            <th className='text-xl'>6</th>
                            <td className='text-2xl font-semibold'>Graphics</td>
                            <td className='text-xl font-semibold text-gray-500'>{gpuBrand}</td>
                        </tr>
                        {/* row 7 */}
                        <tr >
                            <th className='text-xl'>7</th>
                            <td className='text-2xl font-semibold'>Processor</td>
                            <td className='text-xl font-semibold text-gray-500'>{processor}</td>
                        </tr>
                        {/* row 8 */}
                        <tr >
                            <th className='text-xl'>8</th>
                            <td className='text-2xl font-semibold text-nowrap'>Storage Capacity</td>
                            <td className='text-xl font-semibold text-gray-500'>{driveSize}</td>
                        </tr>
                        {/* row 9 */}
                        <tr>
                            <th className='text-xl'>9</th>
                            <td className='text-2xl font-semibold'>WebCam</td>
                            <td className='text-xl font-semibold text-gray-500'>{WebCam}</td>
                        </tr>
                        {/* row 10 */}
                        <tr>
                            <th className='text-xl'>10</th>
                            <td className='text-2xl font-semibold'>Speaker</td>
                            <td className='text-xl font-semibold text-gray-500'>{Speaker}</td>
                        </tr>
                        {/* row 11 */}
                        <tr>
                            <th className='text-xl' >11</th>
                            <td className='text-2xl font-semibold'>Keyboard Type</td>
                            <td className='text-xl font-semibold text-gray-500'>{KeyboardType}</td>
                        </tr>
                        {/* row 12 */}
                        <tr>
                            <th className='text-xl'>12</th>
                            <td className='text-2xl font-semibold'> Battery Capacity</td>
                            <td className='text-xl font-semibold text-gray-500'>{BatteryCapacity}</td>
                        </tr>
                        {/* row 13 */}
                        <tr>
                            <th className='text-xl'>13</th>
                            <td className='text-2xl font-semibold'> Colors</td>
                            <td className='text-xl font-semibold text-gray-500'>Black & {color}</td>
                        </tr>
                        {/* row 14 */}
                        <tr>
                            <th className='text-xl'>12</th>
                            <td className='text-2xl font-semibold'> Warranty Details</td>
                            <td className='text-xl font-semibold text-gray-500'>{WarrantyDetails}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TechnicalDetails;