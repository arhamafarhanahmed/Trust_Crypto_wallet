import React, { useState } from "react";

function WalletButton() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [textContent, setTextContent] = useState("");

  // Handle the modal submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8005/api/submit-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: textContent }),
      });

      if (response.ok) {
        alert("Text saved successfully!");
        setTextContent(""); // Clear the textarea
        setShowWalletModal(false); // Close the modal
      } else {
        alert("Failed to save text.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving text.");
    }
  };

  return (
    <div className="relative mb-10 max-w-5xl mx-auto text-center">
      <button
        onClick={() => setShowWalletModal(true)}
        className="bg-white py-3 sm:py-5 px-8 sm:px-12 rounded-full text-lg sm:text-xl font-medium text-blue-600 hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        Wallet
      </button>

      {/* Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-medium mb-4">Enter your text</h2>
            <textarea
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              rows="4"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Type your text here..."
            />
            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save Text
              </button>
              <button
                onClick={() => setShowWalletModal(false)}
                className="bg-gray-300 text-black py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletButton;
