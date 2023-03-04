import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesArchivesPage from "./notes-archives-page";
import NotesDetailPage from "./notes-detail-page";
import NotesHomePage from "./notes-home-page";

export default function NotesMain({ notes }) {
  console.log("notes :>> ", notes);
  return (
    <main>
      {/* Home Page */}
      <Routes>
        <Route path="/" element={<NotesHomePage notes={notes} />}></Route>
      </Routes>

      {/* Detail Page */}
      <Routes>
        <Route path="/notes/:id" element={<NotesDetailPage />}></Route>
      </Routes>

      {/* Archive Page */}
      <Routes>
        <Route
          path="/archivers"
          element={<NotesArchivesPage notes={notes} />}
        ></Route>
      </Routes>
    </main>
  );
}
