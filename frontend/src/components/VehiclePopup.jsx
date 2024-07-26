import { CarFront, Clock, MapPin, Gauge, Navigation2, LucideBattery, BatteryFull, Snowflake, DoorOpen, LockKeyholeIcon, KeyRound } from "lucide-react";

const VehiclePopup = ({ data }) => (
    <div className="bg-white rounded-lg p-3 h-auto shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md">
        <div className="flex items-center mb-4 gap-4">
            <div className="flex items-center gap-2">
                <div className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center">
                    <CarFront size={20} />
                </div>
                <span className="font-bold">{data.vehicleType || "WIRELESS"}</span>
            </div>
            <div className="flex items-center text-sm text-green-700 bg-green-100 p-1 rounded gap-1 font-bold">
                <Clock size={16} />
                <span>{data.timestamp || "Jul 20, 07:09 AM"}</span>
            </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
            <MapPin className='fill-blue-500 bg-center-white' size={20} />
            <marquee className="text-sm text-blue-800 truncate">
                {data.location || "Vijay Nagar Rd, Vijay Nagar, Deolali, Nashik, Deolali, Maharashtra"}
            </marquee>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-800">
            {[
                { icon: <Gauge size={20} />, value: `${data.speed || "0.00"} km/h`, label: "Speed" },
                { icon: <Navigation2 className='text-purple-600 fill-purple-600' size={20} />, value: `${data.distance || "0.00"} km`, label: "Distance" },
                { icon: <LucideBattery className="fill-green-500 text-green-500 -rotate-90" size={20} />, value: `${data.battery || "16%"}`, label: "Battery" },
                { icon: null, value: `${data.totalDistance || "834.89 km"}`, label: "Total Distance" },
                { icon: null, value: `${data.distanceFromLastStop || "0.00 km"}`, label: "Distance from last stop" },
                { icon: null, value: `${data.totalRunning || "00:00m"}`, label: "Total running" },
                { icon: null, value: `${data.todayStopped || "07h:10m"}`, label: "Today Stopped" },
                { icon: null, value: `${data.todayIdle || "00h:00m"}`, label: "Today Idle" },
                { icon: null, value: `${data.currentStatus || "STOPPED"}`, label: "Current status" },
                { icon: null, value: `${data.todayMaxSpeed || "0.00 km/h"}`, label: "Today Max Speed" },
                { icon: null, value: `${data.todayIgnitionOff || "00h:00m"}`, label: "Today Ignition Off" },
                { icon: null, value: `${data.todayIgnitionOn || "00h:00m"}`, label: "Today Ignition On" },
                { icon: null, value: `${data.ignitionOffSince || "00h:00m"}`, label: "Ignition Off Since" },
                { icon: null, value: `${data.todayAcOn || "00h:00m"}`, label: "Today Ac On" },
                { icon: null, value: `${data.todayAcOff || "00h:00m"}`, label: "Today Ac Off" },
                { icon: null, value: `${data.acOffSince || "00h:00m"}`, label: "Ac Off since" },
                { icon: null, value: `${data.customValue1 || "16%"}`, label: "Custom Value1" },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    {item.icon}
                    <span className="font-bold">{item.value}</span>
                    <span className="text-gray-400 text-xs mt-1">{item.label}</span>
                </div>
            ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <div className='bg-orange-200 rounded-lg p-2'>
                <KeyRound className=' text-orange-600 fill-orange-500' size={20} />
            </div>
            <div className='bg-orange-200 rounded-lg p-2'>
                <BatteryFull className=' text-orange-600 fill-orange-500' size={20} />
            </div>
            <div className='bg-orange-200 rounded-lg p-2'>
                <Snowflake className='text-orange-600 fill-orange-500' size={20} />
            </div>
            <div className='bg-orange-200 rounded-lg p-2'>
                <DoorOpen className='  text-orange-600 fill-orange-500' size={20} />
            </div>
            <div className='bg-orange-200 rounded-lg p-2'>
                <LockKeyholeIcon className=' text-orange-600 fill-orange-500' size={20} />
            </div>
        </div>
    </div>
);

export default VehiclePopup;
