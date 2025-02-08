"use client"
import { useState } from "react"
import NFTGallery from "./components/NFTGallery"
import SearchBar from "./components/SearchBar"
import FilterSidebar from "./components/FilterSidebar"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    location: "",
    accreditation: "",
  })

  return (
    <main className="min-h-screen bg-gray-900">
      <header className="bg-black shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-green-400">Carbon Credit NFTs</h1>
          <p className="mt-2 text-green-200">Tokenized Environmental Impact</p>
        </div>
      </header>
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <FilterSidebar onFilterChange={setFilters} />
        <NFTGallery searchTerm={searchTerm} filters={filters} />
      </div>
    </main>
  )
}

