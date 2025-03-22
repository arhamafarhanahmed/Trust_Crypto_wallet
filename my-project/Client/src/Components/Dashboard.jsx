"use client"

import { useState, useEffect } from "react"
import { Trash2, RefreshCcw, AlertCircle } from "lucide-react"

const Dashboard = () => {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(null)

  // Fetch Data from API
  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("http://localhost:8005/api/get-texts")

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`)
      }

      const result = await response.json()
      console.log("Fetched Result:", result)

      if (result.texts && Array.isArray(result.texts)) {
        setContent(result.texts)
      } else if (Array.isArray(result)) {
        setContent(result)
      } else {
        console.error("Invalid data structure:", result)
        setError("Invalid data format received from server")
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      setError(error.message || "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Delete Text Function
  const handleDelete = async (id) => {
    try {
      setDeleteLoading(id)

      const response = await fetch(`http://localhost:8005/api/delete-text/${id}`, {
        method: "DELETE",
      })

      const text = await response.text() // Read response as text

      let result
      try {
        result = JSON.parse(text) // Try parsing JSON
      } catch (err) {
        console.error("Invalid JSON response:", text)
        alert("Failed to delete: Invalid server response")
        return
      }

      console.log("Delete response:", result)

      if (response.ok) {
        // Remove item from UI
        setContent((prevContent) =>
          prevContent.filter((item) => {
            const itemId = item._id || item.id
            return itemId !== id
          })
        )
      } else {
        console.error("Failed to delete text:", result.error || result.message)
        alert(`Failed to delete: ${result.error || result.message || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error deleting text:", error)
      alert(`Error deleting: ${error.message || "Unknown error"}`)
    } finally {
      setDeleteLoading(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Text Dashboard</h2>
        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          <RefreshCcw className="h-4 w-4" />
          Refresh
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      ) : content.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {content.map((item) => {
                const id = item._id || item.id
                const text = item.content || item.text || String(item)

                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{text}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleDelete(id)}
                        disabled={deleteLoading === id}
                        className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 disabled:opacity-50"
                      >
                        {deleteLoading === id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
          <p className="text-gray-500">No content available</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard

