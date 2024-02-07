import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FAQPage from './pages/FAQPage';
import PricingPlan from './pages/PricingPlan';

function App() {
  return (
    <main>
      <header className=" w-screen z-50">
        <Navbar />
      </header>
      <section className="flex">
        <aside className="min-w-[250px] border-r border-t border-[#D7DBEC] hidden md:block">
          <Sidebar />
        </aside>
        <div className=" flex-1 p-4 max-w-[1110px] mx-auto">
          <h1>Chose a Plan</h1>
          <PricingPlan />
          <FAQPage />
        </div>
      </section>
    </main>
  );
}
export default App;
