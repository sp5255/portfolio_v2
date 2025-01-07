import BrowserstackLogo from "../assets/icons/BrowserstackLogo";
import RadiansysLogo from "../assets/icons/RadiansysLogo";
import SectionTitle from "./SectionTitle";

export const Work = () => {
  return (
    <section>
      <p className="section-title_mobile">Work Experience</p>
      <div className="experience-wapper" id="experience">
        <SectionTitle title=" Work Experience " />

        <div>
          <div>
            <div className="work-exp">
              <div className="work-exp__details right right-section">
                <h6 className="work-exp__period">Jun 2023 - Present</h6>
                <h4>Frontend Software Engineer</h4>
                <h5>Browserstack</h5>

                {/* <div className="work-exp__sub-heading">
                  <h5>Radiansys </h5>
                  <p className="work-exp__period">Apr 2022 - Jun 2023</p>
                </div> */}
                <ul className="work-exp__points">
                  <li>
                    <span>Real-Time Dynamic Search:</span> Led the development
                    of a real-time search feature for multiple products,
                    improving search speed and accuracy using{" "}
                    <span>React.js</span>, <span>Algolia</span>, and{" "}
                    <span>vanilla JavaScript</span> for older systems. Added{" "}
                    <span>debouncing</span> to reduce unnecessary API calls,
                    making the search faster and more efficient.
                  </li>

                  <li>
                    <span>Enhanced Search Interface:</span> Built a powerful
                    search system with filters for different types of content,
                    using <span>Algolia</span> to provide fast and accurate
                    search results.
                  </li>

                  <li>
                    <span>Support System Integration:</span> Created an
                    easy-to-use interface for users to ask questions or get
                    help, including options for <span>FAQs</span>, live chat,
                    and contact forms. Built with <span>React.js</span> to make
                    it easier for users to find support.
                  </li>
                </ul>
              </div>
              <div className="hr-divider">
                <div className="work-exp__icon-wrapper">
                  <BrowserstackLogo height={35} width={35} />
                </div>
              </div>
              <div className="work-year right-section">
                {" "}
                Jun 2023 - Present{" "}
              </div>
            </div>
            <div className="work-exp">
              <div className="left-section work-year">
                {" "}
                Apr 2022 - Jun 2023{" "}
              </div>
              <div className="hr-divider">
                <div className="work-exp__icon-wrapper">
                  <RadiansysLogo height={35} width={35} />
                </div>
              </div>
              <div className="work-exp__details left">
                <h6 className="work-exp__period">Apr 2022 - Jun 2023</h6>
                <h4>Software Engineer</h4>
                <h5>Radiansys </h5>
                <ul className="work-exp__points">
                  <li>
                    Built a software product front-end which analyse how
                    betterthe users use the features (AI scores and preference
                    score based on some job’s/user’s criteria) provided to them,
                    using React.js, Typescript, Chakra UI.
                  </li>
                  <li>
                    Built Product Review system with images the user profile
                    management (activation, deletion and updation) UI and
                    functionality for an E-commerce software using Next.js,
                    React.js, Typescript.
                  </li>
                  <li>
                    Built functionality for creating appointments and added
                    Jitsi video conferencing using Next.js, React.js.
                  </li>
                  <li>
                    Build UI Components from scratch which reduced 25% of
                    development tasks using Next.js, React.js, Material UI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
