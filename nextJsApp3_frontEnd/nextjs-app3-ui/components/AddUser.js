import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment,useState } from 'react'

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
                    <button onClick={openModel} className="rounded bg-green-400 text-white px-6 py-2 font-semibold hover:text-green-700"> + Add New User</button>
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
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddUser