import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

const RoutingMachine = ({ start, end, setVehiclePosition, isPlaying, setIsPlaying, setCurrentIndex }) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const routeMarker = L.marker(start, {});

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
            lineOptions: {
                styles: [{ color: 'red', weight: 4 }],
            },
            show: true,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            createMarker: () => null,
        })
            .on('routesfound', (e) => {
                if (isPlaying) {
                    const routes = e.routes;
                    routes[0].coordinates.forEach((coordinate, ind) => {
                        setTimeout(() => {
                            routeMarker.setLatLng([coordinate.lat, coordinate.lng]);
                            setVehiclePosition([coordinate.lat, coordinate.lng]);
                            setCurrentIndex(ind);
                            setIsPlaying(false);
                        }, 100 * ind);
                    });

                }
            })
            .addTo(map);
        return () => {
            map.removeControl(routingControl);
        };
    }, [map, isPlaying]);

    return null;
};

export default RoutingMachine;