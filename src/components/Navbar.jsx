import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        CodeNebula
      </h1>

      <div className="flex gap-6">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/projects")} >Projects</button>
      </div>
    </div>
  )
}

export default Navbar;