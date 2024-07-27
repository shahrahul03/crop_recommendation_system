import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../FooterComponent/fotterComponent';

const CropRecommendation = () => {
  const [soilData, setSoilData] = useState({
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSoilData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   const response = await axios.post('/api/predict', soilData);
    //   setResult(response.data);
    // } catch (error) {
    //   console.error("Error fetching prediction:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (<>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-6">Crop Recommendation System</h1>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Crop Recommendation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="ph" className="block text-sm font-medium text-gray-700">Soil pH</label>
            <input
              type="number"
              id="ph"
              name="ph"
              value={soilData.ph}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="nitrogen" className="block text-sm font-medium text-gray-700">Nitrogen (N)</label>
            <input
              type="number"
              id="nitrogen"
              name="nitrogen"
              value={soilData.nitrogen}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="phosphorus" className="block text-sm font-medium text-gray-700">Phosphorus (P)</label>
            <input
              type="number"
              id="phosphorus"
              name="phosphorus"
              value={soilData.phosphorus}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="potassium" className="block text-sm font-medium text-gray-700">Potassium (K)</label>
            <input
              type="number"
              id="potassium"
              name="potassium"
              value={soilData.potassium}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Get Recommendation'}
          </button>
        </form>
      </div>
      {result && (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Recommended Crops</h2>
          <ul className="list-disc pl-5 space-y-2">
            {result.crops.map((crop, index) => (
              <li key={index} className="text-gray-700">{crop}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <Footer/>

    </>
  );
};

export default CropRecommendation;
