import { useEffect, useState } from "react";
import ReactModal from "react-modal";

import { Grid } from "../Grid";
import { User } from "./types";
import { SimpleMap } from "../SimpleMap";
import axios from "axios";

export const FilterInput = () => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [displayError, setDisplayError] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  const fetchUsers = async () => {
    setDisplayError(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
      setFilteredUsers(response.data);
      setFetchError(null);
    } catch (err) {
      setFetchError("Failed to fetch users. Please try again.");
    }
  };

  const handleFilterUser = () => {
    fetchUsers();
  };

  const openModal = (user: User) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    if (userName === "") {
      setFilteredUsers(users);
      setError(null);
      return;
    }

    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(userName.toLowerCase())
    );

    if (filtered.length === 0) {
      setError("No users found.");
      setFilteredUsers([]);
    } else {
      setError(null);
      setFilteredUsers(filtered);
    }
  }, [userName, filteredUsers]);

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-8 pt-10 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
        <div className="flex-grow max-w-xs">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Type the name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
          />
        </div>
        <div className="flex-grow max-w-xs">
          <button
            onClick={handleFilterUser}
            className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 w-full mt-2 sm:mt-0 sm:ml-4 sm:w-auto sm:px-4 sm:py-2"
          >
            Fetch Users
          </button>
        </div>
      </div>

      {fetchError && (
        <div className="text-red-600 text-center">{fetchError}</div>
      )}
      {error && displayError && (
        <div className="text-red-600 text-center">{error}</div>
      )}

      <div className="w-screen flex justify-center items-center">
        <div className="w-[80vw] display-flex justify-center items-center">
          {filteredUsers.length > 0 ? (
            <Grid users={filteredUsers} onUserClick={openModal} />
          ) : null}
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Details"
        className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-0"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          {selectedUser && (
            <SimpleMap
              lat={selectedUser.address.geo.lat}
              long={selectedUser.address.geo.lng}
            />
          )}
          <div className="flex justify-center mt-4">
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
