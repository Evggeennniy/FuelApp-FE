import { useState } from "react";
import { FaApplePay } from "react-icons/fa6";
import ModalPortal from "../ModalPortal/ModalPortal";
import { useNavigate } from "react-router-dom";

function ApplePayWidget({ isAgreed, totalPrice }) {
  const [stage, setStage] = useState("idle");
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const cards = [
    {
      id: 2,
      name: "Visa",
      lastFour: "4242",
      color: "bg-gray-800",
      icon: "VISA",
    },
  ];

  const startPayment = () => {
    setStage("wallet");
  };

  const selectCard = (card) => {
    setSelectedCard(card);
    setStage("processing");

    setTimeout(() => {
      setStage("success");

      navigate("/thank-you");
      setTimeout(() => {
        resetWidget();
      }, 2000);
    }, 3000);
  };

  const resetWidget = () => {
    setStage("idle");
    setSelectedCard(null);
  };

  // Закрыть кошелек
  const closeWallet = () => {
    setStage("idle");
  };
  // console.log(typeof totalPrice, totalPrice);

  return (
    <div className="relative">
      {/* Кнопка запуска */}

      <button
        onClick={startPayment}
        className={`px-6 py-3 rounded-lg ${
          !isAgreed || totalPrice === 0
            ? "bg-[#ACAAAC] text-white cursor-not-allowed"
            : "bg-[#01A651] text-white"
        }`}
        disabled={!isAgreed || totalPrice === 0}
      >
        ОПЛАТИТИ
      </button>

      {stage === "processing" && (
        <div className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 py-4 flex items-center justify-center">
          <img src="/faceid.gif" alt="" />
        </div>
      )}
      {(stage === "wallet" || stage === "processing") && (
        <ModalPortal>
          <>
            <div
              className="fixed inset-0 pb-4 bg-black/50 z-[9999]"
              onClick={closeWallet}
            />

            <div className="fixed bottom-0 left-0 right-0 bg-[#242225] rounded-t-2xl shadow-2xl z-[10000] animate-slideUp">
              <div className="px-4 pb-7">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <FaApplePay size={60} />
                    </h3>
                  </div>
                  <button
                    onClick={closeWallet}
                    className="text-gray-500 hover:text-gray-700 text-lg"
                  >
                    ✕
                  </button>
                </div>

                {/* Спиннер обработки платежа (только в состоянии processing) */}

                {/* Список карт (только в состоянии wallet) */}
                {/* {stage === "wallet" && ( */}
                <div className="space-y-4">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => selectCard(card)}
                      className="p-4 bg-[#2E2B2E] rounded-2xl cursor-pointer transition-all duration-200 active:scale-[0.98]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* Иконка карты */}
                          <div
                            className={`w-14 h-10 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center text-white font-bold`}
                          >
                            {/* {card.icon} */}
                          </div>

                          <div>
                            <div className="font-medium text-[#FFFFFF] ">
                              {card.name}
                            </div>
                          </div>
                        </div>
                        <div className="text-[#aca7ac] text-sm">
                          •••• {card.lastFour}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="px-4 py-2 bg-[#2E2B2E] rounded-2xl cursor-pointer transition-all duration-200 active:scale-[0.98]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-xs! text-[#FFFFFF] ">
                          Изменить способ оплаты
                        </div>
                      </div>
                      <div className="text-[#595659] text-xl">›</div>
                    </div>
                  </div>
                </div>
                {/* )} */}
                {/* Информация о платеже (всегда видна) */}
                <div className="mt-4 mb-4 pt-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#818183] text-sm">
                        Оплатить компании {"<<"}WOG RETAIL LCC{">>"}
                      </div>
                      <div className="font-medium text-[#FFFFFF] text-lg">
                        {totalPrice.toFixed(2)}
                        <img
                          src="/grivna.svg"
                          alt="Apple Pay"
                          className="inline-block w-3 h-3"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      {" "}
                      <div className="text-[#595659] text-xl pr-4">›</div>
                    </div>
                  </div>
                </div>
                {stage === "processing" && (
                  <div className="flex flex-col border-t mt-3 p-2 border-[#595659] items-center justify-center ">
                    {/* Спиннер */}
                    <div className="w-6 h-6 mb-2">
                      <div className="w-full h-full border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>

                    {/* Текст */}
                    <div className="text-center ">
                      <div className="text-white font-light text-xs  mb-1">
                        Обработка
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        </ModalPortal>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          100% {
            height: 3px;
          }
          50% {
            height: 6px;
          }
        }

        @keyframes smile {
          0% {
            transform: scaleX(0.8);
          }
          50% {
            transform: scaleX(1.1);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-blink {
          animation: blink 1.5s infinite;
        }

        .animate-smile {
          animation: smile 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default ApplePayWidget;
