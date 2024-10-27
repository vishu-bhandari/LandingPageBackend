import React from "react";

const testimonials = [
  {
    name: "Ishika",
    lname: "Singh",
    position: "VP-M At North Spark Toastmasters Club",
    imageUrl: "https://i.postimg.cc/bwJN9Td9/Ishika-Singh-Pic.jpg",
    description: "It was really great session. I never thought that public speaking ever have any basics but you prove this wrong. You taught everything in so calmly and made it easier to understand. Every recommendations that you gave me will always gonna be helpful. My favorite part of this session was impromptu speaking which I really like and understanding its basics presentation style and all that was a great learning for me.😊"
  },
  {
    name: "Renitha",
    lname: "K",
    position: "Graphic Designer",
    imageUrl: "https://i.postimg.cc/jj4GmHb7/Screenshot-2024-08-23-at-5-49-38-PM.png",
    description: "A wonderful facilitator like Sushant sir guiding us patiently, answering to all our queries with personalized feedback lead to an amazing month of training. Your feedback is really appreciated as you send voice messages. More than text, voice messages were engaging like you mentioned this tip for our public speaking. Sushant sir supported us whenever we had difficulty in our timings, tasks. Never felt pressurized even though it was for a month where consistent efforts were required, along with our tight schedules. Sir please continue teaching and guiding people as you do always."
  },
  {
      name: "Madhuranti",
      lname: "Bhattacharya",
      position: "Management Trainee",
      imageUrl: "https://i.postimg.cc/yNpTDxhG/Whats-App-Image-2024-08-17-at-16-43-44.jpg",
      description: "Thank you so much for providing us with such informative sessions that are helping us to mold ourselves with confidence. Every nitty gritty is contributing for our betterment and extricate ourselves from being trapped into the thought of being judged by people.🤩💫Its being a great experience",
    },
    {
      name: "Ashok",
      lname: "Chaudhary",
      position: "Teacher",
      imageUrl: "https://i.postimg.cc/9MSQqGc7/Whats-App-Image-2024-07-17-at-13-52-06.jpg",
      description: "I have experienced that as many times I took the class many more new aspects learned. Truly every session was amazing.",
    },
    {
      name: "Ankur",
      lname: "Gupta",
      position: "Software Engineer",
      imageUrl: "https://i.postimg.cc/FHpp20bR/Ankur-Gupta-Pic.jpg",
      description: "It was a great journey. I learned about intricacies of public speaking, activities which can enhance my skills and structure my content and target my audience. It's overall a great session.",
    },
    {
      name: "Atul",
      lname: "Vij",
      position: "Business strategy and systems integrator",
      imageUrl: "https://i.postimg.cc/QNvtsPN9/Atul-Vij-Pic.jpg",
      description: "Says things politely but does not dilute the content. Good memory to cite past incidents too.",
    },
    {
      name: "Dr. Ashwini Kumar",
      lname: "Agarwal",
      position: "Treasurer at National Association for Blind",
      imageUrl: "https://i.postimg.cc/3RVDsxbW/Ashwani-Kumar-Aggarwal.jpg",
      description: "1. The guidance is most relevant, comprehensive and most encouraging.\n2. Exercises help in practising and ensuring confidence.\n3. Feedback provided is helping to sharpen the skill.\n4. Material sharing helps in revision and upgradation.\n5. There is 360-degree development in personality by the training.",
    },
    {
      name: "Hemraj",
      lname: "Meena",
      position: "Civil Engineer",
      imageUrl: "https://i.postimg.cc/XJ3PwngG/Hemraj-Meena-Pic.jpg",
      description: "I had a one month one to one session with Sushant Sir for improving my verbal and non-verbal communication aspect. The customized learning plan provided by Sir helped me to improve my fluency and overcome my fear of communicating in English. The best part of his teachings were different techniques like; silent laughing, QEQA Exercise, asked me to send 2-minute video on random topic and gave his feedback, time management matrix etc. It has helped me to reduce my anxiety level before my main personal interview (UPSC Panel). Continuous monitoring and tracking my progress record was the best part. I felt like Sir was also preparing with me for the interview. Waiting for good result in the interview. Thanks a lot, Sir!",
    },
    {
      name: "Rajinder",
      lname: "Popli",
      position: "Social Worker",
      imageUrl: "https://i.postimg.cc/QNqFgSjH/Rajinder-Popli-Pic-jpeg-Intro-Social-Worker-Trainer.jpg",
      description: "It was really quite effective and useful to speak on a wide range of topics. The current storytelling is a wonderful way to sharpen our narrative skills and stimulate our thinking. Wonderful",
    },
    {
      name: "Amit",
      lname: "Upadhyay",
      position: "Student",
      imageUrl: "https://i.postimg.cc/J4tMX2Wd/Screenshot-2024-08-23-at-5-49-24-PM.png",
      description: "Sushant sir's way of teaching is excellent. The best thing is that after taking the class, he gives us a situation related to the topic we've covered in our session. Then, based on that situation, we express our thoughts, and Sushant sir provides feedback. This helps me develop various aspects, such as enhancing my thinking ability and boosting creativity, which are crucial in public speaking. And this kind of quality content is really awesome.",
    },
    {
      name: "Umica",
      lname: "Sehgal",
      position: "HR Executive",
      imageUrl: "https://i.postimg.cc/tgXqgGVk/Umica-Pic.jpg",
      description: "The sessions of public speaking with coach Sushant Singhal have been really insightful. The topics are extremely well explained and detailed planned in such a way that leaves no room for doubts. I am glad that I am associated with him and get to have wonderful discussions about public speaking and life with him in his sessions.",
    }
]; 

