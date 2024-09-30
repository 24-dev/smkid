'use client';
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ContentItem from '@/components/ContentItem';
import SortSelect from '@/components/SortSelect';

export default function Contents({ contents }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredContents = contents.filter((content) =>
    content.data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedContents = filteredContents.sort((a, b) => {
    if (sortOption === 'A-Z') {
      return a.data.name.localeCompare(b.data.name);
    } else if (sortOption === 'Z-A') {
      return b.data.name.localeCompare(a.data.name);
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-6 bg-[#16202c] w-4/6 p-8 min-h-screen">
      <h2 className="text-xl">
        Daftar Sekolah Menengah Kejuruan (SMK) di Indonesia
      </h2>

      <div className="flex gap-2 w-full">
        <SearchBar onSearch={setSearchQuery} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      {sortedContents.length > 0 ? (
        <ul className="mt-2 flex flex-col gap-4">
          {sortedContents.map((content) => (
            <li key={content.id}>
              <ContentItem content={content.data} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-lg">Data sekolah tidak ditemukan 🔎</p>
        </div>
      )}
    </div>
  );
}
