'use client'

import React from 'react'

const UploadBox: React.FC<{ text: string; Icon: JSX.Element }> = ({ text, Icon }) => {
    return (
        <>
            <div className="border-primary border-2 flex items-center justify-center p-4 text-primary hover:bg-primary duration-300 hover:text-secondary cursor-pointer" onClick={() => {
                const dialog = document.getElementById('my_modal_1') as HTMLDialogElement;
                dialog.showModal();
            }}>
                <div className="flex items-center">
                    <div className="border-primary border-2 rounded-full p-2">
                        {React.cloneElement(Icon, {
                            className: "w-6 h-6  hover:text-secondary ",
                        })}
                    </div>
                    <span className="ml-3" dangerouslySetInnerHTML={{ __html: text }}></span>
                </div>
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-primary text-secondary">
                    <div>
                        <form method="dialog">
                            <input type="file" className="file-input w-full max-w-xs" />
                            <button className="btn btn-secondary text-white justify-end mr-0 ml-5">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default UploadBox