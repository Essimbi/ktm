import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Newspaper, ArrowRight, Calendar, Clock, Tag, Search } from 'lucide-angular';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  template: `
    <main class="page-main">
      <!-- Hero -->
      <section class="page-hero">
        <div class="hero-content">
          <span class="hero-tag">Actualités & Insights</span>
          <h1>Le Blog KTM Digital</h1>
          <p>Restez informé des dernières tendances en Industrie 4.0, PLM, digitalisation et innovation technologique en Afrique.</p>
          <div class="search-bar">
            <lucide-icon [name]="Search" size="18"></lucide-icon>
            <input type="text" placeholder="Rechercher un article..." [(ngModel)]="searchQuery">
          </div>
        </div>
      </section>

      <!-- Category pills -->
      <section class="section-container" style="padding-bottom: 0; padding-top: 40px;">
        <div class="category-bar">
          <button *ngFor="let cat of categories" [class.active]="activeCategory === cat" (click)="setCategory(cat)">{{cat}}</button>
        </div>
      </section>

      <!-- Featured article -->
      <section class="section-container" *ngIf="featured">
        <div class="featured-article">
          <div class="featured-img">
            <img [src]="featured.image" [alt]="featured.title">
            <span class="featured-badge">À la Une</span>
          </div>
          <div class="featured-content">
            <span class="article-cat">{{featured.category}}</span>
            <h2>{{featured.title}}</h2>
            <p>{{featured.excerpt}}</p>
            <div class="article-meta">
              <span><lucide-icon [name]="Calendar" size="14"></lucide-icon> {{featured.date}}</span>
              <span><lucide-icon [name]="Clock" size="14"></lucide-icon> {{featured.readTime}}</span>
            </div>
            <button class="btn-premium primary">Lire l'article <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></button>
          </div>
        </div>
      </section>

      <!-- Articles Grid -->
      <section class="section-container">
        <h2 class="section-title">Tous les Articles</h2>
        <div class="articles-grid">
          <article class="article-card" *ngFor="let article of filteredArticles">
            <div class="article-img">
              <img [src]="article.image" [alt]="article.title">
            </div>
            <div class="article-body">
              <span class="article-cat">{{article.category}}</span>
              <h3>{{article.title}}</h3>
              <p>{{article.excerpt}}</p>
              <div class="article-footer">
                <div class="article-meta">
                  <span><lucide-icon [name]="Calendar" size="12"></lucide-icon> {{article.date}}</span>
                  <span><lucide-icon [name]="Clock" size="12"></lucide-icon> {{article.readTime}}</span>
                </div>
                <a href="#" class="read-more">Lire <lucide-icon [name]="ArrowRight" size="13"></lucide-icon></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="newsletter-section">
        <div class="newsletter-box">
          <lucide-icon [name]="Newspaper" size="40"></lucide-icon>
          <h2>Restez à la pointe</h2>
          <p>Inscrivez-vous à notre newsletter et recevez chaque mois nos analyses et actualités industrielles.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="votre@email.com">
            <button class="btn-premium primary">S'abonner</button>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .page-hero {
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%);
      padding: 100px 5% 80px;
      text-align: center;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .hero-tag {
      display: inline-block; padding: 8px 20px;
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
      border-radius: 50px; font-size: 0.8rem; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px;
    }
    .hero-content {
      max-width: 700px; margin: 0 auto;
      h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 20px; @media(max-width:768px){font-size:2.2rem} }
      p { font-size: 1.15rem; opacity: 0.8; margin-bottom: 36px; }
    }
    .search-bar {
      max-width: 500px; margin: 0 auto;
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px; padding: 14px 24px;
      color: white;
      input {
        flex: 1; background: none; border: none; outline: none;
        color: white; font-size: 0.95rem;
        &::placeholder { color: rgba(255,255,255,0.5); }
      }
    }
    .category-bar {
      display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 0;
      button {
        padding: 9px 22px; border-radius: 50px; border: 2px solid #E2E8F0;
        font-weight: 600; font-size: 0.85rem; background: white;
        color: var(--text-muted); cursor: pointer; transition: all 0.2s;
        &:hover, &.active { background: var(--primary-electric); border-color: var(--primary-electric); color: white; }
      }
    }
    .featured-article {
      display: grid; grid-template-columns: 1.2fr 1fr;
      gap: 50px; align-items: center;
      background: white; border-radius: 28px;
      overflow: hidden; border: 1px solid #E2E8F0;
      box-shadow: 0 10px 40px rgba(0,0,0,0.06);
      @media(max-width:900px) { grid-template-columns: 1fr; }
    }
    .featured-img {
      position: relative; height: 420px;
      img { width: 100%; height: 100%; object-fit: cover; }
      .featured-badge {
        position: absolute; top: 20px; left: 20px;
        background: var(--primary-electric); color: white;
        padding: 6px 16px; border-radius: 50px;
        font-size: 0.78rem; font-weight: 800; text-transform: uppercase;
      }
    }
    .featured-content {
      padding: 40px 40px 40px 0;
      @media(max-width:900px) { padding: 32px; }
      h2 { font-size: 1.9rem; margin-bottom: 16px; line-height: 1.25; }
      p { color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 24px; }
    }
    .article-cat {
      display: inline-block; font-size: 0.75rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 1.5px;
      color: var(--primary-electric); margin-bottom: 12px;
    }
    .article-meta {
      display: flex; gap: 20px;
      span { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; color: var(--text-muted); }
      margin-bottom: 24px;
    }
    .articles-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 28px; margin-top: 40px;
    }
    .article-card {
      background: white; border-radius: 20px;
      border: 1px solid #E2E8F0; overflow: hidden;
      transition: all 0.3s ease;
      display: flex; flex-direction: column;
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
    }
    .article-img {
      height: 200px;
      img { width: 100%; height: 100%; object-fit: cover; }
    }
    .article-body {
      padding: 24px; flex: 1; display: flex; flex-direction: column;
      h3 { font-size: 1.05rem; line-height: 1.4; margin-bottom: 10px; }
      p { font-size: 0.88rem; color: var(--text-muted); flex: 1; line-height: 1.6; }
    }
    .article-footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 16px; padding-top: 16px; border-top: 1px solid #E2E8F0;
      .article-meta { margin-bottom: 0; }
    }
    .read-more {
      display: flex; align-items: center; gap: 5px;
      font-weight: 700; font-size: 0.85rem; color: var(--primary-electric);
    }
    .newsletter-section {
      background: linear-gradient(135deg, var(--primary-deep), #0d3a6e);
      padding: 80px 5%;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .newsletter-box {
      max-width: 600px; margin: 0 auto; text-align: center; color: white;
      lucide-icon { color: var(--primary-electric); margin-bottom: 20px; }
      h2 { font-size: 2.2rem; margin-bottom: 14px; }
      p { opacity: 0.75; font-size: 1rem; margin-bottom: 36px; }
    }
    .newsletter-form {
      display: flex; gap: 12px;
      input {
        flex: 1; padding: 14px 20px; border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.1); color: white;
        font-size: 0.95rem; outline: none;
        &::placeholder { color: rgba(255,255,255,0.5); }
      }
      @media(max-width:560px) { flex-direction: column; }
    }
  `]
})
export class BlogComponent {
  readonly Newspaper = Newspaper;
  readonly ArrowRight = ArrowRight;
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly Tag = Tag;
  readonly Search = Search;

