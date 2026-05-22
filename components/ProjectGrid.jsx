export default function ProjectGrid() {
  const projects = [
    { id: 1, name: "Luxury Palace Hotel, Karnal", desc: "5-Star Category", img: "/topaz/gallery-1.jpg" },
    { id: 2, name: "Imperium Resort, Hisar", desc: "Luxurious Resort", img: "/topaz/project-2.jpg" },
    { id: 3, name: "Hotel 17 Miles, Jammu", desc: "4-Star Hotel", img: "/topaz/project-1.jpg" },
    { id: 4, name: "Heritage Palace, Banaras", desc: "Heritage Property at Assighat", img: "/topaz/reveal.jpg" },
  ];

  return (
    <section className="py-32 px-4 sm:px-8 max-w-7xl mx-auto bg-background">
      <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
        <h2 className="text-3xl md:text-5xl font-serif text-white font-light">Executed Projects</h2>
        <a href="#" className="text-xs tracking-[0.2em] text-gray-500 hover:text-white uppercase transition-colors">View All</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden h-[60vh] md:h-[75vh] mb-8 bg-secondary">
              <img 
                src={project.img} 
                alt={project.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-serif text-white tracking-wide mb-2">{project.name}</h3>
              <p className="text-gray-500 font-light text-sm tracking-widest">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
