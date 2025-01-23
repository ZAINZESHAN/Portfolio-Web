import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ScrollReveal from 'scrollreveal';

const ContactForm = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true
        })

        sr.reveal(`.contact_heading`, { origin: 'top' });
        sr.reveal(`.contact_content`);
        sr.reveal(`.contact_icons`, { origin: 'right' });
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };



    return (
        <section id='contact' className='bg-black h-auto border-b'>
            <div className="container text-center h-auto py-10">
                <div className='contact_heading'>
                    <h1 className='font-Viga text-white text-[30px] md:text-[40px] lg:text-[32px] xl:text-[50px] pb-6 md:pb-10 xl:pb-16'>
                        Contact Me
                        <span className='text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-accent pl-1'>
                            .
                        </span>
                    </h1>
                </div>
                <div className='flex flex-col lg:flex-row gap-14 lg:gap-12 xl:gap-24'>
                    <div className='lg:w-[50%] text-left p-5 md:p-6 lg:p-4 xl:p-8 bg-[#141414]'>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-3 xl:space-y-6">
                            <h1 className='text-accent font-Viga text-[20px] md:text-[20px] lg:text-[23px] xl:text-[35px] lg:pb-1 pb-2'>Let’s work together</h1>
                            <p className="text-[14px] md:text-[16px] lg:text-[14px] pb-2 xl:text-[19px] text-gray-200">
                                Fill out the form below, and I’ll get back to you as soon as possible. Let’s make something amazing together!
                            </p>
                            <div className="flex flex-col md:flex-row gap-2 md:space-x-2 xl:space-x-4">
                                <div className="flex-1">
                                    {/* <label className="block text-sm font-medium  text-accent">First Name</label> */}
                                    <input
                                        type="text"
                                        placeholder={`Firstname`}
                                        {...register('firstName', { required: true })}
                                        className={`bg-black block text-[15px] md:text-[17px] lg:text-[20px]  w-full text-gray-200 border rounded-md px-2 py-3 md:py-4 xl:py-5 ${errors.firstName ? 'border-red-500' : 'border-none'}`}
                                    />
                                    {errors.firstName && <p className="text-red-500 pt-2 text-xs">First name is required</p>}
                                </div>

                                <div className="flex-1">
                                    {/* <label className="block text-sm font-medium  text-accent">Second Name</label> */}
                                    <input
                                        type="text"
                                        placeholder="Lastname"
                                        {...register('secondName', { required: true })}
                                        className={`bg-black block text-[15px] md:text-[17px] lg:text-[20px]  w-full text-gray-200 border rounded-md px-2 py-3 md:py-4 xl:py-5 ${errors.secondName ? 'border-red-500' : 'border-none'}`}
                                    />
                                    {errors.secondName && <p className="text-red-500 pt-2 text-xs">Second name is required</p>}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-2 md:space-x-2 xl:space-x-4">
                                <div className="flex-1 ">
                                    {/* <label className="block text-sm font-medium  text-accent">Your Email</label> */}
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        {...register('email', { required: true })}
                                        className={`bg-black block text-[15px] md:text-[17px] lg:text-[20px]  w-full text-gray-200 border rounded-md px-2 py-3 md:py-4 xl:py-5 ${errors.email ? 'border-red-500' : 'border-none'}`}
                                    />
                                    {errors.email && <p className="text-red-500 pt-2 text-xs">Email is required</p>}
                                </div>

                                <div className="flex-1">
                                    {/* <label className="block text-sm font-medium  text-accent">Phone Number</label> */}
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        {...register('phone', { required: true })}
                                        className={`bg-black block text-[15px] md:text-[17px] lg:text-[20px]  w-full text-gray-200 border rounded-md px-2 py-3 md:py-4 xl:py-5 ${errors.phone ? 'border-red-500' : 'border-none'}`}
                                    />
                                    {errors.phone && <p className="text-red-500 pt-2 text-xs">Phone number is required</p>}
                                </div>
                            </div>

                            <div>
                                {/* <label className="block text-sm font-medium  text-accent">Your Message</label> */}
                                <textarea
                                    placeholder="Type your message here"
                                    {...register('message', { required: true })}
                                    className={`bg-black block text-[15px] md:text-[17px] lg:text-[20px]  w-full text-gray-200 border mb-2 rounded-md px-2 py-3 md:py-4 xl:py-5 ${errors.message ? 'border-red-500' : 'border-none'}`}
                                    rows="6"
                                />
                                {errors.message && <p className="text-red-500 text-xs">Message is required</p>}
                            </div>

                            <button
                                type='submit'
                                className="relative w-full border border-accent rounded-md font-bold text-[16px] md:text-[15px] py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 hover:text-white text-accent duration-300 cursor-pointer">
                                Send Message <i className="absolute right-0 pr-2 ri-send-plane-fill"></i>
                            </button>
                        </form>

                    </div>
                    <div className='lg:w-[50%] text-white flex flex-col justify-left justify-center gap-10'>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <i className="text-[25px] md:text-[30px] xl:text-[40px] text-accent rounded-md bg-[#141414] p-3 ri-phone-fill"></i>
                            </div>
                            <div>
                                <label className="block text-[15px] md:text-[16px] xl:text-[17px] text-gray-400 text-left">Phone</label>
                                <p className='text-[18px] md:text-[20px] xl:text-[22px]'>(+92) 3092140037</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <i className="text-[25px] md:text-[30px] xl:text-[40px] text-accent rounded-md bg-[#141414] p-3 ri-mail-fill"></i>
                            </div>
                            <div>
                                <label className="block text-[15px] md:text-[16px] xl:text-[17px] text-gray-400 text-left">Email</label>
                                <p className='text-[18px] md:text-[20px] xl:text-[22px]'>zainzeeshan652@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <i className="text-[25px] md:text-[30px] xl:text-[40px] text-accent rounded-md bg-[#141414] p-3 ri-user-location-fill"></i>
                            </div>
                            <div>
                                <label className="block text-[15px] md:text-[16px] xl:text-[17px] text-gray-400 text-left">Address</label>
                                <p className='text-[18px] md:text-[20px] xl:text-[22px]'>Manzoor Colony, Karachi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
