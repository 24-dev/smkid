export default function ContentItem({ content }) {
  return (
    <div className="bg-[#263859] border border-[#6B778D] p-5 rounded-md flex flex-col gap-2">
      <h3 className="text-xl font-medium">{content?.name}</h3>
      <p className="text-[#DDE6ED]/[0.9] pb-2">{content?.address}</p>
      <div className="border-t pt-4 border-[#6B778D]/[0.5]">
        <p className="text-[#DDE6ED]/[0.9]">
          Jurusan Kompetensi Keahlian: {''}
          <span className="text-white">{content?.major}</span>
        </p>
      </div>
    </div>
  );
}
