export default function SortSelect({ sortOption, setSortOption }) {
  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="block p-2.5 text-gray-900 w-fit outline-none border border-[#2C74B3] rounded-md"
    >
      <option value="">Urutkan Berdasarkan</option>
      <option value="A-Z">Nama Sekolah A-Z</option>
      <option value="Z-A">Nama Sekolah Z-A</option>
    </select>
  );
}
