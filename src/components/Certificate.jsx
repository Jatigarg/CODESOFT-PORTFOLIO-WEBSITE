import React, { useState } from 'react';

function Certificate() {

  const img = [
    {
      id: 1,
      src: "../../1.png"
    },
    {
      id: 2,
      src: "../../2.png"
    },
    {
      id: 3,
      src: "../../3.png"
    },
    {
      id: 4,
      src: "../../4.png"
    },
    {
      id: 5,
      src: "../../5.png"
    },
  ];

  const [hoverState, setHoverState] = useState({});

  const handleMouseEnter = (id) => {
    setHoverState((prevHoverState) => ({ ...prevHoverState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverState((prevHoverState) => ({ ...prevHoverState, [id]: false }));
  };


  return (

    <>

      <div name = "Certificate" className='mx-10 px-9 pt-20 mt-10 rounded-md glass pb-20'>


        <h1 className='text-2xl font-sans text-white mb-14 font-bold'>Certificates</h1>

        <div className='grid grid-cols-3 grid-rows-3 gap-4'>


          <div className='grid justify-self-center place-self-center '>
            <img
              className='h-32 w-auto rounded-2xl mx-8 cursor-pointer'
              src={img[0].src}
              alt=""
              onMouseEnter={() => handleMouseEnter(img[0].id)}
              onMouseLeave={() => handleMouseLeave(img[0].id)}
            />
            {hoverState[img[0].id] && (
              <div className="absolute left-96 top-52">
                <img
                  className='w-1/2 h-1/2 rounded-xl'
                  src={img[0].src}
                  alt=""
                />
              </div>
            )}
          </div>



          <div className=' grid col-start-3 col-end-4 row-start-3 row-end-4 justify-self-center place-self-center'>
            <img
              className='h-32 w-auto rounded-2xl mx-8 cursor-pointer'
              src={img[1].src}
              alt=""
              onMouseEnter={() => handleMouseEnter(img[1].id)}
              onMouseLeave={() => handleMouseLeave(img[1].id)}
            />
            {hoverState[img[1].id] && (
              <div className="absolute top-40 left-96  ">
                <img
                  className='w-1/2 h-1/2 rounded-xl'
                  src={img[1].src}
                  alt=""
                />
              </div>
            )}
          </div>


          <div className='grid col-start-2 col-end-3 row-start-2 row-end-3 justify-self-center place-self-center'>
            <img
              className='h-32 w-auto rounded-2xl mx-8 cursor-pointer'
              src={img[2].src}
              alt=""
              onMouseEnter={() => handleMouseEnter(img[2].id)}
              onMouseLeave={() => handleMouseLeave(img[2].id)}
            />
            {hoverState[img[2].id] && (
              <div className="absolute top-3 left-72  ">
                <img
                  className='w-1/2 h-1/2 rounded-xl'
                  src={img[2].src}
                  alt=""
                />
              </div>
            )}
          </div>


          <div className='grid col-start-1 col-end-2 row-start-3 row-end-4 justify-self-center place-self-center'>
            <img
              className='h-32 w-auto rounded-2xl mx-8 cursor-pointer'
              src={img[3].src}
              alt=""
              onMouseEnter={() => handleMouseEnter(img[3].id)}
              onMouseLeave={() => handleMouseLeave(img[3].id)}
            />
            {hoverState[img[3].id] && (
              <div className="absolute top-56 left-96  ">
                <img
                  className='w-1/2 h-1/2 rounded-xl'
                  src={img[3].src}
                  alt=""
                />
              </div>
            )}
          </div>


          <div className='grid col-start-3 col-end-4 row-start-1 row-end-2 justify-self-center place-self-center'>
            <img
              className='h-32 w-auto rounded-2xl mx-8 cursor-pointer'
              src={img[4].src}
              alt=""
              onMouseEnter={() => handleMouseEnter(img[4].id)}
              onMouseLeave={() => handleMouseLeave(img[4].id)}
            />
            {hoverState[img[4].id] && (
              <div className="absolute top-52 left-96  ">
                <img
                  className='w-1/2 h-1/2 rounded-xl'
                  src={img[4].src}
                  alt=""
                />
              </div>
            )}
          </div>


        </div>


      </div>
    </>
  );
}

export default Certificate;