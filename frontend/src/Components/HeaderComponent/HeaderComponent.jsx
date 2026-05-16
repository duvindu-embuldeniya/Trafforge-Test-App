import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <>
        <nav className='navbar container pt-3 pd-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/" >Workflow Test x5</Link>

            <div>
                <ButtonComponent class='btn btn-outline-info' text='Login' url='/login' />
                &nbsp;
                <ButtonComponent class='btn btn-info' text='Register' url='/register' />
            </div>
        </nav>
    </>
  )
}

export default HeaderComponent