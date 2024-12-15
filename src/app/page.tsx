export default function Home() {
  return (
   <>
   <div className="grid grid-cols-3 grid-rows-6 gap-3 grid-flow-row font-bold text-white text-lg">
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-[#8867e0] col-span-3">Header</div>
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-[#53cfc4] row-span-4 ">Nav</div>
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-gradient-to-br from-[#8867e0] to-[#53cfc4] row-span-2 col-span-2">content-1</div>
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-gradient-to-br from-[#8867e0] to-[#53cfc4] row-span-2">content-2</div>
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-gradient-to-br from-[#8867e0] to-[#53cfc4] row-span-2">content-3</div>
      <div className="min-h-[140px] flex justify-center items-center border-4 border-black shadow-2xl bg-[#8867e0] col-span-3">Footer</div>
   </div>
   </>
  );
}
