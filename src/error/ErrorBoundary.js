import React, { Component } from 'react';

//Prop Types
import PropTypes from 'prop-types';

// Gif
import SomethingWentWrong from "../assets/images/error-animated.gif"

//Css
import classes from './Error.module.css';


class ErrorBoundary extends Component 
{
    state = {
      error: false,
      errorMessage: ""
    }

  static getDerivedStateFromError(error) 
  { // Update state so next render shows fallback UI.
    return { error: error };
  }
    
	componentDidCatch(error, info)
	{
		this.setState({error: true, errorMessage: "Something Went Wrong !!"})
  }
    


  render() 
  {
      if (this.state.error)
      {
        return  (
          <div className = {classes.ErrorBoundary}>
          <img src = {SomethingWentWrong} alt='Error Occured...' />
          
          <div className = {classes.MessageContainer}>
            <h2> {this.state.errorMessage} </h2>

              <p>Please try refreshing the Page again</p>
              <button onClick = {() => window.location.reload()}>Refresh</button>
          </div>

        </div>
        )
      }
		
	  return this.props.children
  }
}

ErrorBoundary.propTypes =
{
  children: PropTypes.any
}


export default ErrorBoundary;