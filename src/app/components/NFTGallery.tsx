"use client"
import NFTCard from "./NFTCard"

// This is placeholder data. Replace it with real carbon credit NFT data from your platform.
const carbonCreditNFTs = [
  {
    id: 1,
    title: "Amazon Rainforest Preservation",
    image: "/images/carbon_credit_1.jpeg",
    creditAmount: "10",
    price: "0.5 ETH",
    projectType: "Reforestation",
    location: "Manaus, Brazil",
    accreditedBy: "Verra",
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
  },
]

interface NFTGalleryProps {
    searchTerm: string
    filters: {
      location: string
      accreditation: string
    }
  }
  
  export default function NFTGallery({ searchTerm, filters }: NFTGalleryProps) {
    const filteredNFTs = carbonCreditNFTs.filter(
      (nft) =>
        nft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.location === "" || nft.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.accreditation === "" || nft.accreditedBy === filters.accreditation),
    )
  
    return (
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    )
  }
  
  