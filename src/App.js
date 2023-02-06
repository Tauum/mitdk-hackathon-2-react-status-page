import { useState, useEffect } from 'react';
import StatusSearch from './components/StatusSearch/StatusSearch';
import Header from './components/Header';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusPreviousSearch from './components/StatusPreviousSearch/StatusPreviousSearch';
import StatusPreviousInformation from './components/StatusPreviousInformation/StatusPreviousInformation';
import StatusPreviousList from './components/StatusPreviousList/StatusPreviousList';
import StatusPods from './components/StatusPods/StatusPods';
import { previousStatusData, statusData } from './components/MockData';
const App = () => {

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
				handleSearchType={setSearchType} />

				<StatusPods statusPods={statusPods} />
				<StatusPreviousInformation/>

				<StatusSearch 
				handleSearchType={setSearchType} />

				<StatusPreviousSearch
				handlePreviousSearchDate={setPreviousSearchDate}
				/>
				
				<StatusPreviousList previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
