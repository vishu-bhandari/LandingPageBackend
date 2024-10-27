import React, { useEffect, useState } from 'react';  
import KeenSlider from 'keen-slider';  
import 'keen-slider/keen-slider.min.css';  

const Testimonials = () => {  
  useEffect(() => {  
    const keenSlider = new KeenSlider(  
      '#keen-slider',  
      {  
        loop: true,  
        slides: {  
          origin: 'center',  
          perView: 1.25,  
          spacing: 16,  
        },  
        breakpoints: {  
          '(min-width: 1024px)': {  
            slides: {  
              origin: 'auto',  
              perView: 1.5,  
              spacing: 32,  
            },  
          },  
          '(max-width: 768px)': {  
            slides: {  
              origin: 'center',  
              perView: 1,  
              spacing: 16,  
            },  
          },  
          '(max-width: 480px)': {  
            slides: {  
              origin: 'center',  
              perView: 1,  
              spacing: 8,  
            },  
          },  
        },  
      },  
      []  
    );  

    const keenSliderPrevious = document.getElementById('keen-slider-previous');  
    const keenSliderNext = document.getElementById('keen-slider-next');  
    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');  
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');  

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());  
    keenSliderNext.addEventListener('click', () => keenSlider.next());  
    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());  
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());  

    return () => {  
      keenSlider.destroy();  
    };  
  }, []);  

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

  const renderDescription = (description) => {
    const words = description.split(' ');
    const isLongDescription = words.length > 50;
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedText = isExpanded ? description : words.slice(0, 50).join(' ') + (isLongDescription ? '...' : '');

    return (
      <div>
        <p className="mt-4  leading-relaxed text-gray-700">{displayedText}</p>
        {isLongDescription && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-500 underline"
          >
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    );
  };

  return (  
    <section className="testimonials-section">  
      <div className="container mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">  
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">  
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">  
            <h2 className="text-3xl font-bold text-center md:text-left tracking-tight text-gray-900 sm:text-4xl">  
              What our happy clients say!  
            </h2>  
            <p className="md:mt-4 mt-0 text-gray-400 md:text-left text-center">TESTIMONIALS</p>  
            <div className="hidden lg:mt-8 lg:flex lg:gap-4 ">  
              <button  
                aria-label="Previous slide"  
                id="keen-slider-previous-desktop"  
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"  
              >  
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rtl:rotate-180">  
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />  
           </svg>  
              </button>  
              <button  
                aria-label="Next slide"  
                id="keen-slider-next-desktop"  
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"  
              >  
                   <svg className="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />  
           </svg>  
              </button>  
            </div>  
          </div>  
  
          <div className="-mx-6 lg:col-span-2 lg:mx-0 ">  
            <div id="keen-slider" className="keen-slider ">  
              {testimonials.map((testimonial, index) => (  
                <div key={index} className="keen-slider__slide">  
                  <blockquote className="bg-gray-50 flex h-full flex-col justify-between p-6 shadow-sm sm:p-8 lg:p-12">  
                    <div className="flex items-start ">  
                      <div className="ml-4">  
                        <div className="flex gap-0.5 text-orange-500 ">  
                          {Array(5).fill().map((_, i) => (  
                            <svg key={i} className="size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  
                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />  
                            </svg>  
                          ))}  
                        </div>  
                        <div className="mt-4">  
                          <p className="text-2xl font-bold text-primary sm:text-3xl">{testimonial.name} {testimonial.lname}</p>  
                          <p className="text-sm text-gray-500">{testimonial.position}</p>  
                          {renderDescription(testimonial.description)}  
                        </div>  
                      </div>  
                    </div>  
                    <footer className=" text-sm font-medium text-gray-700 flex items-center ">  
                      <img  
                        src={testimonial.imageUrl}  
                        alt={`${testimonial.name} ${testimonial.lname}`}  
                        className="w-16 h-16 rounded-full  object-cover mt-4 "  
                      />  
                      &mdash; {testimonial.name} {testimonial.lname}  
                    </footer>  
                  </blockquote>  
                </div>  
              ))}  
            </div>  
  
            <div className="mt-8 flex justify-between lg:hidden">  
              <button  
                aria-label="Previous slide"  
                id="keen-slider-previous"  
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"  
              >  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 rtl:rotate-180">  
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />  
           </svg>  
              </button>  
              <button  
                aria-label="Next slide"  
                id="keen-slider-next"  
                className="rounded-full border border-orange-600 p-3 text-orange-600 transition hover:bg-orange-600 hover:text-white"  
              >  
                   <svg className="size-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />  
           </svg>  
              </button>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Testimonials;
