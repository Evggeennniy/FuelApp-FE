// hooks/useFuels.js
import { useState, useEffect } from "react";

const STORAGE_KEY = "fuel_prices";

const defaultFuels = [
  { id: 1, name: "ГАЗ", price: 39.98, color: "#77ADFC" },
  { id: 2, name: "100", subtitle: "Mustang", price: 78.99, color: "#D38C9C" },
  { id: 3, name: "95", subtitle: "Mustang", price: 64.98, color: "#D38C9C" },
  { id: 4, name: "ДП", subtitle: "Diesel", price: 62.5, color: "#D38C9C" },
];

export const useFuels = () => {
  // Получаем данные из localStorage или используем по умолчанию
  const getInitialFuels = () => {
    try {
      const savedFuels = localStorage.getItem(STORAGE_KEY);
      if (savedFuels) {
        return JSON.parse(savedFuels);
      }
    } catch (error) {
      console.error("Ошибка при чтении из localStorage:", error);
    }
    return defaultFuels;
  };

  const [fuels, setFuels] = useState(getInitialFuels);

  // Сохраняем в localStorage при каждом изменении
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fuels));
    } catch (error) {
      console.error("Ошибка при сохранении в localStorage:", error);
    }
  }, [fuels]);

  // Генерация нового ID
  const generateNewId = () => {
    if (fuels.length === 0) return 1;
    const maxId = Math.max(...fuels.map((f) => f.id));
    return maxId + 1;
  };

  // Добавление нового топлива
  const addFuel = (fuelData) => {
    const newFuel = {
      ...fuelData,
      id: generateNewId(),
    };
    setFuels((prev) => [...prev, newFuel]);
    return newFuel;
  };

  // Обновление существующего топлива
  const updateFuel = (id, fuelData) => {
    setFuels((prev) =>
      prev.map((fuel) => (fuel.id === id ? { ...fuel, ...fuelData } : fuel)),
    );
  };

  // Удаление топлива
  const deleteFuel = (id) => {
    setFuels((prev) => prev.filter((fuel) => fuel.id !== id));
  };

  // Получение топлива по ID
  const getFuelById = (id) => {
    return fuels.find((fuel) => fuel.id === id);
  };

  // Сброс к значениям по умолчанию
  const resetToDefault = () => {
    if (
      window.confirm(
        "Вернуть значения по умолчанию? Все текущие данные будут удалены.",
      )
    ) {
      setFuels(defaultFuels);
    }
  };

  return {
    fuels,
    addFuel,
    updateFuel,
    deleteFuel,
    getFuelById,
    resetToDefault,
  };
};
