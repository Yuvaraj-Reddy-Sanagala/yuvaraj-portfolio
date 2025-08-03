import { Component } from '@angular/core';
import { SkillGroup } from './skill-group.model';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Programming & Software Development',
      skills: [
        'Python',
        'R',
        'Java',
        'SQL',
        'Bash',
        'Object-Oriented Programming (OOP)',
        'Multi-threading',
        'Parallel Computing',
        'Agile/Scrum Methodologies',
        'React',
        'Angular',
      ],
    },
    {
      title: 'Machine Learning & Frameworks',
      skills: [
        'TensorFlow',
        'Keras',
        'PyTorch',
        'Scikit-learn',
        'XGBoost',
        'LightGBM',
        'CatBoost',
        'Hugging Face',
        'CNN',
        'RNN',
        'Transformers',
        'GANs',
        'Fine-tuning',
        'Transfer Learning',
        'LoRA',
      ],
    },
    {
      title: 'Data Science & Analysis',
      skills: [
        'Pandas',
        'NumPy',
        'SciPy',
        'Statsmodels',
        'Data Cleaning',
        'Normalization',
        'Feature Engineering & Selection',
        'Matplotlib',
        'Seaborn',
        'Plotly',
      ],
    },
    {
      title: 'Cloud & Big Data',
      skills: [
        'AWS: SageMaker, Lambda, EC2',
        'Azure: ML Studio, Azure Databricks',
        'Apache Spark',
        'Kafka',
        'Hadoop',
      ],
    },
    {
      title: 'Model Deployment & MLOps',
      skills: [
        'Docker',
        'Kubernetes',
        'MLflow',
        'Flask',
        'Django (API Development)',
        'Git',
        'GitHub',
        'GitLab',
        'Hyperparameter Tuning: Grid Search, Randomized Search, Bayesian Optimization',
      ],
    },
    {
      title: 'NLP (Natural Language Processing)',
      skills: [
        'Text Preprocessing',
        'Sentiment Analysis',
        'Named Entity Recognition (NER)',
        'spaCy',
        'NLTK',
      ],
    },
    {
      title: 'Computer Vision',
      skills: [
        'Image Classification',
        'Object Detection',
        'Semantic Segmentation',
        'YOLO',
      ],
    },
    {
      title: 'LLMs & Retrieval-Augmented Generation (RAG)',
      skills: [
        'RAG',
        'FAISS (Vector DBs)',
        'LangChain',
        'Prompt Engineering',
        'Context-aware Retrieval',
        'LLM Integration',
      ],
    },
  ];
}
