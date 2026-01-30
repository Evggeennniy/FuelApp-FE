import NavMenu from "../../widgets/NavMenu/NavMenu";
import ImageSwiper from "../../widgets/ImageSwiper/ImageSwiper";

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
          <div
            style={{ backgroundImage: "url('/rectangle.png')" }}
            className="h-[108px] bottom-0  left-0 absolute 0  bg-cover w-full bg-center  px-4"
          >
            <div className="text-sm  text-center text-[#07A451] mt-2 mb-4">
              WOG PAY
            </div>
            <div className="flex max-w-[290px] mx-auto justify-between items-center">
              <div className="flex w-14 flex-col  gap-1 items-center justify-center">
                <div className="h-9 w-9  text-sm flex justify-center items-center rounded-full bg-[#07A451]">
                  <img src="/petrol.svg" className="w-[15px] h-[17px]" alt="" />
                </div>
                <div className="text-xs"> Заправка</div>
              </div>
              <div className="flex w-14 flex-col gap-1 items-center justify-center">
                <div className="h-9 w-9  text-sm flex justify-center items-center rounded-full bg-[#07A451]">
                  <img src="/cofe.png" className="w-3 h-4" alt="" />
                </div>
                <div className="text-xs">Кава</div>
              </div>
              <div className="flex w-14 flex-col gap-1   items-center justify-center">
                <div className="h-9 w-9  flex justify-center items-center rounded-full bg-[#07A451]">
                  <img src="/food.svg" alt="" />
                </div>
                <div className="text-xs">Кафе</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4">
          {" "}
          <ImageSwiper />
          <div className="flex justify-center mb-4 gap-1">
            <div className="flex-1 flex rounded-lg gap-5 bg-[#FFFFFF] py-5 justify-center items-center">
              <img src="/coupon.svg" alt="" />
              <p className="text-xs text-[#4D515D]">
                Купони/ <br />
                сертифікати
              </p>
            </div>
            <div className="flex-1 flex rounded-lg gap-5 bg-[#FFFFFF] py-5 justify-center items-center">
              <img src="/petrol_green.svg" alt="" />
              <p className="text-xs text-[#4D515D]">Ціни на пальне</p>
            </div>
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
