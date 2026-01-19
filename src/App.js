// // // // // import { useEffect, useState } from "react";
// // // // // import Player from "./components/Player";
// // // // // import SongList from "./components/SongList";

// // // // // export default function App() {
// // // // //   const [songs, setSongs] = useState([]);
// // // // //   const [currentSong, setCurrentSong] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetch("https://5pzf9y-5000.csb.app/songs")
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => setSongs(data))
// // // // //       .catch((err) => console.error("API error:", err));
// // // // //   }, []);

// // // // //   return (
// // // // //     <div style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
// // // // //       <h1>Spotify Clone 🎧</h1>

// // // // //       {songs.length === 0 ? (
// // // // //         <p>Loading songs...</p>
// // // // //       ) : (
// // // // //         <>
// // // // //           <SongList songs={songs} onSelect={setCurrentSong} />
// // // // //           <Player currentSong={currentSong} />
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // //

// // // // import { useEffect, useState } from "react";
// // // // import Player from "./components/Player";
// // // // import SongList from "./components/SongList";
// // // // import Playlists from "./components/Playlists";
// // // // import PlaylistSongs from "./components/PlaylistSongs";

// // // // const BACKEND_URL = "https://5pzf9y-5000.csb.app"; // <-- change this

// // // // export default function App() {
// // // //   const [songs, setSongs] = useState([]);
// // // //   const [playlists, setPlaylists] = useState([]);
// // // //   const [currentSong, setCurrentSong] = useState(null);
// // // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// // // //   const [playlistSongs, setPlaylistSongs] = useState([]);

// // // //   useEffect(() => {
// // // //     fetch(`${BACKEND_URL}/songs`)
// // // //       .then((res) => res.json())
// // // //       .then(setSongs);

// // // //     fetch(`${BACKEND_URL}/playlists`)
// // // //       .then((res) => res.json())
// // // //       .then(setPlaylists);
// // // //   }, []);

// // // //   const openPlaylist = (playlist) => {
// // // //     setSelectedPlaylist(playlist);
// // // //     fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`)
// // // //       .then((res) => res.json())
// // // //       .then(setPlaylistSongs);
// // // //   };

// // // //   //

// // // //   const addSongToPlaylist = (songId, playlistId) => {
// // // //     if (!playlistId) return;

// // // //     fetch(`${BACKEND_URL}/playlists/${playlistId}/songs`, {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({ songId }),
// // // //     })
// // // //       .then((res) => res.json())
// // // //       .then(() => alert("Song added to playlist ✅"));
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         display: "flex",
// // // //         background: "#000",
// // // //         color: "#fff",
// // // //         minHeight: "100vh",
// // // //       }}
// // // //     >
// // // //       <div style={{ width: 220 }}>
// // // //         <Playlists playlists={playlists} onSelect={openPlaylist} />
// // // //       </div>

// // // //       <div style={{ flex: 1, padding: 12 }}>
// // // //         <h1>Spotify Clone 🎧</h1>

// // // //         {selectedPlaylist ? (
// // // //           // <PlaylistSongs songs={playlistSongs} />
// // // //           <PlaylistSongs songs={playlistSongs} onSelect={setCurrentSong} />
// // // //         ) : (
// // // //           // <SongList songs={songs} onSelect={setCurrentSong} />
// // // //           // <SongList songs={songs} onSelect={setCurrentSong} />

// // // //           //
// // // //           <SongList
// // // //             songs={songs}
// // // //             onSelect={setCurrentSong}
// // // //             playlists={playlists}
// // // //             onAdd={addSongToPlaylist}
// // // //           />
// // // //         )}

// // // //         <Player currentSong={currentSong} />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // import { useState } from "react";
// // // // import Player from "./components/Player";

// // // // export default function App() {
// // // //   const [currentSong, setCurrentSong] = useState(null);

