"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Leaf, Wind, Droplets, Sprout, TreeDeciduous, Sun, MapPin, Award, X } from "lucide-react"

interface CarbonCreditNFT {
  id: number
  title: string
  image: string
  creditAmount: string
  projectType: string
  location: string
  accreditedBy: string
}

interface YourNFTCardProps {
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

export default function YourNFTCard({ nft }: YourNFTCardProps) {
  const [showRedeemOptions, setShowRedeemOptions] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const Icon = projectTypeIcons[nft.projectType as keyof typeof projectTypeIcons] || Leaf

  const handleRedeem = (action: "retire" | "tax") => {
    console.log(
      `${action === "retire" ? "Retiring" : "Redeeming for tax credit"} ${nft.creditAmount} credits from ${nft.title}`,
    )
    setShowRedeemOptions(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowRedeemOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
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
        <button
          className="w-full bg-green-500 text-black font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
          onClick={() => setShowRedeemOptions(true)}
        >
          Redeem
        </button>
      </div>
      {showRedeemOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div ref={popupRef} className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-green-400">{nft.title}</h3>
              <button onClick={() => setShowRedeemOptions(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">Choose how you want to redeem your carbon credits:</p>
            <button
              onClick={() => handleRedeem("retire")}
              className="w-full mb-2 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Retire Credit
            </button>
            <button
              onClick={() => handleRedeem("tax")}
              className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Redeem for Tax Credit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

