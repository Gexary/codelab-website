export const terminalCodes: string[] = [
  `// JS
while (vivant) {
  console.log("CodeLab : coder, apprendre, partager");
}`,

  `# Python
for i in range(3):
  print("Algorithmes : penser avant d'écrire")`,

  `// C
#include <stdio.h>
int main() {
  puts("Méthode > magie : lis le code");
  return 0;
}`,

  `-- SQL
SELECT 'La donnée raconte une histoire' AS message;`,

  `# Git
git init
git add .
git commit -m "Premier pas clair"`,

  `// JS
const bug = false;
if (!bug) {
  console.log("Testé, approuvé, expliqué");
}`,

  `# Python
def pair(n):
  return n % 2 == 0
print("42 est pair :", pair(42))`,

  `// C
int somme(int a, int b) { return a + b; }`,

  `-- SQL
CREATE TABLE notes(
  id INT PRIMARY KEY,
  contenu TEXT
);`,

  `# Git
git branch -M main
git remote add origin <url>
git push -u origin main`,

  `// JS
const stack = [];
stack.push("idée");
console.log(stack.pop());`,

  `# Python
nom = "CodeLab"
print(f"Bienvenue, {nom} !")`,

  `// C
void doc() {
  // Lire, tester, commenter
}`,

  `-- SQL
SELECT COUNT(*) AS total
FROM membres
WHERE actif = TRUE;`,

  `# Git
git log --oneline --graph --decorate --all`,

  `// JS
const todo = ["Lire doc", "Coder", "Relire"];
todo.forEach(t => console.log("- " + t));`,

  `# Python
try:
  1/0
except ZeroDivisionError:
  print("Toujours gérer les cas limites")`,

  `// C
for (int i = 0; i < 3; i++) {
  printf("Itération %d\n", i);
}`,

  `-- SQL
INSERT INTO membres(id, contenu)
VALUES (1, 'Apprendre ensemble');`,

  `# Git
git status
git diff
git stash
git pull --rebase`,
];