export default function Display() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-t border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0">
          <div className="">
            {/* Full width black background container */}
            <div className="h-auto  md:pb-14 pb-6 bg-gradient-to-r from-[#0A192F] to-teal-600">
              <div className="mx-auto max-w-7xl pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Text and Heading Section */}
                  <div className="px-4 sm:px-6 md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <a
                          href="https://coachsushantsinghal.com/PaymentPage"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="animate-linkglow rounded-full uppercase bg-orange-500 px-3 py-1 text-xs sm:text-sm font-semibold leading-5 text-white">
                            Enroll Now
                          </span>
                        </a>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                          How to Speak with Confidence and Create
                          <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                            Impact with Words
                          </span>
                          in Any Situation
                        </h1>
                        <div>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white underline sm:mt-5 font-semibold">
                            Coach Sushant Singhal
                          </p>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200">
                            A seasoned public speaking mentor helping people
                            unlock their communication potential
                          </p>
                          {/* Event Details */}
                          <div className="mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200">
                            <p>
                              <span className="underline">When:</span> Sunday,
                              10th November
                            </p>
                            <p>
                              <span className="underline">Where:</span> Zoom
                            </p>
                            <p>
                              <span className="underline">Timings:</span> 10 -
                              11:30 AM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-700"></div>

                      {/* Review Section */}
                      <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 space-x-0 space-y-0 items-start md:items-center text-white">
                        {/* Review Section */}
                        <div className="items-center space-x-2 md:flex hidden">
                          <div className="flex -space-x-1">
                            {["29", "90", "75", "5"].map((id) => (
                              <img
                                key={id}
                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${id}.jpg`} // Fixed here
                                alt={`Reviewer ${id}`} // Fixed here
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium leading-5">
                            +15
                          </span>
                        </div>

                        <div className="h-4 border-l border-gray-700 hidden md:block md:w-4"></div>

                        {/* Star Rating */}
                        <div className="items-center md:flex hidden">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 fill-current text-yellow-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          ))}
                        </div>

                        <div className="h-4 border-l border-gray-700 hidden md:block md:w-4"></div>

                        {/* Product Hunt Link */}
                        <a
                          href="https://coachsushantsinghal.com/PaymentPage"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="animate-linkglow w-28 sm:w-36 md:w-48 lg:w-60 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full uppercase bg-orange-500 text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-white">
                            Register Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="flex items-center w-full lg:col-span-6">
                    <div className="px-4 h-64 md:h-80 lg:h-96 w-full max-w-2xl mx-auto">
                      <div className="w-full h-full">
                        <iframe
                          className="w-full h-full rounded-md"
                          frameBorder="0"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          src="https://www.youtube.com/embed/nGW9W-rWhjg?si=aV5DaAksz9ov4-7z"
                          title="Coach Sushant Singhal"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
