import Header from '@/components/Header';
import Home from './pages/home'; // Đường dẫn tới component Home
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> {/* Header */}
      <main className="p-0 m-0" style={{ marginTop: '0.5cm' }}> {/* Thêm margin-top 2cm */}
        <Home /> {/* Carousel */}
      </main>
      <main className="p-0 m-0" style={{ marginTop: '0.5cm' }}> {/* Thêm margin-top 2cm */}
        <Footer /> {/* Thêm Footer ở đây */}
      </main>
    </div>
  );
}

export default App;
