import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesArchivesPage from "../pages/notes-archives-page";
import NotesDetailPage from "../pages/notes-detail-page";
import NotesHomePage from "../pages/notes-home-page";
import NotesInput from "./notes-input";

export default function NotesMain({ notes }) {
  return (
    <main>
      {/* Home Page */}
      <Routes>
        <Route path="/" element={<NotesHomePage notes={notes} />}></Route>
        <Route path="/notes/:id" element={<NotesDetailPage />}></Route>
        <Route path="/notes/new" element={<NotesInput />}></Route>
        <Route
          path="/archivers"
          element={<NotesArchivesPage notes={notes} />}
        ></Route>
      </Routes>
    </main>
  );
}
