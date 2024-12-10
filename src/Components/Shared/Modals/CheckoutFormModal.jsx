import React from 'react';
import { FaEdit } from 'react-icons/fa';
import CheckoutFromMap from '../../Maps/CheckoutFromMap';

const CheckoutFormModal = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_8').showModal()}><FaEdit /></button>
<dialog id="my_modal_8" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <CheckoutFromMap />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default CheckoutFormModal;