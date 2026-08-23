import { Header, Hero, Stats, About, Skills, Portfolio, Contact, Footer, GoToTop } from './components';

function App() {
  return (
    <>
      <Header />

      <main>
        <article className="container">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </article>
      </main>

      <Footer />
      <GoToTop />
    </>
  );
}

export default App;
