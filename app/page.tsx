function page() {
  return (
    <div className="p-16 pt-20 w-full min-h-screen flex justify-center flex-col items-center">
      <div className="max-w-screen-2xl grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-8 justify-center aspect-square">
          <h1 className="text-6xl font-bold">Title</h1>
          <p className="text-xl text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nobis illum rerum maxime praesentium expedita sit unde quasi vitae sunt nihil, ab suscipit quod, qui maiores deserunt architecto dicta rem!</p>
          <div className="flex justify-end">
            <div></div>
            <a className="button bg-indigo-500">Some button</a>
          </div>
        </div>
        <div className="bg-[url('/bgs/x.svg')] bg-[length:100%_100%] w-full h-full aspect-square">

        </div>
        
      </div>
    </div>
    
  )
}

export default page