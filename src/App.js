import { useState, useEffect } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import StatusPage from './components/StatusPage/StatusPage';
import StatusInformation from './components/StatusInformation/StatusInformation';

const App = () => {

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const [searchType, setSearchType] = useState(false);
	

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<Search 
				handleSearchStatus={setSearchText}
				handleSearchType={setSearchType}
				 />
				<StatusPage/>

			</div>
		</div>
	);
};

export default App;
