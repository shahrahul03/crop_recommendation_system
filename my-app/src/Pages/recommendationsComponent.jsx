import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../FooterComponent/fotterComponent';

const CropRecommendation = () => {
  const [soilData, setSoilData] = useState({
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    rainfall: '',
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
    try {
      const response = await axios.post('/api/predict', soilData);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 mb-1">
        <h1 className="text-4xl font-extrabold mb-6 text-green-900">Crop Recommendation System</h1>
        <p className="text-lg mb-4 text-green-700">Fill Appropriate Data to Get Better Result</p>
        <p className="text-md text-teal-800 mb-6 ">Ranges given according to research on Nepal's agriculture condition</p>
        <div className="flex flex-col lg:flex-row w-full max-w-6xl">
          <div className="p-6 w-full lg:w-1/2 bg-white rounded-lg shadow-md mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Crop Recommendation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['pH of Soil', 'nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'rainfall'].map((field, index) => (
                <div key={index} className="space-y-1">
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {field === 'pH of Soil' ? ' (3.5 - 9.9)' : ''}
                    {field === 'nitrogen' ? ' (0 - 140 mg/kg)' : ''}
                    {field === 'phosphorus' ? ' (5 - 145 mg/kg)' : ''}
                    {field === 'potassium' ? ' (5 - 205 mg/kg)' : ''}
                    {field === 'temperature' ? ' (°C) (8.8 - 43.6)' : ''}
                    {field === 'humidity' ? ' (%) (14.2 - 99.9)' : ''}
                    {field === 'rainfall' ? ' (mm) (20.2 - 298.5)' : ''}
                  </label>
                  <input
                    type="number"
                    id={field}
                    name={field}
                    value={soilData[field]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
                    min={
                      field === 'pH of Soil' ? '3.5' :
                      field === 'nitrogen' ? '0' :
                      field === 'phosphorus' ? '5' :
                      field === 'potassium' ? '5' :
                      field === 'temperature' ? '8.8' :
                      field === 'humidity' ? '14.2' :
                      field === 'rainfall' ? '20.2' : undefined
                    }
                    max={
                      field === 'pH of Soil' ? '9.9' :
                      field === 'nitrogen' ? '140' :
                      field === 'phosphorus' ? '145' :
                      field === 'potassium' ? '205' :
                      field === 'temperature' ? '43.6' :
                      field === 'humidity' ? '99.9' :
                      field === 'rainfall' ? '298.5' : undefined
                    }
                    step="0.1"
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                className={`w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Get Recommendation'}
              </button>
            </form>
          </div>
          <div className="p-6 w-full lg:w-1/2 bg-white rounded-lg shadow-md m-1">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Rules and Regulations</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ensure accurate data entry for best results.</li>
              <li>pH of Soil should be within the range of 3.5 to 9.9.</li>
              <li>Nitrogen levels should be between 0 to 140 mg/kg.</li>
              <li>Phosphorus levels should be between 5 to 145 mg/kg.</li>
              <li>Potassium levels should be between 5 to 205 mg/kg.</li>
              <li>Temperature should be within the range of 8.8 to 43.6°C.</li>
              <li>Humidity levels should be between 14.2 to 99.9%.</li>
              <li>Rainfall should be within the range of 20.2 to 298.5 mm.</li>
              <li>Regularly update soil data to get accurate recommendations.</li>
              <li>Consult local agricultural experts for additional advice.</li>
            </ul>
          </div>
        </div>
        {result && (
          <div className="p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Recommended Crops</h2>
            <div className="bg-green-50 p-4 rounded-lg shadow-inner">
              <ul className="list-disc pl-5 space-y-2">
                {result.crops.map((crop, index) => (
                  <li key={index} className="text-gray-700">{crop}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default CropRecommendation;
