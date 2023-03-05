import React from "react";
import { Route, Routes } from "react-router-dom";
import NotesArchivesPage from "../pages/notes-archives-page";
import NotesDetailPage from "../pages/notes-detail-page";
import NotesHomePageWrapper from "../pages/notes-home-page";
import NotesAddPage from "../pages/notes-add-page";
import NotFound from "./not-found";

export default function NotesMain({ notes }) {
  return (
    <main>
      {/* Home Page */}
      <Routes>
        <Route path="/" element={<NotesHomePageWrapper />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/notes/:id" element={<NotesDetailPage />}></Route>
        <Route path="/notes/new" element={<NotesAddPage />}></Route>
        <Route path="/archivers" element={<NotesArchivesPage />}></Route>
      </Routes>
    </main>
  );
}
