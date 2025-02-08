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
    <div className="relative bg-glass rounded-lg overflow-hidden border border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 flex flex-col h-full">
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
        <p className="text-gray-300 mb-2">Credits: {nft.creditAmount} tons CO₂e</p>
        <p className="text-green-400 font-semibold mb-2 text-lg">Price: {nft.price}</p>
        <div className="mt-auto">
          <button
            className="w-full bg-primary text-primary-foreground font-semibold py-2 px-4 rounded hover:bg-primary/90 transition-all duration-300"
            onClick={() => console.log(`Buying ${nft.creditAmount} credits from ${nft.title}`)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

