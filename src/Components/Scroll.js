import React from 'react';

const Scroll = (props) => {
	return( 
		<div style= {{overflow: 'scroll', border: '5px dotted black', height: '800px', width:'1600px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;