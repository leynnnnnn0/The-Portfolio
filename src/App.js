import TopBar from './components/TopBar';
import DesktopScene from './components/desktop/DesktopScene';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <TopBar
        initials="NA"
        name="Nathaniel Alvarez"
        role="Aspiring Software Developer"
      />

      <DesktopScene />
      <Footer />
    </div>
  );
}

export default App;
