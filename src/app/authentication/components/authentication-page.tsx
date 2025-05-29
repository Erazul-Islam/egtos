import HeadingDetails from '@/components/custom/heading-details';
import Image from 'next/image';
import React from 'react';

const AuthenticationPage = () => {
    return (
        <div className='min-h-screen flex md:flex-row flex-col'>
            <div className='bg-[#F2F4F7] max-w-[548px] w-full'>
                 <Image className=' flex justify-center' src={'/login/login-1.png'} width={411} height={499} alt='' />
                 <p className='text-[#00A099] font-semibold text-2xl'>Welcome back, we’ve kept your seat warm</p>
                 <HeadingDetails value="It’s good to see you again. Let’s pick up where you left off" />
            </div>
            <div>

            </div>
        </div>
    );
};

export default AuthenticationPage;