import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { Faces, Hair, Glasses, Clothes } from '../AvatarComponents/AvatarComponents';

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
	    slideIndex: value,
	});
    };

    render() {
	return (
	    <div style={styles.tabContainer}>
		<Tabs
		    onChange={this.handleChange}
		    value={this.state.slideIndex}
		>
		    <Tab label="Face" value={0} />
		    <Tab label="Hair" value={1} />
		    <Tab label="Glasses" value={2} />
		    <Tab label="Clothes" value={3} />
		</Tabs>
		<SwipeableViews
		    className='tab-views'
		    index={this.state.slideIndex}
		    onChangeIndex={this.handleChange}
		>
		    <div>
			{ Faces.map(face => (
			    <img key={face.src} src={face.src} alt=""/>
			))}
		    </div>
		    <div style={styles.slide}>
			{ Hair.map(face => (
			    <img key={face.src} src={face.src} alt=""/>
			))}
		    </div>
		    <div style={styles.slide}>
			{ Glasses.map(face => (
			    <img key={face.src} src={face.src} alt=""/>
			))}
		    </div>
		    <div style={styles.slide}>
			{ Clothes.map(face => (
			    <img key={face.src} src={face.src} alt=""/>
			))}
		    </div>
		</SwipeableViews>
	    </div>
	);
    }
}