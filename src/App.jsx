import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FAQPage from './pages/FAQPage';
import PricingPlan from './pages/PricingPlan';

function App() {
  return (
    <main>
      <header className="fixed top-0  w-screen z-50">
        <Navbar />
      </header>
      <section>
        <aside className=" min-w-[250px] lg:block fixed left-0 mt-16 hidden ">
          <Sidebar />
        </aside>
        <div className="flex-1 p-4 container mx-auto">
          <h1>Chose a Plan</h1>
          <PricingPlan />
          <FAQPage />
        </div>
      </section>
    </main>
  );
}
export default App;
