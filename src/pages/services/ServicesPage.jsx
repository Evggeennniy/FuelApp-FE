import React from "react";
import NavMenu from "../../widgets/NavMenu/NavMenu";

import { useState } from "react";
import RightSidebar from "../../widgets/RightSidebar/RightSidebar";
import ServiceItem from "../../widgets/ServiceItem/ServiceItem";
import TubButtons from "../../widgets/TabButtons/TabButtons";

function ServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-[#E5E3E5] pb-28">
      <RightSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="Кешбек PRIDE"
      >
        <div className=" h-screen   ">
          <div className="relative  bg-[#01A651] text-center pt-5 px-2 text-white">
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="absolute left-3 p-2 top-3
            "
            >
              {"<"}
            </div>
            <div className=""> Магазин пального</div>
          </div>
          <TubButtons />
        </div>
      </RightSidebar>

      <div className="bg-[#00A650] text-center p-5 text-white">Послуги</div>

      <ServiceItem icon="/dollar.png" title="Кешбек PRIDE" />

      <ServiceItem
        onClick={() => setIsSidebarOpen(true)}
        icon="/water_fullfil.png"
        title="Купівля пального"
      />

      <ServiceItem icon="/cafe_fullfil.png" title="Купівля кави" />

      <ServiceItem icon="/tax_fullfil.png" title="Штрафи" />

      <ServiceItem icon="/greencard.png" title="Зелена картка" />

      <ServiceItem icon="/umbrella.png" title="Поліс автоцивілки (ОСЦПВ)" />

      <ServiceItem
        highlighted
        title="Вже маєте поліс?"
        subtitle="Нагадаємо оформити наступний, коли прийде час"
      />

      <ServiceItem
        icon="/calculator.png"
        title="Оцінка вартості авто"
        subtitle="Середня ринкова вартість автомобіля"
      />

      <ServiceItem
        icon="/cars.png"
        title="Європротокол онлайн"
        subtitle="Оформлюй онлайн в декілька кліків"
      />

      <ServiceItem
        icon="/internet.png"
        title="Тариф ВСЕ РАЗОМ"
        subtitle="Домашній інтернет, мобільний зв’язок, ТБ"
      />

      {!isSidebarOpen && <NavMenu />}
    </div>
  );
}

export default ServicesPage;
