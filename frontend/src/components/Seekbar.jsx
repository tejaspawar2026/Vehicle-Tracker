import { Clock4Icon, Pause, Play , X} from "lucide-react";

const Seekbar = ({ data, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, showSeekBar }) => {
  const handleSeek = (event) => {
    const position = event.target.value;
    setCurrentIndex(position);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed flex flex-row gap-2 bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 w-96">
      <input
        type="range"
        min="0"
        max={(data.length*5) - 1}
        value={currentIndex}
        onChange={handleSeek}
        className="w-full mt-4"
      />
      <button onClick={handlePlayPause} className="bg-purple-500 rounded w-10">
        {isPlaying ? <Pause className="p-0.5" /> : <Play className="p-0.5" />}
      </button>
      <button className="bg-purple-500 rounded w-10">
        <Clock4Icon className="p-0.5" />
      </button>
      <input
        type="range"
        min="0"
        max={5}
        className="w-full mt-4"
      />
      <button onClick={()=>showSeekBar(false)}>
      <X className="fixed top-2 right-1 h-5 w-5"/>
      </button>
    </div>
  );
};

export default Seekbar;