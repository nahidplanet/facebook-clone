import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

const SinglePost = () => {
    return (
        <div className="posts">
                            <div className='bg-white p-3 m-3 rounded-md border shadow-sm'>
                                {/* post header / profile details  */}
                                <div className='flex items-center'>
                                    <div className='profile'>
                                        <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                    </div>
                                    <div className='ml-2 leading-2'>
                                        <div className='name'>
                                            <h1 className='font-semibold'>Nahid Hasan</h1>
                                        </div>
                                        <div className='privacy text-sm'>
                                            <span className='time'>2h</span> . <span>O</span>
                                        </div>
                                    </div>
                                </div>
                                {/* post details  */}
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus amet voluptatum eligendi quo sed placeat! Recusandae sit eius debitis aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda fuga vero illo obcaecati commodi, dolorem beatae praesentium labore, recusandae natus dolore inventore enim? Earum eius animi vero ipsum repellendus!

                                {/* react  */}
                                <div className='react flex justify-between mt-3'>
                                    <div>😂❤️😥 <span>rakibl islam and 8 others</span></div>
                                    <div><span>2 comments</span></div>
                                </div>
                                <div className='divider my-0 py-0'></div>

                                {/* like or comments section  */}
                                <div className='grid grid-cols-3 '>
                                    <div className='text-center py-1 px-2 rounded-md hover:bg-gray-300 cursor-pointer font-semibold ' >like</div>
                                    <div className='text-center py-1 px-2 rounded-md hover:bg-gray-300 cursor-pointer font-semibold ' >comments</div>
                                    <div className='text-center py-1 px-2 rounded-md hover:bg-gray-300 cursor-pointer font-semibold ' >share</div>
                                </div>
                                <div className='divider my-0 py-0'></div>

                                {/* comment section  */}
                                <div>
                                    <div className='flex items-center'>
                                        <div className='profile'>
                                            <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                        </div>
                                        <div className='ml-2 leading-2 bg-gray-200 px-2 py-1 rounded-xl'>
                                            <div className='name'>
                                                <h1 className='font-semibold'>Nahid Hasan</h1>
                                            </div>
                                            <div className='comment '>
                                                <p className='text-sm'>Good Work. love you all❤️</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* comment react  */}
                                    <div className='flex'>
                                        <div className='w-10 h-10'></div>
                                        <div className='grid grid-cols-3 w-40'>
                                            <div className='text-center text-sm cursor-pointer hover:underline' >like</div>
                                            <div className='text-center text-sm cursor-pointer hover:underline' >comment</div>
                                            <div className='text-center text-sm cursor-pointer hover:underline' >2m</div>
                                        </div>
                                    </div>

                                    {/* reply comment input field */}
                                </div>
                                <div className=' '>
                                    <div className='flex '>
                                        <div className='profile'>
                                            <img width={"40"} height={"40"} src={"header/profile.png"} alt="profile" />
                                        </div>
                                        <div className='flex border bg-gray-200 rounded-3xl px-3 py-2 w-full ml-2'>
                                            <input type="text" placeholder="Write an answer..." className=" w-full overflow-hidden outline-none bg-transparent  " />
                                            <div className='flex gap-2 items-center '>
                                                <BsEmojiSmile></BsEmojiSmile>
                                                <BsEmojiSmile></BsEmojiSmile>
                                                <BsEmojiSmile></BsEmojiSmile>
                                                <BsEmojiSmile></BsEmojiSmile>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
    );
};

export default SinglePost;