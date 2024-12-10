import React, { useEffect, useState } from "react";
// import { PlayIcon } from "@heroicons/react/solid"; // Import play icon (HeroIcons)
import PlayCircle from "../../../assets/play-circle.png";
import video1 from "../../../assets/blog1.png";
import video2 from "../../../assets/blog2.png";

const videos = [
  {
    id: 1,
    title: "How to connect your iPhone to a laptop?",
    thumbnail: video1,
    duration: 13,
  },
  {
    id: 2,
    title:
      "How to fix Green Screen of Death (GSoD) error in Windows 10 and 11?",
    thumbnail: video2,
    duration: 3,
  },
  {
    id: 3,
    title: "Iphone 14Promax review, Still powerful and flagship",
    thumbnail: video1,
    duration: 3,
  },
  {
    id: 4,
    title: "10 things you should never store in your smartphone!",
    thumbnail: video1,
    duration: 13,
  },
  {
    id: 5,
    title: "How to prevent the laptop from turning off after closing the door?",
    thumbnail: video1,
    duration: 10,
  },
  {
    id: 6,
    title:
      "5 quick and easy ways to check the health of the graphics card in Windows 11",
    thumbnail: video1,
    duration: 12,
  },
];

const VideoCard = () => {
  // State to track progress for each video
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // Simulate the progress for each video (e.g., based on a timer)
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress };
        videos.forEach((video) => {
          if (!newProgress[video.id]) newProgress[video.id] = 0; // Initialize if not already set
          newProgress[video.id] = Math.min(
            newProgress[video.id] + 1,
            video.duration
          ); // Increment the progress
        });
        return newProgress;
      });
    }, 1000); // Update every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full mx-auto space-y-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover"
          />

          {/* Play Icon */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <img src={PlayCircle} className="w-12 h-12" alt="Play Button" />
          </div>

          {/* Title and Progress Bar */}
          <div className="absolute bottom-0 w-full backdrop-blur-md  px-2 py-1">
            {/* Dynamic Progress Bar */}
            <div className="relative w-full h-px bg-gray-300">
              <div
                className="absolute h-px bg-red-500"
                style={{
                  width: `${(progress[video.id] / video.duration) * 100}%`,
                }}
              ></div>
            </div>

            {/* Title */}
            <p className="text-white text-center text-lg font-semibold mt-2">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;

// import React, { useState } from "react";
// // import { PlayIcon, PauseIcon } from "@heroicons/react/solid";
// import PlayCircle from "../../../assets/play-circle.png";
// import video1 from "../../../assets/blog1.png";
// import video2 from "../../../assets/blog2.png";

// const videos = [
//   {
//     id: 1,
//     title: "How to connect your iPhone to a laptop?",
//     thumbnail: video1,
//   },
//   {
//     id: 2,
//     title:
//       "How to fix Green Screen of Death (GSoD) error in Windows 10 and 11?",
//     thumbnail: video2,
//   },
//   {
//     id: 3,
//     title: "Iphone 14Promax review, Still powerful and flagship",
//     thumbnail: video1,
//   },
//   {
//     id: 4,
//     title: "10 things you should never store in your smartphone!",
//     thumbnail: video1,
//   },
//   {
//     id: 5,
//     title: "How to prevent the laptop from turning off after closing the door?",
//     thumbnail: video1,
//   },
//   {
//     id: 6,
//     title:
//       "5 quick and easy ways to check the health of the graphics card in Windows 11",
//     thumbnail: video1,
//   },
// ];

// const VideoCard = () => {
//   const [playingVideo, setPlayingVideo] = useState(null);

//   const handlePlayPause = (id) => {
//     setPlayingVideo(playingVideo === id ? null : id); // Toggle playing state
//   };

//   return (
//     <div className="w-full mx-auto space-y-4">
//       {videos.map((video) => (
//         <div
//           key={video.id}
//           className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
//             playingVideo === video.id ? "ring-4 ring-red-500" : ""
//           }`}
//         >
//           {/* Video Thumbnail */}
//           <img
//             src={video.thumbnail}
//             alt={video.title}
//             className="w-full h-48 object-cover"
//           />

//           {/* Overlay Play/Pause Button */}
//           <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//             <div
//               onClick={() => handlePlayPause(video.id)}
//               className="p-2 bg-white rounded-full cursor-pointer"
//             >
//               {playingVideo === video.id ? (
//                 // <PauseIcon className="h-10 w-10 text-red-500" />
//                 <h4> pause</h4>
//               ) : (
//                 // <PlayIcon className="h-10 w-10 text-red-500" />
//                 <h3> play</h3>
//               )}
//             </div>
//           </div>

//           {/* Video Title */}
//           <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
//             <p className="text-white text-lg font-semibold">{video.title}</p>
//           </div>

//           {/* Playing indicator */}
//           {playingVideo === video.id && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <p className="text-white text-lg font-bold">Now Playing...</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoCard;
