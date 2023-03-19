export default function arrayNodes() {
  return (
    <div className='container bg-white h-full'>
      <div className='flex flex-col p-2 m-5'>
        <div className='flex justify-center'>
          <h1 className='text-lg'>Coding Playground</h1>
          <div className='flex flex-row'>
            <div className='basis-1/2 border-solid rounded border-black p-2 min-h-screen'>
              <textarea
                rows={20}
                style={{
                  borderRadius: "10px",
                  border: "solid 1px #c9c5c5",
                }}
              ></textarea>
            </div>
            <div className='basis-1/2 border-solid rounded border-black p-2 min-h-screen'>
              <div className='h-200'></div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
