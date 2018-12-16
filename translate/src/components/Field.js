import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;

	render() {
		console.log(this.context.language);
		const text = this.context.language === 'english' ? 'Name' : 'Naam';
		console.log(text);
		return (
			<div className='ui field'>
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;
