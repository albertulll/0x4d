"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Leaf, Wind, Droplets, Sprout, TreeDeciduous, Sun, MapPin, Award, ChevronDown } from "lucide-react"

interface CarbonCreditNFT {
  id: number
  title: string
  image: string
  creditAmount: string
  price: string
  projectType: string
  location: string
  accreditedBy: string
}

interface NFTCardProps {
  nft: CarbonCreditNFT
}

const projectTypeIcons = {
  Reforestation: TreeDeciduous,
  "Renewable Energy": Wind,
  "Ocean Conservation": Droplets,
  "Sustainable Farming": Sprout,
  "Urban Greening": Leaf,
  "Solar Energy": Sun,
}

export default function NFTCard({ nft }: NFTCardProps) {
  const [showRedeemOptions, setShowRedeemOptions] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = projectTypeIcons[nft.projectType as keyof typeof projectTypeIcons] || Leaf

  const handleRedeem = (action: "retire" | "tax") => {
    // Here you would implement the actual redeem logic
    console.log(
      `${action === "retire" ? "Retiring" : "Redeeming for tax credit"} ${nft.creditAmount} credits from ${nft.title}`,
    )
    setShowRedeemOptions(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setShowRedeemOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative bg-gray-800 rounded-lg overflow-hidden border border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
    >
      <div className="relative aspect-square">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-400 mb-2">{nft.title}</h2>
        <div className="flex items-center mb-2">
          <Icon className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.projectType}</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.location}</span>
        </div>
        <div className="flex items-center mb-2">
          <Award className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.accreditedBy}</span>
        </div>
        <p className="text-gray-300 mb-2">Credits: {nft.creditAmount} tons CO₂e</p>
        <p className="text-green-400 font-semibold mb-2">{nft.price}</p>
        <div className="relative">
          <button
            className="w-full bg-green-500 text-black font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 flex justify-between items-center"
            onClick={() => setShowRedeemOptions(!showRedeemOptions)}
          >
            Redeem
            <ChevronDown
              className={`ml-2 transition-transform duration-300 ${showRedeemOptions ? "transform rotate-180" : ""}`}
            />
          </button>
          {showRedeemOptions && (
            <div className="absolute z-20 w-full mt-2 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  onClick={() => handleRedeem("retire")}
                  className="block w-full px-4 py-2 text-sm text-green-300 hover:bg-gray-600 hover:text-green-400 transition-colors duration-300"
                  role="menuitem"
                >
                  Retire Credit
                </button>
                <button
                  onClick={() => handleRedeem("tax")}
                  className="block w-full px-4 py-2 text-sm text-green-300 hover:bg-gray-600 hover:text-green-400 transition-colors duration-300"
                  role="menuitem"
                >
                  Redeem for Tax Credit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

