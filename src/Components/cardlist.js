import React from 'react';
import Card from './Card';

const Cardlist = ({data}) => { 
	// if (true){
	// 	throw new Error("Nooooooooooooo!!!!!!!!!!!");
	// }
	return(
	<div>
		{
			data.map((user,i) => 
			{	return (<Card 
				key= {i} 
				id={data[i].id} 
				Name={data[i].name} 
				email={data[i].email}/>);
			})
		}
	</div>
	);
};

export default Cardlist;