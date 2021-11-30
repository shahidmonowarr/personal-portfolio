import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div>
            <div class='text-center'>
                <h1 className='text-center'>Blogs coming soon</h1>
                <Link to='/'>
                    <button class='primary'>Go To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Blogs;