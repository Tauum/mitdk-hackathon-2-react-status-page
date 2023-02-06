import React from 'react'
import "./ToolTip.css"

function ToolTip() {
	return (

		<div className='status-search-container'>

			<div className='search-type-tool-tip'>

				<div className="type-element type-fully-operational shadow">
					<span className="tooltiptext">Fully operational service status</span>
				</div>

				<div className="type-element type-semi-operational shadow">
					<span className="tooltiptext">Semi operational service status</span>
				</div>

				<div className="type-element type-offline shadow">
					<span className="tooltiptext">Offline service status</span>
				</div>

				<div className="type-element type-unknown shadow">
					<span className="tooltiptext">Unknown service status</span>
				</div>
			</div>
		</div>
	);
};
export default ToolTip