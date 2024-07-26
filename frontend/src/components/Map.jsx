import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import VehiclePopup from './VehiclePopup';
import RoutingMachine from './RoutingMachine';

const customIcon = new L.Icon({
    iconUrl: '/vehicleIcon.png',
    iconSize: [50, 50]
});


const Map = ({ vehiclePosition, setVehiclePosition, isPlaying, setIsPlaying, currentIndex, setCurrentIndex, data }) => {
    const start = [data[0].latitude, data[0].longitude];
    const end = [data[data.length - 1].latitude, data[data.length - 1].longitude];
    return (
        <div className="fixed h-screen w-full">
            <MapContainer center={start} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={vehiclePosition} icon={customIcon}>
                    <Popup>
                        <VehiclePopup data={{
                            vehicleType: "WIRELESS",
                            timestamp: "Jul 20, 07:09 AM",
                            location: "Vijay Nagar Rd, Vijay Nagar, Deolali, Nashik, Deolali, Maharashtra",
                            speed: "0.00",
                            distance: "0.00",
                            battery: "16%",
                            totalDistance: "834.89 km",
                            distanceFromLastStop: "0.00 km",
                            totalRunning: "00:00m",
                            todayStopped: "07h:10m",
                            todayIdle: "00h:00m",
                            currentStatus: "STOPPED",
                            todayMaxSpeed: "0.00 km/h",
                            todayIgnitionOff: "00h:00m",
                            todayIgnitionOn: "00h:00m",
                            ignitionOffSince: "00h:00m",
                            todayAcOn: "00h:00m",
                            todayAcOff: "00h:00m",
                            acOffSince: "00h:00m",
                            customValue1: "16%"
                        }} />
                    </Popup>
                </Marker>
                <RoutingMachine
                    start={start}
                    end={end}
                    setVehiclePosition={setVehiclePosition}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    data={data}
                />
            </MapContainer>
        </div>
    );
};

export default Map;
