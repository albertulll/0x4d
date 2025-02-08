"use client"

import { useState, type React } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search carbon credits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 pl-12 rounded-full bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-lg"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  )
}

