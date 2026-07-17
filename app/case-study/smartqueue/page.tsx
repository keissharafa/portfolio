"use client";

import Link from "next/link";

export default function SmartQueueCaseStudy() {
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
                        <span className="pill" style={{ background: "#E6F0FF", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Real-time Dashboard</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>SSE & JavaScript</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        Smart Queue System: Zero-Latency Management.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        Architecting a high-performance, real-time queue monitoring dashboard leveraging Server-Sent Events (SSE) for instant UI updates.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar di folder public) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "#FFE8D8", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E85D3A" }}>Dashboard Mockup Here</span>
                        {/* <img src="/smart-queue.png" alt="Smart Queue Dashboard Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Public service areas and healthcare facilities often struggle with managing physical queues, leading to overcrowded waiting rooms and frustrated visitors. The core technical challenge was to build a display dashboard that updates the queue numbers instantly across multiple monitor screens without requiring manual page refreshes or resorting to heavy, resource-intensive network polling.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Instead of using two-way communication protocols like WebSockets (which can be overkill for a display board) or inefficient HTTP polling, I engineered the frontend to consume Server-Sent Events (SSE).
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        This architectural decision allows the server to push updates to the web client via a single, long-lived, unidirectional HTTP connection. The JavaScript logic on the client side simply listens for these events and selectively updates the DOM, ensuring high efficiency and low memory consumption on the display devices.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>SSE Implementation:</strong> A robust event listener system that captures server-side updates and mutates the application state in real-time.
                        </li>
                        <li>
                            <strong>Optimized DOM Rendering:</strong> The UI only re-renders the specific queue ticket components that have changed, preventing screen flickering and maintaining smooth animations.
                        </li>
                        <li>
                            <strong>High-Visibility UI Design:</strong> A clean, high-contrast dashboard interface specifically designed for readability from long distances in waiting areas.
                        </li>
                    </ul>
                </section>

            </article>
        </main>
    );
}