// // // //   return (
// // // //     <div className="min-h-screen bg-dark text-white pb-24">
// // // //       <div className="p-6">
// // // //         <h1 className="text-2xl font-bold mb-4">Spotify Clone 🎧</h1>

// // // //         <div
// // // //           className="p-4 bg-dark2 rounded cursor-pointer hover:bg-gray-800"
// // // //           onClick={() =>
// // // //             setCurrentSong({
// // // //               title: "Demo Song",
// // // //               artist: "Ankit",
// // // //               audio:
// // // //                 "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// // // //             })
// // // //           }
// // // //         >
// // // //           ▶️ Demo Song — Ankit
// // // //         </div>
// // // //       </div>

// // // //       <Player currentSong={currentSong} />
// // // //     </div>
// // // //   );
// // // // }
// // // // //

// // // // import { useState } from "react";
// // // // import Sidebar from "./components/Sidebar";
// // // // import Main from "./components/Main";
// // // // import Player from "./components/Player";

// // // // export default function App() {
// // // //   const [currentSong, setCurrentSong] = useState(null);
// // // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

// // // //   // demo playlists
// // // //   const playlists = [
// // // //     { id: 1, name: "My Favorites ❤️" },
// // // //     { id: 2, name: "Workout 💪" },
// // // //   ];

// // // //   // demo songs
// // // //   const songs = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Demo Song One",
// // // //       artist: "Ankit",
// // // //       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Demo Song Two",
// // // //       artist: "Ankit",
// // // //       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="h-screen flex bg-dark text-white pb-24">
// // // //       {/* Sidebar */}
// // // //       <Sidebar playlists={playlists} onSelect={setSelectedPlaylist} />

// // // //       {/* Main Content */}
// // // //       <Main title={selectedPlaylist ? selectedPlaylist.name : "All Songs"}>
// // // //         {songs.map((song) => (
// // // //           <div
// // // //             key={song.id}
// // // //             onClick={() => setCurrentSong(song)}
// // // //             className="flex justify-between items-center p-3 rounded cursor-pointer hover:bg-dark2"
// // // //           >
// // // //             <div>
// // // //               <p className="font-medium">{song.title}</p>
// // // //               <p className="text-sm text-gray-400">{song.artist}</p>
// // // //             </div>
// // // //             <span className="text-gray-400">▶</span>
// // // //           </div>
// // // //         ))}
// // // //       </Main>

// // // //       {/* Player */}
// // // //       <Player currentSong={currentSong} />
// // // //     </div>
// // // //   );
// // // // }

// // // import { useEffect, useState } from "react";
// // // import Sidebar from "./components/Sidebar";
// // // import Main from "./components/Main";
// // // import Player from "./components/Player";
// // // import SongRow from "./components/SongRow";

// // // const BACKEND_URL = "https://5pzf9y-5000.csb.app"; // <-- replace

// // // export default function App() {
// // //   const [songs, setSongs] = useState([]);
// // //   const [playlists, setPlaylists] = useState([]);
// // //   const [playlistSongs, setPlaylistSongs] = useState([]);

// // //   const [currentSong, setCurrentSong] = useState(null);
// // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

// // //   // Load all songs + playlists on app load
// // //   useEffect(() => {
// // //     fetch(`${BACKEND_URL}/songs`)
// // //       .then((res) => res.json())
// // //       .then(setSongs)
// // //       .catch(console.error);

// // //     fetch(`${BACKEND_URL}/playlists`)
// // //       .then((res) => res.json())
// // //       .then(setPlaylists)
// // //       .catch(console.error);
// // //   }, []);

// // //   // When playlist is selected → load its songs
// // //   const openPlaylist = (playlist) => {
// // //     setSelectedPlaylist(playlist);
// // //     fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`)
// // //       .then((res) => res.json())
// // //       .then(setPlaylistSongs)
// // //       .catch(console.error);
// // //   };

// // //   //
// // //   const getQueue = () => (selectedPlaylist ? playlistSongs : songs);

