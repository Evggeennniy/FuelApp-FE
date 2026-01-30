import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();
  const [activeFuel] = useState(() => {
    const stored = localStorage.getItem("activeFuel");
    return stored ? JSON.parse(stored) : null;
  });

  const [litresNum] = useState(() => {
    const stored = localStorage.getItem("litresNum");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <div className="min-h-[100dvh] bg-[#00A650] flex flex-col">
      <div className="mt-25 flex flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-xl">Дякуємо!</h1>
        <p className="text-md font-light">{litresNum}л вже на картці</p>

        <div className="mt-[34px]">
          <div
            className="text-[32px] leading-[24px]"
            style={{ color: activeFuel.color }}
          >
            {activeFuel.name}
          </div>
          <div className="text-sm text-[#C5C3C5]"> {activeFuel.subtitle}</div>
        </div>
        <div className="mt-20 text-[16px] leading-4 font-light ">
          Вам зараховано
          <br />
          1,00 ₴ бонусів
        </div>
      </div>
      <div className="mt-auto p-4 pb-10 text-white">
        <button className="w-full mb-4 text-[14px] gap-2 font-light flex justify-center items-center py-2 border border-[#FFFFFF] rounded-sm">
          <img src="/list.svg" className="w-4 h-4" alt="" />
          Отримати квитанцію
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full text-[14px] font-light flex justify-center items-center py-2 text-[#3E785F] bg-white rounded-sm"
        >
          ГОТОВО
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
