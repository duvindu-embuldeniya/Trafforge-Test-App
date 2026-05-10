import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Alien</h1>
                <p className='text-light lead'>
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                </p>
                <Button class='btn btn-outline-info' text='Login' url='/login' />
            </div>
        </div>
    </>
  )
}

export default Main