// // //   const playAt = (index) => {
// // //     const q = getQueue();
// // //     if (!q[index]) return;
// // //     setCurrentSong(q[index]);
// // //     setCurrentIndex(index);
// // //   };

// // //   const playNext = () => {
// // //     const q = getQueue();
// // //     playAt((currentIndex + 1) % q.length);
// // //   };

// // //   const playPrev = () => {
// // //     const q = getQueue();
// // //     playAt((currentIndex - 1 + q.length) % q.length);
// // //   };

// // //   //

// // //   onPlay={(song) => {
// // //     const q = getQueue();
// // //     const idx = q.findIndex(s => s.id === song.id);
// // //     setCurrentIndex(idx);
// // //     setCurrentSong(song);
// // //   }}

// // //   // Decide which songs to show
// // //   const visibleSongs = selectedPlaylist ? playlistSongs : songs;
// // //   const title = selectedPlaylist ? selectedPlaylist.name : "All Songs";

// // //   return (
// // //     <div className="h-screen flex bg-dark text-white pb-24">
// // //       {/* Sidebar */}
// // //       <Sidebar playlists={playlists} onSelect={openPlaylist} />

// // //       {/* Main Content */}
// // //       <Main title={title}>
// // //         {visibleSongs.length === 0 ? (
// // //           <p className="text-gray-400">No songs found</p>
// // //         ) : // visibleSongs.map((song) => (
// // //         //   <div
// // //         //     key={song.id}
// // //         //     onClick={() => setCurrentSong(song)}
// // //         //     className="flex justify-between items-center p-3 rounded cursor-pointer hover:bg-dark2"
// // //         //   >
// // //         //     <div>
// // //         //       <p className="font-medium">{song.title}</p>
// // //         //       <p className="text-sm text-gray-400">{song.artist}</p>
// // //         //     </div>
// // //         //     <span className="text-gray-400">▶</span>
// // //         //   </div>
// // //         // ))

// // //         visibleSongs.length === 0 ? (
// // //           <p className="text-gray-400">No songs found</p>
// // //         ) : (
// // //           visibleSongs.map((song) => (
// // //             <SongRow
// // //               key={song.id}
// // //               song={song}
// // //               isActive={currentSong?.id === song.id}
// // //               onPlay={setCurrentSong}
// // //             />
// // //           ))
// // //         )}
// // //         <p className="text-xs text-gray-500 mb-2">
// // //           Demo mode — songs stream from public URLs
// // //         </p>
// // //       </Main>

// // //       {/* Player */}
// // //       {/* <Player currentSong={currentSong} /> */}

// // // {/* // */}
// // // <Player
// // //   currentSong={currentSong}
// // //   queue={getQueue()}
// // //   currentIndex={currentIndex}
// // //   onNext={playNext}
// // //   onPrev={playPrev}
// // // />

// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Main from "./components/Main";
// // import Player from "./components/Player";
// // import SongRow from "./components/SongRow";
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";

// // const BACKEND_URL = "https://5pzf9y-5000.csb.app"; // 🔴 replace with real public backend URL

// // export default function App() {
// //   const [songs, setSongs] = useState([]);
// //   const [playlists, setPlaylists] = useState([]);
// //   const [playlistSongs, setPlaylistSongs] = useState([]);

// //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

// //   const [currentSong, setCurrentSong] = useState(null);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   //
// //   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
// //   const [authMode, setAuthMode] = useState("login");

// //   //

// //   const login = async (data) => {
// //     // TEMP: fake auth (backend next)
// //     const fakeUser = { email: data.email };
// //     localStorage.setItem("user", JSON.stringify(fakeUser));
// //     setUser(fakeUser);
// //   };

// //   const signup = async (data) => {
// //     const fakeUser = { email: data.email };
// //     localStorage.setItem("user", JSON.stringify(fakeUser));
// //     setUser(fakeUser);
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     setUser(null);
// //   };

