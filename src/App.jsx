const resumeUrl = 'https://drive.google.com/file/d/1MYl2QBL6hAiJ2EZPOtP_LUnIQwd2CIfW/view?usp=sharing'
const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=1MYl2QBL6hAiJ2EZPOtP_LUnIQwd2CIfW'
const email = 'chitrabhanucb@gmail.com'
const phone = '+919108405544'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Achievements', 'Certifications', 'Contact']

const projects = [
  {
    title: 'Smart Personal Finance Manager',
    eyebrow: 'Progressive Web App',
    description: 'Full-stack finance management application for recurring payments and expense tracking.',
    features: ['REST APIs with Node.js and Express.js', 'JWT authentication and Razorpay integration', 'Brevo-powered email reminders and financial dashboard'],
    stack: 'Node.js · Express.js · MongoDB · React',
    links: [
      ['GitHub', 'https://github.com/chitrabhanuB/calm-bill-backend'],
      ['YouTube', 'https://youtu.be/mlGWXSjcXFc?si=iIiBNr4fLXnSAP5e'],
      ['IEEE paper', 'https://ieeexplore.ieee.org/abstract/document/11528082/'],
    ],
  },
  {
    title: 'KaryaKit',
    eyebrow: 'Cloud Task Management Platform',
    description: 'Cloud-based task scheduling and management application built around a modular backend.',
    features: ['REST API development and CRUD operations', 'Modular backend architecture', 'Cloud deployment with dedicated frontend and API'],
    stack: 'React · Node.js · Express.js · MongoDB',
    links: [
      ['Live frontend', 'https://daily-scheduler-frontend.netlify.app/'],
      ['Backend API', 'https://daily-task-scheduler-backend.onrender.com/'],
      ['GitHub', 'https://github.com/chitrabhanuB/daily-scheduler-frontend'],
      ['YouTube', 'https://www.youtube.com/watch?v=JMJ5UqlWFMU'],
    ],
  },
  {
    title: 'SmartGPU Allocator',
    eyebrow: 'Ongoing · Not Yet Deployed',
    description: 'Final-year team project exploring intelligent GPU scheduling with multi-agent reinforcement learning.',
    features: ['Simulated GPU cluster environment', 'Crash-aware workload allocation', 'Resource utilization and workload balancing'],
    stack: 'Python · Reinforcement Learning · Multi-Agent Systems',
    links: [['GitHub', 'https://github.com/payal3005/gpu-draft']],
  },
]

const certifications = [
  ['Programming in Java — IIT Kharagpur', '92', 'Elite + Gold'],
  ['Human Computer Interaction', '96', 'Certified'],
  ['Cloud Computing — IIT Kharagpur', '76', 'Elite + Silver'],
  ['Software Project Management', '77', 'Certified'],
  ['Database Management Systems', '69', 'Certified'],
  ['Patent Law for Engineers and Scientists', '55', 'Certified'],
]

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
}

