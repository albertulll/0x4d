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
    <form onSubmit={handleSearch} className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search carbon credits..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 pl-10 rounded-lg bg-gray-800 text-green-400 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-green-400" />
      </div>
    </form>
  )
}

