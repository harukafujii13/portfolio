'use client';

import LeftSide from '@/components/MainLeftside/leftSide.component';
import Navbar from '@/components/Nav/navbar.component';
import RightSide from '@/components/MainRightside/rightSide.component';
import Banner from '@/components/Banner/banner.component';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full h-screen font-inter bg-bg-light text-primary-text overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>

        <div className="h-[88vh] w-full ml-[20rem] mx-auto p-4">
          <Banner />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
