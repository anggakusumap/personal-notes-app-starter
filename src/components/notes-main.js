import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesArchivesPage from "./notes-archives-page";
import NotesDetailPage from "./notes-detail-page";
import NotesHomePage from "./notes-home-page";
import NotesNew from "./notes-new";

export default function NotesMain({ notes }) {
  console.log("notes :>> ", notes);
  return (
    <main>
      {/* Home Page */}
      <Routes>
        <Route path="/" element={<NotesHomePage notes={notes} />}></Route>
        <Route path="/notes/:id" element={<NotesDetailPage />}></Route>
        <Route path="/notes/new" element={<NotesNew />}></Route>
        <Route
          path="/archivers"
          element={<NotesArchivesPage notes={notes} />}
        ></Route>
      </Routes>
    </main>
  );
}
