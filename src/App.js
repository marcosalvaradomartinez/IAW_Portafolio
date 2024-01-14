import Header from './components/pages/Header/Header'
import Landing from './components//pages/Landing/Landing'
import Project from './components/pages/Project/Project'
import Contact from './components/pages/Contact/Contact'
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <div>
        <Header />
        <Landing />
        <Project />
        <Services />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;