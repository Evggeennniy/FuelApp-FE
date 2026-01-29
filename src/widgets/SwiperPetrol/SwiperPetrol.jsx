import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronRight } from "react-icons/fa6";
import ApplePayWidget from "../../pages/MockApplePay/MockApplePay";

const fuels = [
  { id: 1, name: "ГАЗ", price: 39.98, color: "#77ADFC" },
  { id: 2, name: "100", subtitle: "Mustang", price: 78.99, color: "#D38C9C" },
  { id: 3, name: "95", subtitle: "Mustang", price: 64.98, color: "#D38C9C" },
  { id: 4, name: "ДП", subtitle: "Diesel", price: 62.5, color: "#D38C9C" },
];

function SwiperPetrol() {
  const [activeId, setActiveId] = useState(1);
  const [litres, setLitres] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);

  // Находим активное топливо
  const activeFuel = fuels.find((fuel) => fuel.id === activeId);

  // Функция расчета общей стоимости
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

  // Расчет суммы при изменении литров или выборе топлива
  useEffect(() => {
    calculateTotalPrice();
  }, [litres, activeId]);

  // Форматирование цены с 2 знаками после запятой
  const formatPrice = (price) => {
    return price.toFixed(2).replace(".", ",") + "₴";
  };

  return (
    <>
      <div className="bg-[#F6F4F7] py-3">
        <div className="px-3 text-[13px] text-[#55545C]">
          Оберіть вид пального
        </div>
        <Swiper spaceBetween={12} slidesPerView={3.2} className="">
          {fuels.map((fuel) => {
            const isActive = fuel.id === activeId;

            return (
              <SwiperSlide key={fuel.id}>
                <button
                  onClick={() => setActiveId(fuel.id)}
                  className={`w-full rounded-lg px-5 pt-3 pb-1 mb-2 text-start transition-all
                    ${
                      isActive
                        ? "bg-white shadow-md"
                        : "bg-[#F6F4F7] border-gray-300"
                    }`}
                >
                  <p
                    style={{ color: fuel.color }}
                    className="text-[35px] leading-[35px]"
                  >
                    {fuel.name}
                  </p>

                  {fuel.subtitle && (
                    <p className="text-[12px] text-gray-400">{fuel.subtitle}</p>
                  )}

                  <p className="text-[12px] text-end mt-[25px] text-gray-500">
                    {formatPrice(fuel.price)}
                  </p>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="bg-[#FFFFfF]">
        <div className="flex justify-between px-2 py-4">
          <div className="text-xs text-[#4D515D]">Вкажіть кількість, л</div>
          <input
            type="number"
            className="w-30 border-b border-[#EAE8EA] text-right text-[16px] outline-none
             appearance-none
             [&::-webkit-inner-spin-button]:appearance-none
             [&::-webkit-outer-spin-button]:appearance-none"
            name="litre"
            value={litres}
            onChange={(e) => setLitres(e.target.value)}
          />
        </div>
        <div className="flex justify-between border-b border-[#F7F5F7] px-2 py-4">
          <div className="text-xs text-[#4D515D]">Спосіб оплати</div>
          <div className="text-xs text-[#444852] flex items-center gap-2">
            Apple Pay <FaChevronRight color="#E5E3E5" />
          </div>
        </div>
      </div>

      {/* Фиксированный контейнер внизу страницы */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            className="mr-2"
            id="agreement"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <label htmlFor="agreement" className="text-[12px]">
            Я погоджуюсь з{" "}
            <span className="text-[#349B56]">
              правилами купівлі в онлайн-магазині WOG
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="text-[14px] text-[#0F8F56]">
            {formatPrice(totalPrice)}
          </div>
          <ApplePayWidget isAgreed={isAgreed} totalPrice={totalPrice} />
        </div>
      </div>

      {/* Отступ для фиксированного блока внизу */}
      <div className="h-28"></div>
    </>
  );
}

export default SwiperPetrol;