// //   //

// //   if (!user) {
// //     return authMode === "login" ? (
// //       <Login onLogin={login} goSignup={() => setAuthMode("signup")} />
// //     ) : (
// //       <Signup onSignup={signup} goLogin={() => setAuthMode("login")} />
// //     );
// //   }

// //   /* =========================
// //      LOAD SONGS & PLAYLISTS
// //   ========================= */
// //   useEffect(() => {
// //     fetch(`${BACKEND_URL}/songs`)
// //       .then((res) => res.json())
// //       .then(setSongs)
// //       .catch(console.error);

// //     fetch(`${BACKEND_URL}/playlists`)
// //       .then((res) => res.json())
// //       .then(setPlaylists)
// //       .catch(console.error);
// //   }, []);

// //   /* =========================
// //      PLAYLIST HANDLING
// //   ========================= */
// //   const openPlaylist = (playlist) => {
// //     setSelectedPlaylist(playlist);
// //     fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`)
// //       .then((res) => res.json())
// //       .then(setPlaylistSongs)
// //       .catch(console.error);
// //   };

// //   /* =========================
// //      PLAYER QUEUE LOGIC
// //   ========================= */
// //   const getQueue = () => (selectedPlaylist ? playlistSongs : songs);

// //   const playSong = (song) => {
// //     const queue = getQueue();
// //     const index = queue.findIndex((s) => s.id === song.id);
// //     setCurrentIndex(index);
// //     setCurrentSong(song);
// //   };

// //   const playNext = () => {
// //     const queue = getQueue();
// //     if (!queue.length) return;
// //     const nextIndex = (currentIndex + 1) % queue.length;
// //     setCurrentIndex(nextIndex);
// //     setCurrentSong(queue[nextIndex]);
// //   };

// //   const playPrev = () => {
// //     const queue = getQueue();
// //     if (!queue.length) return;
// //     const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
// //     setCurrentIndex(prevIndex);
// //     setCurrentSong(queue[prevIndex]);
// //   };

// //   //

// //   const visibleSongs = selectedPlaylist ? playlistSongs : songs;
// //   const title = selectedPlaylist ? selectedPlaylist.name : "All Songs";

// //   return (
// //     <div className="h-screen flex bg-dark text-white pb-28">
// //       {/*  */}

// //       {/* Sidebar */}
// //       <Sidebar playlists={playlists} onSelect={openPlaylist} />

// //       {/* Main Content */}
// //       <Main title={title}>
// //         <button
// //           onClick={logout}
// //           className="absolute top-4 right-4 text-sm text-gray-400 hover:text-white"
// //         >
// //           Logout
// //         </button>

// //         <p className="text-xs text-gray-500 mb-3">
// //           Demo mode — songs stream from public URLs
// //         </p>

// //         {visibleSongs.length === 0 ? (
// //           <p className="text-gray-400">No songs found</p>
// //         ) : (
// //           visibleSongs.map((song) => (
// //             <SongRow
// //               key={song.id}
// //               song={song}
// //               isActive={currentSong?.id === song.id}
// //               onPlay={playSong}
// //             />
// //           ))
// //         )}
// //       </Main>

// //       {/* Player */}
// //       <Player
// //         currentSong={currentSong}
// //         queue={getQueue()}
// //         currentIndex={currentIndex}
// //         onNext={playNext}
// //         onPrev={playPrev}
// //       />
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";

// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
// import Player from "./components/Player";
// import SongRow from "./components/SongRow";

// import Login from "./components/Login";
// import Signup from "./components/Signup";

// const BACKEND_URL = "https://5pzf9y-5000.csb.app"; // 🔴 replace with real public backend URL

// export default function App() {
//   /* =========================
//      AUTH STATE
//   ========================= */
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const [authMode, setAuthMode] = useState("login");

