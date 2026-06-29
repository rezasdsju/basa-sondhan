export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#1e40af" }}>🏠 বাসার সন্ধান</h1>

        <nav style={{ display: "flex", gap: "15px" }}>
          <a href="#">Home</a>
          <a href="#">Houses</a>
          <a href="#">Login</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>
          Find Your Perfect Home in Bangladesh
        </h2>

        <p style={{ color: "gray", marginTop: "10px" }}>
          Rent houses, flats, and rooms easily with verified owners
        </p>

        {/* SEARCH BOX */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Search area, city, rent..."
            style={{
              padding: "12px",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              marginLeft: "10px",
              backgroundColor: "#1e40af",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section style={{ marginTop: "60px", display: "flex", gap: "20px", justifyContent: "center" }}>
        
        <div style={cardStyle}>
          🏡 Verified Houses
        </div>

        <div style={cardStyle}>
          📍 Map Based Search
        </div>

        <div style={cardStyle}>
          💬 Direct Chat with Owner
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "80px", textAlign: "center", color: "gray" }}>
        © 2026 বাসার সন্ধান. All rights reserved.
      </footer>

    </main>
  );
}

const cardStyle: React.CSSProperties = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center"
};