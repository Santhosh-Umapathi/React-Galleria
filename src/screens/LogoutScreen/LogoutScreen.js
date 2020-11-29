import React, { useEffect } from 'react'

//React Router
import { Redirect } from 'react-router-dom'

//Redux
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'

//Components
import Backdrop from '../../components/Backdrop/Backdrop'
import Spinner from '../../components/Spinner/Spinner'

const Logout = () =>
{
    //Redux Action
    const dispatch = useDispatch()

    let logout = <>
            <Backdrop show />
            <Spinner />
        </>
	
    //Logout on Render
    useEffect(() =>
    {   //Simulted 2s loading for logout
        setTimeout(() =>
        {
            dispatch(actions.logout())
            logout = <Redirect to='/' />
        }, 2000);  
    }, [])

    return logout;
}

export default Logout;