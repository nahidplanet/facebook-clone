import React from 'react';

const Story = () => {
    return (
        <div>
            <div className='relative w-32 h-48 bg-cover bg-no-repeat bg-center rounded-2xl bg-[url(https://i.pinimg.com/736x/5b/0f/aa/5b0faa0ffe11afbd3a37396a8393482a--facebook-profile-profile-pictures.jpg)]'>
                <img className=' absolute left-4 top-4 border-2 rounded-full' src="header/profile.png" width="36" height="36" alt="story" />
            </div>
        </div>
    );
};

export default Story;