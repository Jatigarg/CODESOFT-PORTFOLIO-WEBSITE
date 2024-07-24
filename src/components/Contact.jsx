import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) =>
    {
        const userinfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }

        try {
            await axios.post("https://getform.io/f/apjmzyga",userinfo)
            toast.success("Your message has been sent")

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    } 

    return (
        <>
            <div name="Contact" className='mx-10 px-9 pt-20 mt-10 rounded-md glass pb-20'>

                <div>
                    <h1 className='text-2xl font-serif mb-5'>Contact me</h1>
                    <p className='font-serif text-sm'>Please fill out the form below to contact me...</p>
                </div>

                <div className=' mt-5 border mx-[26rem] glass rounded-md'>

                    <form onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/apjmzyga"
                        // method="POST"
                        >
                        <h1 className='text-lg font-bold ml-7 mt-5 mb-3'>Send Your Message..</h1>

                        <div className='ml-7 mr-10 pb-10'>


                            <label className='text-black font-semibold ' >
                                Full name
                            </label>
                            <br />
                            <input name='name' className='text-black shadow appearance-none border rounded py-1 px-2 mt-1 leading-tight focus:outline-none focus:shadow-outline w-full ml-1'
                                type="text" placeholder='Full name' {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-700 text-sm font-semibold'>Please fill your name before submit</span>}



                            <div className='mt-5'>
                                <label className='text-black font-semibold' >
                                    Email Address
                                </label>
                                <br />
                                <input name='email' className=' text-black shadow appearance-none border rounded py-1 px-2 mt-1 leading-tight focus:outline-none focus:shadow-outline w-full ml-1'
                                    type="text" placeholder='Email Address' {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-700 text-sm font-semibold'>Please fill your email before submit</span>}
                            </div>

                            <div className='mt-5'>
                                <label className='text-black font-semibold' >
                                    Message
                                </label>
                                <br />
                                <textarea name='message'
                                    className=' text-black shadow appearance-none border rounded py-1 px-2 mt-1 leading-tight focus:outline-none focus:shadow-outline w-full ml-1'
                                    type="text" placeholder='Your Message' {...register("message", { required: true })} />
                                {errors.message && <span className='text-red-700 text-sm font-semibold'>Please fill your message before submit</span>}
                            </div>


                            <div className='flex items-center justify-center mt-4'>
                                <button className='text-white bg-black px-5 py-3 rounded-md hover:scale-110 hover:bg-slate-700 duration-300'>Send</button>
                            </div>



                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact
