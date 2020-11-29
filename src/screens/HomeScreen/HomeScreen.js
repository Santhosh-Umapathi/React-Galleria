import React, {useState, useEffect, useRef} from 'react';

//CSS
import classes from './HomeScreen.module.css'

//Logo Animated
import logo from '../../assets/images/logo-animated.gif';

//Components
import Searchbar from '../../components/Searchbar';
import Trending from '../../components/Trending';
import ImageTile from '../../components/ImageTile/ImageTile';
import Spinner from '../../components/Spinner/Spinner'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions'



const HomeScreen = () =>
{

	const [limit, setLimit] = useState(10)


	//Redux State
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	//Ref
	const loader = useRef(null);

	//Initial images to Load
	useEffect(() =>
	{
		const keywordSearch = state.trendingKeyword ? state.trendingKeyword : "cat"
		dispatch(actions.getData(keywordSearch, limit))
	}, [limit])

	useEffect(() =>
	{
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initialize IntersectionObserver & attaching to Load More images
        const observer = new IntersectionObserver(handleObserver, options);
		if (loader.current)
		{
            observer.observe(loader.current)
		}
		//cleanup observer
		return () =>
		{
			observer.disconnect()
			loader.current = null
		}
	}, []);
	
	

	//Observer the scrolling
	const handleObserver = (entities) =>
	{
        const target = entities[0];
		if (target.isIntersecting)
		{   
			setLimit((limit) => limit + 10)
        }
    }


	

	return (
		<div className = {classes.RootDiv}>
			<img src={logo} className={classes.AnimatedImage} alt = "animatedImage"/>
			
			<Searchbar />

			<Trending />

			<ImageTile data={state.data} />
			
			<div ref={loader}>
			{
				state.isLoading
				? <Spinner />
				: <p className = {classes.End}>End of Results</p>
			}
			</div>

		</div>
		);
};




export default HomeScreen;