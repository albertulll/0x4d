"use client"
import Image from "next/image"
import { Leaf, Wind, Droplets, Sprout, TreeDeciduous, Sun, MapPin, Award } from "lucide-react"

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
  const Icon = projectTypeIcons[nft.projectType as keyof typeof projectTypeIcons] || Leaf

  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
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
        <p className="text-green-400 font-semibold mb-2 text-lg">Price: {nft.price}</p>
        <button
          className="w-full bg-green-500 text-black font-semibold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
          onClick={() => console.log(`Buying ${nft.creditAmount} credits from ${nft.title}`)}
        >
          Buy
        </button>
      </div>
    </div>
  )
}

