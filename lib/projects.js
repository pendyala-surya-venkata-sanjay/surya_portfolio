export const projects = [
  {
    slug: "automl-platform",
    title: "AutoML Platform – Intelligent Machine Learning System",
    date: "Mar 2026",
    type: "AutoML + Web",
    image: "/assets/projects/automl.jpg",
    description:
      "An end-to-end AutoML platform covering preprocessing, feature engineering, model training, evaluation, and best-model selection with minimal manual intervention.",
    features: [
      "Multi-model training pipeline: SVM, Random Forest, KNN, Logistic Regression",
      "REST API integration with an LLM-based assistant for explanations",
      "Export trained models and results (CSV/JSON)"
    ],
    tech: [
      "Python",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Flask/FastAPI",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "LLM APIs"
    ],
    github: "https://github.com/pendyala-surya-venkata-sanjay/ML_gpt2.0"
  },
  {
    slug: "crop-yield-prediction",
    title: "Crop Yield Prediction System (Random Forest)",
    date: "Nov 2025",
    type: "ML + Full-Stack",
    image: "/assets/projects/crop-yield.jpg",
    description:
      "Dual-model system to estimate crop yield and categorize yield levels using soil, rainfall, fertilizer, and weather factors.",
    features: [
      "Random Forest Regressor + Classifier for prediction and classification",
      "User-friendly frontend connected to a backend API for real-time predictions",
      "Input validation and smooth frontend–backend integration"
    ],
    tech: [
      "Python",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    github: "https://github.com/pendyala-surya-venkata-sanjay/cropy-yeild-predictor"
  },
  {
    slug: "ayurveda-ai-consultation",
    title: "Ayurveda AI Consultation & Dosha Classification System",
    date: "Jul 2025",
    type: "AI + Full-Stack",
    image: "/assets/projects/ayurveda-ai.jpg",
    description:
      "An AI + full-stack training project integrating ML preprocessing/training with a web application and REST APIs.",
    features: [
      "Built ML + API layer to connect model outputs to the user interface",
      "Hands-on experience with RESTful API design and deployment concepts",
      "Frontend–backend integration and practical system building"
    ],
    tech: [
      "Python",
      "scikit-learn",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    github: "https://github.com/pendyala-surya-venkata-sanjay/ayurvedha-ai"
  }
];

