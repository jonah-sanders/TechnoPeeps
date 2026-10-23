import React from 'react';

const Scroll = (props) => {
	return (
		<div className='center' style={{overflowY: 'scroll', border: '5px solid white', height: '600px', width: '90%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;