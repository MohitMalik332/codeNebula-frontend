import CircularPrograss from "./CircularProgress";

function ProductCard({ title, description, category, skills, onClick }) {


  return (
    <div className="relative group">
      
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>

      <div
        onClick={onClick} 
        className="cursor-pointer relative bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 h-full flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {title}
        </h2>

        <p className="text-gray-300 mb-2">
          {description}
        </p>

        <div className="group flex justify-center mt-3">
          <CircularPrograss skills={skills} />
        </div>

        <span className="text-sm px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          {category}
        </span>

        <div className="mt-2 space-y-1">
          {skills.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: s.color }}
              ></span>
              {s.name} ({s.value}%)
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProductCard;