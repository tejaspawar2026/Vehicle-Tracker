
import { X } from 'lucide-react'

function FilterTab({ setShowDialog , setShowSeekBar}) {

  return (
    <>
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Configure</h2>
          <X onClick={() => setShowDialog(false)} className="cursor-pointer" />
        </div>
        <div className="flex mb-4">
          <select className="p-2 border rounded flex-grow">
            <option>WIRELESS</option>
            <option>WIRED</option>
          </select>
        </div>
        <div className="flex mb-4">
          <select className="p-2 border rounded flex-grow">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <button
          onClick={() => {
            setShowSeekBar(true)
            setShowDialog(false)
          }}
          className="w-full p-2 bg-blue-700 text-white rounded">SHOW</button>
      </div>
      
    </>
  )
}

export default FilterTab