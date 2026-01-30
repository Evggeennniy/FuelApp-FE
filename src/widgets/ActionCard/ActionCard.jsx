function ActionCard({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex rounded-lg gap-5 bg-white py-5
                 justify-center items-center
                 transition-transform active:scale-[0.97]"
    >
      <img src={icon} alt={label} />
      <p className="text-xs text-[#4D515D] text-left leading-tight">{label}</p>
    </button>
  );
}

export default ActionCard;
