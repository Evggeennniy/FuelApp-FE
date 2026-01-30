import NavMenu from "../../widgets/NavMenu/NavMenu";
import ImageSwiper from "../../widgets/ImageSwiper/ImageSwiper";
import WogPayBar from "../../widgets/WogPayBar/WogPayBar";
import ActionCard from "../../widgets/ActionCard/ActionCard";
// import WogPayBar from "@/components/WogPayBar";

WogPayBar;

const items = [
  {
    icon: "/petrol.svg",
    label: "Заправка",
    onClick: () => console.log("Fuel"),
  },
  {
    icon: "/cofe.png",
    label: "Кава",
  },
  {
    icon: "/food.svg",
    label: "Кафе",
  },
];
const actions = [
  {
    icon: "/coupon.svg",
    label: (
      <>
        Купони / <br /> сертифікати
      </>
    ),
    onClick: () => console.log("Coupons"),
  },
  {
    icon: "/petrol_green.svg",
    label: "Ціни на пальне",
    onClick: () => console.log("Fuel prices"),
  },
];
function MainPage() {
  return (
    <>
      {" "}
      <div className="w-full  bg-[#F6F4F7] min-h-screen ">
        <div
          className="h-[506px] relative bg-cover bg-center px-4"
          style={{ backgroundImage: "url('/backround.png')" }}
        >
          <div className="pt-10  relative mb-9  ">
            <div className="flex justify-center mx-auto  gap-1 *: items-center">
              <img
                src="/wog.png"
                alt="Background"
                className="w-8 h-8  object-contain"
              />
              <h1 className="text-white font-bold text-[24px] leading-[24px]   uppercase">
                свято буде
              </h1>
            </div>
            <img
              src="/notify.png"
              alt="Notification"
              className="w-8 absolute top-3 h-8 right-0 object-contain justify-self-end"
            />
          </div>
          <div className="flex justify-center">
            {" "}
            <div className="flex flex-col mb-3 gap-2 mx-auto justify-center items-center ">
              <p className="text-white font-light text-[18px] ">Мій баланс</p>
              <div className="flex mb-5 justify-center gap-1 items-end ">
                <h2 className="text-7xl text-white">66</h2>
                <img src="/grivna.svg" className="w-4 mb-3 h-6" alt="" />
              </div>
              <button className="flex justify-center mb-7 items-center bg-[#0E9C62CC] gap-1 text-sm px-7 rounded-3xl text-white py-2">
                <img src="/clock_history.svg" alt="" />
                Історія
              </button>
              <button className="flex justify-between w-[273px] py-3 mb-7 items-center bg-white/20 gap-1 text-sm px-7 rounded-3xl text-white ">
                Гаманець
                <div className="flex items-center justify-center gap-1">
                  <img className="w-5 h-5" src="/water.svg" alt="" />0 л
                </div>
                <div className="flex items-center justify-center gap-1">
                  <img className="w-5 h-5" src="/cofe_group.svg" alt="" />0
                </div>
              </button>
            </div>
          </div>
          <WogPayBar items={items} />
        </div>
        <div className="px-4 mt-4">
          {" "}
          <ImageSwiper />
          <div className="flex justify-center mb-4 gap-1">
            {actions.map((item, index) => (
              <ActionCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div
          className="
          mt-4 flex justify-center"
        >
          <img src="/QR.png" className=" max-w-[356px]" alt="" />
        </div>
      </div>
      <NavMenu />
    </>
  );
}

export default MainPage;
