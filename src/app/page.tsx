import Image from "next/image";

const services = [
  {
    title: "Risk Intelligence",
    description:
      "Holistic assessments that rank business impact, technical likelihood, and remediation velocity.",
    badge: "Tier-0 Critical",
    icon: "🛰️",
  },
  {
    title: "Adversary Simulation",
    description:
      "Red-team playbooks mapped to MITRE ATT&CK with payload telemetry and live operator updates.",
    badge: "Live Ops",
    icon: "🛡️",
  },
  {
    title: "Application Hardening",
    description:
      "SAST/DAST pipelines, threat modeling, and build-time guardrails to keep releases clean.",
    badge: "CI-Linked",
    icon: "🔧",
  },
  {
    title: "Compliance & GRC",
    description: "ISO, SOC2, and GDPR guidance packaged with evidence capture and audit trails.",
    badge: "Audit Ready",
    icon: "📜",
  },
];

const intel = [
  {
    label: "Detection",
    value: "> 92%",
    text: "Exploit paths intercepted in staging before prod impact.",
  },
  {
    label: "Mean Containment",
    value: "21m",
    text: "Average time to isolate a verified incident with playbook automation.",
  },
  {
    label: "Coverage",
    value: "74",
    text: "Critical controls monitored across cloud, network, and identity planes.",
  },
];

const process = [
  {
    title: "Recon",
    detail: "Surface mapping, asset fingerprinting, and weak-link detection across your estate.",
  },
  {
    title: "Exploit",
    detail: "Operator-led breach attempts with chained CVEs, misconfigs, and social vectors.",
  },
  {
    title: "Report",
    detail: "Actionable remediation ranked by business impact, with proof-of-exploit artifacts.",
  },
  {
    title: "Fortify",
    detail: "Guardrails, monitoring hooks, and tabletop drills to keep you breach-hardened.",
  },
];

export default function Home() {
  return (
    <main>
      <section id="home" className="section hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="tag">Tactical security bureau</div>
            <h1>
              Tier-one defense for
              <span className="accent"> critical infrastructure</span>
            </h1>
            <p className="lede">
              RAST Micro executes risk assessment and offensive testing with the precision of a black-ops SOC. We neutralize threats before they breach, and harden your stack with battle-ready controls.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="button button-primary">
                Deploy an Assessment
              </a>
              <a href="#services" className="button button-ghost">
                View Service Matrix
              </a>
            </div>
            <div className="hero__badges">
              <div className="badge">SOC-Ready Playbooks</div>
              <div className="badge badge--outline">Operator-led Red Team</div>
              <div className="badge">Zero-Trust Alignment</div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="holo-frame">
              <Image
                src="/rast_micro_hero.png"
                alt="Security Testing Visualization"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="scanlines" aria-hidden />
            </div>
            <div className="intel-strip">
              {intel.map((item) => (
                <div key={item.label} className="intel-card">
                  <div className="intel-label">{item.label}</div>
                  <div className="intel-value">{item.value}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <div className="tag">Service Matrix</div>
              <h2>Built for hostile networks</h2>
            <p>
                Full-spectrum security operations engineered with decisive, modular, and always combat-ready discipline.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="card__header">
                  <span className="card__icon" aria-hidden>
                    {service.icon}
                  </span>
                  <span className="badge badge--outline">{service.badge}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="divider" />
                <ul className="pills">
                  <li>Threat Modeling</li>
                  <li>Zero-Day Watch</li>
                  <li>Operator Support</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container about">
          <div className="about__copy">
            <div className="tag">Why RAST Micro</div>
            <h2>Hardwired for resilience</h2>
            <p>
              We combine battle-tested red teamers, seasoned defenders, and automation engineers into one strike group. Every engagement ships with clean evidence, replayable attack paths, and remediation you can execute fast.
            </p>
            <div className="stat-grid">
              <div className="stat">
                <span className="stat__value">500+</span>
                <span className="stat__label">Assessments Completed</span>
              </div>
              <div className="stat">
                <span className="stat__value">100%</span>
                <span className="stat__label">Exploit Replay Coverage</span>
              </div>
              <div className="stat">
                <span className="stat__value">24/7</span>
                <span className="stat__label">Operator Availability</span>
              </div>
            </div>
          </div>
          <div className="process">
            <div className="process__header">
              <div className="tag">Engagement Flow</div>
              <h3>Operational lifecycle</h3>
            </div>
            <div className="process__steps">
              {process.map((step, index) => (
                <div key={step.title} className="process__step">
                  <div className="process__index">{index + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact">
          <div>
            <div className="tag">Engage</div>
            <h2>Ready to lock down your perimeter?</h2>
            <p>
              Send a signal and we will respond with a tailored mission brief, timelines, and operator roster within one business day.
            </p>
            <div className="intel-strip intel-strip--compact">
              <div className="intel-card">
                <div className="intel-label">Response SLA</div>
                <div className="intel-value">4h</div>
                <p>During active incidents.</p>
              </div>
              <div className="intel-card">
                <div className="intel-label">Coverage</div>
                <div className="intel-value">Global</div>
                <p>Follow-the-sun operator teams.</p>
              </div>
            </div>
          </div>
          <div className="form-card">
            <div className="form-card__header">
              <h3>Mission Intake</h3>
              <span className="badge">Encrypted</span>
            </div>
            <form className="form">
              <label>
                <span>Full Name</span>
                <input type="text" placeholder="Morgan Blackhand" />
              </label>
              <label>
                <span>Work Email</span>
                <input type="email" placeholder="you@company.com" />
              </label>
              <label>
                <span>Objective</span>
                <textarea rows={4} placeholder="Pen test scope, environments, timelines" />
              </label>
              <button type="button" className="button button-primary">
                Transmit Brief
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
