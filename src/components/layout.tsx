import React from "react";
import { Link } from "gatsby";
import "./layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>
        <div className="nav-item">
          <Link to="/mixes" className="nav-link" activeClassName="active">
            Mixes
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/artists" className="nav-link" activeClassName="active">
            Artists
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/albums" className="nav-link" activeClassName="active">
            Albums
          </Link>
        </div>
      </nav>
      <section>{children}</section>
    </main>
  );
}
