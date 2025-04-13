// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of the following is considered a statically determinate structure?",
    answer: "A simply supported beam",
    options: [
      "A simply supported beam",
      "A cantilever beam with an intermediate support",
      "A continuous beam over three spans",
      "A portal frame with fixed ends"
    ]
  },
  {
    numb: 2,
    question: "In structural design, what is the primary purpose of applying load factors in the limit state method?",
    answer: "To account for uncertainties in loads and material strengths",
    options: [
      "To reduce the dead load",
      "To ensure structural symmetry",
      "To account for uncertainties in loads and material strengths",
      "To minimize construction costs"
    ]
  },
  {
    numb: 3,
    question: "In the moment distribution method, what happens to the stiffness factor of a member when the far end is fixed compared to when it is simply supported?",
    answer: "It doubles",
    options: [
      "It doubles",
      "It halves",
      "It remains the same",
      "It becomes zero"
    ]
  },
  {
    numb: 4,
    question: "A propped cantilever beam of span L carries a uniformly distributed load w. What is the fixed end moment at the fixed support using the consistent deformation method?",
    answer: "wL^2 / 8",
    options: [
      "wL^2 / 8",
      "wL^2 / 10",
      "wL^2 / 12",
      "wL^2 / 2"
    ]
  },
  {
    numb: 5,
    question: "In a 3-member frame with a triangular geometry (truss-like), using the stiffness method in matrix analysis, how would you compute the global stiffness matrix?",
    answer: "By rotating each local stiffness matrix to the global coordinate system, then assembling",
    options: [
      "By summing individual member displacements",
      "By rotating each local stiffness matrix to the global coordinate system, then assembling",
      "By calculating joint reactions directly",
      "By using the flexibility method first and then inverting the result"
    ]
  }
];
