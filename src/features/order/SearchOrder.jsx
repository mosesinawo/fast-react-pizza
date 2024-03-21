import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-yellow-100
        placeholder:text-stone-400 sm:focus:2-72 transition-all focus:outline-none focus:ring focus:ring-yellow-500 w-28 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
