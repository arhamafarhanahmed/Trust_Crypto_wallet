import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const Dashboard = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8005/api/get-texts"); // Adjust the endpoint if necessary

        // Check if the response is valid and log the response for debugging
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log("Fetched Result:", result); // Debug log to inspect the data structure

        if (result.texts && Array.isArray(result.texts)) {
          setContent(result.texts); // Set the content directly
        } else {
          console.error("Invalid data structure:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array, only fetch once when component mounts

  return (
    <div className="p-4">
      <div className="shadow-lg rounded-2xl bg-white p-6">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div>
            {/* Content Section in Table */}
            <h2 className="text-lg font-semibold mb-4">Content</h2>
            {content.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">#</th>
                      <th className="border px-4 py-2">Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.map((item, index) => {
                      const textString = item.text ? item.text : String(item); // Ensure the item is a string
                      return (
                        <tr key={index}>
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">{textString}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No content available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
