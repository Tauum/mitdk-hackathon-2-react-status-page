import { useState, useEffect } from 'react';
import ToolTip from './components/ToolTip/ToolTip';
import Header from './components/Header';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusPreviousInformation from './components/StatusPreviousInformation/StatusPreviousInformation';
import StatusPreviousList from './components/StatusPreviousList/StatusPreviousList';
import StatusPods from './components/StatusPods/StatusPods';
import StatusPreviousSearch from './components/StatusPreviousSearch/StatusPreviousSearch';
import { StrapiGetRequest } from './functionality/Request';
import { previousStatusData } from './components/MockData';
const App = () => {

	const [darkMode, setDarkMode] = useState(false);
    const [statusPods, setStatusPods] = useState([])
    const [previousStatusList, setPreviousStatusList] = useState([])

	async function fetchData() {
		const statusData = await StrapiGetRequest();
		setStatusPods(statusData)
	}

    useEffect(() => {
		const statusData = fetchData();
		setPreviousStatusList(previousStatusData)
    },[])
	
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='app-container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<ToolTip/>
				{/* {console.log(statusPods)} */}
				<StatusPods statusPods={statusPods} />
				<StatusPreviousInformation/>
				<StatusPreviousSearch/>
				<StatusPreviousList previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
