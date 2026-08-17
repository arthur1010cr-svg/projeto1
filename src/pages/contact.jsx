function Contact() {
  return (
    <main className="contact">
      <section className="contact-section">
        <p className="section-label">Contato</p>

        <h1>Vamos conversar?</h1>

        <p className="contact-text">
          Se quiser entrar em contato comigo ou acompanhar meu trabalho,
          você pode me encontrar através dos links abaixo.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/arthur1010cr-svg"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Git</span>

            <div>
              <h2>GitHub</h2>
              <p>Meus projetos e códigos</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/arthur32br"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>IG</span>

            <div>
              <h2>Instagram</h2>
              <p>Meu perfil</p>
            </div>
          </a>

          <a
            href="mailto:arthur1010cr@gmail.com"
            className="contact-card"
          >
            <span>@</span>

            <div>
              <h2>E-mail</h2>
              <p>arthur1010cr@gmail.com</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;