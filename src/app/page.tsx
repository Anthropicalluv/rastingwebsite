import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                Secure Your <span style={{ color: 'var(--primary)' }}>Digital Future</span>
              </h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                RAST Micro provides comprehensive Risk Assessment and Security Testing to protect your business from evolving cyber threats.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="button button-primary">Get an Assessment</a>
                <a href="#services" className="button button-outline">View Services</a>
              </div>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden' }}>
              <Image
                src="/rast_micro_hero.png" // I need to move the generated image to public
                alt="Security Testing Visualization"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive security solutions tailored to your business needs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3>Risk Assessment</h3>
              <p>Identifying potential vulnerabilities and assessing the impact on your business operations.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
              <h3>Security Testing</h3>
              <p>Rigorous testing of your infrastructure, applications, and networks to ensure robust protection.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
              <h3>Penetration Testing</h3>
              <p>Simulating real-world attacks to find and fix weaknesses before malicious actors can exploit them.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📜</div>
              <h3>Compliance Audits</h3>
              <p>Ensuring your systems meet industrial standards and regulatory requirements (ISO, GDPR, etc).</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Why RAST Micro?</h2>
            <p style={{ fontSize: '1.15rem' }}>
              At RAST Micro, we believe that security is not just a checkbox, but a continuous process. Our team of experts uses the latest methodologies and tools to provide actionable insights and reliable protection for your digital assets.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '3rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>500+</div>
                <div style={{ color: 'var(--muted)' }}>Assessments Done</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>100%</div>
                <div style={{ color: 'var(--muted)' }}>Success Rate</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>24/7</div>
                <div style={{ color: 'var(--muted)' }}>Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Ready to Secure Your Business?</h2>
            <p>Contact us today for a free initial consultation and risk overview.</p>
          </div>
          <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
            <form style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label>Name</label>
                <input type="text" placeholder="Your Name" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: '#fff' }} />
              </div>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label>Email</label>
                <input type="email" placeholder="your@email.com" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: '#fff' }} />
              </div>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <label>Message</label>
                <textarea rows={4} placeholder="How can we help you?" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--background)', color: '#fff' }}></textarea>
              </div>
              <button type="button" className="button button-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
