const GetHelpButton = () => {
  return (
    <a
      href="https://wa.me/917377737309"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white flex items-center px-4 py-2 rounded-full shadow-lg transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75 1.7 0 3.29-.425 4.68-1.17l3.32.88a.75.75 0 00.92-.92l-.88-3.32A9.708 9.708 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12z"
        />
      </svg>
      Get Help
    </a>
  );
};

export default GetHelpButton; 