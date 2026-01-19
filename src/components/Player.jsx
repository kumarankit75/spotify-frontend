// // import { useRef, useState } from "react";

// // export default function Player({ currentSong }) {
// //   const audioRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const togglePlay = () => {
// //     if (!audioRef.current) return;

// //     if (isPlaying) {
// //       audioRef.current.pause();
// //     } else {
// //       audioRef.current.play();
// //     }
// //     setIsPlaying(!isPlaying);
// //   };

// //   if (!currentSong) return <div>Select a song</div>;

// //   return (
// //     <div style={{ padding: 20, background: "#111", color: "#fff" }}>
// //       <h3>{currentSong.title}</h3>
// //       <p>{currentSong.artist}</p>

// //       <audio ref={audioRef} src={currentSong.audio} />

// //       <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
// //     </div>
// //   );
// // }

// import { useRef, useState } from "react";

// export default function Player({ currentSong }) {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     if (!currentSong) return;

//     if (isPlaying) audioRef.current.pause();
//     else audioRef.current.play();

//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-dark2 border-t border-gray-700 p-4 flex items-center justify-between">
//       {currentSong ? (
//         <>
//           <div>
//             <p className="font-semibold">{currentSong.title}</p>
//             <p className="text-sm text-gray-400">{currentSong.artist}</p>
//           </div>

//           <button
//             onClick={togglePlay}
//             className="bg-spotify text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition"
//           >
//             {isPlaying ? "Pause" : "Play"}
//           </button>

//           <audio ref={audioRef} src={currentSong.audio} />
//         </>
//       ) : (
//         <p className="text-gray-400">Select a song 🎵</p>
//       )}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

function formatTime(sec = 0) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Player({
  currentSong,
  queue = [],
  currentIndex = 0,
  onPrev,
  onNext,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [currentSong?.id]);

  const togglePlay = () => {
    if (!currentSong) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const onLoaded = () => setDuration(audioRef.current.duration || 0);
  const onTime = () => setCurrentTime(audioRef.current.currentTime || 0);

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark2 border-t border-gray-700 p-3">
      {!currentSong ? (
        <p className="text-center text-gray-400">Select a song 🎵</p>
      ) : (
        <>
          {/* Top row */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-semibold">{currentSong.title}</p>
              <p className="text-xs text-gray-400">{currentSong.artist}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onPrev}
                className="text-gray-300 hover:text-white"
                title="Previous"
              >
                ⏮
              </button>

              <button
                onClick={togglePlay}
                className="bg-spotify text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button
                onClick={onNext}
                className="text-gray-300 hover:text-white"
                title="Next"
              >
                ⏭
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 w-10">
              {formatTime(currentTime)}
            </span>

            <div
              onClick={seek}
              className="flex-1 h-1 bg-gray-700 rounded cursor-pointer"
            >
              <div
                className="h-1 bg-spotify rounded"
                style={{
                  width: duration ? `${(currentTime / duration) * 100}%` : "0%",
                }}
              />
            </div>

            <span className="text-xs text-gray-400 w-10 text-right">
              {formatTime(duration)}
            </span>
          </div>

          <audio
            ref={audioRef}
            src={currentSong.audio}
            onLoadedMetadata={onLoaded}
            onTimeUpdate={onTime}
            onEnded={onNext}
          />
        </>
      )}
    </div>
  );
}
