
import { useState } from "react";

export default function SearchBar({ onSearch, initialValue = "" }) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        placeholder="Enter city (e.g., Bhubaneswar)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="City name"
      />
      <button type="submit">Search</button>
    </form>
  );
}
