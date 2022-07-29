import React from 'react';
import { Link } from 'react-router-dom';

const SingIn2 = () => {
    return (
        <div className=' '>
            {/* top section  */}
            <div className='bg-[#F0F2F5] '>
                <div className=" hero min-h-screen xm:w-full text-center lg:text-left lg:w-[980px] lg:mx-auto pb-[100px]">
                    <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:mt-28 xm:mt-5 ">
                        {/* left section  */}
                        <div className='mb-5 lg:mb-0 lg:mt-[-100px] lg:w-[114%]'>
                            <h1 className=' text-blue-500 text-6xl font-bold'>Facebook</h1>
                            <h3 className='  leading-8 text-[28px] text-gray-800 mt-4 sm:w-[500px]'>Facebook helps you connect and share with the people in your life.</h3>
                        </div>
                        {/* form section  */}
                        <div className='lg:flex flex-col justify-center items-end xm:w-full mx-auto'>
                            <div className="card rounded-lg w-[400px] bg-white border drop-shadow-xl text-primary-content">
                                <div className="card-body px-4">

                                    <div className='px-0 mx-0 w-full'>
                                        <input type="text"
                                            placeholder="Email address or phone number"
                                            className="input input-bordered text-lg w-full  " />
                                        <input type="text"
                                            placeholder="Password"
                                            className="input input-bordered text-lg w-full  my-3" />
                                    </div>
                                    <div className="justify-center ">
                                        <button className="btn border-0 bg-blue-500 hover:bg-blue-600 capitalize w-full text-lg font-bold ">Log In</button>
                                    </div>

                                    <div className='text-blue-600 mt-2 text-md text-center'>
                                        <span><Link to={""}>Forgotten account?</Link></span>
                                        <div className="divider"></div>
                                        <button className="btn border-0 bg-green-500 hover:bg-green-700 capitalize text-lg font-bold ">Create New Account</button>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full text-center mt-5'>
                                <p className=' text-sm mt-2'><strong>Create a Page</strong> for a celebrity, brand or business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section  */}
            <div className='w-[80%] m-auto pb-[100px] pt-[40px] text-gray-500 text-sm'>
                <div>English (UK)  বাংলা  অসমীয়া  हिन्दी नेपाली Bahasa Indonesia  العربية 中文(简体) Bahasa Melayu Español Português (Brasil)
                </div>
                <hr className='my-2' />
                <div>
                    Sign UpLog InMessenger Facebook LiteWatch Places Games Marketplace Facebook PayOculus Portal Instagram Bulletin Local Fundraisers Services Voting Information Centre Groups About Create adCreate Page Developers Careers Privacy Cookies AdChoices Terms Help Contact uploading and non-users Settings
                </div>
            </div>
        </div>
    );
};

export default SingIn2;