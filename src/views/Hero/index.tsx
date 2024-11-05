import Link from "next/link";
import { FaDiscord, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-20 lg:py-28 lg:px-6 bg-[#0f0715]">
      <div className="w-full flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto px-3 gap-4">
        <div className="w-full lg:w-6/12 py-2 order-2 lg:order-1">
          <div className="px-2 lg:px-4 flex flex-col">
            <span className=" text-gray text-[22px] text-4xl font-semibold pb-1 lg:pb-[10px]">
              I am yogesh
            </span>
            <h1 className="text-[30px] lg:text-6xl font-bold text-transparent bg-gradient-to-r from-accent to-gray bg-clip-text pb-1 lg:pb-[15px]  max-w-[550px]">
              Web Developer + UX Designer
            </h1>
            <p className="text-xl lg:text-xl font-[300] text-gray max-w-[550px]">
              I break down complex user experience problems to create integrity
              focussed solutions that connect billions of people
            </p>
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center pt-5 lg:pt-[50px]">
              {/* Download Resume Button */}
              <div className=" flex px-6 py-3 bg-transparent text-[#9D4EDD] hover:text-white border-2 border-[#9D4EDD] rounded-full font-medium hover:bg-[#9D4EDD] transition duration-300">
                <Link href="/resume" passHref className="flex justify-center items-center">
                  <span className="pr-4">Download Resume</span>
                  <FaDownload className="text-current" />
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <ul className="w-full flex gap-4">
                  <li className="border-2 border-[#9D4EDD] rounded-full text-[#9D4EDD] hover:text-white hover:bg-[#9D4EDD] p-2 transition duration-300">
                    <Link href="#">
                      <FaDiscord size={20} />
                    </Link>
                  </li>
                  <li className="border-2 border-[#9D4EDD] rounded-full text-[#9D4EDD] hover:text-white hover:bg-[#9D4EDD] p-2 transition duration-300">
                    <Link href="#">
                      <FaLinkedin size={20} />
                    </Link>
                  </li>
                  <li className="border-2 border-[#9D4EDD] rounded-full text-[#9D4EDD] hover:text-white hover:bg-[#9D4EDD] p-2 transition duration-300">
                    <Link href="#">
                      <FaGithub size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center order-1 lg:order-2">
          <img
            src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg"
            alt=""
            className="max-w-[300px] lg:max-w-[435px] transform rotate-6 transition-transform duration-500 ease-in-out  border-2 border-accent_dark hover:rotate-0 rounded-[25px] hover:border-2 hover:border-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

<div className="w-full flex flex-wrap items-center">
  <div className="w-6/12 py-6">
    <div className="px-4 flex flex-col">
      {/* <div className="flex flex-col px-4"> */}
      <span className="text-[35px] font-semibold pb-[10px]">I am yogesh</span>
      <h1 className="font-semibold text-[60px] pb-[15px]">
        Web Developer + UX Designer
      </h1>
      <p className="text-xl font-[300] max-w-[550px]">
        I break down complex user experience problems to create integrity
        focussed solutions that connect billions of people
      </p>
      <div className="flex pt-[50px]">
        <Link
          href="/resume"
          passHref
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
        >
          Download CV
        </Link>
      </div>
      {/* </div> */}
    </div>
  </div>
  <div className="w-6/12 flex justify-center">
    <img
      src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg"
      alt=""
      className="max-w-[435px]"
    />
  </div>
</div>;