//   /* =========================
//      DATA STATE
//   ========================= */
//   const [songs, setSongs] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
//   const [playlistSongs, setPlaylistSongs] = useState([]);

//   const [selectedPlaylist, setSelectedPlaylist] = useState(null);

//   /* =========================
//      PLAYER STATE
//   ========================= */
//   const [currentSong, setCurrentSong] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!user) return;
//     fetch(`${BACKEND_URL}/songs`)
//       .then((res) => res.json())
//       .then(setSongs)
//       .catch(console.error);

//     fetch(`${BACKEND_URL}/playlists`)
//       .then((res) => res.json())
//       .then(setPlaylists)
//       .catch(console.error);
//   }, []);

//   /* =========================
//      AUTH HANDLERS (v1 fake)
//   ========================= */
//   const login = async ({ email }) => {
//     const fakeUser = { email };
//     localStorage.setItem("user", JSON.stringify(fakeUser));
//     setUser(fakeUser);
//   };

//   const signup = async ({ email }) => {
//     const fakeUser = { email };
//     localStorage.setItem("user", JSON.stringify(fakeUser));
//     setUser(fakeUser);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setAuthMode("login");
//   };

//   /* =========================
//      BLOCK APP IF NOT LOGGED IN
//   ========================= */
//   if (!user) {
//     return authMode === "login" ? (
//       <Login onLogin={login} goSignup={() => setAuthMode("signup")} />
//     ) : (
//       <Signup onSignup={signup} goLogin={() => setAuthMode("login")} />
//     );
//   }

//   /* =========================
//      LOAD SONGS & PLAYLISTS
//   ========================= */

//   /* =========================
//      PLAYLIST HANDLING
//   ========================= */
//   const openPlaylist = (playlist) => {
//     setSelectedPlaylist(playlist);
//     fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`)
//       .then((res) => res.json())
//       .then(setPlaylistSongs)
//       .catch(console.error);
//   };

//   /* =========================
//      PLAYER QUEUE LOGIC
//   ========================= */
//   const getQueue = () => (selectedPlaylist ? playlistSongs : songs);

//   const playSong = (song) => {
//     const queue = getQueue();
//     const index = queue.findIndex((s) => s.id === song.id);
//     setCurrentIndex(index);
//     setCurrentSong(song);
//   };

//   const playNext = () => {
//     const queue = getQueue();
//     if (!queue.length) return;
//     const nextIndex = (currentIndex + 1) % queue.length;
//     setCurrentIndex(nextIndex);
//     setCurrentSong(queue[nextIndex]);
//   };

//   const playPrev = () => {
//     const queue = getQueue();
//     if (!queue.length) return;
//     const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
//     setCurrentIndex(prevIndex);
//     setCurrentSong(queue[prevIndex]);
//   };

//   const visibleSongs = selectedPlaylist ? playlistSongs : songs;
//   const title = selectedPlaylist ? selectedPlaylist.name : "All Songs";

//   /* =========================
//      UI
//   ========================= */
//   return (
//     <div className="h-screen flex bg-dark text-white pb-28 relative">
//       {/* Sidebar */}
//       <Sidebar playlists={playlists} onSelect={openPlaylist} />

//       {/* Main Content */}
//       <Main title={title}>
//         <button
//           onClick={logout}
//           className="absolute top-4 right-6 text-sm text-gray-400 hover:text-white"
//         >
//           Logout
//         </button>

//         <p className="text-xs text-gray-500 mb-3">
//           Demo mode — songs stream from public URLs
//         </p>

//         {visibleSongs.length === 0 ? (
//           <p className="text-gray-400">No songs found</p>
//         ) : (
//           visibleSongs.map((song) => (
//             <SongRow
//               key={song.id}
//               song={song}
//               isActive={currentSong?.id === song.id}
//               onPlay={playSong}
//             />
//           ))
//         )}
//       </Main>

