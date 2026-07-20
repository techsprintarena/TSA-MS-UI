import logo from "../Assets/logo.png";
import AboutUs from "./Aboutuspage";
import Contribution from "./Contributionpage";
import HowItWorks from "./Howitworkspage";
import Rewards from "./Rewardspage";
import Enroll from "./Enrollpage";

export default function Home() {
	const colorTemplates = [
		{ label: "Primary", color: "#1C3B4D" },
		{ label: "Sec", color: "#1A908550" },
		{ label: "border", color: "#ffffff" },
	];
  return (
    <>
      <div style={{ width: "100%", height: "100vh", background: "#1C3B4D" }}>
        <div
          className=" container text-center p-5 text-white"
          style={{ height: "260vh	", width: "100%", gap: "20px" }}
        >
          <img
            src={logo}
            width="300"
            height="300"
            className="App-logo"
            alt="logo"
          />

          <div className="container d-flex flex-column gap-3 border border-white p-3 my-2">
            <p className="mb-0">Color Template</p>

            <div className="d-flex gap-1">
              {colorTemplates.map(({ label, color }) => (
                <div
                  key={label}
                  className="d-flex justify-content-center align-items-center border rounded-3 my-3"
                  style={{
                    backgroundColor: color,
                    width: "120px",
                    height: "50px",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-white">TECHSPRINT ARENA - DEV</h2>
          <p className="text-white">Welcome to the home page!</p>
        </div>
      </div>
			<HowItWorks/>
			<Contribution/>
			<AboutUs/>
			<Rewards/>
			<Enroll/>
    </>
  );
}
