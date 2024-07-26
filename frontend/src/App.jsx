import { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";
import FilterTab from "./components/FilterTab";
import Seekbar from "./components/Seekbar";

const App = () => {
  const [vehiclePosition, setVehiclePosition] = useState([
    17.385044, 78.486671,
  ]);
  const [showDialog, setShowDialog] = useState(false);
  const [showSeekBar, setShowSeekBar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3001/"; // Adjust URL if needed
        console.log("Fetching data from:", url);
        const { data } = await axios.get(url);
        console.log("Fetched data:", data);
        setDummyData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message || error);
      }
    };

    fetchData();

    // Optionally add cleanup here if needed
    return () => {
      // cleanup code if needed
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= dummyData.length) {
      setIsPlaying(false);
    }
  }, [currentIndex, dummyData.length]);

  return (
    <>
      {dummyData.length > 0 && (
        <Map
          vehiclePosition={vehiclePosition}
          setVehiclePosition={setVehiclePosition}
          isPlaying={isPlaying}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          data={dummyData}
        />
      )}
      <div className="absolute bottom-0 left-0 p-4 m-4">
        <button
          onClick={() => setShowDialog(prev => !prev)}
          className="p-2 bg-blue-700 text-white rounded"
        >
          Configure
        </button>
        {showDialog && (
          <FilterTab
            setShowDialog={setShowDialog}
            setShowSeekBar={setShowSeekBar}
          />
        )}
        {showSeekBar && (
          <Seekbar
            data={dummyData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            showSeekBar={setShowSeekBar}
          />
        )}
      </div>
    </>
  );
};

export default App;
