import { Wrapper } from "../components/Wrapper";
import { VideoPlayer } from "../components/VideoPlayer";

export function Video() {
  return (
    <section>
      <Wrapper className="py-4">
        <div className="grid gap-y-6 gap-x-12 md:grid-cols-2">
          <div className="md:col-start-2">
            <VideoPlayer />
          </div>
          <div className="md:col-start-1 md:row-start-1">
            <h1 className="font-bold text-[#141414] text-4xl">
              Your video is ready!
            </h1>
            <form className="pt-8 pb-4">
              <div>
                <label htmlFor="name" className="mr-4 block">
                  Please enter your name:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="chioma chromex"
                  className="py-1 px-6 border-2"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="name" className="mr-4 block">
                  Please enter email of recipient
                </label>
                <input
                  id="name"
                  type="email"
                  placeholder="chioma@chromex.com"
                  className="py-1 px-6 border-2"
                />
              </div>
              <button className="block py-2 px-6 bg-[#141414] text-white rounded-sm font-bold mt-4">
                Send
              </button>
            </form>
            <button className="block py-2 px-6 bg-[#141414] text-white rounded-sm font-bold mt-4">
              Click to Download
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
