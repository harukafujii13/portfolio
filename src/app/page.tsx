import LeftSide from '@/components/MainLeftside/leftside.component';
import Navbar from '@/components/Nav/navbar.component';

export default function Home() {
  return (
    <main className="w-full h-screen font-inter bg-bg-light text-primary-gray overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <LeftSide />
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
