import './Home.css'; // Assuming this file contains necessary styles
export default function Home() {
    return (
        <div className="w-full min-h-screen dark:bg-black flex justify-center items-start pt-20 px-10"> {/* Increased top padding */}
        <div className="flex justify-between items-start w-full max-w-4xl my-10"> {/* Reduced max width and added vertical margin */}
          <div className="flex-grow pr-10"> {/* Added right padding to space out from the right section */}
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am <span className="text-fuchsia-600 dark:text-primary-color-dark-500">Swanand</span>
            </h1>
            <div className="text-justify w-4/5 dark:text-white">
              This is my home on the internet!! I am currently working as a software engineer at Jaguar Land Rover. I share my thoughts here! 
            </div>
          </div>
  
          <div className="w-3/5 space-y-5">
          <div className="flex items-center justify-between p-4 rounded-lg shadow-2xl bg-white dark:bg-gray-800  hover:scale-110 neon-purple ">              <div className="flex items-center">
                <div className="icon bg-green-500 p-2 rounded-full text-white mr-4"></div>
                <div className='dark:text-white'>What I built</div>
              </div>
              <a href="/projects" className="text-blue-500 hover:underline dark:text-white">Projects →</a>
            </div>
  
            <div className="flex items-center justify-between p-4  shadow-2xl bg-white dark:bg-gray-800 hover:scale-110 neon-green  ">              <div className="flex items-center">
                <div className="icon bg-red-500 p-2 rounded-full text-white mr-4 "></div>
                <div className='dark:text-white'>Read my story</div>
              </div>
              <a href="/about" className="text-blue-500 hover:underline dark:text-white">Website →</a>
            </div>
  
            <div className="flex items-center justify-between p-4  shadow-2xl bg-white dark:bg-gray-800 hover:scale-110 neon-blue ">
                              <div className="flex items-center">
                <div className="icon bg-purple-500 p-2 rounded-full text-white mr-4"></div>
                <div className='dark:text-white'>Hire me!</div>
              </div>
              <a href="/resume" className="text-blue-500 hover:underline dark:text-white">Resume →</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  