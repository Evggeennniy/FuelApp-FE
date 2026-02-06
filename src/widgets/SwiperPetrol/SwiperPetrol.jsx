import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronRight } from "react-icons/fa6";
import ApplePayWidget from "../MockApplePay/MockApplePay";
import { formatPhone } from "../../utils/formatPhone";

function SwiperPetrol({ type = "own" }) {
  const [activeId, setActiveId] = useState();
  const [litres, setLitres] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  const [fuels, setFuels] = useState([]);

  const activeFuel = fuels.find((fuel) => fuel.id === activeId);

  useEffect(() => {
    const storedFuels = localStorage.getItem("fuels");
    if (storedFuels) {
      setFuels(JSON.parse(storedFuels));
    }
  }, []);

  const calculateTotalPrice = () => {
    if (!activeFuel || !litres || isNaN(parseFloat(litres))) {
      setTotalPrice(0);
      return;
    }

    const litresNum = parseFloat(litres.replace(",", "."));
    if (litresNum <= 0) {
      setTotalPrice(0);
      return;
    }

    const calculatedPrice = litresNum * activeFuel.price;
    setTotalPrice(calculatedPrice);
  };
  useEffect(() => {
    localStorage.setItem("activeFuel", JSON.stringify(activeFuel));
    localStorage.setItem("litresNum", litres);
  }, [litres, activeFuel]);

  useEffect(() => {
    calculateTotalPrice();
  }, [litres, activeId]);

  const formatPrice = (price) => {
    return price.toFixed(2).replace(".", ",") + "₴";
  };

  return (
    <>
      <div className="bg-[#F6F4F7] py-3">
        <div className="px-3 text-[13px] mb-2 text-[#55545C]">
          Оберіть вид пального
        </div>
        <Swiper spaceBetween={12} slidesPerView={3.2} className="">
          {fuels.map((fuel) => {
            const isActive = fuel.id === activeId;

            return (
              <SwiperSlide key={fuel.id}>
                <button
                  onClick={() => setActiveId(fuel.id)}
                  className={`rounded-lg h-[125px] max-w-[110px] w-full flex flex-col px-5 pt-3 pb-1 mb-2 text-start transition-all
                    ${
                      isActive
                        ? "bg-white shadow-md"
                        : "bg-[#F6F4F7] border-gray-300"
                    }`}
                >
                  <p
                    style={{ color: fuel.color }}
                    className="text-[38px] leading-[38px]"
                  >
                    {fuel.name}
                  </p>

                  {fuel.subtitle && (
                    <p className="text-[13px]  text-[#C5C3C5]">
                      {fuel.subtitle}
                    </p>
                  )}

                  <p className="text-[16px] mt-auto text-end font-light  text-[#A09EA1]">
                    {formatPrice(fuel.price)}
                  </p>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="bg-[#FFFFfF]">
        {type !== "own" && (
          <div
            className="flex justify-between px-3  py-4
             animate-fadeSlideUp"
          >
            <div className="text-xs text-[#4D515D]">Номер одержувача</div>

            <div className="flex items-center gap-1">
              <div className="text-[10px] text-[#A09EA1]">+380</div>

              <input
                type="tel"
                inputMode="numeric"
                className="w-28 border-b border-[#EAE8EA]
                 text-right text-[#4D515D] text-[16px] outline-none
                 focus:border-[#00A650]
                 transition-colors duration-200"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
              />
              <img src="/persone.png" className="w-4" alt="" />
            </div>
          </div>
        )}
        <div className="flex justify-between px-3  py-4">
          <div className="text-xs text-[#4D515D]">Вкажіть кількість, л</div>
          <input
            type="number"
            className="w-20 border-b border-[#EAE8EA] text-right text-[16px] outline-none
             appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [&::-webkit-outer-spin-button]:appearance-none"
            name="litre"
            value={litres}
            onChange={(e) => setLitres(e.target.value)}
          />
        </div>
        <div className="flex justify-between border-b border-[#F7F5F7] px-3  py-4">
          <div className="text-xs text-[#4D515D] flex items-center gap-2">
            Спосіб оплати <img className="w-9 h-5" src="/logos_apple-pay.png" />
          </div>
          <div className="text-xs text-[#444852] flex items-center gap-2">
            Apple Pay <FaChevronRight color="#E5E3E5" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <label className="flex items-center mb-3 cursor-pointer select-none">
          {/* hidden real checkbox */}
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="sr-only"
          />

          {/* custom checkbox */}
          <span
            className={`w-[25px]! h-[23px] mt-[2px] border-2 rounded flex items-center justify-center
        transition-all
        ${
          isAgreed
            ? "bg-[#349B56] border-[#349B56]"
            : "bg-white border-[#349B56]"
        }`}
          >
            {isAgreed && (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>

          {/* text */}
          <span className="ml-3 text-[14px] leading-[16px] text-[#4D515D]">
            Я погоджуюсь з{" "}
            <span className="text-[#349B56]">
              правилами купівлі в онлайн-магазині WOG
            </span>
          </span>
        </label>

        <div className="flex items-center justify-end gap-2">
          <div className="text-[14px] text-[#0F8F56]">
            {formatPrice(totalPrice)}
          </div>
          <ApplePayWidget isAgreed={isAgreed} totalPrice={totalPrice} />
        </div>
      </div>

      <div className="h-28"></div>
    </>
  );
}

export default SwiperPetrol;
