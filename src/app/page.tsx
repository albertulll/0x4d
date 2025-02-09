"use client"

import { useState } from "react"
import Link from "next/link"
import NFTGallery from "./components/NFTGallery"
import SearchBar from "./components/SearchBar"
import FilterSidebar from "./components/FilterSidebar"
import MintNFTOverlay from "./components/MintNFTOverlay"
import { motion } from "framer-motion"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    location: "",
    accreditation: "",
  })
  const [showMintOverlay, setShowMintOverlay] = useState(false)

  return (
    <main className="min-h-screen">
      <nav className="glass-effect sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-green-400 text-xl font-bold">
                Carbon DApp
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
                Your Carbon Offsets
              </Link>
              <motion.button
                className="bg-green-500 text-gray-900 hover:bg-green-400 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => setShowMintOverlay(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mint NFT
              </motion.button>
              <button className="bg-green-500 text-gray-900 hover:bg-green-400 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      <header className="py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-400 mb-4 text-balance">Carbon Offset Marketplace</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Browse and purchase carbon offsets to reduce your environmental impact
          </p>
        </div>
      </header>
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <FilterSidebar onFilterChange={setFilters} />
        <div className="flex-1">
          <NFTGallery searchTerm={searchTerm} filters={filters} />
        </div>
      </div>
      <MintNFTOverlay isOpen={showMintOverlay} onClose={() => setShowMintOverlay(false)} />
    </main>
  )
}

