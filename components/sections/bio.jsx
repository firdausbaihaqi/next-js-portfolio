function Bio() {
  return (
    <div className="relative z-10 flex min-h-[80vh] mt-20  -translate-y-20">
      <div className="w-2/3 mt-auto mb-auto -translate-y-10">
        <h1 className="tracking-tight text-7xl">
          <span className="">H</span>ey, I'm Baihaqi!
        </h1>
        <p className="w-5/6 mt-5 text-xl text-gray-500 dark:text-gray-400">
          A frontend developer and web designer from Indonesia. <br /> I design
          and build a responsive websites to help my client boosts their
          customer experience,based on company requirements.
        </p>
      </div>
      <div className="w-1/3">
        {/* translate-x-20 -translate-y-48 */}
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-full object-cover max-h-[80vh] grayscale dark:grayscale-[25%] duration-300 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Bio;