//       {/* Player */}
//       <Player
//         currentSong={currentSong}
//         queue={getQueue()}
//         currentIndex={currentIndex}
//         onNext={playNext}
//         onPrev={playPrev}
//       />
//     </div>
//   );
// }

import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import SongRow from "./components/SongRow";

import Login from "./components/Login";
import Signup from "./components/Signup";

const BACKEND_URL = " https://spotify-backend-u1md.onrender.com"; // replace

export default function App() {
  /* =========================
     AUTH STATE
  ========================= */
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [authMode, setAuthMode] = useState("login");

  /* =========================
     DATA STATE
  ========================= */
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  /* =========================
     PLAYER STATE
  ========================= */
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //

  const [showPicker, setShowPicker] = useState(false);
  const [songToAdd, setSongToAdd] = useState(null);

  //

  // const authHeader = () => ({
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // });

  //

  /* =========================
     LOAD SONGS & PLAYLISTS
     (hooks ALWAYS run)
  ========================= */
  // useEffect(() => {
  //   if (!user) return; // safe guard, hook still runs

  //   fetch(`${BACKEND_URL}/songs`)
  //     .then((res) => res.json())
  //     .then(setSongs)
  //     .catch(console.error);

  //   fetch(`${BACKEND_URL}/playlists`)
  //     .then((res) => res.json())
  //     .then(setPlaylists)
  //     .catch(console.error);
  // }, [user]);

  //
  const authHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  useEffect(() => {
    if (!user) return;

    fetch(`${BACKEND_URL}/songs`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSongs(data);
        else setSongs([]);
      });

    fetch(`${BACKEND_URL}/playlists`, {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlaylists(data);
        } else {
          console.error("Playlists API error:", data);
          setPlaylists([]); // 🔒 SAFE FALLBACK
        }
      });
  }, [user]);

  //

  /* =========================
     AUTH HANDLERS
  ========================= */
  // const login = ({ email }) => {
  //   const fakeUser = { email };
  //   localStorage.setItem("user", JSON.stringify(fakeUser));
  //   setUser(fakeUser);
  // };

  //
  const login = async ({ email, password }) => {
    const res = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  // const signup = ({ email }) => {
  //   const fakeUser = { email };
  //   localStorage.setItem("user", JSON.stringify(fakeUser));
  //   setUser(fakeUser);
  // };

  //

  const signup = async ({ email, password }) => {
    const res = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

  //

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setAuthMode("login");
  };

  /* =========================
     PLAYLIST HANDLING
  ========================= */
  // const openPlaylist = (playlist) => {
  //   setSelectedPlaylist(playlist);

  //   fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`)
  //     .then((res) => res.json())
  //     .then(setPlaylistSongs)
  //     .catch(console.error);
  // };

  //
  const openPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);

    fetch(`${BACKEND_URL}/playlists/${playlist.id}/songs`, {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPlaylistSongs(data);
        else {
          console.error("Playlist songs error:", data);
          setPlaylistSongs([]);
        }
      });
  };

  //

  /* =========================
     PLAYER QUEUE LOGIC
  ========================= */
  const getQueue = () => (selectedPlaylist ? playlistSongs : songs);

  const playSong = (song) => {
    const queue = getQueue();
    const index = queue.findIndex((s) => s.id === song.id);
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const playNext = () => {
    const queue = getQueue();
    if (!queue.length) return;
    const nextIndex = (currentIndex + 1) % queue.length;
    setCurrentIndex(nextIndex);
    setCurrentSong(queue[nextIndex]);
  };

  const playPrev = () => {
    const queue = getQueue();
    if (!queue.length) return;
    const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
    setCurrentIndex(prevIndex);
    setCurrentSong(queue[prevIndex]);
  };

  //

  const createPlaylist = async (name) => {
    const res = await fetch(`${BACKEND_URL}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Failed to create playlist");

    // refresh playlists
    fetch(`${BACKEND_URL}/playlists`, {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then(setPlaylists);
  };

  //
  const addSongClick = (song) => {
    setSongToAdd(song);
    setShowPicker(true);
  };

  const addSongToPlaylist = async (playlistId) => {
    await fetch(`${BACKEND_URL}/playlists/${playlistId}/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader(),
      },
      body: JSON.stringify({ songId: songToAdd.id }),
    });

    setShowPicker(false);
    setSongToAdd(null);
    alert("Song added to playlist 🎵");
  };

  //

  const goHome = () => {
    setSelectedPlaylist(null);
    setPlaylistSongs([]);
  };

  //

  //
  const removeSongFromPlaylist = async (song) => {
    await fetch(
      `${BACKEND_URL}/playlists/${selectedPlaylist.id}/songs/${song.id}`,
      {
        method: "DELETE",
        headers: authHeader(),
      }
    );

    setPlaylistSongs(playlistSongs.filter((s) => s.id !== song.id));
  };

  //

  // const visibleSongs = selectedPlaylist ? playlistSongs : songs;
  //
  const visibleSongs = Array.isArray(selectedPlaylist ? playlistSongs : songs)
    ? selectedPlaylist
      ? playlistSongs
      : songs
    : [];

  //

  const title = selectedPlaylist ? selectedPlaylist.name : "All Songs";

  /* =========================
     CONDITIONAL UI (SAFE)
  ========================= */
  if (!user) {
    return authMode === "login" ? (
      <Login onLogin={login} goSignup={() => setAuthMode("signup")} />
    ) : (
      <Signup onSignup={signup} goLogin={() => setAuthMode("login")} />
    );
  }

  /* =========================
     MAIN UI
  ========================= */
  return (
    <div className="h-screen flex bg-dark text-white pb-28 relative">
      {/* <Sidebar playlists={playlists} onSelect={openPlaylist} /> */}
      {/* // */}
      <Sidebar
        playlists={playlists}
        onSelect={openPlaylist}
        onCreate={createPlaylist}
      />

      {/*  */}

      {showPicker && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-dark2 p-6 rounded w-80">
            <h2 className="font-bold mb-4">Add to playlist</h2>

            {playlists.map((p) => (
              <div
                key={p.id}
                onClick={() => addSongToPlaylist(p.id)}
                className="p-2 rounded cursor-pointer hover:bg-dark text-gray-300"
              >
                {p.name}
              </div>
            ))}

            <button
              onClick={() => setShowPicker(false)}
              className="mt-4 text-sm text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/*  */}

      <Main title={title}>
        {/* // */}
        {selectedPlaylist && (
          <button
            onClick={goHome}
            className="mb-3 text-sm text-gray-400 hover:text-white"
          >
            ← Back to All Songs
          </button>
        )}
        <button
          onClick={logout}
          className="absolute top-4 right-6 text-sm text-gray-400 hover:text-white"
        >
          Logout
        </button>
        {visibleSongs.length === 0 ? (
          <p className="text-gray-400">No songs found</p>
        ) : (
          visibleSongs.map((song) => (
            // <SongRow
            //   key={song.id}
            //   song={song}
            //   isActive={currentSong?.id === song.id}
            //   onPlay={playSong}
            // />

            //

            // <SongRow
            //   key={song.id}
            //   song={song}
            //   isActive={currentSong?.id === song.id}
            //   onPlay={playSong}
            //   onAdd={addSongClick}
            // />

            <SongRow
              key={song.id}
              song={song}
              isActive={currentSong?.id === song.id}
              onPlay={playSong}
              onAdd={addSongClick}
              onRemove={removeSongFromPlaylist}
              inPlaylist={!!selectedPlaylist}
            />

            //
          ))
        )}
      </Main>

      <Player
        currentSong={currentSong}
        queue={getQueue()}
        currentIndex={currentIndex}
        onNext={playNext}
        onPrev={playPrev}
      />
    </div>
  );
}
