# 📝 TP React - Gestion de Todos avec Thème et Références

## 🎯 Objectifs pédagogiques
Ce TP vise à pratiquer plusieurs concepts avancés de **React + TypeScript** :

- Navigation avec **react-router-dom** (Navbar et liens)
- Gestion d’état complexe avec **useReducer**
- Gestion d’un thème global avec **useContext**
- Utilisation de **useRef** pour manipuler le DOM ou stocker une valeur persistante
- Stylisation avec **TailwindCSS**

---

## 📌 Contexte
Vous allez créer une petite application **Todo Manager** avec deux pages principales :

- **Todos** : gestion d’une liste de tâches prédéfinies (10 éléments)
- **Settings** : configuration du thème (clair ou sombre)

Exemple de données initiales :
```ts
const initialTodos = [
  { id: 1, text: "Acheter du pain", completed: false },
  { id: 2, text: "Finir le TP React", completed: true },
  { id: 3, text: "Faire les courses", completed: false },
  { id: 4, text: "Réviser pour l’examen", completed: true },
  { id: 5, text: "Nettoyer la maison", completed: false },
  { id: 6, text: "Envoyer un email", completed: true },
  { id: 7, text: "Appeler maman", completed: false },
  { id: 8, text: "Regarder un film", completed: true },
  { id: 9, text: "Apprendre TypeScript", completed: false },
  { id: 10, text: "Coder un projet React", completed: true },
];
