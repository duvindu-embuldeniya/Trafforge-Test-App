import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const MainComponent = () => {
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
                <ButtonComponent class='btn btn-outline-info' text='Login' url='/login' />
            </div>
        </div>
    </>
  )
}

export default MainComponent