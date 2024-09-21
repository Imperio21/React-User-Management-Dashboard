import React, { useState } from "react";
import { User } from "./types";

interface GridProps {
  users: User[];
  onUserClick: (user: User) => void;
}

export const Grid: React.FC<GridProps> = ({ users, onUserClick }) => {
  const headers = ["Name", "Phone", "Username", "City", "Company"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemsPerPage = (e: number) => {
    if (users.length < e) return setItemsPerPage(users.length);
    if (e < 1) return setItemsPerPage(1);
    return setItemsPerPage(e);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-2 mb-4 shadow-md w-full sm:w-full mx-auto max-h-[66vh] h-[66vh] overflow-y-auto">
      <div className="font-bold mb-2 text-lg text-blue-500 text-center">
        User Information
      </div>

      <div className="hidden sm:grid sm:grid-cols-5 gap-0">
        {headers.map((header, index) => (
          <div
            key={index}
            className="font-semibold border-b border-gray-300 p-2 text-center sm:border-r last:border-r-0"
          >
            {header}
          </div>
        ))}
      </div>

      {currentUsers.map((user) => (
        <div
          key={user.id}
          className="border-b border-gray-300 cursor-pointer sm:grid sm:grid-cols-5 gap-0"
          onClick={() => onUserClick(user)}
        >
          <div className="p-2 sm:border-r border-gray-300 sm:text-center">
            <span className="font-semibold sm:hidden">Name: </span>
            {user.name}
          </div>
          <div className="p-2 sm:border-r border-gray-300 sm:text-center">
            <span className="font-semibold sm:hidden">Phone: </span>
            {user.phone}
          </div>
          <div className="p-2 sm:border-r border-gray-300 sm:text-center">
            <span className="font-semibold sm:hidden">Username: </span>
            {user.username}
          </div>
          <div className="p-2 sm:border-r border-gray-300 sm:text-center">
            <span className="font-semibold sm:hidden">City: </span>
            {user.address.city}
          </div>
          <div className="p-2 sm:text-center sm:last:border-r-0">
            {" "}
            {/* Remover borda direita no último item */}
            <span className="font-semibold sm:hidden">Company: </span>
            {user.company.name}
          </div>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <input
          type="number"
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPage(Number(e.target.value))}
          className="border p-1 sm:p-2 rounded mt-2 sm:mt-0"
        />
        <button
          className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed mt-2 sm:mt-0"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
