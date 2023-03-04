import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ButtonAdd() {
  return (
    <div className="homepage__action">
      <button className="action" type="button" title="Tambah">
        <IoMdAddCircleOutline />
      </button>
    </div>
  );
}
