export default function TopFilterBar({ filters, setFilters }) {
  return (
    <div className="top-filter-bar">
      <input
        type="number"
        placeholder="Precio mínimo"
        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
      />

      <input
        type="number"
        placeholder="Precio máximo"
        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
      />

      <select
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
      >
        <option value="">Tipo</option>
        <option>Apartment</option>
        <option>Duplex</option>
        <option>House</option>
        <option>TownHouse</option>
      </select>

      <select
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Ordenar por</option>
        <option value="price">Precio</option>
        <option value="rating">Rating</option>
        <option value="area">Área</option>
      </select>
    </div>
  );
}
