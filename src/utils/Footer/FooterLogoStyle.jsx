import "../scss/FooterWebLogo.scss";
import { useNavigate } from 'react-router-dom';

const FooterLogoStyle = () => {
    const navigate = useNavigate();
    return (
        <div className="lg:flex hidden relative right-5">
        <div className="w-full flex items-center justify-center">
            <button onClick={() => navigate("/team")}>
                <svg
                id="stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="0"
                height="0"
                >
                <defs>
                    <path
                    id="line"
                    d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    />
                </defs>
                </svg>

                <div className="btnOfWebLogo text-2xl font-semibold text-gray-800 tracking-wide">
                    Selosia BD

                    <svg className="button-strokeOfWebLogo" viewBox="0 0 154 13">
                    <use href="#line"></use>
                    </svg>
                    <svg className="button-strokeOfWebLogo" viewBox="0 0 154 13">
                    <use href="#line"></use>
                    </svg>

                </div>
            </button>
            </div>
        </div>
    );
};

export default FooterLogoStyle;