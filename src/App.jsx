import MainContent from "./components/content";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Navbar from "./components/navBar";

function App(){
  return (
    <header>
      <Logo></Logo>
      <Navbar></Navbar>
      <MainContent></MainContent>
      <Footer></Footer>
    </header>
  )
}

export default App;