function SectionHeading({ number, title, intro }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">CB<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="kicker">Hello, I&apos;m</p>
            <h1>CHITRABHANU <span>B.</span></h1>
            <p className="hero-title">Aspiring Software Development Engineer <span>/</span> Backend Developer</p>
            <p className="hero-intro">Computer Science and Business Systems undergraduate passionate about backend development, software engineering, and building practical applications. Experienced in developing REST APIs, full-stack applications, and workflow automation solutions.</p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">View projects <span>↗</span></a>
              <ExternalLink className="button button-secondary" href={resumeDownloadUrl}>Download resume <span>↓</span></ExternalLink>
              <a className="text-link" href="#contact">Contact me <span>↗</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="availability"><i /> Open to SDE &amp; backend opportunities</div>
            <div className="hero-rule" />
            <p>Based in Bengaluru, India</p>
            <p>Building thoughtfully, one API at a time.</p>
          </div>
        </section>

        <section id="about" className="section split-section">
          <SectionHeading number="01" title="About me" />
          <div className="section-content about-content">
            <p className="lead">I am a Computer Science and Business Systems undergraduate at BMS Institute of Technology and Management with a strong foundation in Java, Data Structures and Algorithms, OOP, and DBMS.</p>
            <p>I have internship experience in software development, backend development, workflow automation, and software testing. I am primarily interested in SDE and Backend Developer roles.</p>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading number="02" title="Technical skills" intro="The tools and concepts I use to turn ideas into reliable software." />
          <div className="skills-grid">
            {[
              ['Programming', 'Java · JavaScript'],
              ['Frontend', 'React.js · HTML · CSS'],
              ['Backend', 'Node.js · Express.js · REST APIs'],
              ['Databases', 'MongoDB · MySQL'],
              ['Core concepts', 'DSA · OOP · DBMS'],
              ['Tools', 'GitHub · Jira · Netlify · Render · Vercel'],
            ].map(([label, value]) => <div className="skill-item" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading number="03" title="Selected projects" intro="A few practical applications and experiments I have worked on." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-eyebrow">{project.eyebrow}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="project-footer"><span className="stack">{project.stack}</span><div className="project-links">{project.links.map(([label, href]) => <ExternalLink key={label} href={href}>{label} ↗</ExternalLink>)}</div></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading number="04" title="Experience" />
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-date">Mar 2026 — May 2026</div><div><h3>CRM &amp; Automation Development Intern</h3><p className="muted">DOSTBIN Solutions Pvt. Ltd.</p><ul><li>Developed CRM workflows for order and payment management using Google Apps Script and Google Sheets.</li><li>Automated operational dashboards and reporting pipelines.</li><li>Built centralized workflow automation solutions.</li></ul><ExternalLink className="inline-link" href="https://drive.google.com/file/d/1DBQndQRJNeM09ebTAWjJhi5GocHkRgYB/view?usp=sharing">View certificate ↗</ExternalLink></div></article>
            <article className="timeline-item"><div className="timeline-date">Jan 2026 — Feb 2026</div><div><h3>Intern Engineer</h3><p className="muted">Jnanix NGPT Pvt. Ltd. (TestNeo.ai)</p><ul><li>Performed functional testing of AI-powered web applications using Jira.</li><li>Identified, documented, and tracked software defects.</li><li>Collaborated with developers to validate user stories and application functionality.</li></ul><ExternalLink className="inline-link" href="https://drive.google.com/file/d/1ORjLr3nNf9A0CeH_DejLrcuXePHDdNeZ/view?usp=sharing">View certificate ↗</ExternalLink></div></article>
          </div>
        </section>

        <section id="education" className="section split-section">
          <SectionHeading number="05" title="Education" />
          <div className="section-content education-list">
            <div><h3>BMS Institute of Technology and Management</h3><p>B.E. Computer Science and Business Systems <span>2023 — Present</span></p><strong>CGPA: 9.4</strong></div>
            <div><h3>Orchids International School</h3><p>10th standard <span>95%</span></p></div>
            <div><h3>Government PU College</h3><p>Pre-University <span>92%</span></p></div>
          </div>
        </section>

        <section id="achievements" className="section split-section">
          <SectionHeading number="06" title="Achievements & leadership" />
          <div className="section-content achievement-list">
            <p><strong>Winner</strong> — National-level Case-A-thon 2025, BNMIT <ExternalLink href="https://drive.google.com/file/d/1t4sEA1aoTrgxkHICDknzty8hCjJFTwf3/view?usp=sharing">Certificate ↗</ExternalLink></p>
            <p><strong>Finalist</strong> — EY Tech Hackathon</p><p><strong>Finalist</strong> — TechFusion Hackathon</p><p><strong>4th Place</strong> — Malware Challenge, CySecK Cybersecurity Bootcamp CTF</p><p><strong>NPTEL Discipline Star</strong> recognition <ExternalLink href="https://drive.google.com/file/d/1NdEtprn6iQN_jR4AuzjS7I-q4YDew3rp/view?usp=sharing">Certificate ↗</ExternalLink></p><p>Eco Club Core Team</p><p>Tandava Dance Club Marketing &amp; Creative Head</p>
          </div>
        </section>

        <section id="certifications" className="section">
          <SectionHeading number="07" title="NPTEL certifications" />
          <div className="table-wrap"><table><thead><tr><th>Certification</th><th>Score</th><th>Achievement</th></tr></thead><tbody>{certifications.map(([name, score, award]) => <tr key={name}><td>{name}</td><td>{score}</td><td>{award}</td></tr>)}</tbody></table></div>
        </section>

        <section id="contact" className="contact-section section">
          <p className="kicker">Have a project in mind?</p><h2>Let&apos;s connect<span>.</span></h2><p>I&apos;m always open to discussing software engineering opportunities, ideas, and meaningful work.</p>
          <div className="contact-links"><a href={`mailto:${email}`}>{email} <span>↗</span></a><a href={`tel:${phone}`}>+91 9108405544 <span>↗</span></a><ExternalLink href="https://github.com/chitrabhanuB">GitHub <span>↗</span></ExternalLink><ExternalLink href="https://linkedin.com/in/chitrabhanu2204">LinkedIn <span>↗</span></ExternalLink></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Chitrabhanu B.</span><span>Designed &amp; built with intention.</span></footer>
    </div>
  )
}

export default App
