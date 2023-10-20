import designConcept from '../../assets/aboutUs/design-concept-drawings.jpg';
import teamMeeting from '../../assets/aboutUs/team-meeting.jpg';
import teamWork from '../../assets/aboutUs/team-work.jpg';


const HomeAboutUsImages = () => {
    return (
        <div className="flex items-center justify-start">
        <div className="flex flex-col items-end px-3">
        <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:scale-105 duration-700"
            src={designConcept}
            alt="designWeb"
        />
        <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:scale-105 duration-700"
            src={teamWork}
            alt="teamMeeting"
        />
        </div>
        <div className="px-3">
        <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:scale-105 duration-700"
            src={teamMeeting}
            alt="teamWork"
        />
        </div>
    </div>
    );
};

export default HomeAboutUsImages;