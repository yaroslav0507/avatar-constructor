'use strict';

import React from 'react';

export default class ImageList extends React.Component {
    render(){
	const List = this.props.list;

	return (
	    <div className="image-list">
		{ List.map(image => (
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