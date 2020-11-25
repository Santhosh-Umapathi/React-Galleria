import React, { Component } from 'react';

// Gif
// import SomethingWentWrong from "../assets/images/SomethingWentWrong.gif"




export default class ErrorBoundary extends Component 
{

    state = {
      error: false,
      errorMessage: ""
    }

    static getDerivedStateFromError(error) 
    {
        // Update state so next render shows fallback UI.
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
        <div>
          {/* <img src = {SomethingWentWrong} alt='Error Occured...' style={styles.image}/> */}
          
          <div>
            
            <h2> {this.state.errorMessage} </h2>

            <p>Please try refreshing the Page again</p>

          </div>

        </div>
        )
      }
		
	return this.props.children
	
  }
}