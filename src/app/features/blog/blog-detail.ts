import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="blog-detail-page" *ngIf="article">
      <!-- ── Header ───────────────────────────────── -->
      <header class="article-header" [style.background-image]="'url(' + article.image + ')'">
        <div class="header-overlay"></div>
        <div class="section-container header-content">
          <a routerLink="/blog" class="back-link">
            <lucide-icon [name]="ArrowLeft" size="18"></lucide-icon> Retour au blog
          </a>
          <span class="category-tag">{{article.category}}</span>
          <h1>{{article.title}}</h1>
          <div class="article-meta">
            <div class="meta-item"><lucide-icon [name]="User" size="16"></lucide-icon> {{article.author}}</div>
            <div class="meta-item"><lucide-icon [name]="Calendar" size="16"></lucide-icon> {{article.date}}</div>
            <div class="meta-item"><lucide-icon [name]="Clock" size="16"></lucide-icon> {{article.readTime}} de lecture</div>
          </div>
        </div>
      </header>

      <!-- ── Content ──────────────────────────────── -->
      <section class="section-container article-body-wrapper">
        <div class="article-layout">
          <!-- Sidebar / Share -->
          <aside class="article-sidebar">
            <div class="sticky-sidebar">
              <h4>Partager</h4>
              <div class="share-links">
                <a href="#"><lucide-icon [name]="Linkedin" size="20"></lucide-icon></a>
                <a href="#"><lucide-icon [name]="Twitter" size="20"></lucide-icon></a>
                <a href="#"><lucide-icon [name]="Facebook" size="20"></lucide-icon></a>
              </div>
            </div>
          </aside>

          <!-- Main Text -->
          <article class="article-content">
            <p class="lead">{{article.excerpt}}</p>
            
            <div class="content-block" *ngFor="let section of article.content">
              <h2>{{section.title}}</h2>
              <div [innerHTML]="section.text"></div>
              <img *ngIf="section.image" [src]="section.image" [alt]="section.title" class="content-img">
            </div>

            <div class="article-tags">
              <span *ngFor="let tag of article.tags">#{{tag}}</span>
            </div>
          </article>
        </div>
      </section>

      <!-- ── Related ──────────────────────────────── -->
      <section class="related-articles section-container">
        <h2 class="section-title" style="text-align: left;">Articles Similaires</h2>
        <div class="related-grid">
          <div class="article-card glass" *ngFor="let rel of related">
            <div class="card-img"><img [src]="rel.image" [alt]="rel.title"></div>
            <div class="card-body">
              <span class="card-cat">{{rel.category}}</span>
              <h4>{{rel.title}}</h4>
              <a [routerLink]="['/blog', rel.id]" class="read-link">Lire <lucide-icon [name]="ArrowLeft" size="14" style="transform: rotate(180deg)"></lucide-icon></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .blog-detail-page { padding-bottom: 80px; }

    /* ── Header ── */
    .article-header {
      height: 65vh; min-height: 500px;
      background-size: cover; background-position: center;
      position: relative;
      display: flex; align-items: flex-end;
      color: white;
      h1, p { color: white; }
    }
    .header-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(11, 31, 58, 0.95) 0%, rgba(11, 31, 58, 0.4) 60%, transparent 100%);
    }
    .header-content {
      position: relative; z-index: 1; padding-bottom: 60px;
      max-width: 900px; margin: 0 auto;
      .back-link {
        display: flex; align-items: center; gap: 8px;
        color: var(--primary-electric); font-weight: 700; margin-bottom: 30px;
        transition: transform 0.2s;
        &:hover { transform: translateX(-5px); }
      }
      .category-tag {
        display: inline-block; padding: 6px 16px;
        background: var(--primary-electric); border-radius: 50px;
        font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;
        margin-bottom: 20px;
      }
      h1 { font-size: 3.5rem; line-height: 1.15; margin-bottom: 25px; @media(max-width:768px){font-size: 2.2rem;} }
    }
    .article-meta {
      display: flex; gap: 30px; opacity: 0.8; font-weight: 500; font-size: 0.95rem;
      .meta-item { display: flex; align-items: center; gap: 8px; }
      @media(max-width:600px){ flex-direction: column; gap: 10px; }
    }

    /* ── Body ── */
    .article-body-wrapper { padding-top: 60px; }
    .article-layout {
      display: grid; grid-template-columns: 100px 1fr; gap: 60px;
      max-width: 900px; margin: 0 auto;
      @media(max-width:900px){ grid-template-columns: 1fr; }
    }
    .article-sidebar {
      @media(max-width:900px){ order: 2; border-top: 1px solid #E2E8F0; padding-top: 30px; }
    }
    .sticky-sidebar { position: sticky; top: 120px;
      h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 20px; }
    }
    .share-links {
      display: flex; flex-direction: column; gap: 15px;
      @media(max-width:900px){ flex-direction: row; }
      a {
        width: 44px; height: 44px; border-radius: 50%;
        background: #F1F5F9; color: var(--primary-deep);
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s;
        &:hover { background: var(--primary-electric); color: white; transform: translateY(-3px); }
      }
    }
    .article-content {
      .lead { font-size: 1.3rem; line-height: 1.6; color: var(--primary-deep); font-weight: 500; margin-bottom: 40px; }
      h2 { font-size: 2rem; margin: 50px 0 25px; }
      p { font-size: 1.1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 25px; }
      .content-img { width: 100%; border-radius: 24px; margin: 30px 0; box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
    }
    .article-tags {
      margin-top: 60px; display: flex; gap: 12px; flex-wrap: wrap;
      span { font-weight: 700; color: var(--primary-electric); font-size: 0.9rem; }
    }

    /* ── Related ── */
    .related-articles { margin-top: 80px; padding-top: 60px; border-top: 1px solid #E2E8F0; }
    .related-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; margin-top: 40px;
    }
    .article-card {
      border-radius: 20px; overflow: hidden; border: 1px solid #E2E8F0;
      transition: all 0.3s;
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
    }
    .card-img { height: 180px; img { width: 100%; height: 100%; object-fit: cover; } }
    .card-body { padding: 24px;
      .card-cat { display: block; font-size: 0.75rem; font-weight: 800; color: var(--primary-electric); text-transform: uppercase; margin-bottom: 10px; }
      h4 { font-size: 1.1rem; margin-bottom: 15px; line-height: 1.4; }
      .read-link { font-weight: 700; color: var(--primary-electric); font-size: 0.9rem; display: flex; align-items: center; gap: 6px; }
    }
  `]
})
export class BlogDetailComponent implements OnInit {
  readonly Calendar = Calendar;
  readonly Clock = Clock;
  readonly User = User;
  readonly ArrowLeft = ArrowLeft;
  readonly Share2 = Share2;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Facebook = Facebook;

  article: any;
  related: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Mock fetching article
      this.article = {
        id,
        title: 'L\'industrie 4.0 en Afrique Centrale : où en sommes-nous ?',
        category: 'Industrie 4.0',
        author: 'Équipe KTM',
        date: 'Mai 2025',
        readTime: '8 min',
        image: '/assets/factory.png',
        excerpt: 'La transformation numérique industrielle n\'est plus une option, mais une nécessité pour rester compétitif. Découvrez l\'état des lieux au Cameroun.',
        content: [
          {
            title: 'Le contexte régional',
            text: 'L\'Afrique Centrale connaît une accélération sans précédent de sa maturité numérique. Les entreprises locales adoptent de plus en plus des outils de CAO et PLM pour optimiser leurs cycles de production.'
          },
          {
            title: 'Les défis majeurs',
            text: 'Infrastructure, formation des talents et investissements stratégiques sont les trois piliers du succès.',
            image: '/assets/hero-bg.png'
          }
        ],
        tags: ['Industrie4.0', 'Cameroun', 'Innovation', 'PLM']
      };

      // Mock related
      this.related = [
        { id: '2', title: 'CATIA V6 vs V5 : le guide complet', category: 'Logiciel', image: '/assets/catia.png' },
        { id: '3', title: 'Collaboration Cloud avec 3DEXPERIENCE', category: 'Innovation', image: '/assets/collab.png' }
      ];
    });
  }
}
