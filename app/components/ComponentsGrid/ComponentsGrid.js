'use strict';

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
    },
    gridList: {
	width: 500,
	height: 500,
	overflowY: 'auto',
	marginBottom: 24
    }
};


const PREDEFINED_IMAGES = [
    'beard_1.png',
    'beard_2.png',
    'beard_4.png',
    'beard_6.png',
    'beard_8.png',
    'face_1.png',
    'glasses_1.png',
    'glasses_3.png',
    'wear_1.png',
    'wear_3.png',
    'wear_5.png',
    'wear_7.png',
    'beard_10.png',
    'beard_3.png',
    'beard_5.png',
    'beard_7.png',
    'beard_9.png',
    'face_2.png',
    'glasses_2.png',
    'glasses_4.png',
    'wear_2.png',
    'wear_4.png',
    'wear_6.png',
    'wear_8.png'
];
const tilesData = PREDEFINED_IMAGES.map(image => {
    return {
	src: `img/grid-list/${image}`
    }
});


const ComponentsGrid = () => (
    <div style={styles.root}>
	<GridList
	    cellHeight={200}
	    style={styles.gridList}
	>
	    <Subheader>December</Subheader>
	    {tilesData.map((tile) => (
		<GridTile
		    key={tile.src}
		    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
		>
		    <img src={tile.src}/>
		</GridTile>
	    ))}
	</GridList>
    </div>
);

export default ComponentsGrid;