import SideBar from '@/components/SideBar';
import Contents from '@/components/Contents';
import { getAllContents } from '@/lib/data';

export default function Home() {
  const contents = getAllContents();

  return (
    <div className="min-h-screen gap-16 font-jost">
      <main className="flex">
        <SideBar />
        <Contents contents={contents} />
      </main>
      <footer></footer>
    </div>
  );
}
