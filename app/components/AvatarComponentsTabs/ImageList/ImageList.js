'use strict';

import React from 'react';
import Divider from 'material-ui/Divider';

const styles = {
    headline: {
	marginBottom: 20,
	paddingBottom: 20,
	borderBottom: '1px solid #E0E0E0'
    },
    title: {
	fontSize: 24,
	paddingTop: 16,
	marginBottom: 12,
	fontWeight: 400
    },
    slide: {
	padding: 10
    }
};

export default class ImageList extends React.Component {
    render() {
	const { list, title } = this.props;

	return (
	    <div className="image-list">
		<div style={styles.headline}>
		    <h2 style={styles.title}>{title}</h2>
		    Click item to select <br/>
		</div>

		{ list.map(image => (
		    <div key={image.src}
			 onClick={this.props.handleClick}
			 className="image-list__item">
			<img src={image.src} alt=""/>
		    </div>
		))}
	    </div>
	)
    }
}