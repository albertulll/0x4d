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
    <main className="min-h-screen">
      <nav className="glass-effect sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-green-400 text-xl font-bold">
                Carbon Credit NFTs
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-green-400 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Marketplace
              </Link>
              <Link
                href="/your-credits"
                className="text-green-400 hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Your Carbon Credits
              </Link>
              <button className="bg-green-500 text-gray-900 hover:bg-green-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <header className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-400 mb-4 text-balance">Your Carbon Credits</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Manage and redeem your carbon credits to make a positive impact on the environment.
          </p>
        </div>
      </header>
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <FilterSidebar onFilterChange={setFilters} />
        <YourNFTGallery searchTerm={searchTerm} filters={filters} />
      </div>
    </main>
  )
}

