import React from 'react';

function App() {
  return (
    <div className="App v5">
      {/* Header */}
      <header className="header">
        <h1 className="logo">TerraFlow</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Inspired by Nature, Driven by Design</h2>
        <p>Helping brands grow through mindful digital experiences.</p>
        <a className="btn" href="#contact">Let’s Collaborate</a>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h3>What We Offer</h3>
        <div className="card-container">
          <div className="card calm">
            <h4>Brand Strategy</h4>
            <p>Authentic storytelling that resonates deeply.</p>
          </div>
          <div className="card calm">
            <h4>Web Design</h4>
            <p>Simple, stunning websites that feel natural.</p>
          </div>
          <div className="card calm">
            <h4>SEO + Growth</h4>
            <p>Organic reach with sustainable tactics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section alt-bg">
        <h3>Kind Words</h3>
        <div className="card-container">
          <div className="card calm-dark">
            <p>“Their approach feels like working with a friend who gets it.”</p>
            <strong>— Sarah Bloom</strong>
          </div>
          <div className="card calm-dark">
            <p>“We’ve never felt more aligned as a brand.”</p>
            <strong>— Aiden West</strong>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h3>Start Something Beautiful</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} TerraFlow Studio — Gently Built with Care 🍃</p>
      </footer>
    </div>
  );
}

export default App;
