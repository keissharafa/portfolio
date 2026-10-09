"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP Plugin untuk environment browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// DEFINE TIPE DATA
interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  colors: { a: string; b: string; };
  image?: string;
  caseStudyUrl?: string;
  liveDemoUrl?: string;
}

// MOCK DATA
const projectsData: Project[] = [
  {
    id: 1,
    title: "HerRoute",
    category: "Web App",
    tags: ["React", "Leaflet", "TypeScript"],
    desc: "A mobility safety navigation web app built for the SISTECH 2026 program. Developed dynamic front-end interfaces, integrated interactive maps using Leaflet and data visualizations via Recharts, and seamlessly integrated machine learning-based risk prediction APIs into the frontend ecosystem.",
    colors: { a: "#F9E8EC", b: "#DDE8FB" },
    image: "/her-route.png",
    caseStudyUrl: "/case-study/her-route",
    liveDemoUrl: "https://github.com/SISTECH26-FINPRO5/FE-HerRoute.git"
  },
  {
    id: 2,
    title: "Smart Queue System",
    category: "Real-time Dashboard",
    tags: ["SSE", "JavaScript", "Real-time", "Laravel", "PHP"],
    desc: "Architected a real-time queue management dashboard. Leveraged Server-Sent Events (SSE) to ensure instant UI updates without manual browser refreshing.",
    colors: { a: "#E6F0FF", b: "#FFE8D8" },
    image: "/sse.png",
    caseStudyUrl: "/case-study/smartqueue",
    liveDemoUrl: "https://github.com/keissharafa/sistem_antrean_sse.git"
  },
  {
    id: 3,
    title: "Lokana",
    category: "E-Commerce Web",
    tags: ["Laravel", "Website", "PHP"],
    desc: "Developed a dynamic e-commerce frontend for local UMKM products. Implemented robust state management for cart operations, event ticketing, and seamless checkout flows.",
    colors: { a: "#E6F0FF", b: "#FFE8D8" },
    image: "/lokana.png",
    caseStudyUrl: "/case-study/lokana",
    liveDemoUrl: "https://github.com/keissharafa/lokana.git"
  },
  {
    id: 4,
    title: "Culinary Kiosk",
    category: "Web App",
    tags: ["Laravel", "QR Integration", "Payment Gateway"],
    desc: "Built a cafeteria ordering system interface with seamless QR code scanning and payment gateway integration, focusing on low-latency user interactions.",
    colors: { a: "#E6F0FF", b: "#FFE8D8" },
    image: "/culinarykiosk.png",
    caseStudyUrl: "/case-study/culinarykiosk",
    liveDemoUrl: "https://github.com/keissharafa/pemesanan_kantin.git"
  },
  {
    id: 5,
    title: "Concierge",
    category: "Helpdesk System",
    tags: ["Supabase", "Flutter", "Mobile Apps"],
    desc: "Built a ticketing and customer support dashboard. Focused on rendering complex data tables efficiently and ensuring an accessible UI for support agents.",
    colors: { a: "#F9E8EC", b: "#DDE8FB" },
    image: "/concierge.jpg",
    caseStudyUrl: "/case-study/concierge",
    liveDemoUrl: "https://github.com/keissharafa/434241073_keisha-rafa-nabila_b1_uts.git"
  },
  {
    id: 6,
    title: "NFC Attendance System",
    category: "Web Integration",
    tags: ["Hardware API", "Web", "Laravel", "PHP"],
    desc: "Developed a real-time attendance tracking interface that seamlessly communicates with NFC technology for instant data rendering.",
    colors: { a: "#F9E8EC", b: "#DDE8FB" },
    image: "/nfc.jpg",
    caseStudyUrl: "/case-study/nfc",
    liveDemoUrl: "https://github.com/keissharafa/nfc_absensi.git"
  },
  {
    id: 7,
    title: "Lingkara",
    category: "Sustainability App",
    tags: ["Component Library", "Mobile App"],
    desc: "Constructed a digital ecosystem interface for urban waste management, featuring location-based reporting and a circular economy reward dashboard.",
    colors: { a: "#E4F6E8", b: "#F4F1C4" },
    image: "/lingkara.jpeg",
    caseStudyUrl: "/case-study/lingkara",
    liveDemoUrl: "https://www.figma.com/proto/YhTNKCDqWRmAr926KZhqJx/Poltek-Semarang?node-id=379-374&viewport=410%2C202%2C0.07&t=C02x5v9KfINtYhGx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=379%3A374&show-proto-sidebar=1&page-id=45%3A348"
  },
  {
    id: 8,
    title: "VERIDOC",
    category: "Forensics Platform",
    tags: ["Data Visualization", "UI/UX Design", "Figma", "Prototype"],
    desc: "Developed the frontend interface for a digital document forensics platform, focusing on precise data visualization and clean, accessible dashboards.",
    colors: { a: "#E6F0FF", b: "#FFE8D8" },
    image: "/veridoc.png",
    caseStudyUrl: "/case-study/veridoc",
    liveDemoUrl: "https://www.figma.com/proto/eo83ve0jglmm76FQAb6345/VERIDOC-by-Arkana-Forensia---OLIVIA-2026?node-id=243-3467&p=f&viewport=2693%2C-466%2C0.12&t=GvWerH4sWdzxKaRW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=243%3A3467&page-id=83%3A2"
  },
  {
    id: 9,
    title: "SERENE",
    category: "Mobile Interface & UX",
    tags: ["UI/UX Design", "UX Research", "Figma"],
    desc: "An urban safety evaluation and emergency navigation app. Conducted extensive UX research on public safety perceptions to map out critical data flows, resulting in a seamless SOS routing interface that prioritizes user safety and swift response times.",
    colors: { a: "#F9E8EC", b: "#DDE8FB" },
    image: "/serene.jpg",
    caseStudyUrl: "/case-study/serene",
    liveDemoUrl: "https://www.figma.com/proto/IqNWWhc0OYWJ82wlChfTJU/SERENE--Safety-Evaluation---Responsive-Emergency-Navigation-Engine-?node-id=44-98&viewport=1480%2C-688%2C0.14&t=3FRAW22qVRh06D06-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=44%3A98&show-proto-sidebar=1&page-id=1%3A2"
  },
];

