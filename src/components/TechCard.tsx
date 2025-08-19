export function TechCard({ category }: { category: Category }) {
  return (
    <div className="flex gap-8">
      <div className="w-22 h-22 rounded-md bg-white/5 border border-white/5 shrink-0 flex items-center justify-center">
        <img src={`/codelab-website/${category.icon}`} alt={category.title} className="w-[60%]" />
      </div>
      <div>
        <h3 className="font-medium mb-4 text-zinc-100 text-xl">{category.title}</h3>
        <p className="text-base text-zinc-400 leading-relaxed">{category.description}</p>
      </div>
    </div>
  );
}

export function TechCategories() {
  return (
    <div className="grid grid-cols-2 gap-16">
      {Categories.map((category) => (
        <TechCard category={category} />
      ))}
    </div>
  );
}

interface Category {
  title: string;
  description: string;
  icon: string;
}

const Categories = [
  {
    title: "Programmation en Python et POO",
    description:
      "Apprenez à coder vos premiers programmes en partant de zéro, à automatiser des tâches simples et à développer vos propres petits projets. Python est un langage clair et polyvalent, parfait pour débuter.",
    icon: "/python-logo.svg",
  },
  {
    title: "Algorithmie",
    description:
      "Découvrez comment résoudre des problèmes en découpant vos idées en étapes logiques. De la recherche d'un chemin à l'optimisation d'un calcul, vous verrez comment raisonner comme un informaticien.",
    icon: "/algo-icon.png",
  },
  {
    title: "Structures de données",
    description:
      "Listes, piles, files, dictionnaires, arbres… Apprenez à organiser les informations pour les manipuler plus efficacement, comme le font les vrais logiciels.",
    icon: "/graph.png",
  },
  {
    title: "Bases de données et SQL",
    description:
      "Explorez le monde des données : créez vos propres bases, interrogez-les avec SQL, et comprenez comment sont stockées les informations derrière vos applis préférées.",
    icon: "/database-icon.png",
  },
  {
    title: "Architecture et systèmes d'exploitation",
    description:
      "Que se passe-t-il dans un ordinateur quand vous lancez un programme ? Découvrez les bases de l'architecture matérielle, de la mémoire et du fonctionnement d'un système d'exploitation.",
    icon: "/linux-logo.svg",
  },
  {
    title: "Réseaux et Web",
    description:
      "Plongez dans l'univers d'Internet : comment les ordinateurs communiquent, comment fonctionnent les sites web, et comment créer vos premières pages interactives.",
    icon: "/web-icon.png",
  },
];
