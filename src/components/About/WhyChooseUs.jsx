import html5 from "../../assets/icon/html-5 (2).png";
import css3 from "../../assets/icon/css-3 (2).png";
import js from "../../assets/icon/js.png";
import react from "../../assets/icon/reactjs.png";
import nodeJS from "../../assets/icon/node-js.png";
import expressJS from "../../assets/icon/expressjs.png";
import mondoDB from "../../assets/icon/mongodb.png";
import firebase from "../../assets/icon/firebase.png";
import Redux from "../../assets/icon/redux.png";
import next from "../../assets/icon/nextjs2.png";
import bootstrap from "../../assets/icon/bootstrap.png";
import tailwind from "../../assets/icon/tailwindCSS.png";
import responsive from "../../assets/icon/responsive-design.png";
const WhyChooseUs = () => {
  return (
    <div>
      <div className="py-16 font-semibold  lg:mx-0 mx-10 ">
        <div>
          {/* Top Part */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl mb-4 title text-center  capitalize lg:text-3xl dark:text-white">
              Why Choose Us
            </h2>
            <div className="w-24 h-[2px] bg-[#26BEC7] mx-auto my-5"></div>
            <p>Explore the many compelling reasons to partner with us today.</p>
          </div>

          {/* Bottom Part */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
            {/* HTML5 Card */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={html5} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">HTML5</h3>
              </div>
              <p className=" mt-2">
                We specialize in HTML5, crafting modern, visually captivating
                web content effectively.
              </p>
            </div>
            {/* CSS3 Card */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={css3} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">CSS3</h3>
              </div>
              <p className=" mt-2">
                Our proficiency in CSS3 ensures visually appealing and
                responsive designs.
              </p>
            </div>
            {/* Bootstrap */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={bootstrap} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Bootstrap</h3>
              </div>
              <p className=" mt-2">
                We excel in Bootstrap, creating responsive and visually
                appealing web designs.
              </p>
            </div>
            {/* tailwind */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={tailwind} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Tailwind CSS</h3>
              </div>
              <p className=" mt-2">
                We specialize in Tailwind CSS, delivering efficient and visually
                stunning web designs.
              </p>
            </div>

            {/* javascript  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={js} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">javaScript</h3>
              </div>
              <p className=" mt-2">
                We excel in JavaScript, crafting interactive and dynamic web
                experiences seamlessly.
              </p>
            </div>
            {/* react js  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={react} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">React</h3>
              </div>
              <p className=" mt-2">
                We specialize in React, building efficient and interactive user
                interfaces with ease.
              </p>
            </div>
            {/* next js  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={next} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Next.js</h3>
              </div>
              <p className=" mt-2">
                Our expertise in Next.js ensures seamless, high-performance web
                applications development.
              </p>
            </div>
            {/* nodejs  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={nodeJS} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Node.js</h3>
              </div>
              <p className=" mt-2">
                We specialize in Node.js, empowering server-side JavaScript
                execution for robust applications.
              </p>
            </div>
            {/* expressJS  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={expressJS} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Express</h3>
              </div>
              <p className=" mt-2">
                Our proficiency in Express.js facilitates building scalable and
                efficient web applications.
              </p>
            </div>
            {/* mondoDB  */}
            <div className="p-4  lg:m-0 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={mondoDB} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">MongoDB</h3>
              </div>
              <p className=" mt-2">
                We excel in MongoDB, harnessing its power for flexible and
                scalable databases.
              </p>
            </div>
            {/* firebase  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={firebase} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">firebase</h3>
              </div>
              <p className=" mt-2">
                We specialize in Firebase, enabling real-time database and
                cloud-based application development.
              </p>
            </div>
            {/* redux  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={Redux} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Redux</h3>
              </div>
              <p className=" mt-2">
                Our expertise in Redux enhances state management for seamless
                and scalable applications.
              </p>
            </div>
            {/* redux  */}
            <div className="p-4 bg-white rounded-lg hover:bg-[#e6feff] shadow-md hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
              <div className="flex gap-2">
                <img src={responsive} className="w-10 h-10" alt="" />

                <h3 className="text-xl font-bold mt-3">Device adaptability</h3>
              </div>
              <p className=" mt-2">
                Proficient in crafting responsive web layouts for optimal
                cross-device user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
