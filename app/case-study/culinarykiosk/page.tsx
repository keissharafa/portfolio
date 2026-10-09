"use client";

import Link from "next/link";

export default function CulinaryKioskCaseStudy() {
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
                        <span className="pill" style={{ background: "#E6F0FF", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Web Application</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Next.js & Payment API</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        Culinary Kiosk: Seamless Cafeteria Ordering.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        A modern cafeteria ordering system designed to eliminate queues through dynamic QR code integration and frictionless payment gateways.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar di folder public) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src="/culinarykiosk.png" alt="Culinary Kiosk Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Traditional cafeteria environments suffer from high congestion during peak hours, primarily driven by manual ordering and cash transactions. The goal was to digitize the end-to-end ordering process—from menu browsing to payment—without requiring users to download a dedicated mobile app, ensuring a frictionless experience for hungry customers on the go.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        To deliver a native-app-like experience via the web, the platform was architected using Next.js. This choice ensured rapid page loads through server-side rendering (SSR) and seamless client-side routing.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        The core logic revolves around a dynamic routing system triggered by QR codes placed at cafeteria tables. Once scanned, the system instantly contextualizes the user's session with table-specific data, manages their cart state locally, and securely hands off the final transaction payload to a third-party payment gateway via robust API integration.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Contextual QR Integration:</strong> Users scan a QR code to instantly access the digital menu, automatically syncing their order to a specific table number without manual input.
                        </li>
                        <li>
                            <strong>Low-Latency Cart Management:</strong> Optimized React state management ensures that adding items, applying modifiers (e.g., "no ice", "extra spicy"), and calculating totals happen instantaneously.
                        </li>
                        <li>
                            <strong>Payment Gateway Handoff:</strong> Secure and reliable API integration with a payment gateway, handling transaction webhooks to update order statuses in real-time for the kitchen display system.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}