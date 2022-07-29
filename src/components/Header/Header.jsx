import React from 'react';
import { SiFacebook,SiFacebookgaming } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineOndemandVideo ,MdGroups} from 'react-icons/md';
import { BiStore } from 'react-icons/bi';


const Header = () => {
    return (
        <div className='bg-blue-700 header-section border-b shadow-lg'>
            <div className='row'>
                <div className='header bg-white h-16 w-full grid grid-cols-[1fr_3fr_1fr] '>
                    {/* left menu  */}
                    <div className="left-menu flex w-4/12 items-center  pl-10">
                        <div className="logo">
                            <SiFacebook className='w-10 h-10 text-blue-400' />
                        </div>
                        <div className="search ml-3">
                            {/* <div class="form-control">
                                <div class="input-group">
                                    <button class="btn btn-squar">
                                        <svg className='text-white text-[6px]' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                    <input type="text" placeholder="Search…" class="input input-bordered" />
                                </div>
                            </div> */}
                            <input className='rounded-3xl border py-2 px-3' type="text" placeholder="Search Facebook" />
                        </div>
                    </div>
                    {/* middle menu  */}
                    <div className="center-menu flex  justify-evenly items-center">
                        <div className="home">
                            <AiFillHome className='w-9 h-9 text-gray-600' />

                        </div>
                        <div className="video">
                            <MdOutlineOndemandVideo className='w-9 h-9 text-gray-600' />

                        </div>
                        <div className="store">
                            <BiStore className='w-9 h-9 text-gray-600' />
                        </div>
                        <div className="group">
                            <MdGroups className='w-9 h-9 text-gray-600' />
                        </div>
                        <div className="gaming">
                        <SiFacebookgaming className='w-9 h-9 text-gray-600' />

                        </div>
                    </div>
                    {/* right menu  */}
                    <div className='right-menu flex  justify-evenly items-center'>
                        <div className="menu">
                            <AiFillHome className='w-9 h-9 text-gray-400' />
                        </div>
                        <div className="messenger">
                            <img width={"35px"} height={"35px"} src={"header/messenger.png"} alt="messenger" />
                        </div>
                        <div className="notification">
                            <img width={"35px"} height={"35px"} src={"header/bell.png"} alt="notification" />
                        </div>
                        <div className="profile">
                            <img width={"35px"} height={"35px"} src={"header/profile.png"} alt="profile" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;