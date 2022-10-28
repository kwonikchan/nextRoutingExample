import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <div style={linkStyle}>Home</div>
    </Link>
    <Link href="/about">
      <div style={linkStyle}>About</div>
    </Link>
  </div>
);

export default Header;
