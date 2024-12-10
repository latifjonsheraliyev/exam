import React from 'react';
import { MdEditSquare, MdOutlineDownloadDone } from 'react-icons/md';

const SecurityAccessModal = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={() => document.getElementById('my_modal_33').showModal()}><MdEditSquare className='w-8 h-8' /></button>
            <dialog id="my_modal_33" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl text-center">Edit Security settings</h3>

                    {/* form section  */}
                    <form className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-lg bg-gray-700 text-white border-white border-2 hover:text-gray-700 hover:border-gray-700 hover:bg-white text-xl flex items-center "> <MdOutlineDownloadDone /> Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default SecurityAccessModal;