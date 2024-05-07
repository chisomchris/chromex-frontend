import facebookImg from "../assets/Facebook.svg";
import whatsappImg from "../assets/whatsapp.svg";
import telegramImg from "../assets/telegram.svg";

export const ShareVideo = ({ videoLink }) => {
  return (
    <div>
      <p>Share your video</p>
      <div className="">
        <button>
          <img src={facebookImg} alt="" /> Facebook
        </button>
        <button>
          <img src={whatsappImg} alt="" /> Whatsapp
        </button>
        <button>
          <img src={telegramImg} alt="" /> Telegram
        </button>
      </div>
    </div>
  );
};
