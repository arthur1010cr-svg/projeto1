function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-greeting">Olá, eu sou</p>
        <h1>Arthur</h1>
        <h2>Estudante de Programação de Sistemas</h2>
        <p className="hero-text">
           Estou estudando programação e construindo meus primeiros projetos, enquanto descubro cada vez mais sobre tecnologia e desenvolvimento.
           </p>
        <div className="hero-buttons">
          <a href="/projects" className="button">Meus Projetos</a>
          <a href="/about" className="button button_outline">Sobre Mim</a>
        </div>
      </section>
    </main>
    );
}

export default Home;