import Video_Nav from "../components/VideoNav";
import searchIcon from "../assets/search-normal.jpg";

export const UserHome = () => {
  return (
    <section className="w-full md:max:w-[1200px] ">
      <Video_Nav />

      <div className="md:h-[75px]  md:mx-5 md:flex md:items-center md:justify-between mt-5 sm:flex sm:items-center sm:justify-between sm:mx-5">
        <div className="md:w-[278px] md:h-[69px] ">
          <h1 className=" text-[27px] md:text-[32px] sm:text-[33px] text-[#141414] font-bold leading-normal md:w-[278px] md:h-[40px] text-center md:text-left sm:text-left">
            Hello, John Mark
          </h1>
          <p className=" text-[15px] mt-1 md:text-[18px] sm:text-[18px] md:mt-2 sm:mt-1 font-[400] text-[#141414] leading-normal text-center md:text-left sm:text-left">
            Here are your recorded videos
          </p>
        </div>
        <div className=" w-[250px] h-[38px] mt-2 md:mt-0 sm:mt-0 mx-auto md:mx-0 sm:mx-0 md:w-[400px] md:h-[68px]  sm:w-[230px] sm:h-[60px] border bg-[#f3f0f0] rounded flex items-center justify-center sm:bg-[#f3f0f0]">
          <div className="w-[336px] h-[20px] mx-auto flex items-center gap-[16px]">
            <img
              src={searchIcon}
              className="md:w-[20px] md:h-[20px] bg-transparent"
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search for a particular video"
              className="md:h-[16px] text-[14px] font-[400] leading-normal w-full outline-none bg-transparent"
            ></input>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-[#E7E7ED] mt-8" />
      <div className="md:h-[367px] sm:h-[400px] md:mx-5 sm:mx-5 mt-5  p-2 sm:p-0 md:p-0">
        <p className="md:text-[18px] pb-1 md:pb-0 sm:pb-3 sm:text-[18px] font-[500] leading-normal text-[#141414]">
          Recent files
        </p>
        <div className="md:flex md:items-center h-[322px] md:justify-between  md:gap-[55px]"></div>
      </div>
      <div className="md:h-[367px] md:mx-5 sm:mx-5 sm:mt-56 md:mt-9  p-2">
        <p className="md:text-[18px] sm:text-[18px] font-[500] leading-normal text-[#141414]">
          Files from last week
        </p>
        <div className="md:flex md:items-center md:justify-between mt-8 md:gap-[55px] "></div>
      </div>
    </section>
  );
};
