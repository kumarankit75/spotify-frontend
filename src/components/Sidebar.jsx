// // export default function Sidebar({ playlists = [], onSelect }) {
// //   return (
// //     <div className="w-60 bg-black border-r border-gray-800 p-4">
// //       <h2 className="text-lg font-bold mb-4">🎶 Playlists</h2>

// //       {playlists.length === 0 ? (
// //         <p className="text-sm text-gray-500">No playlists yet</p>
// //       ) : (
// //         playlists.map((p) => (
// //           <div
// //             key={p.id}
// //             onClick={() => onSelect(p)}
// //             className="text-gray-300 p-2 rounded cursor-pointer hover:bg-dark2 hover:text-white"
// //           >
// //             {p.name}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }
// // \\

// export default function Sidebar({ playlists, onSelect }) {
//   const safePlaylists = Array.isArray(playlists) ? playlists : [];

//   return (
//     <div className="w-60 bg-black border-r border-gray-800 p-4">
//       <h2 className="text-lg font-bold mb-4">🎶 Playlists</h2>

//       {safePlaylists.length === 0 ? (
//         <p className="text-sm text-gray-500">No playlists yet</p>
//       ) : (
//         safePlaylists.map((p) => (
//           <div
//             key={p.id}
//             onClick={() => onSelect(p)}
//             className="text-gray-300 p-2 rounded cursor-pointer hover:bg-dark2 hover:text-white"
//           >
//             {p.name}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // \\

// \\
import { useState } from "react";

export default function Sidebar({ playlists, onSelect, onCreate }) {
  const [name, setName] = useState("");
  const safePlaylists = Array.isArray(playlists) ? playlists : [];

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim());
    setName("");
  };

  return (
    <div className="w-60 bg-black border-r border-gray-800 p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4">🎶 Playlists</h2>

      {/* Create playlist */}
      <form onSubmit={submit} className="mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New playlist"
          className="w-full p-2 mb-2 bg-dark2 border border-gray-700 rounded text-sm"
        />
        <button
          type="submit"
          className="w-full bg-spotify text-black py-1 rounded font-semibold text-sm"
        >
          + Create
        </button>
      </form>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {safePlaylists.length === 0 ? (
          <p className="text-sm text-gray-500">No playlists yet</p>
        ) : (
          safePlaylists.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelect(p)}
              className="text-gray-300 p-2 rounded cursor-pointer hover:bg-dark2 hover:text-white"
            >
              {p.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
