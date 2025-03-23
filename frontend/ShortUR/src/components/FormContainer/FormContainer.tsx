import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../Helpers/Constant";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = ({ updateReloadState }) => {
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/shorturl`, {
        fullUrl,
      });

      alert("URL shortened successfully!\nPlease copy it from the table below.");
      setFullUrl("");
      updateReloadState();
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert(`⚠️ ${error.response.data.message}`);
      } else {
        console.error("Error creating short URL:", error);
        alert("Shortened URL already exists.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200 p-4 sm:rounded-2xl">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
          🔗 Shorten Your URL
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Paste your link below and get a short, easy-to-share URL.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* URL Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your link..."
              required
              className="block w-full py-3 px-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition-all"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-medium py-3 rounded-2xl hover:bg-green-700 transition-all duration-200 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
