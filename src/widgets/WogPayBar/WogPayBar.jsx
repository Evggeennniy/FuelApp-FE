import WogPayItem from "../WogPayItem/WogPayItem";

function WogPayBar({
  title = "WOG PAY",
  backgroundImage = "/rectangle.png",
  items = [],
}) {
  return (
    <div
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      className="h-[108px] absolute bottom-0 left-0 w-full bg-cover bg-center px-4"
    >
      <div className="text-sm text-center text-[#07A451] mt-2 mb-4">
        {title}
      </div>

      <div className="flex max-w-[290px] mx-auto justify-between items-center">
        {items.map((item, index) => (
          <WogPayItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default WogPayBar;
