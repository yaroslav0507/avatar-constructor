'use strict';

import React from 'react';

export default class ImageList extends React.Component {
    render(){
	const List = this.props.list;

	return (
	    <div>
		{ List.map(image => (
		    <img key={image.src} src={image.src} alt=""/>
		))}
	    </div>
	)
    }
}