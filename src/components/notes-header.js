import React from "react";
import { Link } from "react-router-dom";

export default function NotesHeader() {
  return (
    <header>
      <h1>
        <a href="/">Aplikasi Catatan</a>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/archivers"}>Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
