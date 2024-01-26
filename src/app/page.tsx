import Image from "next/image";
import { BookingForm } from './components/Forms/booking-form';

export default function Home() {
  return (
    <main className="h-full p-10">
      <div className="z-10 max-w-5xl w-full h-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Enter a new reservation: <strong>CABSI TAXI</strong>
         
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By{" "} Cabsi
        </div>
      </div> 
      <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
       
      <BookingForm />

       
      </div>
    </main>
  );
}
