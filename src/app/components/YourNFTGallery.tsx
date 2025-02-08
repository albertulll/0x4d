import { useState } from "react"
import YourNFTCard from "./YourNFTCard"

// This is placeholder data. Replace it with real user's carbon credit NFT data from your platform.
const yourCarbonCreditNFTs = [
  {
    id: 1,
    title: "Amazon Rainforest Preservation",
    image: "/images/carbon_credit_3.jpeg",
    creditAmount: "10",
    projectType: "Reforestation",
    location: "Manaus, Brazil",
    accreditedBy: "Verra",
    nftAddress: "0x1234...5678",
  },
  {
    id: 2,
    title: "Wind Farm Initiative",
    image: "/images/carbon_credit_3.jpeg",
    creditAmount: "15",
    projectType: "Renewable Energy",
    location: "Texas, USA",
    accreditedBy: "Gold Standard",
    nftAddress: "0x1234...5678",
  },
  {
    id: 3,
    title: "Ocean Cleanup Project",
    image: "/images/carbon_credit_3.jpeg",
    creditAmount: "5",
    projectType: "Ocean Conservation",
    location: "Bali, Indonesia",
    accreditedBy: "Verra",
    nftAddress: "0x1234...5678",
  },
]
interface YourNFTGalleryProps {
  searchTerm: string
  filters: {
    location: string
    accreditation: string
  }
}

export default function YourNFTGallery({ searchTerm, filters }: YourNFTGalleryProps) {
  const [selectedNFTId, setSelectedNFTId] = useState<number | null>(null)
  const filteredNFTs = yourCarbonCreditNFTs.filter(
    (nft) =>
      nft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.location === "" || nft.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.accreditation === "" || nft.accreditedBy === filters.accreditation),
  )

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNFTs.map((nft) => (
          <YourNFTCard
            key={nft.id}
            nft={nft}
            isSelected={selectedNFTId === nft.id}
            onSelect={() => setSelectedNFTId(nft.id)}
            onClose={() => setSelectedNFTId(null)}
          />
        ))}
      </div>
    </div>
  )
}

