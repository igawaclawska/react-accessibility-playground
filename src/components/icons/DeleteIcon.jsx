const DeleteIcon = ({ ariaHidden }) => {
  return (
    <svg
      aria-hidden={ariaHidden}
      xmlns="http://www.w3.org/2000/svg"
      height="18px"
      viewBox="6 3 12 18"
      width="18px"
      fill="currentColor"
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
};

export default DeleteIcon;
