
import './App.css';
import Rectangle from "./assets/Rectangle.jpg";
import Logo from "./assets/logo.jpg";
import Home from "./assets/home.jpg";
import Arrow from "./assets/arrow.jpg";
import Refresh from "./assets/Refresh.jpg";
import LeftArrow from "./assets/LeftArrow.jpg";
import RightArrow from "./assets/RightArrow.jpg";
import Frame from "./assets/Frame.jpg";
import Plus from "./assets/Plus.jpg"
import DownArrow from "./assets/DownArrow.jpg"
import Bulb from "./assets/Bulb.jpg"
import Speaker from "./assets/Speaker.png"

function App() {
  return (
    <>
      <div className="top-[10px] relative bg-red-200 ">
        <div className="w-[191px] h-[39px] left-[104px] top-[32px] absolute">
          <div className="w-[50.46px] h-[39px] left-0 top-0 absolute">
            <div className="w-[111.54px] h-[113.65px]  top-[-34.26px] absolute">
              <img className="w-[50px] h-[50px] left-0 top-0 absolute" src={Rectangle} alt='' />

              <img className="w-[90px] h-[48px] left-[60px] top-[8px] absolute " src={Logo} alt='' />
            </div>
          </div>
        </div>
        <div className="left-[105px] top-[233px] absolute text-center text-blue-950 text-[32px] font-bold font-['Montserrat']">Relations and Functions ( Mathematics )</div>
        <div className="left-[106px] top-[955px] absolute justify-start items-start inline-flex">
          <div className="w-[80.60px] h-[80.60px] relative">
            <div className="w-[44.69px] h-[34.54px] left-[17.71px] top-[23.03px] absolute">
              <div className="w-[98.80px] h-[100.66px]  top-[-30.34px] absolute">
                <img className="w-[50px] h-[50px] left-0 top-0 absolute rounded-full shadow-[0_0_4px_4px_lightgrey]" src={Rectangle} alt='' />

              </div>

            </div>
          </div>
          <div className="flex-col justify-center items-start gap-[10.63px] inline-flex">
            <div className="text-zinc-500 text-xs font-bold font-['Inter']">Published by</div>
            <img className="w-[70px] h-[30px] left-[81px] top-[15px] absolute " src={Logo} alt='' />


          </div>
        </div>
        <div className=" left-[190px] top-[389px] absolute flex flex-col justify-center items-center ">
          <div className="h-[393.19px] justify-center items-start left-[-100px] inline-flex ">
            <div className=" relative">


              <div className="left-0 top-0 absolute">
                <div className="w-[550px] h-[330.19px] flex justify-center items-center left-0 top-0 absolute bg-gradient-to-bl from-blue-950 via-blue-700 to-blue-500 rounded-[42.51px]">
                  <img className="left-[20px] absolute top-[30px] left-[20px] h-[20px]" src={Bulb} alt='' />
                  <img className="left-[500px] absolute top-[30px] left-[20px] h-[20px]" src={Speaker} alt='' />
                  <div className="absolute text-center  items-center text-white text-[35.26px] font-bold font-['Lato'] tracking-wide">9 + 6 + 7x - 2x - 3</div>
                </div>
              </div>
            </div>
          </div>
        
          <div className='flex flex-row relative gap-[140px] top-[-50px] items-center left-[270px]'>

            <div>
              <img className="h-[25px]" src={Refresh} alt='' />
            </div>
            <div className='flex flex-row gap-[20px]'>
              <div>
                <img className="h-[25px]" src={LeftArrow} alt='' />
              </div>
              <span>01/10</span>
              <div>
                <img className="h-[25px]" src={RightArrow} alt='' />
              </div>
            </div>
            <div>
              <img className="h-[25px]" src={Frame} alt='' />
            </div>

          </div>
        </div>
        <div className="left-[443px] top-[328px] absolute justify-center items-center gap-10 inline-flex">
          <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="px-3 justify-start items-start gap-2.5 inline-flex">
              <div className="text-blue-950 text-xl font-bold font-['Inter']">Study</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="px-3 justify-start items-start gap-2.5 inline-flex">
              <div className="text-zinc-500 text-xl font-medium font-['Inter']">Quiz</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="px-3 justify-start items-start gap-2.5 inline-flex">
              <div className="text-zinc-500 text-xl font-medium font-['Inter']">Test</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="px-3 justify-start items-start gap-2.5 inline-flex">
              <div className="text-zinc-500 text-xl font-medium font-['Inter']">Game</div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="px-3 justify-start items-start gap-2.5 inline-flex">
              <div className="text-zinc-500 text-xl font-medium font-['Inter']">Others</div>
            </div>
          </div>
        </div>
        <div className="left-[1020px] top-[965px] absolute justify-start items-center gap-2 inline-flex">
          <img className='h-[35px]' src={Plus} alt='' />
          <div className="text-blue-950 text-[28px] font-semibold font-['Inter']">Create Flashcard</div>
        </div>
        <div className="pb-[100px] left-[104px] top-[1200px] absolute flex-col justify-start items-end gap-8 inline-flex">
          <div className="w-[730px] h-[55px] px-6 py-[17px] rounded-xl border border-blue-600  items-center justify-between  inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed flex ">
              Can education flashcards be used for all age groups?

            </div>
            <img src={DownArrow} alt='' />

          </div>
          <div className="w-[730px] h-[55px] px-6 py-[17px] rounded-xl border border-blue-600  items-center justify-between inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">How do education flashcards work?</div>
            <img src={DownArrow} alt='' />

          </div>
          <div className="w-[730px] h-[55px] px-6 py-[17px] rounded-xl border border-blue-600  items-center justify-between inline-flex">
            <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-relaxed">
              Can education flashcards be used for test preparation?</div>
            <img src={DownArrow} alt='' />

          </div>

        </div>
        <div className="left-[104px] top-[1100px] absolute text-blue-950 text-5xl font-bold font-['Inter'] tracking-tight">FAQ</div>
        <div className=" left-[812px] absolute justify-start items-center gap-10 inline-flex">
          <div className="justify-start items-start gap-10 flex">

            <div className="text-neutral-700 text-lg font-normal font-['Inter']">Home</div>
            <div className="text-neutral-700 text-lg font-normal font-['Inter']">Flashcard</div>
            <div className="text-neutral-700 text-lg font-normal font-['Inter']">Contact</div>
          </div>
          <div className="text-neutral-700 text-lg font-normal font-['Inter']">FAQ</div>
          <div className="px-10 py-[13px] bg-gradient-to-b from-blue-950 to-blue-800 rounded-[32px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-lg font-medium font-['Inter']">Login</div>
          </div>
        </div>
        <div className="left-[102px] top-[139px] absolute justify-start items-center inline-flex">
          <div className="justify-start items-center flex">
            <img src={Home} alt='' />
          </div>
          <div className="justify-start items-center flex">
            <img src={Arrow} alt='' />
          </div>
          <div className="justify-start items-center flex">
            <div className="text-center text-zinc-500 text-lg font-medium font-['Inter']">Flashcard</div>
          </div>
          <div className="justify-start items-center flex">
            <img src={Arrow} alt='' />
          </div>
          <div className="justify-start items-center flex">
            <div className="text-center text-zinc-500 text-lg font-medium font-['Inter']">Mathematics</div>
            <div className="justify-start items-center flex">
              <img src={Arrow} alt='' />
            </div>
            <div className="justify-start items-center flex">
              <div className="text-center text-blue-950 text-lg font-semibold font-['Inter']">Relation and Function</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
