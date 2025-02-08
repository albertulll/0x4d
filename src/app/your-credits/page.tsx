"use client"
import { useState } from "react"
import Link from "next/link"
import YourNFTGallery from "../components/YourNFTGallery"
import SearchBar from "../components/SearchBar"
import FilterSidebar from "../components/FilterSidebar"

export default function YourCredits() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    location: "",
    accreditation: "",
  })

  return (
    <main className="min-h-screen bg-gray-900">
      <nav className="bg-black shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-green-400 text-xl font-bold">
                Carbon Credit NFTs
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-green-400 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium">
                Marketplace
              </Link>
              <Link
                href="/your-credits"
                className="text-green-400 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Your Carbon Credits
              </Link>
              <button className="bg-green-500 text-black hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium ml-4">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-green-400">Your Carbon Credits</h1>
          <p className="mt-2 text-green-200">Manage and redeem your carbon credits</p>
        </div>
      </header>
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <FilterSidebar onFilterChange={setFilters} />
        <YourNFTGallery searchTerm={searchTerm} filters={filters} />
      </div>
    </main>
  )
}

