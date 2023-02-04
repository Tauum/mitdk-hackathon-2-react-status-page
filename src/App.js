import { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import Header from './components/Header';
import StatusPage from './components/StatusPage/StatusPage';
import StatusInformation from './components/StatusInformation/StatusInformation';
import StatusPrevious from './components/StatusPrevious/StatusPrevious';
import StatusList from './components/StatusList/StatusList';

const App = () => {

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	const [searchType, setSearchType] = useState(false);

	
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
          {id: 1, title:"Auth-server", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
		  {id: 2, title:"Auth-server", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
        ]
      )
    },[])
	

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<StatusInformation/>
				<Search 
				handleSearchStatus={setSearchText}
				handleSearchType={setSearchType}
				 />
				{/* <StatusPage/> */}
				<StatusList statusList={statusList}/>
				<StatusPrevious previousStatusList={previousStatusList}/>
			</div>
		</div>
	);
};

export default App;
