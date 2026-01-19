export default function Playlists({ playlists, onSelect }) {
  return (
    <div style={{ borderRight: "1px solid #333", padding: 12 }}>
      <h3>Playlists</h3>
      {playlists.map((p) => (
        <div
          key={p.id}
          onClick={() => onSelect(p)}
          style={{ cursor: "pointer", padding: 6 }}
        >
          🎵 {p.name}
        </div>
      ))}
    </div>
  );
}
