import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Monitor, Database, Layers, Shield, Zap, Layout, ArrowRight, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="solutions-page">
      <!-- ── Hero ─────────────────────────────────── -->
      <section class="sol-hero">
        <div class="hero-glow"></div>
        <div class="hero-content reveal">
          <span class="hero-tag">Portfolio Technologique</span>
          <h1>L'Écosystème <br><span class="gradient-text-light">Dassault Systèmes</span></h1>
          <p>Explorez une suite complète de solutions de classe mondiale pour la conception, la simulation et la gestion du cycle de vie des produits.</p>
        </div>
      </section>

      <!-- ── Grid ─────────────────────────────────── -->
      <section class="section-container">
        <div class="solutions-grid">
          <div class="sol-card reveal" *ngFor="let sol of solutions; let i = index" [style.--delay]="i * 0.1 + 's'">
            <div class="card-glow" [style.background]="sol.color"></div>
            <div class="card-content">
              <div class="sol-icon-box" [style.background]="sol.color">
                <lucide-icon [name]="sol.icon" size="32"></lucide-icon>
              </div>
              <div class="sol-info">
                <h3>{{sol.name}}</h3>
                <p>{{sol.shortDesc}}</p>
                <ul class="features">
                  <li *ngFor="let f of sol.features">
                    <lucide-icon [name]="CheckCircle" size="14"></lucide-icon>
                    {{f}}
                  </li>
                </ul>
              </div>
              <a [routerLink]="['/solutions', sol.id]" class="sol-btn">
                Explorer {{sol.name}} <lucide-icon [name]="ArrowRight" size="16"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CTA ──────────────────────────────────── -->
      <section class="sol-cta">
        <div class="cta-card glass reveal">
          <div class="cta-text">
            <h2>Vous ne savez pas par où commencer ?</h2>
            <p>Nos experts vous aident à choisir la solution la mieux adaptée à vos défis industriels et à votre budget.</p>
          </div>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn-premium primary">Consultation Gratuite <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/services" class="btn-premium secondary-light">Nos Services</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .solutions-page { overflow-x: hidden; }

    /* ── Hero ── */
    .sol-hero {
      position: relative;
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 60%, var(--primary-electric) 100%);
      padding: 140px 5% 100px;
      text-align: center;
      color: white;
      overflow: hidden;
      h1, h2, p { color: white; }
    }
    .hero-glow {
      position: absolute; top: 50%; left: 50%;
      width: 1000px; height: 1000px;
      background: radial-gradient(circle, rgba(0, 91, 255, 0.15) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    .hero-content {
      position: relative; z-index: 1; max-width: 800px; margin: 0 auto;
      h1 { font-size: 4.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 24px;
           @media(max-width:768px){ font-size: 2.8rem; } }
      p { font-size: 1.2rem; opacity: 0.85; line-height: 1.7; }
    }
    .hero-tag {
      display: inline-block; padding: 8px 24px;
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 24px;
    }
    .gradient-text-light {
      background: linear-gradient(135deg, #fff 0%, var(--accent-cyan) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    /* ── Grid ── */
    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 32px;
      margin-top: -50px;
      position: relative; z-index: 10;
      @media(max-width:400px){ grid-template-columns: 1fr; }
    }
    .sol-card {
      position: relative;
      background: white; border-radius: 28px;
      overflow: hidden; border: 1px solid #E2E8F0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation-delay: var(--delay, 0s);
      &:hover {
        transform: translateY(-12px);
        box-shadow: 0 30px 60px rgba(0, 91, 255, 0.12);
        border-color: var(--primary-electric);
        .card-glow { opacity: 0.1; }
        .sol-btn { background: var(--primary-deep); color: white; }
      }
    }
    .card-glow {
      position: absolute; top: -50%; left: -50%;
      width: 200%; height: 200%;
      opacity: 0; transition: opacity 0.4s ease;
      pointer-events: none;
    }
    .card-content {
      position: relative; z-index: 1; padding: 40px;
      display: flex; flex-direction: column; height: 100%;
    }
    .sol-icon-box {
      width: 64px; height: 64px; border-radius: 18px;
      display: flex; align-items: center; justify-content: center;
      color: white; margin-bottom: 28px;
    }
    .sol-info {
      flex: 1;
      h3 { font-size: 1.6rem; margin-bottom: 12px; }
      p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 24px; }
    }
    .features {
      list-style: none; margin-bottom: 32px;
      li {
        display: flex; align-items: center; gap: 10px;
        font-size: 0.88rem; font-weight: 600; color: var(--primary-deep);
        margin-bottom: 10px;
        lucide-icon { color: var(--primary-electric); }
      }
    }
    .sol-btn {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      padding: 14px; border-radius: 14px;
      background: #F8FAFC; color: var(--primary-deep);
      font-weight: 700; font-size: 0.92rem;
      transition: all 0.3s ease;
    }

    /* ── CTA ── */
    .sol-cta { padding: 80px 5%; text-align: center; }
    .cta-card {
      max-width: 1000px; margin: 0 auto;
      padding: 60px; border-radius: 40px;
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%);
      color: white;
      display: flex; align-items: center; justify-content: space-between; gap: 40px;
      text-align: left;
      @media(max-width:900px){ flex-direction: column; text-align: center; padding: 40px; }
      h2 { font-size: 2.2rem; color: white; margin-bottom: 16px; }
      p { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 500px; }
    }
    .cta-actions { display: flex; gap: 16px; flex-shrink: 0;
      @media(max-width:480px){ flex-direction: column; }
    }
    .btn-premium.secondary-light {
      background: transparent; border: 2px solid rgba(255,255,255,0.3); color: white;
      &:hover { background: white; color: var(--primary-deep); border-color: white; }
    }

    /* ── Reveal ── */
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class SolutionsComponent implements AfterViewInit {
  readonly CheckCircle = CheckCircle;
  readonly ArrowRight = ArrowRight;

  solutions = [
    { 
      id: '3dexperience',
      name: '3DEXPERIENCE', 
      shortDesc: 'La plateforme collaborative ultime pour connecter personnes, idées et données sur un environnement Cloud unifié.',
      features: ['PLM collaboratif', 'Gestion des données Cloud', 'Tableaux de bord business'],
      icon: Layers,
      color: 'linear-gradient(135deg, #6B21A8, #005BFF)'
    },
    { 
      id: 'catia',
      name: 'CATIA', 
      shortDesc: 'Le leader mondial de la conception 3D et de l\'ingénierie système pour les industries de pointe.',
      features: ['CAO 3D avancée', 'Surfacique complexe', 'Ingénierie système'],
      icon: Monitor,
      color: 'linear-gradient(135deg, #0B1F3A, #005BFF)'
    },
    { 
      id: 'solidworks',
      name: 'SOLIDWORKS', 
      shortDesc: 'Solutions de conception mécaniques puissantes et intuitives pour accélérer l\'innovation produit.',
      features: ['Modélisation solide', 'Simulation intégrée', 'Gestion technique PDM'],
      icon: Database,
      color: 'linear-gradient(135deg, #1a73e8, #0B1F3A)'
    },
    { 
      id: 'simulia',
      name: 'SIMULIA', 
      shortDesc: 'Simulation multi-physique avancée pour prédire et valider le comportement de vos produits.',
      features: ['Analyse FEA / CFD', 'Optimisation topologique', 'Simulation acoustique'],
      icon: Zap,
      color: 'linear-gradient(135deg, #0B1F3A, #6B21A8)'
    },
    { 
      id: 'enovia',
      name: 'ENOVIA', 
      shortDesc: 'Gérez et sécurisez vos données produits avec une solution de gouvernance et de collaboration PLM.',
      features: ['Gestion des nomenclatures', 'Contrôle des versions', 'Workflows de validation'],
      icon: Shield,
      color: 'linear-gradient(135deg, #0d3a6e, #0B1F3A)'
    },
    { 
      id: 'delmia',
      name: 'DELMIA', 
      shortDesc: 'Planification et optimisation des opérations industrielles pour atteindre l\'excellence opérationnelle.',
      features: ['Simulation d\'usine', 'Programmation robotique', 'Optimisation logistique'],
      icon: Layout,
      color: 'linear-gradient(135deg, #005BFF, #0d3a6e)'
    }
  ];

  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.solutions-page .reveal').forEach(el => obs.observe(el));
  }
}
