"use client";

import Link from "next/link";

export default function LingkaraCaseStudy() {
    return (
        <main style={{ backgroundColor: "#F7F7F5", minHeight: "100vh", color: "#111", paddingBottom: "80px" }}>

            {/* ─── NAVBAR SIMPLE ─── */}
            <header style={{ padding: '24px', borderBottom: '1px solid #e4e4e0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/#projects" style={{ textDecoration: 'none', color: '#8a8a85', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>&larr;</span> Back to Portfolio
                    </Link>
                    <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        <span style={{ background: '#111', color: '#fff', padding: '4px 8px', borderRadius: '4px', marginRight: '8px' }}>K</span>Kei.
                    </span>
                </div>
            </header>

            <article style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>

                {/* ─── HERO HEADER ─── */}
                <div style={{ marginBottom: "48px" }}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                        <span className="pill" style={{ background: "#E4F6E8", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Sustainability App</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Component Library</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        Lingkara: Urban Waste & Circular Economy.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        Constructing a digital ecosystem interface for urban waste management, featuring location-based reporting and a rewarding circular economy dashboard.
                    </p>

                    {/* MOCKUP IMAGE */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/lingkara.jpeg" alt="Lingkara Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Urban waste management frequently suffers from a lack of community engagement and inefficient reporting channels. The challenge was to design a mobile application that not only makes reporting illegal dumping or full public bins effortless but also incentivizes users through a gamified, circular economy reward system.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        To ensure visual consistency and accelerate development, I initiated the project by building a custom Component Library. This modular approach guaranteed that buttons, cards, and input fields maintained a uniform ecological aesthetic across the entire app.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        The frontend logic heavily integrated location services (GPS) to allow users to pin waste coordinates accurately. Additionally, state management was optimized to handle the real-time updating of user reward points as they engaged with the platform's recycling initiatives.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Location-Based Reporting:</strong> An intuitive map interface allowing users to drop pins and upload photos of waste accumulation for immediate municipal or community action.
                        </li>
                        <li>
                            <strong>Circular Economy Dashboard:</strong> A user profile dashboard that gamifies sustainability by tracking recycling efforts and converting them into redeemable points.
                        </li>
                        <li>
                            <strong>Modular Component Library:</strong> A scalable repository of UI components built from the ground up, ensuring a highly maintainable and accessible design system.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}