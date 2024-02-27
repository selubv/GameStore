import Header from "./components/header"
import Sidebar from "./components/sidebar";
import Card from "./components/card";

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className=" flex-1 h-full overflow-y-sroll">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg" alt=""
              className="w-full h-[500px] object-cover object-top rounded-2xl"/>
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://cdn.alfabetajuega.com/alfabetajuega/2021/12/Dota-2-juggernaut.jpg"
              title="Dota 2 Juger"
              category="PS5"
              price="51"
            />
            <Card
              img="https://static.wikia.nocookie.net/dota2_gamepedia/images/c/ce/Bristleback_Artifact.png"
              title="Dota 2 Brisleback"
              category="PS4"
              price="40"
            />
            <Card
              img="https://es.egamersworld.com/uploads/blog/16820728479431.jpg"
              title="Dota 2 OgreMagic"
              category="PS4"
              price="48"
            />
            <Card
              img="https://static.wikia.nocookie.net/dota2_gamepedia/images/4/47/Lion_Lore.png"
              title="Dota 2 Lion"
              category="PC"
              price="30"
            />
            <Card
              img="https://estnn.com/wp-content/uploads/2023/06/Windranger-shooter-Skin-Art-Dota-2-Hero-HD-Wallpaper-for-Desktop-1920x1200-1920x1080-1.jpg"
              title="Dota 2 Windranger"
              category="Xbox Series"
              price="53"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
