function ServiceItem({ icon, title, subtitle, onClick, highlighted }) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-5 py-4 px-4 border-b border-gray-300 cursor-pointer transition-colors ${
        highlighted ? "bg-white" : ""
      }`}
    >
      {icon ? (
        <img src={icon} className="w-6 h-6" alt="" />
      ) : (
        <div className="w-6 h-6" />
      )}

      <div className="flex flex-col">
        <p className="text-[#4D515D] text-[16px]">{title}</p>

        {subtitle && <p className="text-[#4D515D] text-[10px]">{subtitle}</p>}
      </div>
    </div>
  );
}

export default ServiceItem;
