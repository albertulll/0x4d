"use client"
import Image from "next/image"
import { Leaf, Wind, Droplets, Sprout, TreeDeciduous, Sun, MapPin, Award, Hash } from "lucide-react"

interface CarbonOffsetNFT {
  id: number
  title: string
  image: string
  offsetAmount: string
  price: string
  projectType: string
  location: string
  accreditedBy: string
  nftAddress: string
}

interface NFTCardProps {
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

export default function NFTCard({ nft }: NFTCardProps) {
  const Icon = projectTypeIcons[nft.projectType as keyof typeof projectTypeIcons] || Leaf

  return (
    <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 flex flex-col h-full transform hover:scale-105">
      <div className="relative aspect-square">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-2xl font-bold text-green-400 mb-4">{nft.title}</h2>
        <div className="flex items-center mb-3">
          <Icon className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.projectType}</span>
        </div>
        <div className="flex items-center mb-3">
          <MapPin className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.location}</span>
        </div>
        <div className="flex items-center mb-3">
          <Award className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300">{nft.accreditedBy}</span>
        </div>
        <div className="flex items-center mb-3">
          <Hash className="w-5 h-5 text-green-400 mr-2" />
          <span className="text-gray-300 text-sm break-all">{nft.nftAddress}</span>
        </div>
        <p className="text-gray-300 mb-2">Offsets: {nft.offsetAmount} tons CO₂e</p>
        <p className="text-green-400 font-semibold mb-2 text-xl">Price: {nft.price}</p>
        <div className="mt-auto">
          <button
            className="w-full bg-green-500 text-gray-900 font-semibold py-3 px-4 rounded-xl hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            onClick={() => console.log(`Buying ${nft.offsetAmount} offsets from ${nft.title}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

