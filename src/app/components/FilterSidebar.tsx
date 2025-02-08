"use client"

import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Award } from "lucide-react"

interface FilterSidebarProps {
  onFilterChange: (filters: { location: string; accreditation: string }) => void
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [location, setLocation] = useState("")
  const [accreditation, setAccreditation] = useState("")
  const [isLocationOpen, setIsLocationOpen] = useState(true)
  const [isAccreditationOpen, setIsAccreditationOpen] = useState(true)

  useEffect(() => {
    onFilterChange({ location, accreditation })
  }, [location, accreditation, onFilterChange])

  return (
    <div className="w-72 mr-8 glass-effect p-6 rounded-2xl animate-fade-in shadow-lg">
      <h2 className="text-2xl font-semibold text-green-400 mb-6">Filters</h2>

      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left text-green-300 font-medium mb-2"
          onClick={() => setIsLocationOpen(!isLocationOpen)}
        >
          <span className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Location
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isLocationOpen ? "transform rotate-180" : ""}`}
          />
        </button>
        {isLocationOpen && (
          <div className="mt-2 transition-all duration-300 ease-in-out">
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-inner"
              placeholder="Enter location..."
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          className="flex items-center justify-between w-full text-left text-green-300 font-medium mb-2"
          onClick={() => setIsAccreditationOpen(!isAccreditationOpen)}
        >
          <span className="flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Accreditation
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isAccreditationOpen ? "transform rotate-180" : ""}`}
          />
        </button>
        {isAccreditationOpen && (
          <div className="mt-2 transition-all duration-300 ease-in-out">
            <select
              id="accreditation"
              value={accreditation}
              onChange={(e) => setAccreditation(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 appearance-none shadow-inner"
            >
              <option value="">All</option>
              <option value="Verra">Verra</option>
              <option value="Gold Standard">Gold Standard</option>
              <option value="ACR">ACR Carbon</option>
            </select>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setLocation("")
          setAccreditation("")
        }}
        className="w-full bg-gray-700 text-green-400 font-medium py-2 px-4 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
      >
        Clear Filters
      </button>
    </div>
  )
}

