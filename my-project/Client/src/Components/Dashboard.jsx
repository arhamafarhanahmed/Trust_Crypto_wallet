// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { Loader } from "lucide-react";

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8005/api/get-texts"); // Adjust the endpoint if necessary
//         const result = await response.json();

//         if (response.ok) {
//           const chartData = result.texts.map((text, index) => ({
//             name: `Text ${index + 1}`,
//             value: text.length || 1, // Assuming text length is the metric; adjust as needed
//           }));

//           setData(chartData);
//         } else {
//           console.error("Error fetching data:", result.error);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div className="p-4">
//       <div className="shadow-lg rounded-2xl bg-white p-6">
//         <h1 className="text-xl font-bold mb-4">Dashboard</h1>
//         {loading ? (
//           <div className="flex justify-center items-center">
//             <Loader className="animate-spin" />
//           </div>
//         ) : (
//           <ResponsiveContainer width="100%" height={400}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={150}
//                 fill="#8884d8"
//                 label
//               >
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { Loader } from "lucide-react"

const Dashboard = () => {
  const [data, setData] = useState([])
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8005/api/get-texts") // Adjust the endpoint if necessary
        const result = await response.json()

        if (response.ok) {
          // Process data for chart
          const chartData = result.texts.map((text, index) => ({
            name: `Text ${index + 1}`,
            value: text.length || 1, // Assuming text length is the metric; adjust as needed
          }))

          setData(chartData)

          // Store the actual content
          setContent(result.texts || [])
        } else {
          console.error("Error fetching data:", result.error)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div className="p-4">
      <div className="shadow-lg rounded-2xl bg-white p-6">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <>
            {/* Chart Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Data Visualization</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Content</h2>
              {content.length > 0 ? (
                <div className="space-y-4">
                  {content.map((text, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg bg-gray-50"
                      style={{ borderLeft: `4px solid ${COLORS[index % COLORS.length]}` }}
                    >
                      <h3 className="font-medium mb-2">Text {index + 1}</h3>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No content available</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard

