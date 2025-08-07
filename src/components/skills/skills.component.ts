import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillGroups = [
    {
      title: '🧑‍💻 Programming & Software Development',
      skills: ['Python', 'R', 'Java', 'SQL', 'OOP', 'Angular']
    },
    {
      title: '🤖 Machine Learning & Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LoRA']
    },
    {
      title: '📊 Data Science & Analysis',
      skills: ['Pandas', 'NumPy', 'Seaborn']
    },
    {
      title: '☁️ Cloud & Big Data',
      skills: ['AWS', 'Azure', 'Databricks', 'Spark']
    },
    {
      title: '🚀 Model Deployment & MLOps',
      skills: ['Docker', 'Kubernetes', 'MLflow']
    },
    {
      title: '📝 NLP (Natural Language Processing)',
      skills: ['NER', 'spaCy', 'NLTK']
    },
    {
      title: '🖼️ Computer Vision',
      skills: ['YOLO', 'Semantic Segmentation']
    },
    {
      title: '📚 LLMs & RAG',
      skills: ['LangChain', 'FAISS', 'Prompt Engineering']
    }
  ];
  
}
