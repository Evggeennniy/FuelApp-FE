function WogPayItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-14 flex-col gap-1 items-center justify-center"
    >
      <div className="h-9 w-9 flex justify-center items-center rounded-full bg-[#07A451]">
        <img src={icon} className="w-[15px] h-[17px]" alt={label} />
      </div>
      <div className="text-xs text-center">{label}</div>
    </button>
  );
}

export default WogPayItem;
