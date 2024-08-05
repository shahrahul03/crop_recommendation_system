import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchContacts = async (page = 1) => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/contact?page=${page}&limit=10`);
        if (response.ok) {
          const data = await response.json();
          setContacts(data.contacts);
          setTotalPages(data.totalPages);
        } else {
          toast.error('Error fetching contacts');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error fetching contacts');
      }
    };

    fetchContacts(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin - Contact Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id} className={`border-b ${contact.isNew ? 'font-bold' : ''}`}>
                <td className="py-2 px-4">{(currentPage - 1) * 10 + index + 1}</td>
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.subject}</td>
                <td className="py-2 px-4">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Previous
        </button>
        <span className="self-center">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminContactPage;
