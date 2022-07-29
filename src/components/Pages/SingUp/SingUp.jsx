import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div>
            {/* top section  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid-cols-2">
                    <div className='bg-blue-500 rounded border grid-col-1 w-36 h-96'>

                    </div>
                    <div className='grid-col-1'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">d nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;