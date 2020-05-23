import Link from "next/link";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-nav">
        <Link href={`/`}>
          <span className="logo">ajay.rocks</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
