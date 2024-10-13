function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-16 pt-20">
      <div className="grid max-w-screen-2xl grid-cols-2 gap-16">
        <div className="flex aspect-square flex-col justify-center gap-8">
          <h1 className="text-6xl font-bold">Title</h1>
          <p className="text-justify text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nobis
            illum rerum maxime praesentium expedita sit unde quasi vitae sunt
            nihil, ab suscipit quod, qui maiores deserunt architecto dicta rem!
          </p>
          <div className="flex justify-end">
            <div></div>
            <a className="button bg-indigo-500">Some button</a>
          </div>
        </div>
        <div className="fadein aspect-square h-full w-full bg-[url('/bgs/x.svg')] bg-[length:100%_100%]" style={{maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 82%)', WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 82%)'}}></div>
      </div>
    </div>
  );
}

export default page;
