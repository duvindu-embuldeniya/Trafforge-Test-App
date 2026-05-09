import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pd-3 align-items-start'>
            <a className='navbar-brand text-light' href="">Portal</a>

            <div>
                <Button text='Login' class='btn btn-outline-info' />
                &nbsp;
                <Button text='Register' class='btn btn-info' />
            </div>
        </nav>
    </>
  )
}

export default Header