import React from "react";

export default function NotesHeader() {
  return (
    <header>
      <h1>
        <a href="/">Aplikasi Catatan</a>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/archivers">Arsip</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
