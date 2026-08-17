function Projects() {
    return (
        <main className="projects">
            <section className="projects-section">
                <p className="section-label">Projetos</p>
                <h1>O que estou construindo</h1>
                <p className="projects-intro">Aqui estão alguns dos projetos que estou desenvolvendo enquanto aprendo programação.
                </p>
                <div className="projects-grid">
                    <article className="project-card">
                        <div className="project-card-content">
                            <span>React + Vite</span>
                            <h2>Meu Portfólio</h2>
                            <p>
                                Um site pessoal que mostra meus projetos e habilidades. Construído com React e Vite, é responsivo e otimizado para desempenho.
                            </p>
                            <div className="project-tags">
                                <span>React</span>
                                <span>Vite</span>
                                <span>CSS</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Projects;