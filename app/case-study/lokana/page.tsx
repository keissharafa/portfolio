"use client";

import Link from "next/link";

export default function LokanaCaseStudy() {
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
                        <span className="pill" style={{ background: "#E6F0FF", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>E-Commerce Berbasis Budaya</span>
                        <span className="pill" style={{ background: "#e4e4e0", color: "#111", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>Laravel 13 & Blade</span>
                    </div>
                    <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        Lokana: Bali's Cultural & Tourism-Based Commerce.
                    </h1>
                    <p style={{ fontSize: "20px", color: "#3a3a38", lineHeight: "1.6", marginBottom: "40px" }}>
                        A niche digital marketplace empowering local Balinese UMKM through an integrated Content-Commerce experience.
                    </p>

                    {/* MOCKUP IMAGE (Pastikan ada gambar lokana.png di folder public, atau ganti namanya) */}
                    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", background: "#FFE8D8", border: "1px solid #e4e4e0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Hapus baris di bawah ini dan uncomment tag <img> kalau kamu sudah punya gambar mockup Lokana */}
                        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#E85D3A" }}>Lokana Mockup Here</span>
                        {/* <img src="/lokana.png" alt="Lokana Web Interface" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    </div>
                </div>

                {/* ─── THE PROBLEM ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Challenge</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        General e-commerce platforms focus on mass commodities, leaving premium, authentic local products struggling to convey their true value. Balinese UMKM products carry deep philosophical narratives and rich history. The challenge was to build a niche marketplace that doesn't just sell items, but educates tourists and culture enthusiasts before a transaction occurs.
                    </p>
                </section>

                {/* ─── THE APPROACH & ARCHITECTURE ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Architecture & Logic</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", marginBottom: "16px" }}>
                        Lokana was architected using Laravel 13, Blade templates, and Vanilla JavaScript to ensure high performance without heavy client-side overhead. For presentation and demonstration purposes, the system utilizes a robust session state management architecture rather than a traditional relational database.
                    </p>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        This approach allowed me to simulate dynamic, realistic data flows—from cart operations to seamless auto-redirect logins—perfectly showcasing the user journey and transactional logic in real-time.
                    </p>
                </section>

                {/* ─── THE SOLUTION ─── */}
                <section style={{ marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>The Solution & Features</h2>
                    <ul style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        <li>
                            <strong>Content-Commerce Integration:</strong> A seamless user journey that guides visitors through cultural archives (e.g., the history of Kain Endek or Kintamani Coffee) directly into the product catalog, bridging education with purchasing.
                        </li>
                        <li>
                            <strong>Premium Admin Dashboard:</strong> A custom-built back-office interface engineered to monitor product data, articles, users, and transactions. Designed with a strict premium aesthetic (Shopify/Midtrans style) emphasizing whitespace, soft shadows, and Remix Icons without relying on default Bootstrap components.
                        </li>
                        <li>
                            <strong>Seamless Session Simulation:</strong> Implemented advanced session handling to create a flawless demonstration experience, including smooth cart operations, checkout logic, and auto-redirect authentication.
                        </li>
                    </ul>
                </section>

                {/* ─── CONCLUSION ─── */}
                <section>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #111", paddingBottom: "8px", display: "inline-block" }}>Outcome</h2>
                    <p style={{ fontSize: "16px", color: "#3a3a38", lineHeight: "1.8" }}>
                        Lokana successfully demonstrates how tailored UI/UX and targeted system architecture can elevate regional products. It proves that combining cultural storytelling with modern web development practices can create a highly engaging and economically impactful digital platform.
                    </p>
                </section>

            </article>
        </main>
    );
}