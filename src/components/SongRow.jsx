// // export default function SongRow({ song, isActive, onPlay }) {
// //   return (
// //     <div
// //       onClick={() => onPlay(song)}
// //       className={`group flex items-center justify-between p-3 rounded cursor-pointer
// //           ${isActive ? "bg-dark2" : "hover:bg-dark2"}`}
// //     >
// //       {/* Left: title & artist */}
// //       <div className="flex items-center gap-4">
// //         {/* Play icon */}
// //         <div className="w-8 text-center">
// //           <span className="hidden group-hover:inline text-spotify">▶</span>
// //           <span className="group-hover:hidden text-gray-500">
// //             {isActive ? "●" : ""}
// //           </span>
// //         </div>

// //         <div>
// //           <p className={`font-medium ${isActive ? "text-spotify" : ""}`}>
// //             {song.title}
// //           </p>
// //           <p className="text-sm text-gray-400">{song.artist}</p>
// //         </div>
// //       </div>

// //       {/* Right: duration (placeholder) */}
// //       <div className="text-sm text-gray-400">3:45</div>
// //     </div>
// //   );
// // }

// //

// export default function SongRow({ song, isActive, onPlay, onAdd }) {
//   return (
//     <div
//       className={`flex items-center justify-between p-3 rounded cursor-pointer
//         ${isActive ? "bg-dark2" : "hover:bg-dark2"}`}
//     >
//       {/* Left */}
//       <div onClick={() => onPlay(song)} className="flex items-center gap-4">
//         <span className="text-gray-400">▶</span>
//         <div>
//           <p className={`font-medium ${isActive ? "text-spotify" : ""}`}>
//             {song.title}
//           </p>
//           <p className="text-sm text-gray-400">{song.artist}</p>
//         </div>
//       </div>

//       {/* Right */}
//       <button
//         onClick={() => onAdd(song)}
//         className="text-sm text-gray-400 hover:text-white"
//         title="Add to playlist"
//       >
//         ➕
//       </button>
//     </div>
//   );
// }

// //

export default function SongRow({
  song,
  isActive,
  onPlay,
  onAdd,
  onRemove,
  inPlaylist,
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded
        ${isActive ? "bg-dark2" : "hover:bg-dark2"}`}
    >
      {/* Left */}
      <div
        onClick={() => onPlay(song)}
        className="flex items-center gap-4 cursor-pointer"
      >
        <span className="text-gray-400">▶</span>
        <div>
          <p className={`font-medium ${isActive ? "text-spotify" : ""}`}>
            {song.title}
          </p>
          <p className="text-sm text-gray-400">{song.artist}</p>
        </div>
      </div>

      {/* Right */}
      {inPlaylist ? (
        <button
          onClick={() => onRemove(song)}
          className="text-sm text-red-400 hover:text-red-500"
        >
          ❌
        </button>
      ) : (
        <button
          onClick={() => onAdd(song)}
          className="text-sm text-gray-400 hover:text-white"
        >
          ➕
        </button>
      )}
    </div>
  );
}
