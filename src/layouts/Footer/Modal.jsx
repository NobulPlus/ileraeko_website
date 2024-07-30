import React from 'react'

const Modal = ({ message, onConfirm, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <p className="mb-4">{message}</p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-orange-600 rounded hover:bg-orange-700"
              onClick={onConfirm}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Modal