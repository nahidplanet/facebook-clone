import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import CreatePost from '../../OthersComponents/CreatePost';
import CreateRoom from '../../OthersComponents/CreateRoom';
import SinglePost from '../../OthersComponents/SinglePost';
import HomePageLeftSideBar from '../../Shared/HomePageLeftSideBar';
import HomePageLeftSideBarShotcuts from '../../Shared/HomePageLeftSideBarShotcuts';
import Story from '../../Shared/Story';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { RiVideoAddFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid  grid-cols-[1fr_3fr_1fr] bg-[#F0F2F5] px-3 ' >

                {/* left sidebar section */}
                <div className="left-sidebar overflow-y-auto h-screen ">
                    <HomePageLeftSideBar></HomePageLeftSideBar>
                    <div className="divider px-3"></div>
                    <div className='flex items-center justify-between px-3'>
                        <p className='font-bold text-gray-400 capitalize'>Your shortcuts</p>
                        <Link to={""} className="text-blue-700">Edit</Link>
                    </div>
                    <HomePageLeftSideBarShotcuts></HomePageLeftSideBarShotcuts>

                </div>

                {/* Middle section (posts)  */}
                <div className="posts overflow-y-auto h-screen px-20">
                    {/* story section  */}
                    <div className=''>
                        <div className="story-section flex gap-2 my-4 ">
                            <Story></Story>
                            <Story></Story>
                            <Story></Story>
                            <Story></Story>
                            <Story></Story>
                        </div>

                        {/* create post section  */}
                        <CreatePost></CreatePost>

                        {/* room create  */}
                        <CreateRoom></CreateRoom>

                        {/* single-post  */}
                        <SinglePost></SinglePost>
                        <SinglePost></SinglePost>
                        <SinglePost></SinglePost>

                    </div>
                </div>

                {/* right sidebar sections here  */}
                <div className="right-sidebar overflow-y-auto h-screen px-3 pt-4">
                    {/* page information  */}
                    <div className='page information'>

                        {/* title  */}
                        <div className='flex items-center justify-between px-3'>
                            <p className='font-bold text-gray-400 capitalize'>Your Pages and profiles</p>
                            <Link to={""} className="text-blue-700 font-bold">...</Link>
                        </div>

                        {/* page and notification  */}
                        <div className='page and notification'>
                            <div>
                                <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                    <div className='profile '>
                                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                    </div>
                                    <div className='flex  w-full ml-2 '>
                                        <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                    </div>
                                </div>
                            </div>
                            {/* inner info  */}
                            <div className='inner pl-3'>
                                <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer'>
                                    <div className='profile'>
                                        <FaRegBell className='w-12 h-12 p-2' />
                                    </div>
                                    <div className='flex  w-full ml-2'>
                                        <h1>20+ Notifications</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='inner pl-3'>
                                <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer capitalize'>
                                    <div className='profile'>
                                        <HiOutlineSpeakerphone className='w-12 h-12 p-2' />

                                    </div>
                                    <div className='flex  w-full ml-2'>
                                        <h1>create Promotions</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='divider'></div>

                    {/* request information  */}
                    <div className="request-information">
                        {/* title  */}
                        <div className='flex items-center justify-between px-3'>
                            <p className='font-bold text-gray-400 capitalize'>Friend requests</p>
                            <Link to={""} className="text-blue-700 font-bold">See All</Link>
                        </div>

                        {/* friend request section  */}
                        <div className='friendRequest mt-4'>
                            <div className='flex items-start hover:bg-gray-200 px-1 py-3 rounded-lg'>
                                <div className='profile'>
                                    <img width={"35"} height={"35"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='ml-2 leading-2'>
                                    {/* inner info  */}
                                    <div>
                                        <div className='name'>
                                            <h1 className='font-semibold'>Rakibul hasan</h1>
                                        </div>
                                        <div className='mutual-friend flex items-center justify-between'>
                                            <div className='profile-icon flex items-center mr-1'>
                                                <img width={"15"} height={"35"} src={"header/profile.png"} alt="profile" />
                                                <img width={"15"} height={"35"} src={"header/profile.png"} alt="profile" />
                                            </div>
                                            <div className='text-sm'>
                                                <span className='text-gray-500'>2 mutual friends</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* confirm or delete buton  */}
                                    <div className="confirm-or-delete-buttons flex items-center justify-between mt-3">
                                        <div>
                                            <button class="px-3 py-2 rounded-lg border text-white bg-blue-600 capitalize font-semibold">confirm</button>
                                        </div>
                                        <div>
                                            <button class="px-3 py-2 rounded-lg border text-gray-800 bg-gray-300 capitalize font-semibold">delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='divider'></div>

                    {/* Chat list  */}
                    <div className="request-information">
                        {/* title  */}
                        <div className='flex items-center justify-between px-3'>
                            <p className='font-bold text-gray-400 capitalize'>Chat</p>

                            <div className='flex items-center justify-around gap-3'>
                                <RiVideoAddFill />
                                <AiOutlineSearch />
                                <p>...</p>
                            </div>
                        </div>

                        {/* all user active  */}
                        <div className="active-users mt-4">
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            {/* single user  */}
                            <div className='flex items-center hover:bg-gray-200 hover:rounded-lg px-3 py-2 cursor-pointer '>
                                <div className='profile '>
                                    <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                </div>
                                <div className='flex  w-full ml-2 '>
                                    <h1 className='text-gray-800 text-md font-semibold'> Pretty_heart</h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>








                </div>
            </div>

        </div>
    );
};

export default Home;