// REUSABLE COMPONENT DENGAN GSAP SCROLL TRIGGER
function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  return (
    <article
      ref={cardRef}
      className="project-card"
      style={{ "--cover-a": project.colors.a, "--cover-b": project.colors.b } as React.CSSProperties}
    >
      <div className="project-cover" style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <span className="project-num">0{project.id}</span>

        {/* LOGIKA CONDITIONAL RENDERING */}
        {project.image ? (
          // Jika ada gambar, tampilkan Mockup Asli
          <img
            src={project.image}
            alt={`${project.title} mockup`}
            style={{
              width: "85%",
              height: "85%",
              objectFit: "contain",
              borderRadius: "12px",
              zIndex: 1
            }}
          />
        ) : (
          // Jika TIDAK ada gambar, tampilkan Wireframe bawaan
          <div className="mock-window">
            <div className="mock-top">
              <span className="mock-dot"></span>
              <span className="mock-dot"></span>
              <span className="mock-dot"></span>
            </div>
            <div className="mock-lines">
              <span className="mock-line" style={{ "--w": "52%" } as React.CSSProperties}></span>
              <span className="mock-line" style={{ "--w": "78%" } as React.CSSProperties}></span>
              <span className="mock-line" style={{ "--w": "62%" } as React.CSSProperties}></span>
            </div>
            <div className="mock-cards">
              <span className="mock-card"></span>
              <span className="mock-card"></span>
              <span className="mock-card"></span>
            </div>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="pill">{project.category}</span>
          {project.tags.map((tag: string) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-links">
          <a className="mini-btn" href={project.caseStudyUrl}>Case Study</a>
          <a className="mini-btn accent" href={project.liveDemoUrl} target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    </article>
  );
}

// MAIN COMPONENT EXPORT
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${name}! Pesanmu sudah berhasil dikirim.`);
    setName(""); setEmail(""); setMessage("");
  };

  // Referensi untuk animasi Hero
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);

  // Animasi Teks Muncul per character di Hero Section
  useGSAP(() => {
    if (!textRevealRef.current) return;

    // Ambil teks aslinya dan kosongkan kontainer
    const text = textRevealRef.current.innerText;
    textRevealRef.current.innerHTML = "";

    // Pecah per huruf dan masukkan kembali sebagai elemen span
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char; // Tangani spasi kosong
      span.style.opacity = "0";
      span.style.display = "inline-block";
      span.style.transform = "translateY(20px)";
      textRevealRef.current?.appendChild(span);
    });

    // Jalankan animasi stagger
    gsap.to(textRevealRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.out",
      delay: 0.2
    });
  }, { scope: heroContainerRef });

  return (
    <>
      {/* ─── STYLES UNTUK ANIMASI CSS STANDAR DAN RESPONSIVE LENGKAP ─── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        /* Media Queries untuk Layar Mobile */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 32px !important;
          }
          .hero-grid > div:last-child {
            max-width: 280px;
            margin: 0 auto;
          }
          .process-connector {
            display: none !important;
          }
          /* === PERBAIKAN NAVBAR === */
          .navbar-inner {
            padding: 16px !important;
          }
          .nav-menu {
            gap: 12px !important;
          }
          .nav-menu a {
            font-size: 14px !important;
          }
        }
      `}} />

      {/* ─── NAVBAR ─── */}
      <header className="navbar" style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #e4e4e0' }}>
        <div className="navbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', padding: '16px 24px', maxWidth: '1100px', margin: '0 auto' }}>
          <a href="#home" className="brand" style={{ fontWeight: 'bold', fontSize: '18px', color: '#111', textDecoration: 'none', flexShrink: 0 }}>
            <span style={{ background: '#111', color: '#fff', padding: '4px 8px', borderRadius: '4px', marginRight: '8px' }}>K</span>Kei.
          </a>
          <nav className="nav-menu" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="/#about" style={{ textDecoration: 'none', color: '#3a3a38', fontWeight: 500 }}>About</a>
            <a href="/#process" style={{ textDecoration: 'none', color: '#3a3a38', fontWeight: 500 }}>Process</a>
            <a href="/#projects" style={{ textDecoration: 'none', color: '#3a3a38', fontWeight: 500 }}>Work</a>
            <a href="/#contact" style={{ textDecoration: 'none', color: '#3a3a38', fontWeight: 500 }}>Contact</a>
          </nav>
        </div>
      </header>

      <main ref={heroContainerRef}>
        {/* ─── HERO SECTION ─── */}
        <section className="hero-section" id="about" style={{ padding: "80px 24px", overflow: "hidden", background: "#FFFFFF" }}>
          <div className="hero-grid" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px", alignItems: "center" }}>

            {/* Kiri: Teks */}
            <div>
              <div className="animate-fade-in" style={{ display: "inline-block", background: "rgba(232,93,58,0.1)", color: "#E85D3A", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", marginBottom: "24px" }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", background: "#E85D3A", borderRadius: "50%", marginRight: "8px" }}></span>
                Open to work
              </div>

              <h1 style={{ fontSize: "clamp(40px, 8vw, 56px)", fontWeight: "800", lineHeight: "1.1", marginBottom: "16px", color: "#111" }}>
                {/* Elemen ini akan dianimasikan per karakter oleh GSAP */}
                <div ref={textRevealRef}>Hi, I'm Keisha!</div>
                <span className="animate-fade-in delay-200" style={{ color: "#8a8a85", fontWeight: "400", fontStyle: "italic", display: "inline-block", marginTop: "8px" }}>Web Developer.</span>
              </h1>

              <p className="animate-fade-in delay-300" style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.7", maxWidth: "540px", marginBottom: "32px" }}>
                I specialize in building responsive, interactive, and scalable web interfaces. Backed by a strong foundation in Informatics Engineering major, I don't just make things look good, I write clean code that makes them work flawlessly.
              </p>

              <div className="animate-fade-in delay-400">
                <a href="#projects" style={{ padding: "12px 24px", borderRadius: "8px", background: "#111", color: "#fff", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>View My Work</a>
              </div>
            </div>

            {/* Kanan: Foto Profil */}
            <div className="animate-fade-in delay-400" style={{ position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "1/1", background: "#e4e4e0", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
                <img src="/keisha.jpeg" alt="Keisha Rafa Nabila" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", color: "#8a8a85", fontWeight: "bold", zIndex: -1 }}>
                  Photo Here
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MY PRINCIPLES SECTION ─── */}
        <section id="principles" style={{ background: "#F7F7F5" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", margin: "0 auto 40px", maxWidth: "700px" }}>
              <div className="kicker" style={{ justifyContent: "center" }}>My Principles</div>
            </div>

            <div className="principles-wrap">
              <div className="principles-pill p1">
                <span className="pill-dot" style={{ background: "#E85D3A" }}>◆</span>
                Mobile and Web Development
              </div>
              <div className="principles-pill p2">
                <span className="pill-dot" style={{ background: "#3B82F6" }}>◆</span>
                UI/UX Design
              </div>
              <div className="principles-pill p3">
                <span className="pill-dot" style={{ background: "#111110" }}>◆</span>
                User Research
              </div>
              <div className="principles-pill p4">
                <span className="pill-dot" style={{ background: "#EAB308" }}>◆</span>
                Design System
              </div>
              <div className="principles-pill p5">
                <span className="pill-dot" style={{ background: "#D946EF" }}>◆</span>
                Scalable Front-end
              </div>
              <div className="principles-pill p6">
                <span className="pill-dot" style={{ background: "#22C55E" }}>◆</span>
                Problem Solving
              </div>

              <p className="principles-text">
                I don't just build UI; I architect complete systems. By merging deep user research with robust database logic, I ensure every interface delivers high-impact, reliable, and user-centric digital experiences.{" "}
              </p>
            </div>
          </div>
        </section>

        {/* ─── HERE'S HOW I WORK SECTION ─── */}
        <section id="process" style={{ padding: "80px 24px", background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
              <div className="kicker" style={{ color: "#E85D3A", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px", marginBottom: "8px" }}>My Process</div>
              <h2 style={{ fontSize: "32px", fontWeight: "800" }}>Systematic Development Approach</h2>
              <p style={{ color: "#8a8a85", marginTop: "8px" }}>From analytical research to functional deployment.</p>
            </div>

            <div className="process-showcase" style={{ position: "relative" }}>
              {/* Konektor SVG otomatis tersembunyi di mobile lewat CSS */}
              <svg className="process-connector" viewBox="0 0 1000 300" preserveAspectRatio="none" style={{ width: "100%", height: "150px", position: "absolute", top: "50px", zIndex: -1 }}>
                <path d="M 230 140 C 300 60, 380 60, 430 140" fill="none" stroke="#E85D3A" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="230" cy="140" r="5" fill="#E85D3A" />
                <path d="M 570 140 C 630 220, 700 220, 760 140" fill="none" stroke="#E85D3A" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="760" cy="140" r="5" fill="#E85D3A" />
              </svg>

              <div className="process-cards-row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

                <div className="process-tilt-card" style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #e4e4e0" }}>
                  <span className="process-num" style={{ fontSize: "32px", fontWeight: "800", color: "#E85D3A", display: "block", marginBottom: "16px" }}>01</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Research & Analysis</h3>
                  <p style={{ color: "#3a3a38", fontSize: "14px", lineHeight: "1.7" }}>
                    I begin by analyzing user requirements and system constraints. Whether it's conducting UX research for safety apps or defining functional specifications, I ensure the problem is deeply understood before drafting the logic.
                  </p>
                </div>

                <div className="process-tilt-card" style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #e4e4e0" }}>
                  <span className="process-num" style={{ fontSize: "32px", fontWeight: "800", color: "#E85D3A", display: "block", marginBottom: "16px" }}>02</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Architecture & Design</h3>
                  <p style={{ color: "#3a3a38", fontSize: "14px", lineHeight: "1.7" }}>
                    I architect modular systems, designing clean UI layouts and robust database schemas. By planning component hierarchy and data flow, I create a blueprint that balances high-end visuals with technical maintainability.
                  </p>
                </div>

                <div className="process-tilt-card" style={{ background: "#fff", padding: "32px", borderRadius: "16px", border: "1px solid #e4e4e0" }}>
                  <span className="process-num" style={{ fontSize: "32px", fontWeight: "800", color: "#E85D3A", display: "block", marginBottom: "16px" }}>03</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Develop & Deploy</h3>
                  <p style={{ color: "#3a3a38", fontSize: "14px", lineHeight: "1.7" }}>
                    I translate designs into functional code using modern frameworks. From API integrations to real-time data streaming and payment gateway logic, I ensure the final build is performant, secure, and ready for deployment.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ─── PROJECTS SECTION ─── */}
        <section id="projects" style={{ padding: "80px 24px", background: "#F7F7F5" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "8px" }}>Recent Projects</h2>
              <p style={{ color: "#8a8a85", marginBottom: "24px" }}>A curated collection of scalable frontend builds and system integrations.</p>

              <input
                type="text"
                placeholder="Search projects (e.g. Next.js, API Integration)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: "12px 16px", borderRadius: "8px", border: "1px solid #e4e4e0", width: "100%", maxWidth: "400px", outline: "none" }}
              />
            </div>

            <div className="project-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <div style={{ padding: "40px 0", color: "#8a8a85", gridColumn: "1 / -1", textAlign: "center" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "#111" }}>Whoops!</h3>
                  <p>I don't have a project matching "{searchQuery}" yet. Maybe it's time I build one?</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
        <section className="contact-section" id="contact" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="contact-card" style={{ background: "#111", padding: "48px", borderRadius: "16px", color: "#fff", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
              <div>
                <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "16px", lineHeight: "1.2" }}>Ready to build something amazing?</h2>
                <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>
                  I'm always open to discussing product design work, frontend engineering opportunities, or potential collaborations.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '14px 16px', borderRadius: '8px', border: 'none', background: "#27272a", color: "#fff" }} />
                <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '14px 16px', borderRadius: '8px', border: 'none', background: "#27272a", color: "#fff" }} />
                <textarea placeholder="How can I help you?" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} style={{ padding: '14px 16px', borderRadius: '8px', border: 'none', resize: 'vertical', background: "#27272a", color: "#fff" }} />
                <button type="submit" style={{ marginTop: '8px', padding: '14px', borderRadius: '8px', border: 'none', background: '#fff', color: '#111', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER SECTION ─── */}
      <footer style={{ background: "#111", color: "#fff", paddingTop: "80px", overflow: "hidden" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", borderBottom: "1px solid #333", paddingBottom: "40px" }}>
            {/* Kolom 1 */}
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Let's Collaborate</h3>
              <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                Whether you have a specific project in mind or just want to chat about tech, I'm just an email away.
              </p>
              <a href="#contact" style={{ display: "inline-block", padding: "10px 20px", border: "1px solid #fff", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>Connect</a>
            </div>

            {/* Kolom 2 */}
            <div>
              <h4 style={{ fontSize: "14px", color: "#8a8a85", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>Socials</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="https://www.linkedin.com/in/keisharafanabila?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>LinkedIn</a></li>
                <li><a href="https://github.com/keissharafa" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>GitHub</a></li>
                <li><a href="https://instagram.com/keissharafa" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>Instagram</a></li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div>
              <h4 style={{ fontSize: "14px", color: "#8a8a85", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="mailto:keissharafa@gmail.com" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>Email</a></li>
                <li><a href="https://wa.me/+6281233905739" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "14px" }}>WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Giant Name */}
          <div style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "20px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 10vw, 120px)",
              fontWeight: "900",
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#fff",
              lineHeight: "1"
            }}>
              Keisha Rafa Nabila
            </h1>
          </div>
          <p style={{ color: "#8a8a85", fontSize: "14px", marginTop: "24px" }}>
            © 2026 Keisha Rafa Nabila.
          </p>
        </div>
      </footer>
    </>
  );
}