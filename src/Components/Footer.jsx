const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer footer-center p-4 bg-primary_color text-white">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Aronny
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
