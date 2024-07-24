import React from 'react';
import landingpage from '../../public/ln.png'
import bookstore from '../../public/bk.png'
import calculator from '../../public/cl.png'
import portfolio from '../../public/po.png'

function Project() {
    return (
        <>
            <div name ="Project" className='mx-10 px-9 pt-20 mt-10 rounded-md glass pb-20'>




                <h1 className='text-3xl font-sans text-black mb-14 font-semibold'>Projects</h1>




                <div className='grid grid-cols-2 grid-rows-2 gap-20'>



                    {/* hover effect */}

                    <div className='relative rounded-xl cursor-pointer'>
                        <img className='h-auto w-full rounded-xl' src={landingpage} alt="" />

                        <div className='absolute top-0 right-0 w-full h-full glass bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out  px-6 py-8'>

                            <div className=' text-black'>

                                <h1 className='font-serif text-3xl pb-3'>Landing page using html and tailwind css</h1>

                                <p className=' font-serif pb-3 text-justify text-red-400 text-xl'>Project as a beginner using html and tailwind css !!</p>

                                <h2 className=' font-serif pt-3 pb-4 font-semibold'>For more detail go linkedlin profile...</h2>

                                <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.linkedin.com/posts/jatingupta1234_webdevelopment-tailwindcss-landingpage-activity-7216814119637667840-Li-g?utm_source=share&utm_medium=member_desktop" target='_blank' className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a></button>


                            </div>

                        </div>

                    </div>


                    {/* hover effect */}

                    <div className='relative  cursor-pointer'>
                        <img className='h-auto w-full rounded-xl' src={calculator} alt="" />

                        <div className='absolute top-0 right-0 w-full h-full glass bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out  px-6 py-8'>

                            <div className='  text-black'>

                                <h1 className='font-serif text-3xl pb-3'>Scientific Calculator using html, css , java Script</h1>

                                <p className=' font-serif pb-3 text-justify text-red-400 text-xl'>Project after learning java script using html , css , java script !!</p>

                                <h2 className=' font-serif pt-3 font-semibold'>For more detail go linkedlin profile...</h2>

                                <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.linkedin.com/posts/jatingupta1234_codesoft-webdevelopment-codingcommunity-activity-7214281345861099520-sSpx?utm_source=share&utm_medium=member_desktop" target='_blank' className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a></button>

                            </div>

                        </div>

                    </div>



                    {/* hover effect */}

                    <div className='relative rounded-xl cursor-pointer'>
                        <img className='h-auto w-full rounded-xl' src={bookstore} alt="" />

                        <div className='absolute top-0 right-0 w-full h-full glass bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out px-6 py-8'>


                            <div className=' text-black'>

                                <h1 className='font-serif text-3xl pb-3'>E-commerce website (jatin.book store) using MERN stack</h1>

                                <p className=' font-serif pb-3 text-justify text-red-400 text-xl'>My first website including full stack using MERN stack frameworks and library !!</p>

                                <h2 className=' font-serif pt-3 font-semibold'>For more detail go linkedlin profile...</h2>

                                <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.linkedin.com/posts/jatingupta1234_mern-responsivedesign-reactjs-activity-7219697152736825346-Djwb?utm_source=share&utm_medium=member_desktop" target='_blank' className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a></button>

                            </div>

                        </div>

                    </div>


                    {/* hover effect */}

                    <div className='relative rounded-xl cursor-pointer'>
                        <img className='h-auto w-full rounded-xl' src={portfolio} alt="" />

                        <div className='absolute top-0 right-0 w-full h-full glass bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out l px-6 py-8'>



                            <div className=' text-black'>

                                <h1 className='font-serif text-3xl pb-3'>Portfolio website using MERN stack</h1>

                                <p className=' font-serif pb-3 text-justify text-red-400 text-xl'>A Portfolio website show about my current progress using MERN Stack !!</p>

                                <h2 className=' font-serif pt-3 font-semibold'>For more detail go linkedlin profile...</h2>

                                <button className='pr-4 pt-2 hover:scale-125'><a href="https://www.linkedin.com/in/jatingupta1234/" target='_blank' className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a></button>

                            </div>

                        </div>

                    </div>











                </div>






            </div>
        </>
    )
}

export default Project