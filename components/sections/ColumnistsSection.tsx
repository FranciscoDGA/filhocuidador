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
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-sm font-medium text-brand-primary tracking-widest uppercase">Colunistas</h2>
        <div className="flex-1 h-px bg-border-base"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {columnists.map((col) => (
          <Link href={`/colunistas/${col.id}`} key={col.id} className="group block">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden border border-border-base group-hover:border-brand-primary/30 transition-colors">
              <img 
                src={col.image} 
                alt={col.name} 
                width={96}
                height={96}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-display font-medium text-sm text-brand-primary group-hover:text-brand-secondary transition">{col.name}</h3>
            <p className="text-xs text-brand-secondary/50 mt-1">{col.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
