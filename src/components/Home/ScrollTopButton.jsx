import { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";


function ScrollTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <button
        className={`fixed bottom-4 z-50 dark:bg-white bgGradient right-4 p-4 rounded-full transition-opacity ${
            isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
        >
        <BsFillArrowUpSquareFill className="text-4xl hover:text-teal-950 text-[#26BFC7] duration-700 hover:scale-110" />
        </button>
    );
}

export default ScrollTopButton;
