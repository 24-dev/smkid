import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiMap,
} from 'react-icons/hi';

export default function ContentItem({ content }) {
  return (
    <div className="bg-[#263859] border border-[#6B778D] p-5 rounded-md space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl font-medium">{content?.name}</h3>
        <p className="text-[#DDE6ED]/[0.9]">{content?.address}</p>
        <p className="text-[#DDE6ED]/[0.9]">
          Jurusan Kompetensi Keahlian: {''}
          <span className="text-white">{content?.major}</span>
        </p>
      </div>
      <div className="border-t pt-4 border-[#6B778D]/[0.5]">
        <div className="flex gap-6">
          {content?.email && (
            <p className="flex items-center gap-x-1.5">
              <HiOutlineMail className="text-xl" /> {content?.email}
            </p>
          )}
          {content?.phone && (
            <p className="flex items-center gap-x-1.5">
              <HiOutlinePhone className="text-xl" /> {content?.phone}
            </p>
          )}
          {content?.website && (
            <a
              href={content?.website}
              target="_blank"
              className="flex items-center gap-x-1.5"
            >
              <HiOutlineGlobeAlt className="text-xl" />{' '}
              {content?.website.replace('https://', '')}
            </a>
          )}
          {content?.maps && (
            <a
              href={content?.maps}
              target="_blank"
              className="flex items-center gap-x-1.5"
            >
              <HiMap className="text-xl" /> Maps Sekolah
            </a>
          )}
          {!content?.email &&
            !content?.phone &&
            !content?.website &&
            !content?.maps && (
              <p className="text-[#DDE6ED]/[0.9]">
                Informasi kontak belum tersedia
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
