import Tabs from "./components/Tabs";
import './style.css';


function App() {

  return (
    <>
      <Tabs activeTab={1}>
        <div className="cities" title="Profil">
            <h1>London</h1>
            <p>London is the capital city of England.</p></div>
        <div className="cities" title="Hakkımızda">
            <h1>Paris</h1>
            <p>Paris is the capital of France.</p>
        </div>
        <div className="cities" title="Ayarlar">
            <h1>Tokyo</h1>
            <p>Tokyo is the capital of Japan.</p></div>
      </Tabs>
    </>
  )
}

export default App
