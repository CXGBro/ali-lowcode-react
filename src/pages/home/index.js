import Header from "./header";
import Menu from "./menu";
import Content from "./content";
import Console from "./console";
import './homeStyle.css'

function Home() {
    return (
        <div className="Home">
            <Header/>
            <div className="banner">
                <Menu />
                <Content />
                <Console />
            </div>
        </div>
    );
}

export default Home;
