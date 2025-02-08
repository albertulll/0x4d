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
  },
  {
    id: 2,
    title: "Wind Farm Initiative",
    image: "/images/carbon_credit_3.jpeg",
    creditAmount: "15",
    projectType: "Renewable Energy",
    location: "Texas, USA",
    accreditedBy: "Gold Standard",
  },
  {
    id: 3,
    title: "Ocean Cleanup Project",
    image: "/images/carbon_credit_3.jpeg",
    creditAmount: "5",
    projectType: "Ocean Conservation",
    location: "Bali, Indonesia",
    accreditedBy: "Verra",
  },
]

interface YourNFTGalleryProps {
  searchTerm: string
}

export default function YourNFTGallery({ searchTerm }: YourNFTGalleryProps) {
  const filteredNFTs = yourCarbonCreditNFTs.filter((nft) => nft.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNFTs.map((nft) => (
        <YourNFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  )
}

