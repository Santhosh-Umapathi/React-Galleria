import React, { useEffect } from 'react'

//React Router
import { Redirect } from 'react-router-dom'

//Redux
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'

const Logout = () =>
{
    //Redux Action
    const dispatch = useDispatch()

	
    //Logout on Render
    useEffect(() =>
    {
        dispatch(actions.logout())
    }, [])


    return <Redirect to='/' />
}



export default Logout;