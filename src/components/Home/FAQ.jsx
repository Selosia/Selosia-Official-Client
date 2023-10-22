import Lottie from "lottie-react";
// import faqAnimation from "../../assets/Animations/faqAnimation.json";
import faq from "../../assets/Animations/faq.json";

const FAQ = () => {
  return (
    <div className="container m-auto py-24">
      <div className="flex  lg:flex-row-reverse flex-col-reverse justify-center items-center font-sans">
        {/* faq site  */}
        <div className="lg:w-1/2 w-11/12 lg:my-0 my-8 lg:text-start">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                What services do you offer?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  We offer a comprehensive suite of professional services,
                  including web development, website maintenance, e-commerce
                  solutions, and hosting maintenance. Our expertise ensures the
                  optimal performance of your online presence. Whether you need
                  a new website, ongoing support, e-commerce setup, or hosting
                  management, our dedicated team is here to help you achieve
                  your digital goals. Contact us today to discuss your specific
                  needs.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What is your pricing structure?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  We are dedicated to delivering our top-notch services to you
                  at a highly competitive cost. Our team conducts a thorough
                  analysis of your requirements, and we arrange a meeting to
                  discuss and finalize a mutually beneficial agreement. Your
                  satisfaction and success are our priorities, and we look
                  forward to the opportunity to collaborate with you
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How long does it take to build a website?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  The time it takes to build a website can vary widely depending
                  on its complexity and requirements. A basic website can
                  typically be created in a few weeks, while more complex
                  projects may take several months. It's essential to discuss
                  your specific needs with a web development team to get a more
                  accurate estimate.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do you handle website maintenance and updates?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  We handle website maintenance and updates by regularly
                  monitoring the site for issues, applying software updates, and
                  making content changes as needed. Our team ensures that your
                  website remains secure, up-to-date, and functioning smoothly.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can you help with SEO and online marketing?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  Yes, we can assist with SEO (Search Engine Optimization) and
                  online marketing to enhance your online presence and reach
                  your target audience effectively. Our services include
                  optimizing your website for search engines, creating and
                  managing online advertising campaigns, and implementing
                  strategies to improve your overall online visibility and
                  performance.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-y border-[#26BFC7]">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do you provide web hosting services, and is it included in your
                packages?
              </div>
              <div className="collapse-content">
                <p className="text-[#26bfc7d3] ">
                  This service is not available right now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* animation site  */}
        <div className="lg:w-1/2">
          <div className="lg:w-1/2 rounded-lg ">
            <Lottie animationData={faq} loop={true} />
            {/* <img src={faq} alt="" /> */}
          </div>
          <div>
            <h1 className="text-2xl mb-4  title text-start text-gray-800 capitalize lg:text-3xl dark:text-white">
              Most asked <span className="text-[#26BFC7]">Question</span>
            </h1>

            <p className="lg:w-4/6 text-justify mt-4 text-gray-600">
              We kindly request that you review our list of frequently asked
              questions (FAQs) before posing inquiries. This will help maximize
              the efficiency of our interaction and save valuable time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
