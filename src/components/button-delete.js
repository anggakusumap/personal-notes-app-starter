import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export default function ButtonDelete() {
  return (
    <button className="action" type="button" title="Hapus">
      <MdDeleteOutline />
    </button>
  );
}
