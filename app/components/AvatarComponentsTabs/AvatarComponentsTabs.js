import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Faces, Hair, Glasses, Clothes } from '../AvatarComponents/AvatarComponents';
import SwipeableViews from 'react-swipeable-views';
import ImageList from './ImageList/ImageList';
import AvatarConstructorActions from '../../actions/AvatarConstructorActions';

const styles = {
    headline: {
	fontSize: 24,
	paddingTop: 16,
	marginBottom: 12,
	fontWeight: 400
    },
    slide: {
	padding: 10
    },
    tabContainer: {
	maxWidth: '100%'
    },
    tabViews: {
	height: 400,
	overflow: 'auto'
    }
};

export default class AvatarComponentsTabs extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    slideIndex: 0
	};
    }

    handleChange = (value) => {
	this.setState({
	    slideIndex: value
	});
    };

    render() {
	const setAvatarsFace = (event) => {
	    AvatarConstructorActions.setFace(event.target.src);
	};

	const setAvatarsHair = (event) => {
	    AvatarConstructorActions.setHair(event.target.src);
	};

	const setAvatarsGlasses = (event) => {
	    AvatarConstructorActions.setGlasses(event.target.src);
	};

	const setAvatarsClothes = (event) => {
	    AvatarConstructorActions.setClothes(event.target.src);
	};

	return (
	    <div style={styles.tabContainer}>

		<Tabs onChange={this.handleChange}
		      value={this.state.slideIndex}>

		    <Tab label="Face" value={0} />
		    <Tab label="Clothes" value={1} />
		    <Tab label="Hair" value={2} />
		    <Tab label="Glasses" value={3} />

		</Tabs>

		<SwipeableViews className='tab-views'
				index={this.state.slideIndex}
		    		onChangeIndex={this.handleChange}>

		    <ImageList list={ Faces } title="Select Face" handleClick={setAvatarsFace} />
		    <ImageList list={ Clothes } title="Select Clothes" handleClick={setAvatarsClothes}/>
		    <ImageList list={ Hair } title="Select Hair" handleClick={setAvatarsHair} />
		    <ImageList list={ Glasses } title="Select Glasses" handleClick={setAvatarsGlasses} />

		</SwipeableViews>

	    </div>
	);
    }
}