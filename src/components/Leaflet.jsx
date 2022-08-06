import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'

import L from 'leaflet'
import Img1 from 'leaflet/dist/images/marker-icon-2x.png'
import Img2 from 'leaflet/dist/images/marker-icon.png'
import Img3 from 'leaflet/dist/images/marker-shadow.png'
import Routing from './Routing'
import { useSelector } from 'react-redux'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
	iconRetinaUrl: Img1,
	iconUrl: Img2,
	shadowUrl: Img3,
})

const Leaflet = () => {
	const [markers, setMarkers] = useState([])

	const { currentItem } = useSelector((state) => state.routes)

	useEffect(() => {
		if (currentItem && Object.keys(currentItem).length !== 0) {
			setMarkers([
				{ id: 1, position: currentItem.fromAddress },
				{ id: 2, position: currentItem.toAddress },
			])
		}
	}, [currentItem])

	return (
		<MapContainer
			key={[51.505, -0.09]}
			center={[51.505, -0.09]}
			zoom={13}
			style={{ height: '100%' }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{markers.map((m) => (
				<div key={m.id}>
					<Marker position={m.position} />
				</div>
			))}
			{currentItem && Object.keys(currentItem).length && (
				<Routing lon={markers[1]?.position} lng={markers[0]?.position} />
			)}
		</MapContainer>
	)
}

export default Leaflet
