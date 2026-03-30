import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jikson Mathew. All rights reserved.</p>
    </footer>
  );
}
