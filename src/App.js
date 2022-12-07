import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Robert Pirvan",
      skillBrainPosition: "Future Junior Developer",
      actualJob: "Engineer",
      shortDesctioption:
        "Junior Front-End Developer and Tech enthusiast with little experience building Web and cross-platform solutions in diverse areas of industry. Tech never stay the same. Human evolve non-stop witch mean tech time fly and continue to impress. Passionate about developing - the best reward I find doing my job. No pain - No Gain. I love chess and football.",

      socialMediaLiks: {
        gitHub: "https://github.com/pirvanrobert",
        linkedIn: "https://www.linkedin.com/in/pirvan-robert-07655a1b0/",
      },
      avatar: require("./images/Robert.jpg"),
    },
  ];

  return (
    <div className="app-container">
      <h1>Andromeda Team</h1>
      <div className="content-container">
        {data.map((item) => (
          <Card
            name={item.name}
            skillBrainPosition={item.skillBrainPosition}
            actualJob={item.actualJob}
            shortDesctioption={item.shortDesctioption}
            socialMediaLiks={item.socialMediaLiks}
            gitHub={item.gitHub}
            linkedIn={item.linkedIn}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
