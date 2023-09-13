import Link from "next/link";

import KeynoteData from "../data/keynote.yml";

const KeynoteComponent = () => {
  return (
    <>
      <section className="bg-speakers home-section" id="keynote">
        <div className="container">
          <div className="row pt-md-5 pb-5 align-items-center align-items-md-start">
            <div className="col-md-8 col-7 pt-5">
              <h2 className="com-head" data-aos="fade-down" data-aos-duration="1000">Keynote Speakers</h2>
            </div>
            <div className="col-md-4 col-5 mikeimg">
              <img src="/2023/images/generic-illustrations/mike.png" className="img-fluid vert-move" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-members">
        <div className="container">
          <div className="row top-up justify-content-center">
            {KeynoteData.map((speaker, index) => (
              <div key={index} className="col-md-6" >
                <Link href="/keynote/[speakerFullName]"
                  as={`/keynote/${encodeURIComponent(speaker.fullName.toLowerCase().replace(/\s+/g, "-"))}`}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <div
                    className="bg-speakerbox bg-white p-3 p-lg-5 mb-3 mb-md-5"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="1000"
                    key={index}
                  >
                    <div className="row align-items-center w-100">
                      <div className="col-auto">
                        <img
                          src={speaker.profilePicture}
                          alt={speaker.fullName}
                          className="speaker-image"
                        />
                      </div>
                      <div className="col">
                        <h4>{speaker.fullName}</h4>
                        <p>{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeynoteComponent;
