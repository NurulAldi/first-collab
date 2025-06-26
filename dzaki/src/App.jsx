// filepath: d:\projects\first-collab\dzaki\src\App.jsx
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

function App() {
    return (
        <>
            <Header />
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </>
    );
}

export default App;