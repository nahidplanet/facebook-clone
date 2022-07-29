import React from 'react';

const CreateRoom = () => {
    return (
        <div className="create-room px-3">
            <div className='bg-white px-4 py-3 my-3 rounded-md shadow-md'>
                <div className='flex items-center gap-5 '>
                    <div className='hover:bg-gray-200 border-2 border-[#CBE2FF] rounded-3xl px-3 py-2 flex items-center'>
                        <i data-visualcompletion="css-img" style={{ backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png')", backgroundPosition: "0 -219px", backgroundSize: "auto", width: "24px", height: "24px", backgroundRepeat: "no-repeat", display: "inline-block" }}></i>
                        <h1 className='font-semibold w-max ml-2'>Create Room</h1>
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>
                    <div className='profile'>
                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateRoom;