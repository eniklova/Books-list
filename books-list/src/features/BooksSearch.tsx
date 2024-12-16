import React, { useState } from "react";

interface BooksSearchProps {
  onSearch: (searchTerm: string) => void;
}

const BooksSearch: React.FC<BooksSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);  // Zavolá funkciu na vyhľadávanie, ktorá je odovzdaná ako prop
  };

  return (
    <div className="mb-4">
      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Zadaj názov alebo autora"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn btn-primary" type="submit">
          Hľadať
        </button>
      </form>
    </div>
  );
};

export default BooksSearch;


