import Banner from "./components/banner/Banner";
import Caregory from "./components/category/Caregory";
import EspeciallyForYou from "./components/especiallyForYou/EspeciallyForYou";
import Fashion from "./components/fashion/Fashion";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <EspeciallyForYou
        title={"Специально для вас"}
        description={`Эти украшения идеально подходят для особых случаев, таких как свадьбы,
          вечеринки или другие торжественные мероприятия, где вы хотите
          выглядеть великолепно и привлекательно. "Золотые бужутерии" станут
          неотъемлемым элементом вашего гардероба, добавляя блеск и шик к вашему
          образу.`}
      />
      <Fashion />
      <EspeciallyForYou
        title={"Новинки"}
        description={`Эти украшения идеально подходят для особых случаев, таких как свадьбы,
          вечеринки или другие торжественные мероприятия, где вы хотите
          выглядеть великолепно и привлекательно. "Золотые бужутерии" станут
          неотъемлемым элементом вашего гардероба, добавляя блеск и шик к вашему
          образу.`}
      />

      <Banner />

      {/* <Caregory /> */}
    </div>
  );
}

export default App;
