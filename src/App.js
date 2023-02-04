import { useState, useEffect } from 'react';
import StatusSearch from './components/StatusSearch/StatusSearch';
import Header from './components/Header';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusList from './components/StatusList/StatusList';
import StatusPreviousSearch from './components/StatusPreviousSearch/StatusPreviousSearch';
import StatusPreviousInformation from './components/StatusPreviousInformation/StatusPreviousInformation';
import StatusPreviousList from './components/StatusPreviousList/StatusPreviousList';

const App = () => {

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const [searchType, setSearchType] = useState(false);

	const [previousSearchText, setPreviousSearchText] = useState('');
	const [previousSearchDate, setPreviousSearchDate] = useState('');
	
    const [statusList, setStatusList] = useState([])
    const [previousStatusList, setPreviousStatusList] = useState([])

    useEffect(() => {
      setStatusList(
        [
          {id: 1, container:"Auth-server", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
          {id: 2, container:"Identity-registry-index", statusCode:"403", message:"Semi operational", timeStamp:"2022-01-01:04:04:02" },
          {id: 3, container:"User-profile-store", statusCode:"500", message:"Offline", timeStamp:"2022-01-01:04:06:05" },
          {id: 4, container:"User-profile-index", statusCode:"200", message:"Unknown", timeStamp:"2022-01-01:04:06:05" },
          {id: 5, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 6, container:"Mailbox-store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 7, container:"Mailbox-index", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 8, container:"Mailbox-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
        ]
      )

	  setPreviousStatusList(
        [
          {id: 1, title:"Severe downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"5" },
		  {id: 2, title:"Minor maintainance", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"2" },
		  {id: 3, title:"Inoperable sign-in", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"4" },
		  {id: 4, title:"Scheduled downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"1" },
		  {id: 5, title:"Unexpected downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"3" },
        ]
      )
    },[])
	

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<StatusSearch 
				handleSearchStatus={setSearchText}
				handleSearchType={setSearchType}
				 />
				<StatusList statusList={statusList}/>

				<StatusPreviousInformation/>
				<StatusPreviousSearch
				handlePreviousSearchStatus={setPreviousSearchText}
				handlePreviousSearchDate={setPreviousSearchDate}
				/>
				<StatusPreviousList previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
