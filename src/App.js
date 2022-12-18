import "./App.css";
import NavBar from "./components/NavBar";

const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createAt: "2021-10-01T10:47:26.889Z",
  },
];

function App() {
  return (
    <div className="App">
      <div className="bg-slate-800  min-h-screen">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
