import BackgroundImg from "../assets/bgImg.jpg";
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen w-full relative"
      >
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold text-white text-center px-4 sm:px-8 md:px-16">
            Welcome to <br />
            <span className="text-yellow-500">UAP </span>Canteen
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
