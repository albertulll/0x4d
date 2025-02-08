"use client"
import { useState, useEffect } from "react"
import { X, Upload, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react" // Added import for React

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const nftAddress = `0x${Math.random().toString(16).substr(2, 40)}`
    console.log("Minting NFT with address:", nftAddress)
    console.log({ title, offsetAmount, projectType, location, accreditedBy, certificate })
    setIsSubmitting(false)
    setIsSuccess(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-green-400">Mint New Carbon Offset NFT</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors duration-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="offsetAmount" className="block text-sm font-medium text-gray-300 mb-1">
                    Offset Amount (tons CO₂e)
                  </label>
                  <input
                    type="number"
                    id="offsetAmount"
                    value={offsetAmount}
                    onChange={(e) => setOffsetAmount(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200"
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
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="accreditedBy" className="block text-sm font-medium text-gray-300 mb-1">
                    Accredited By
                  </label>
                  <input
                    type="text"
                    id="accreditedBy"
                    value={accreditedBy}
                    onChange={(e) => setAccreditedBy(e.target.value)}
                    className="w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="certificate" className="block text-sm font-medium text-gray-300 mb-1">
                    Upload Certificate
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md hover:border-green-500 transition-colors duration-200">
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
              </div>
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? "Minting..." : isSuccess ? "Success!" : "Mint NFT"}
                </motion.button>
              </div>
            </form>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-md flex items-center"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-green-400">NFT successfully minted!</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

