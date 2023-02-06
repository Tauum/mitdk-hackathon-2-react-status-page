import { useState, useEffect } from 'react';
import ToolTip from './components/ToolTip/ToolTip';
import Header from './components/Header';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusPreviousSearch from './components/StatusPreviousSearch/StatusPreviousSearch';
import StatusPreviousInformation from './components/StatusPreviousInformation/StatusPreviousInformation';
import StatusPreviousList from './components/StatusPreviousList/StatusPreviousList';
import StatusPods from './components/StatusPods/StatusPods';
import { previousStatusData, statusData, statusListData } from './components/MockData';
const App = () => {

	const [darkMode, setDarkMode] = useState(false);
	
    const [statusPods, setStatusPods] = useState([])
	const [statusList, setStatusList] = useState([])

    const [previousStatusList, setPreviousStatusList] = useState([])

    useEffect(() => {
		setStatusPods(statusData)
		setPreviousStatusList(previousStatusData)
		setStatusList(statusListData)
    },[])
	
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='app-container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<ToolTip/>
				<StatusPods statusPods={statusPods} />
				<StatusPreviousInformation/>
				<StatusPreviousList previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
