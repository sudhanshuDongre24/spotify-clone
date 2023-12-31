// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Searchbar, Sidebar, TopPlay } from "./components";
import {
  AroundYou,
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  TopArtists,
  TopCharts,
} from "./pages";

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#1E1E1E]  ">
        <Searchbar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
