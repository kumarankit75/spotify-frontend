// export default function SongList({ songs, onSelect }) {
//   return (
//     <div>
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           onClick={() => onSelect(song)}
//           style={{
//             cursor: "pointer",
//             padding: 10,
//             borderBottom: "1px solid #333",
//           }}
//         >
//           <strong>{song.title}</strong> — {song.artist}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function SongList({ songs, onSelect, playlists, onAdd }) {
  return (
    <div>
      <h3>All Songs</h3>

      {songs.map((song) => (
        <div
          key={song.id}
          style={{
            padding: 8,
            borderBottom: "1px solid #333",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={() => onSelect(song)}>
            🎵 {song.title} — {song.artist}
          </span>

          <select onChange={(e) => onAdd(song.id, e.target.value)}>
            <option value="">➕ Add</option>
            {playlists.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
