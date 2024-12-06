import { useEffect, useState } from "react";


const SpecialOffer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date().setHours(48, 0, 0, 0);
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  return (
    <div
    className="h-[640px] mt-24 bg-cover bg-center w-[1440px] mx-auto"
    style={{ backgroundImage: "url('/images/specialOffer/specialfood01.jpg')" }}
  >
     <div className="container mx-auto px-6 py-[120px]">
     <button className="text-primary bg-primary/10 font-medium py-1 px-2 rounded">Special Offer</button>
        <h2 className="font-medium text-[#212337] text-[80px]">
          Seasonal Fruit Bundle
        </h2>
        <h2 className="font-medium text-[48px]">
          Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
        </h2>
        <div className="flex gap-5 mt-5">
          <div className="w-[98px] h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[40px] font-bold">
              {timeLeft.days || "0"}
            </span>
            <span className="text-[18px]">Days</span>
          </div>
          <div className="w-[98px] h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[40px] font-bold">
              {timeLeft.hours || "0"}
            </span>
            <span className="text-[18px]">Hours</span>
          </div>
          <div className="w-[98px] h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[40px] font-bold">
              {timeLeft.minutes || "0"}
            </span>
            <span className="text-[18px]">Minutes</span>
          </div>
          <div className="w-[98px] h-[122px] bg-white text-center flex flex-col justify-center items-center rounded-lg shadow-md">
            <span className="text-[40px] font-bold">
              {timeLeft.seconds || "0"}
            </span>
            <span className="text-[18px]">Seconds</span>
          </div>
        </div>
        <div className="bg-[#176D38] w-[301px] mt-10 rounded-[92px] text-center">
          <p className="text-[32px] py-3">
            CODE : <span className="text-[#FAC714]">FRUIT28</span>
          </p>
        </div>
      </div>
  </div>
  )
}

export default SpecialOffer