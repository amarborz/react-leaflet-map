import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'

const Routing = ({ lon, lng }) => {
	const map = useMap()

	useEffect(() => {
		if (!map) return

		let routingControl = L.Routing.control({
			waypoints: [L.latLng(lon), L.latLng(lng)],
			routeWhileDragging: false,
		}).addTo(map)

		if (lon && lng) {
			map.setView(lng, 13)
		}

		return () => map.removeControl(routingControl)
	}, [map, lon, lng])

	return null
}

export default Routing
