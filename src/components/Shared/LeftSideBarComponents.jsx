import React from 'react';

const LeftSideBarComponents = (props) => {
    const {icon,title} = props;
    return (
        <div className='flex items-center mr-2 px-2 hover:bg-gray-200 hover:border hover:rounded-xl  cursor-pointer'>
            <div>
                <img width={"30"} height={"30"} src={icon} alt="title" />
            </div>
            <div>
                <h2 className='text-md ml-3 my-3 font-semibold capitalize'>{title}</h2>
            </div>
        </div>
    );
};

export default LeftSideBarComponents;