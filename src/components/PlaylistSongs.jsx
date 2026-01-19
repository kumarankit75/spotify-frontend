// export default function PlaylistSongs({ songs }) {
//   if (!songs || songs.length === 0) {
//     return <p>No songs in this playlist</p>;
//   }

//   return (
//     <div style={{ padding: 12 }}>
//       <h3>Songs</h3>
//       {songs.map((s) => (
//         <div key={s.id} style={{ padding: 6 }}>
//           {s.title} — {s.artist}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function PlaylistSongs({ songs, onSelect }) {
  if (!songs || songs.length === 0) {
    return <p>No songs in this playlist</p>;
  }

  return (
    <div style={{ padding: 12 }}>
      <h3>Songs</h3>

      {songs.map((song) => (
        <div
          key={song.id}
          onClick={() => onSelect(song)}
          style={{
            padding: 8,
            cursor: "pointer",
            borderBottom: "1px solid #333",
          }}
        >
          🎵 {song.title} — {song.artist}
        </div>
      ))}
    </div>
  );
}
