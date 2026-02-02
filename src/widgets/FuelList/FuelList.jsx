const FuelList = ({ fuels, onEdit, onDelete, editingId }) => {
  if (fuels.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <div className="text-gray-400 text-6xl mb-4">⛽</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Нет данных о топливе
        </h3>
        <p className="text-gray-500">
          Добавьте первое топливо, нажав кнопку "Добавить топливо"
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Список топлива ({fuels.length})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {fuels.map((fuel) => (
          <div
            key={fuel.id}
            className={`
              p-6 hover:bg-gray-50 transition-colors
              ${editingId === fuel.id ? "bg-blue-50 border-l-4 border-blue-500" : ""}
            `}
          >
            <div className="flex items-start justify-between">
              {/* Информация о топливе */}
              <div className="flex items-start space-x-4">
                {/* Цветной индикатор */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: fuel.color }}
                  title={`Цвет: ${fuel.color}`}
                >
                  {fuel.name.charAt(0)}
                </div>

                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {fuel.name}
                    </h3>
                    {fuel.subtitle && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                        {fuel.subtitle}
                      </span>
                    )}
                    {editingId === fuel.id && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">
                        Редактируется
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {fuel.price.toFixed(2)}
                      </span>
                      <span className="text-gray-600 ml-1">₴/литр</span>
                    </div>

                    <div className="flex items-center text-gray-500">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: fuel.color }}
                      />
                      <span className="text-sm">{fuel.color}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(fuel)}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-colors
                    ${
                      editingId === fuel.id
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }
                  `}
                >
                  {editingId === fuel.id ? "Редактируется" : "Редактировать"}
                </button>

                <button
                  onClick={() => onDelete(fuel.id)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Итоговая статистика */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            Средняя цена:{" "}
            <span className="font-semibold text-gray-800">
              {(
                fuels.reduce((sum, fuel) => sum + fuel.price, 0) / fuels.length
              ).toFixed(2)}{" "}
              ₴
            </span>
          </div>
          <div className="text-gray-600">
            Самый дорогой:{" "}
            <span className="font-semibold text-gray-800">
              {
                fuels.reduce((max, fuel) =>
                  fuel.price > max.price ? fuel : max,
                ).name
              }{" "}
              ({Math.max(...fuels.map((f) => f.price)).toFixed(2)} ₴)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelList;
