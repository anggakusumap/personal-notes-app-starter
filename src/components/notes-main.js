import React from "react";
import NotesHomePage from "./notes-home-page";

export default function NotesMain({ notes }) {
  console.log("notes :>> ", notes);
  return (
    <main>
      {/* Home Page */}
      <NotesHomePage notes={notes} />
      {/* Detail Page */}
      {/* Archive Page */}
    </main>
  );
}
