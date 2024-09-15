import React from 'react'
import { clientReviews } from '../constans'

const Client = () => {
  return (
    <section className='c-space my-20'>
      <h3 className='head-text'>Hear from My Client</h3>

      <div className='client-container'>
        {
          clientReviews.map((client, index) => {
            const { id, review, name,position, desc, img } = client
            return (
              <div key={id} className='client-review'>
                <div>
                  <p className='text-white font-light'>{review}</p>
                  <div className='client-content'>
                    <div className='flex gap-3'>
                      <img src={img} alt={name} className='w-12 h-12 rounded-full'/>
                      <div className='flex flex-col'>
                        <p className='font-semibold text-white-800'>{name}</p>
                        <p className='text-white-500 md:text-base text-sm font-light'>{position}</p>
                      </div>
                    </div>

                    <div className='flex self-end items-center gap-2'>
                      {
                        Array.from({length: 5}, (_, i) => (
                          <img src='/assets/star.png' className='w-5 h-5' />
                        ))
                      }
                    </div>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Client