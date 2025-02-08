"use client"

import { useState, useEffect } from "react"

interface FilterSidebarProps {
  onFilterChange: (filters: { location: string; accreditation: string }) => void
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [location, setLocation] = useState("")
  const [accreditation, setAccreditation] = useState("")

  useEffect(() => {
    onFilterChange({ location, accreditation })
  }, [location, accreditation, onFilterChange])

  return (
    <div className="w-64 mr-6">
      <h2 className="text-xl font-semibold text-green-400 mb-4">Filters</h2>
      <div className="mb-4">
        <label htmlFor="location" className="block text-green-200 mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter location..."
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accreditation" className="block text-green-200 mb-2">
          Accreditation
        </label>
        <select
          id="accreditation"
          value={accreditation}
          onChange={(e) => setAccreditation(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All</option>
          <option value="Verra">Verra</option>
          <option value="Gold Standard">Gold Standard</option>
          <option value="ACR">ACR Carbon</option>
        </select>
      </div>
    </div>
  )
}

