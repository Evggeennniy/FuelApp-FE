function RightSidebar({ isOpen, onClose, title, children }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" h-full overflow-y-auto">{children}</div>
    </div>
  );
}

export default RightSidebar;
