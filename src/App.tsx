import Profile from "./components/Profile";
import SocialNetwork from "./components/SocialNetwork";

const App = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "hsl(0, 0%, 8%)",
      }}
    >
      <div
        className="card"
        style={{
          width: "22rem",
          backgroundColor: "hsl(0, 0%, 12%)",
          color: "hsl(0, 0%, 100%)",
        }}
      >
        <Profile />
        <SocialNetwork title="GitHub" link="https://github.com/matpaulo" />
        <SocialNetwork
          title="LinkedIn"
          link="https://www.linkedin.com/in/matheus-paulo-291828210/"
        />
      </div>
    </div>
  );
};

export default App;
