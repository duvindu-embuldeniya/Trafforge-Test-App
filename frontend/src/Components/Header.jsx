import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pd-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/" >duvindu x1</Link>

            <div>
                <Button class='btn btn-outline-info' text='Login' url='/login' />
                &nbsp;
                <Button class='btn btn-info' text='Register' url='/register' />
            </div>
        </nav>
    </>
  )
}

export default Header