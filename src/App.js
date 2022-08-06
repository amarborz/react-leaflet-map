import Leaflet from './components/Leaflet'

import { Col, Row } from 'antd'

import Splitter from '@devbookhq/splitter'

import './App.css'
import Table from './components/Table'

function App() {
	return (
		<div>
			<Row style={{ height: '100vh' }}>
				<Splitter>
					<Col align="middle">
						<Table />
					</Col>
					<Col style={{ height: '100vh' }}>
						<Leaflet />
					</Col>
				</Splitter>
			</Row>
		</div>
	)
}

export default App
