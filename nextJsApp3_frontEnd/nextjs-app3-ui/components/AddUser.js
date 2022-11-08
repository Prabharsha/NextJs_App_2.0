import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const AddUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModel() {
        setIsOpen(false);
    }

    function openModel() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="container mx-auto my-8">
                <div className="h-12">
                    <button onClick={openModel} className="rounded bg-green-400 text-white px-6 py-2 font-semibold hover:bg-green-600"> + Add New User</button>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModel}>
                    <div className="min-h-screnn px-5 text-center">
                        <Transition.Child as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Add New User</Dialog.Title>
                                <div className="flex max-w-md max-auto">
                                    <div className="py-2 ">

                                        {/* for NIC */}
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-700 text-sm font-normal">
                                                User NIC
                                            </label>
                                            <input type="text" name="userNIC" className="h-10 w-96 border mt-2 px-2 py2-"></input>
                                        </div>

                                        {/* for Name */}
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-700 text-sm font-normal">
                                                User Name
                                            </label>
                                            <input type="text" name="userName" className="h-10 w-96 border mt-2 px-2 py2-"></input>
                                        </div>

                                        {/* for contact */}
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-700 text-sm font-normal">
                                                Contact Number
                                            </label>
                                            <input type="text" name="userAddress" className="h-10 w-96 border mt-2 px-2 py2-"></input>
                                        </div>

                                        <div className="h-14 my-4 space-x-4 pt-4">
                                        <button className=" rounded bg-green-500 text-white px-6 py-2 font-semibold hover:bg-green-600">
                                            Register User
                                        </button>

                                        <button className="rounded bg-red-500 text-white px-6 py-2 font-semibold hover:bg-red-600">
                                            cancel
                                        </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddUser