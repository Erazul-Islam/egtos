import HeadingButton from '@/components/custom/heading-button';
import HeadingDetails from '@/components/custom/heading-details';
import Image from 'next/image';
import React from 'react';

const EgtosModel = () => {
    return (
        <div className='flex justify-between my-10 md:my-20 flex-col md:flex-row gap-6'>
            <div className='max-w-[561px] md:order-1 order-2 max-h-[561px] h-full py-6 px-4 rounded-2xl w-full bg-[#EFFEFC]'>
                <p className='px-2 py-2 rounded-full border border-[#EFFEFC] text-white text-center w-[111px] bg-[#475467]'>About us</p>
                <HeadingDetails value="Beyond internal optimization, EGTOS opens doors to a vast ecosystem of pre-vetted, global specialists. Our platform streamlines the often cumbersome process of finding and onboarding top-tier talent, offering real-time access to the precise expertise your projects demand—all at a fraction of the cost associated with traditional consulting firms." />
                <HeadingDetails value="Our unique Excess Capacity Trading model allows you to earn tokens when your team contributes to external projects within the network. These tokens can then be used to access the specialized skills you need, effectively neutralizing your consulting spend and creating a culture of collaborative growth." />
            </div>
            <div className='max-w-[699px] md:order-2 order-1 w-full'>
                <HeadingButton value="The EGTOS Model"  />
                <p className='md:text-5xl text-3xl py-3 md:py-6 max-w-[500px] text-[#1A1A1A] font-semibold'>Unlock new <span className='text-[#00A099]'>Levels</span>  of Efficiency Through <span className='text-[#00A099]'>Collaborative</span>  Talent Exchange</p>
                <Image src={'/about/about-2.png'} width={699} height={325} alt='' />
            </div>
        </div>
    );
};

export default EgtosModel;