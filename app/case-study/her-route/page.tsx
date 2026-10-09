"use client";

import Link from "next/link";

export default function HerRouteCaseStudy() {
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
                        <span className="pill" style={{ background: "#FFE4E1", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Web Application</span>
                        <span className="pill" style={{ background: "#E6E6FA", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>API Integration</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        HerRoute: Women's Safety & Responsive Emergency Navigation.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        Constructing a dynamic navigation-based web application designed to enhance women's mobility safety, developed as a Final Project for the SISTECH 2026 program.
                    </p>

                    {/* MOCKUP IMAGE */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/her-route.png" alt="HerRoute Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        As the Front-End Engineer, the core challenge was to build a highly responsive web interface that seamlessly integrates machine learning-based risk prediction APIs into an interactive map. This required translating complex data into intuitive visual indicators, while managing complex state to ensure critical emergency features—like the SOS alarm and anonymous reporting—remained instantly accessible.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        I established the application foundation using React + Vite, TypeScript, and Tailwind CSS to ensure a responsive and mobile-friendly UI. To map out critical data flows, the frontend logic heavily integrated interactive maps via Leaflet and dynamic charts via Recharts.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        A major architectural focus was robust API integration. I collaborated closely with MLOps Engineers to seamlessly connect machine learning-based risk prediction APIs into the frontend ecosystem, managing complex states to handle real-time safety triggers without latency.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Interactive Safe Routing:</strong> Integrated Leaflet maps to display secure navigational paths and dynamically highlight risk zones through a Visual Risk Indicator.
                        </li>
                        <li>
                            <strong>Risk Metric Visualization:</strong> Transformed raw safety data into digestible, intuitive visual metrics using Recharts.
                        </li>
                        <li>
                            <strong>Responsive Emergency Features:</strong> Implemented crucial safety tools utilizing complex state management, including an audio-enabled SOS button, an Anonymous Report form, and Trusted Contacts management.
                        </li>
                        <li>
                            <strong>ML API Integration:</strong> Bridged the gap between data science and user experience by plugging predictive machine learning models directly into the frontend ecosystem.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}