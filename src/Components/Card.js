import React from 'react';

const Card = ({Name, email, id}) => {
	return(
	<div className="tc bg-light-green dib br3 pa3 ma2 grow bw5 shadow-10">
		<img alt="pic" src={'https://robohash.org/'+ id +'?200*200'} />
		<div> 
			<h3> {Name} </h3>
			<h3> {email} </h3>
			<h3> {id} </h3>
		</div>
	</div> 
);
};

export default Card;