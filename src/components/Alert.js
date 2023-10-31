import React from 'react';

const Alert = ({ type, message }) => {
  let alertClasses = '';

  if (type === 'success') {
    alertClasses = 'bg-green-100 border-green-400 text-green-700';
  } else if (type === 'error') {
    alertClasses = 'bg-red-100 border-red-400 text-red-700';
  }

  return (
    <div className={`p-4 border rounded ${alertClasses}`}>
      <div className="flex">
        <div className="py-1">
          {type === 'success' && (
            <svg
              className="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {type === 'error' && (
            <svg
              className="w-6 h-6 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="ml-2">
          <div className="font-bold">{type === 'success' ? 'Success' : 'Error'}</div>
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
