"use client"
import { useState } from "react"
import { X, Upload } from "lucide-react"

interface MintNFTOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function MintNFTOverlay({ isOpen, onClose }: MintNFTOverlayProps) {
  const [title, setTitle] = useState("")
  const [offsetAmount, setOffsetAmount] = useState("")
  const [projectType, setProjectType] = useState("")
  const [location, setLocation] = useState("")
  const [accreditedBy, setAccreditedBy] = useState("")
  const [certificate, setCertificate] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call an API to mint the NFT
    const nftAddress = `0x${Math.random().toString(16).substr(2, 40)}`
    console.log("Minting NFT with address:", nftAddress)
    console.log({ title, offsetAmount, projectType, location, accreditedBy, certificate })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-400">Mint New Carbon Offset NFT</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="offsetAmount" className="block text-sm font-medium text-gray-300">
              Offset Amount (tons CO₂e)
            </label>
            <input
              type="number"
              id="offsetAmount"
              value={offsetAmount}
              onChange={(e) => setOffsetAmount(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
              Project Type
            </label>
            <select
              id="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
              required
            >
              <option value="">Select a project type</option>
              <option value="Reforestation">Reforestation</option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Ocean Conservation">Ocean Conservation</option>
              <option value="Sustainable Farming">Sustainable Farming</option>
              <option value="Urban Greening">Urban Greening</option>
              <option value="Solar Energy">Solar Energy</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="accreditedBy" className="block text-sm font-medium text-gray-300">
              Accredited By
            </label>
            <input
              type="text"
              id="accreditedBy"
              value={accreditedBy}
              onChange={(e) => setAccreditedBy(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="certificate" className="block text-sm font-medium text-gray-300">
              Upload Certificate
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-400">
                  <label
                    htmlFor="certificate"
                    className="relative cursor-pointer rounded-md font-medium text-green-400 hover:text-green-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="certificate"
                      name="certificate"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setCertificate(e.target.files ? e.target.files[0] : null)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Mint NFT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

