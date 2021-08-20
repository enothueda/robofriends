import React, { useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import './MainPage.css';

const MainPage = ({...props}) => {
	const { onRequestRobots, robots, searchField, onSearchChange, isPending } = props
	
	useEffect(() => {
		onRequestRobots();		
	}, [onRequestRobots])
    
    const filterRobots = () => robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	
	return (
		<div className='tc'>
			<Header />
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				{ isPending ? <h1>Loading...</h1> :
					<ErrorBoundary>
						<CardList robots={filterRobots()}/>
					</ErrorBoundary>
				}
				
			</Scroll>
		</div>	
	);	

}

export default MainPage;