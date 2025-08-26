import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // const res = await axios.get(`/api/v1/account/search?q=${query}`);
        //  const res = await axios.get(`http://localhost:5000/api/v1/account/search?q=${query}`);
         const res = await axios.get(` https://voice-controll-youtube-backend-part.onrender.com/api/v1/account/search?q=${query}`);
         console.log(res)
        // setVideos(res.data.videos || []);
        setVideos(res.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching videos", err);
        setLoading(false);
      }
    };
    fetchVideos();
  }, [query]);

  if (loading) {
    return (
      <div className="p-5 text-center text-gray-500">Loading search results...</div>
    );
  }

  return (
    <div className="p-5 mt-10">
      <h2 className="text-xl font-bold mb-4">
        Search results for: <span className="text-red-500">{query}</span>
      </h2>
      {videos.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <Link
              key={video._id}
              to={`/watch/${video._id}`}
              className="flex gap-4 hover:bg-gray-100 p-2 rounded-lg"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-28 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.owner?.name || "Unknown channel"}</p>
                <p className="text-sm text-gray-500">{video.views} views</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
