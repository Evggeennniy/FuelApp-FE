import React, { useState, useEffect } from "react";
import NavMenu from "../../widgets/NavMenu/NavMenu";

const initialFuels = [
  { id: 1, name: "ГАЗ", price: 39.98, color: "#77ADFC" },
  { id: 2, name: "100", subtitle: "Mustang", price: 78.99, color: "#D38C9C" },
  { id: 3, name: "95", subtitle: "Mustang", price: 64.98, color: "#D38C9C" },
  { id: 4, name: "ДП", subtitle: "Diesel", price: 62.5, color: "#D38C9C" },
];

const FuelManager = () => {
  const [fuels, setFuels] = useState(initialFuels);
  const [editingFuel, setEditingFuel] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newFuel, setNewFuel] = useState({
    name: "",
    subtitle: "",
    price: "",
    color: "#77ADFC",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedFuels = localStorage.getItem("fuels");
    if (savedFuels) {
      try {
        const parsedFuels = JSON.parse(savedFuels);
        setFuels(parsedFuels);
      } catch (error) {
        console.error("Ошибка загрузки из localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fuels", JSON.stringify(fuels));
  }, [fuels]);

  const openAddDialog = () => {
    setEditingFuel(null);
    setNewFuel({ name: "", subtitle: "", price: "", color: "#77ADFC" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (fuel) => {
    setEditingFuel(fuel);
    setNewFuel({
      name: fuel.name,
      subtitle: fuel.subtitle || "",
      price: fuel.price.toString(),
      color: fuel.color,
    });
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFuel((prev) => ({ ...prev, [name]: value }));
  };

  const saveFuel = () => {
    if (!newFuel.name.trim()) {
      setMessage("Пожалуйста, введите название топлива");
      return;
    }

    if (
      !newFuel.price ||
      isNaN(parseFloat(newFuel.price)) ||
      parseFloat(newFuel.price) <= 0
    ) {
      setMessage("Пожалуйста, введите корректную цену");
      return;
    }

    const priceValue = parseFloat(newFuel.price);

    if (editingFuel) {
      setFuels((prev) =>
        prev.map((fuel) =>
          fuel.id === editingFuel.id
            ? { ...fuel, ...newFuel, price: priceValue }
            : fuel,
        ),
      );
      setMessage("Топливо успешно обновлено!");
    } else {
      const newId =
        fuels.length > 0 ? Math.max(...fuels.map((f) => f.id)) + 1 : 1;
      const fuelToAdd = {
        id: newId,
        name: newFuel.name.trim(),
        subtitle: newFuel.subtitle.trim() || undefined,
        price: priceValue,
        color: newFuel.color,
      };

      setFuels((prev) => [...prev, fuelToAdd]);
      setMessage("Топливо успешно добавлено!");
    }

    setTimeout(() => {
      closeDialog();
    }, 2000);
  };

  const deleteFuel = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить это топливо?")) {
      setFuels((prev) => prev.filter((fuel) => fuel.id !== id));
      setMessage("Топливо удалено!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Управление топливом
          </h1>
          <p className="text-gray-600">
            Добавляйте, редактируйте и удаляйте виды топлива
          </p>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("успешно") || message.includes("добавлено")
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-6">
          <button
            onClick={openAddDialog}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Добавить новое топливо
          </button>
        </div>

        {/* Список топлива */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {fuels.map((fuel) => (
            <div
              key={fuel.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Цветная полоса */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: fuel.color }}
              />

              <div className="p-5">
                {/* Название и цена */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {fuel.name}
                    </h3>
                    {fuel.subtitle && (
                      <p className="text-gray-600 text-sm mt-1">
                        {fuel.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">
                      {fuel.price.toFixed(2)}
                    </span>
                    {/* <span className="text-gray-600 ml-1">₽</span> */}
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openEditDialog(fuel)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Редактировать
                  </button>
                  <button
                    onClick={() => deleteFuel(fuel.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Диалог добавления/редактирования */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Заголовок */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingFuel
                  ? "Редактировать топливо"
                  : "Добавить новое топливо"}
              </h2>
            </div>

            <div className="p-6 space-y-4">
              {message && (
                <div className="p-3 bg-red-100 text-red-800 rounded-lg">
                  {message}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название *
                </label>
                <input
                  type="text"
                  name="name"
                  value={newFuel.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Например: 95, ДТ, ГАЗ"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Подзаголовок (необязательно)
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={newFuel.subtitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Например: Mustang, Diesel"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цена *
                </label>
                <input
                  type="number"
                  name="price"
                  value={newFuel.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Например: 64.98"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Цвет
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    name="color"
                    value={newFuel.color}
                    onChange={handleInputChange}
                    className="w-12 h-12 cursor-pointer"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      name="color"
                      value={newFuel.color}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="#77ADFC"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={closeDialog}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Отмена
              </button>
              <button
                onClick={saveFuel}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingFuel ? "Сохранить" : "Добавить"}
              </button>
            </div>
          </div>
        </div>
      )}
      <NavMenu />
    </div>
  );
};

export default FuelManager;
