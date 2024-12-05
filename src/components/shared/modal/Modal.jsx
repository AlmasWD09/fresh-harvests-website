
import React, { useRef } from "react";

const Modal = ({closeModal}) => {
    const modalRef = useRef();

  const onClose = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
}
  return (
    <>
    <div
      ref={modalRef}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center  font-Poppins"
    >
      <div className="bg-white place-items-end  max-w-56 lg:max-w-3xl w-full h-[600px] lg:h-auto overflow-y-auto">
        <div className="flex items-center justify-between w-full bg-primary p-4 lg:p-6">
          <h1 className="text-lg lg:text-2xl font-semibold text-white">
            {" "}
            Booking Form
          </h1>
          <button onClick={closeModal}>
            {/* <Icon className=" text-white text-2xl" icon="fontisto:close" /> */}
          </button>
        </div>
        <form className="p-6 space-y-4 w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="fullname"
              type="text"
              placeholder="Full Name*"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="email"
              type="email"
              required
              placeholder="Email*"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="telephone"
              type="tel"
              placeholder="Phone*"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="list"
              type="text"
              placeholder="Choose car type"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="location"
              type="text"
              placeholder="Pick Up Location"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="date"
              type="text"
              placeholder="Pick Up Date"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="drop"
              type="text"
              placeholder="Drop Off Location"
            />
            <input
              className="p-4 border-2 border-gray-200 outline-none rounded-lg w-full"
              name="return"
              type="text"
              placeholder="Return Date"
            />
          </div>
          <textarea
            className="p-4  border-2 border-gray-200 outline-none rounded-lg w-full"
            name=""
            id=""
            placeholder="Additional Note"
            rows="6"
          ></textarea>
          <button className="p-4 bg-primary text-white font-semibold w-full">
            Booking Now
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Modal