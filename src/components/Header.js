import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<span>
				<img src="/image/landingPage-logo.svg" alt="company logo" className='d-inline mr-2 nav-logo'/>
			</span>
			
			<button className='dark-mode-button'
				onClick={() => 
				handleToggleDarkMode( (previousDarkMode) => !previousDarkMode ) }>
				Dark mode
			</button>
		</div>
	);
};

export default Header;
