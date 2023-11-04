import { useEffect, useState } from "react";
import meet from "../../../assets/icon/meet.png";
import { getDailyScrumLink } from "../../../apis/scrumOperation";

const DailyScrum = () => {
  const [officialScrumLink, setOfficialScrumLink] = useState();
  const [bitBendersScrumLink, setBitBendersScrumLink] = useState();
  const [synergyScrumLink, setSynergyScrumLink] = useState();

  useEffect(() => {
    const scrumID = "64d9d45d62466067d1e61980";
    getDailyScrumLink(scrumID).then((data) => {
      setOfficialScrumLink(data);
    });
  }, []);

  console.log(officialScrumLink);

  useEffect(() => {
    const scrumID = "64dbadbc62466067d1baa403";
    getDailyScrumLink(scrumID).then((data) => {
      setBitBendersScrumLink(data);
    });
  }, []);

  console.log(bitBendersScrumLink);

  useEffect(() => {
    const scrumID = "64dbadbc62466067d1baa402";
    getDailyScrumLink(scrumID).then((data) => {
      setSynergyScrumLink(data);
    });
  }, []);

  console.log(synergyScrumLink);

  return (
    <div>
      <div className="p-8 text-center">
        <h1 className="text-3xl title ">Meeting Hub</h1>
        <p className="font-semibold mt-2">All Your Meetings, One Click Away</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        style={{ display: "grid", height: "50vh", alignItems: "center" }}
      >
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Scrum Links */}
          <div className="md:mx-10">
            {/* Official Scrum */}
            <div className="flex gap-2 my-5 border p-4 rounded">
              <img className="w-7 h-7" src={meet} alt="" />
              <a
                title="Click to join the scrum"
                href={officialScrumLink?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="title hover:text-[#26BFC7]"
              >
                Official Scrum
              </a>
              <span className="animate-ping text-[#26BFC7] font-extrabold">
                ...
              </span>
            </div>

            {/* BitBenders Scrum */}
            <div className="flex gap-2 my-5 border p-4 rounded">
              <img className="w-7 h-7" src={meet} alt="" />

              <a
                title="Click to join the scrum"
                href={bitBendersScrumLink?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="title hover:text-[#26BFC7]"
              >
                BitBenders Scrum
              </a>
              <span className="animate-ping text-[#26BFC7] font-extrabold">
                ...
              </span>
            </div>

            {/* Synergy Scrum */}
            <div className="flex gap-2 my-5 border p-4 rounded">
              <img className="w-7 h-7" src={meet} alt="" />

              <a
                title="Click to join the scrum"
                href={synergyScrumLink?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="title hover:text-[#26BFC7]"
              >
                Synergy Scrum
              </a>
              <span className="animate-ping text-[#26BFC7] font-extrabold">
                ...
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <iframe
            src={officialScrumLink}
            title="Google Meet"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="camera; microphone; fullscreen; display-capture"
          />
        </div>
      </div>
    </div>
  );
};

export default DailyScrum;
