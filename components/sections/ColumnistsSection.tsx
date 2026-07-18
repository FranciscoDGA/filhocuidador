import Image from "next/image";
import Link from "next/link";

export default function ColumnistsSection() {
  const columnists = [
    {
      id: 1,
      name: "Dra. Ana Silva",
      role: "Geriatra",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Psicólogo Clínico",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Marina Costa",
      role: "Advogada Previdenciária",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Roberto Almeida",
      role: "Fisioterapeuta",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <div className="mb-8 flex items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 tracking-wide">Colunistas</h2>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {columnists.map((col) => (
          <Link href={`/colunistas/${col.id}`} key={col.id} className="group block">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-gray-900 transition-colors">
              <Image 
                src={col.image} 
                alt={col.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-gray-600 transition">{col.name}</h3>
            <p className="text-sm font-serif text-gray-500">{col.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
