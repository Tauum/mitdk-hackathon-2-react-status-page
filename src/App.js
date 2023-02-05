import { useState, useEffect } from 'react';
import StatusSearch from './components/StatusSearch/StatusSearch';
import Header from './components/Header';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusList from './components/StatusList/StatusList';
import StatusPreviousSearch from './components/StatusPreviousSearch/StatusPreviousSearch';
import StatusPreviousInformation from './components/StatusPreviousInformation/StatusPreviousInformation';
import StatusPreviousList from './components/StatusPreviousList/StatusPreviousList';
import StatusPods from './components/StatusPods/StatusPods';
import { previousStatusData, statusData } from './components/MockData';
const App = () => {

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const [searchType, setSearchType] = useState(false);

	const [previousSearchText, setPreviousSearchText] = useState('');
	const [previousSearchDate, setPreviousSearchDate] = useState('');

	const [previousSearchType, setPreviousSearchType] = useState(false);
	
    const [statusPods, setStatusPods] = useState([])
    const [previousStatusList, setPreviousStatusList] = useState([])

    useEffect(() => {
		setStatusPods( statusData )
		setPreviousStatusList( previousStatusData )
    },[])
	
	useEffect(() => {
		if(statusPods){
		console.log("app statuslist",statusPods)
		}
	}
	,[statusPods])

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='app-container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<StatusSearch 
				handleSearchStatus={setSearchText}
				handleSearchType={setSearchType} />

				{/* <StatusList statusList={statusList}/> */}

				<StatusPods statusPods={statusPods} />

				<StatusPreviousInformation/>
				<StatusPreviousSearch
				handlePreviousSearchStatus={setPreviousSearchText}
				handlePreviousSearchDate={setPreviousSearchDate}
				handlePreviousSearchType={setPreviousSearchType}
				/>
				<StatusPreviousList previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
