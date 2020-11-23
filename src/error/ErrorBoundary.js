import React, { Component } from 'react';

// Gif
import SomethingWentWrong from "../assets/images/SomethingWentWrong.gif"

// Icons
import RefreshIcon from '@material-ui/icons/Refresh';

// Material UI Component
import Button from '@material-ui/core/Button';

//Theme
import {withStyles } from '@material-ui/core/styles';

//Colors
import Colors from 'assets/colors/Colors';

//Custom Button
const RefreshButton = withStyles((theme) => ({
    root: {
      color: Colors.primary.white,
      backgroundColor: Colors.primary.vertivLightOrange,
      '&:hover': 
      {
        backgroundColor: Colors.primary.vertivDarkOrange,
      },
    },
  }))(Button);



/*------------------------------------------------------------------------------------------
    TITLE: Catches Unexpected Error and displays in UI.
-----------------------------------------------------------------------------------------*/

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
    let styles = {
        container:
        {
          background: Colors.primary.black, 
          display:'flex',
          flexDirection:'column', 
          alignItems:'center', 
          justifyContent:'center', 
          width:'100%', 
          height:'100vh'
        },
        textContainer:
        {
          alignItems:'center', 
          display:'flex', 
          flexDirection:'column', 
          marginTop:'20px', 
          marginBottom:'20px'
        },
        image:
        {
          height: "50%", 
        },
        text:
        {
          color:Colors.primary.white, 
          marginBottom:'5px'
        }
      }

      if (this.state.error)
      {
        return  (
        <div style = {styles.container}>
          <img src = {SomethingWentWrong} alt='Error Occured...' style={styles.image}/>
          
          <div style = {styles.textContainer}>
            
            <h2 style = {styles.text}> {this.state.errorMessage} </h2>

            <p style = {styles.text, {color:Colors.primary.grayThree}}>Please try refreshing the Page again</p>

          </div>

          <RefreshButton
              variant="contained"
              endIcon={<RefreshIcon />}
              onClick = {() => {window.location.reload()}}
          >
              Refresh
          </RefreshButton>

        </div>
        )
      }
		
		return this.props.children
	
  }
}