import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Image_Editor.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Greeting */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            Hi Techies, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Shahe Alam
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Backend Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg text-gray-300 mb-6 mt-6 leading-relaxed">
            I am a full-stack developer with experience in
            building scalable web applications. Skilled in both Front-end and
            Back-end development, I specialize in the MERN Stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1vi4jGQN4TuKJGUqi-0m8E_Wz6fSVthso/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-2 px-6 sm:py-3 sm:px-8 rounded-2xl mt-2 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Tilt
            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shahe Alam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;