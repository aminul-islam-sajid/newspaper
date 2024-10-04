import React from 'react';
import Images from '../../images/Images';

const FirstLook = () => {
    return (
        // this section is dynamic must 
        <div className='flex '>
            {/* 1st section  */}
            <div className='w-8/12 pe-8 border-e-2'>
                <hr className='w-full border-t-2 border-black' />
                <div>
                    <div className='flex'>
                        <div className='w-2/5  p-4'>
                            <div>
                                <h1 className='font-bold text-lg py-4'>News Title, Present News</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius vel exercitationem cupiditate laudantium itaque voluptatem nihil asperiores laborum numquam, odio ipsam error libero rem veritatis nemo debitis voluptatibus adipisci.</p>
                            </div>
                            <hr className='mt-4' />
                        </div>
                        <div className='p-4'>
                            <img src={Images.NewsImg} alt="" />
                            <div>
                                carousel
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            {/* 2nd section  */}
            <div className='w-4/12 ms-8'>
                <hr className='w-full border-t-2 border-black' />
                <div className='p-4'>
                    <div>
                        <div>
                            <img src={Images.sidebar} alt="" />
                            <p className='text-xs text-end p-1'>title</p>
                        </div>

                        <h1 className='text-xl font-bold pt-4'>Headline news</h1>
                        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non error itaque distinctio suscipit accusantium laborum corporis excepturi facilis tempore voluptates?</p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default FirstLook;