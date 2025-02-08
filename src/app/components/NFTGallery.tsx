"use client"
import { useEffect, useState } from "react"
import { Network, Alchemy } from "alchemy-sdk"
import NFTCard from "./NFTCard"
var carbonOffsetNFTs = [
    {
      id: 1,
      title: "Amazon Rainforest Preservation",
      image: "/images/carbon_credit_1.jpeg",
      creditAmount: "10",
      price: "0.5 ETH",
      projectType: "Reforestation",
      location: "Manaus, Brazil",
      accreditedBy: "Verra",
      nftAddress: "0x1234...5678", 
    },
    {
      id: 2,
      title: "Wind Farm Initiative",
      image: "/images/carbon_credit_1.jpeg",
      creditAmount: "15",
      price: "0.7 ETH",
      projectType: "Renewable Energy",
      location: "Texas, USA",
      accreditedBy: "Gold Standard",
      nftAddress: "0xabcd...ef01"
    },
    {
      id: 3,
      title: "Ocean Cleanup Project",
      image: "/images/carbon_credit_2.jpeg",
      creditAmount: "5",
      price: "0.3 ETH",
      projectType: "Ocean Conservation",
      location: "Bali, Indonesia",
      accreditedBy: "Verra",
      nftAddress: "0x1234...5678", 
    },
    {
      id: 4,
      title: "Sustainable Agriculture",
      image: "/images/carbon_credit_2.jpeg",
      creditAmount: "12",
      price: "0.6 ETH",
      projectType: "Sustainable Farming",
      location: "Punjab, India",
      accreditedBy: "ACR Carbon",
      nftAddress: "0x2468...1357",
    },
    {
      id: 5,
      title: "Urban Reforestation",
      image: "/images/carbon_credit_1.jpeg",
      creditAmount: "8",
      price: "0.4 ETH",
      projectType: "Urban Greening",
      location: "Melbourne, Australia",
      accreditedBy: "Gold Standard",
      nftAddress: "0x1357...2468",
    },
    {
      id: 6,
      title: "Solar Panel Installation",
      image: "/images/carbon_credit_2.jpeg",
      creditAmount: "20",
      price: "0.8 ETH",
      projectType: "Solar Energy",
      location: "Andalusia, Spain",
      accreditedBy: "Verra",
      nftAddress: "0xabcd...ef01",
    },
  ]
// Configure Alchemy SDK
const config = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

interface NFTGalleryProps {
  searchTerm: string
  filters: {
    location: string
    accreditation: string
  }
}
const contractAddress = "0x495f947276749ce646f68ac8c248420045cb7b5e"
export default function NFTGallery({ searchTerm, filters }: NFTGalleryProps) {
  const [nfts, setNfts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getNFTs() {
      try {
        const response = await alchemy.nft.getNftsForContract(contractAddress, {
            pageSize: 20
          });
          console.log(response)
          const formattedNFTs = response.nfts
          .filter(nft => nft.name && nft.name !== "Untitled")
          .map(nft => ({
            id: Number(nft.tokenId),
            title: nft.name || "Untitled",
            image: nft.image?.originalUrl || "/placeholder.svg",
            offsetAmount: "0",
            price: "N/A",
            projectType: "Unknown",
            location: "Unknown",
            accreditedBy: "Unknown",
            nftAddress: contractAddress,
          }));

        setNfts(formattedNFTs)
      } catch (error) {
        console.error("Error fetching NFTs:", error)
      } finally {
        setLoading(false)
      }
    }

    getNFTs()
  }, [setNfts, alchemy])

  const fetchedNFTs = nfts.filter(
    (nft) =>
      nft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.location === "" || nft.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.accreditation === "" || nft.accreditedBy === filters.accreditation)
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-green-400">Loading NFTs...</div>
      </div>
    )
  }
  carbonOffsetNFTs=carbonOffsetNFTs.concat(fetchedNFTs)
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carbonOffsetNFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  )
}
  
  