  searchQuery = '';
  activeCategory = 'Tous';

  categories = ['Tous', 'Industrie 4.0', 'CATIA & SOLIDWORKS', 'PLM', 'Innovation Afrique', 'Formation'];

  articles = [
    { title: 'L\'industrie 4.0 en Afrique Centrale : où en sommes-nous ?', excerpt: 'Panorama de la transformation numérique industrielle au Cameroun et dans la sous-région CEMAC.', category: 'Industrie 4.0', date: 'Mai 2025', readTime: '8 min', image: 'assets/factory.png', featured: true },
    { title: 'CATIA V6 vs V5 : quelle version choisir pour votre entreprise ?', excerpt: 'Analyse comparative des deux versions phares du logiciel de CAO de Dassault Systèmes.', category: 'CATIA & SOLIDWORKS', date: 'Avr 2025', readTime: '6 min', image: 'assets/catia.png', featured: false },
    { title: 'La plateforme 3DEXPERIENCE révolutionne la collaboration', excerpt: 'Comment les entreprises africaines peuvent tirer parti d\'un PLM de classe mondiale.', category: 'PLM', date: 'Mar 2025', readTime: '5 min', image: 'assets/collab.png', featured: false },
    { title: 'Certification SOLIDWORKS : guide complet 2025', excerpt: 'Tout ce que vous devez savoir pour préparer et réussir vos certifications CSWA et CSWP.', category: 'Formation', date: 'Mar 2025', readTime: '10 min', image: 'assets/hero-bg.png', featured: false },
    { title: 'KTM accompagne l\'Université de Douala dans son programme PLM', excerpt: 'Retour sur notre partenariat académique et l\'intégration du logiciel CATIA dans les cursus d\'ingénierie.', category: 'Innovation Afrique', date: 'Fév 2025', readTime: '4 min', image: 'assets/collab.png', featured: false },
    { title: 'Simulation numérique : réduire les coûts de prototypage de 60%', excerpt: 'Les outils SIMULIA permettent de tester virtuellement avant de fabriquer, réduisant drastiquement les erreurs.', category: 'Industrie 4.0', date: 'Jan 2025', readTime: '7 min', image: 'assets/hero-bg.png', featured: false },
  ];

  get featured() { return this.articles.find(a => a.featured); }

  get filteredArticles() {
    return this.articles.filter(a => {
      const catMatch = this.activeCategory === 'Tous' || a.category === this.activeCategory;
      const searchMatch = !this.searchQuery || a.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return !a.featured && catMatch && searchMatch;
    });
  }

  setCategory(cat: string) { this.activeCategory = cat; }
}
