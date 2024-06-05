import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#1B262C] w-full min-h-96 my-12 px-4 md:px-36">
      <div className="flex flex-col md:flex-row items-center md:items-start py-6">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white">ABOUT US</h1>
          <hr className="border-t-4 border-[#C06048] my-6 w-28 mx-auto md:mx-0" />
          <div className="text-white text-xl mx-auto md:mx-0 md:w-11/12">
            <p>Welcome to Echo Chamber Studios, where music and creativity flow freely.</p>
            <br />
            <p>
              Our state-of-the-art studio is designed to bring your musical vision to life, whether a seasoned
              professional or a rising star.
            </p>
            <br />
            <p>
              With a team of experienced engineers and producers, we provide personalized services that cater to your
              unique sound and style.
            </p>
            <br />
            <p>
              From recording and mixing to mastering and post-production, we offer a full range of services that will
              take your music to the next level.
            </p>
            <br />
            <p>
              Our studio is equipped with the latest technology and equipment to ensure the highest quality sound
              possible. At Echo Chamber Studios, we believe that every artist deserves to have their voice heard. Let us
              help you make your musical dreams a reality.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 block justify-center mt-6 md:my-0">
          <div className="w-full h-full max-w-full max-h-full ">
            <Image src="/AboutUs.webp" alt="Recording" height={1000} width={1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
