import React from 'react';
import { Link } from 'react-router-dom';

const SingIn = () => {
    return (
        <div>
             {/* top section  */}
             <div className='min-h-max '>
                <div className="hero bg-[#F0F2F5] py-14">
                    <div className="hero-content flex-col text-center w-[400px]">
                        <h1 className='text-blue-500 text-5xl font-bold'>Facebook</h1>
                        <div className=''>
                            <div className="card rounded-lg w-[400px] bg-white border drop-shadow-xl text-primary-content">
                                <div className="card-body px-4">
                                    <h2 className="card-title flex-col text-[#333333] mb-3">Log in to Facebook</h2>
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

                                    <div className='text-blue-600 mt-2 text-md'>
                                    <span><Link to={""}>Forgotten account? ·</Link></span>
                                    <span><Link to={"singup"}>Sign up for Facebook</Link></span>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section  */}
            <div className='w-[80%] m-auto py-[150px] text-gray-500 text-sm'>
                <div>English (UK)  বাংলা  অসমীয়া  हिन्दी नेपाली Bahasa Indonesia  العربية 中文(简体) Bahasa Melayu Español Português (Brasil)
                </div>
                <hr  className='my-2' />
                <div>
                    Sign UpLog InMessenger Facebook LiteWatch Places Games Marketplace Facebook PayOculus Portal Instagram Bulletin Local Fundraisers Services Voting Information Centre Groups About Create adCreate Page Developers Careers Privacy Cookies AdChoices Terms Help Contact uploading and non-users Settings
                </div>
            </div>
        </div>
    );
};

export default SingIn;