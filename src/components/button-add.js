import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ButtonAdd() {
  return (
    <div className="homepage__action">
      <Link to={"/notes/new"}>
        <button className="action" type="button" title="Tambah">
          <IoMdAddCircleOutline />
        </button>
      </Link>
    </div>
  );
}
