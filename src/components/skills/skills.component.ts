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
      skills: ['Python', 'R', 'Scala', 'SQL', 'OOP']
    },
    {
      title: '🤖 Machine Learning & Frameworks',
      skills: [
        'Regression', 'Classification', 'Clustering', 
        'Feature Engineering', 'XGBoost', 
        'Scikit-learn', 'TensorFlow', 'PyTorch'
      ]
    },
    {
      title: '🧠 Deep Learning & Neural Networks',
      skills: [
        'CNNs', 'RNNs', 'Transformers', 
        'Transfer Learning', 'GANs', 
        'Backpropagation', 'Dropout', 'Batch Normalization'
      ]
    },
    {
      title: '📝 NLP (Natural Language Processing)',
      skills: [
        'BERT', 'RoBERTa', 'GPT', 'T5', 'BioBERT',
        'NER', 'Text Classification', 'Summarization',
        'Sentiment Analysis', 'Tokenization', 
        'Word2Vec', 'GloVe', 'spaCy', 'Hugging Face'
      ]
    },
    {
      title: '🖼️ Computer Vision',
      skills: [
        'YOLO', 'SSD', 'Faster R-CNN', 
        'Image Classification', 'Segmentation (U-Net, Mask R-CNN)', 
        'OCR', 'OpenCV'
      ]
    },
    {
      title: '📈 Time Series & Forecasting',
      skills: [
        'ARIMA', 'SARIMA', 'Prophet', 'LSTM', 'GRU', 'GluonTS'
      ]
    },
    {
      title: '🎯 Recommendation Systems',
      skills: [
        'Collaborative Filtering', 'Matrix Factorization', 
        'Deep Recommender Systems'
      ]
    },
    {
      title: '📚 LLMs & RAG Systems',
      skills: [
        'LangChain', 'FAISS', 'LlamaIndex', 
        'Prompt Engineering', 'LoRA'
      ]
    },
    {
      title: '☁️ Cloud & Big Data',
      skills: [
        'AWS (SageMaker, Textract, Lambda)', 
        'GCP (Vertex AI, BigQuery)', 
        'Azure (ML Studio, Data Factory)', 
        'PySpark', 'Databricks'
      ]
    },
    {
      title: '🚀 Model Deployment & MLOps',
      skills: [
        'Docker', 'Kubernetes', 'MLflow', 
        'TensorFlow Serving', 'FastAPI', 'DVC', 
        'GitHub Actions', 'Airflow', 'Prefect'
      ]
    },
    {
      title: '📊 Data Processing & Visualization',
      skills: [
        'Pandas', 'NumPy', 'Dask', 'Vaex', 
        'Matplotlib', 'Seaborn', 'Plotly', 'Statsmodels'
      ]
    },
    {
      title: '🧪 Testing & DevOps',
      skills: [
        'Git', 'GitHub', 'GitLab', 
        'PyTest', 'Unittest', 'Terraform'
      ]
    },
    {
      title: '🤝 Soft Skills',
      skills: [
        'Cross-functional Collaboration', 
        'Stakeholder Communication', 
        'Technical Mentorship'
      ]
    }
  ];  
  
}
