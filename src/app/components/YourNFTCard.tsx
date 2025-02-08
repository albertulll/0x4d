"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { Leaf, Wind, Droplets, Sprout, TreeDeciduous, Sun, MapPin, Award, X, Hash } from "lucide-react"

interface CarbonOffsetNFT {
  id: number
  title: string
  image: string
  offsetAmount: string
  projectType: string
  location: string
  accreditedBy: string
  nftAddress: string
}

interface YourNFTCardProps {
  nft: CarbonOffsetNFT
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
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = projectTypeIcons[nft.projectType as keyof typeof projectTypeIcons] || Leaf

  const handleRedeem = (action: "retire" | "tax" | "sell") => {
    console.log(
      `${action === "retire" ? "Retiring" : action === "tax" ? "Redeeming for tax credit" : "Selling"} ${nft.offsetAmount} offsets from ${nft.title}`,
    )
    setShowRedeemOptions(false)
  }

  return (
    <div
      ref={cardRef}
      className="bg-glass rounded-2xl overflow-hidden border border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex flex-col h-full relative transform hover:scale-105"
    >
      <div className="relative aspect-square">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
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
        <div className="flex items-center mb-2">
          <Hash className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300 text-sm break-all">{nft.nftAddress}</span>
        </div>
        <p className="text-gray-300 mb-2">Offsets: {nft.offsetAmount} tons CO₂e</p>
        <div className="mt-auto">
          <button
            className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowRedeemOptions(true)}
          >
            Redeem
          </button>
        </div>
      </div>
      {showRedeemOptions && (
        <div
          className="absolute inset-0 bg-gray-900/95 flex flex-col justify-end transition-all duration-300 ease-in-out animate-slide-up rounded-2xl"
          onClick={() => setShowRedeemOptions(false)}
        >
          <div className="bg-gray-800 p-6 rounded-t-2xl shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-green-400">{nft.title}</h3>
              <button onClick={() => setShowRedeemOptions(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">Choose how you want to redeem your carbon offsets:</p>
            <button
              onClick={() => handleRedeem("retire")}
              className="w-full mb-2 bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Retire Offset
            </button>
            <button
              onClick={() => handleRedeem("tax")}
              className="w-full mb-2 bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Redeem for Tax Credit
            </button>
            <button
              onClick={() => handleRedeem("sell")}
              className="w-full mb-2 bg-secondary text-secondary-foreground font-semibold py-2 px-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Sell NFT
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

