import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import { useEffect, useState } from "react";

const DistributionMap = () => {
    const [packagesList, setPackagesList] = useState([])
    const fetchTable = async () => {
        const result = await fetch("https://santa.deployed.space/api/distribution/");
        const data = await result.json();
        setPackagesList(data);
    };
    useEffect(() => { fetchTable() }, []);
    return (
        <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={{height: 300}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {packagesList.map((row) => (
                <Marker position={[row.lat, row.lng]} key={row.id}>
                    <Popup>
                    {row.name}{", "}{row.country}{", "}{row.city}{", "}{row.address}{", "}{row.postcode}
                    </Popup>
                </Marker>
            ))}
            <Marker position={[90, 0]}>
                    <Popup>
                    North Pole
                    </Popup>
            </Marker>
        </MapContainer>
    )
}

export default DistributionMap
