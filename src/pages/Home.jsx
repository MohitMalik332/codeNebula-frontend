import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* 🔥 Glow Background */}
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>

      {/* 🔥 Content */}
      <div className="text-center z-10">
        
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 text-transparent bg-clip-text">
          CodeNebula 🚀
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Full Stack Developer | React | Spring Boot
        </p>

        <button
          onClick={() => navigate("/projects")}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition transform shadow-lg shadow-purple-500/40"
        >
          View Projects
        </button>

      </div>
    </div>
  );
}

export default Home;