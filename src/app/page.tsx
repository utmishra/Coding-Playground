import Link from "next/link";

export default function Home() {
  return (
    <div className='container bg-white h-screen'>
      <div className='flex flex-col p-2 m-5 h-full'>
        <div className='flex justify-center h-1/5'>
          <h1 className='text-lg'>Coding Playground</h1>
        </div>
        <div className='flex justify-center h-4/5 w-full p-2'>
          <div className='text-base'>
            <Link href='/nodes'>Array Nodes</Link>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
