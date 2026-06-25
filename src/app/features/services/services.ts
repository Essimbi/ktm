import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, Settings, BookOpen, Award, BarChart,
  HardHat, Headphones, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users
} from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="services-page">

      <!-- ── Hero ── -->
      <section class="srv-hero">
        <div class="hero-bg-grid"></div>
        <div class="hero-content reveal">
          <span class="hero-tag">Ce que nous faisons</span>
          <h1>Nos <span class="gradient-text-light">Services Experts</span></h1>
          <p>Un accompagnement complet et personnalisé — de l'audit stratégique au support post-déploiement — pour garantir le succès de votre transformation digitale.</p>
          <div class="hero-ctas">
            <a routerLink="/contact" class="btn-premium primary">Demander un devis <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/formations" class="btn-outline-white">Voir les formations</a>
          </div>
        </div>
      </section>

      <!-- ── Stats ── -->
      <div class="srv-stats">
        <div class="stat-item" *ngFor="let s of stats">
          <strong>{{s.value}}</strong>
          <span>{{s.label}}</span>
        </div>
      </div>

      <!-- ── Main services ── -->
      <section class="section-container">
        <div class="sec-header reveal">
          <h2 class="section-title">Notre Offre de Services</h2>
          <p class="section-subtitle">Des expertises couvrant l'ensemble du cycle de vie de vos projets industriels.</p>
        </div>

        <div class="services-grid">
          <div class="srv-card reveal" *ngFor="let s of services; let i = index" [style.--delay]="i * 0.1 + 's'">
            <div class="srv-icon" [style.background]="s.color">
              <lucide-icon [name]="s.icon" size="28"></lucide-icon>
            </div>
            <div class="srv-body">
              <h3>{{s.title}}</h3>
              <p>{{s.desc}}</p>
              <ul class="srv-features">
                <li *ngFor="let f of s.features">
                  <lucide-icon [name]="CheckCircle" size="14"></lucide-icon>
                  {{f}}
                </li>
              </ul>
            </div>
            <a routerLink="/contact" class="srv-link">
              En savoir plus <lucide-icon [name]="ArrowRight" size="14"></lucide-icon>
            </a>
          </div>
        </div>
      </section>

      <!-- ── Featured: Consulting ── -->
      <section class="consulting-banner">
        <div class="section-container">
          <div class="banner-inner reveal">
            <div class="banner-text">
              <span class="banner-tag">Notre Flagship</span>
              <h2>Consulting Technologique & Stratégie Industrie 4.0</h2>
              <p>Nos consultants certifiés analysent vos processus actuels, identifient les goulots d'étranglement et co-construisent avec vous une feuille de route de digitalisation ambitieuse et réaliste.</p>
              <ul class="banner-list">
                <li *ngFor="let item of consultingPoints">
                  <lucide-icon [name]="CheckCircle" size="16"></lucide-icon>
                  {{item}}
                </li>
              </ul>
              <a routerLink="/contact" class="btn-premium primary">Réserver une consultation <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            </div>
            <div class="banner-visual">
              <div class="visual-card" *ngFor="let v of visualCards">
                <lucide-icon [name]="v.icon" size="24"></lucide-icon>
                <span>{{v.label}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Process ── -->
      <section class="process-section section-container">
        <div class="sec-header reveal">
          <h2 class="section-title">Notre Processus</h2>
          <p class="section-subtitle">Une méthodologie éprouvée, structurée en 4 étapes, pour des résultats garantis.</p>
        </div>
        <div class="process-steps">
          <div class="step reveal" *ngFor="let step of process; let i = index" [style.--delay]="i * 0.12 + 's'">
            <div class="step-number">{{i + 1}}</div>
            <div class="step-connector" *ngIf="i < process.length - 1"></div>
            <h4>{{step.title}}</h4>
            <p>{{step.desc}}</p>
          </div>
        </div>
      </section>

      <!-- ── CTA final ── -->
      <section class="srv-cta">
        <div class="cta-inner reveal">
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>Échangeons sur vos besoins lors d'un appel découverte gratuit de 30 minutes.</p>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn-premium primary">Planifier un appel <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/solutions" class="btn-outline-white">Voir nos solutions</a>
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    .services-page { overflow-x: hidden; }

    /* ── Hero ── */
    .srv-hero {
      position: relative;
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 60%, var(--primary-gold) 100%);
      padding: 100px 5% 80px;
      text-align: center;
      color: white;
      overflow: hidden;
      h1, h2, h3, h4 { color: white; }
    }
    .hero-bg-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 50px 50px;
    }
    .hero-content {
      position: relative; z-index: 1; max-width: 800px; margin: 0 auto;
      h1 { font-size: 4rem; font-weight: 800; margin: 20px 0; @media(max-width:768px){font-size:2.5rem} }
      p  { font-size: 1.15rem; opacity: 0.82; margin-bottom: 40px; line-height: 1.7; }
    }
    .hero-tag {
      display: inline-block; padding: 8px 22px;
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 2px;
    }
    .gradient-text-light {
      background: linear-gradient(135deg, #fff 0%, var(--primary-gold) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .btn-outline-white {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 28px; border-radius: 50px;
      border: 2px solid rgba(255,255,255,0.5); color: white;
      font-weight: 600; font-size: 0.95rem;
      transition: all 0.2s ease;
      &:hover { background: white; color: var(--primary-deep); border-color: white; transform: translateY(-2px); }
    }

    /* ── Stats ── */
    .srv-stats {
      display: grid; grid-template-columns: repeat(4, 1fr);
      background: white; box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      @media(max-width:768px){ grid-template-columns: repeat(2, 1fr); }
    }
    .stat-item {
      padding: 28px 20px; text-align: center;
      border-right: 1px solid #E2E8F0;
      &:last-child { border: none; }
      strong { display: block; font-size: 2.2rem; font-weight: 800; color: var(--primary-gold); }
      span { font-size: 0.82rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500; }
    }

    /* ── Services grid ── */
    .sec-header { text-align: center; margin-bottom: 50px; }
    .services-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 28px;
    }
    .srv-card {
      background: white; border-radius: 24px; padding: 36px;
      border: 1px solid #E2E8F0;
      display: flex; flex-direction: column; gap: 0;
      transition: all 0.35s ease;
      animation-delay: var(--delay, 0s);
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 24px 60px rgba(0, 45, 91, 0.1);
        border-color: var(--primary-gold);
      }
    }
    .srv-icon {
      width: 60px; height: 60px; border-radius: 18px;
      display: flex; align-items: center; justify-content: center;
      color: white; margin-bottom: 24px; flex-shrink: 0;
    }
    .srv-body {
      flex: 1;
      h3 { font-size: 1.25rem; margin-bottom: 12px; }
      p  { color: var(--text-muted); font-size: 0.9rem; line-height: 1.7; margin-bottom: 20px; }
    }
    .srv-features {
      list-style: none; margin-bottom: 24px;
      li {
        display: flex; align-items: center; gap: 10px;
        font-size: 0.88rem; font-weight: 500; padding: 6px 0;
        border-bottom: 1px solid #F1F5F9;
        color: var(--primary-deep);
        lucide-icon { color: var(--primary-gold); flex-shrink: 0; }
        &:last-child { border: none; }
      }
    }
    .srv-link {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 0.88rem; font-weight: 700; color: var(--primary-gold);
      margin-top: auto; padding-top: 16px; border-top: 1px solid #E2E8F0;
      transition: gap 0.2s;
      &:hover { gap: 10px; }
    }

    /* ── Consulting banner ── */
    .consulting-banner {
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%);
      padding: 0;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .banner-inner {
      display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
      @media(max-width:900px){ grid-template-columns: 1fr; }
    }
    .banner-tag {
      display: inline-block; padding: 6px 16px;
      background: var(--primary-gold); color: white;
      border-radius: 50px; font-size: 0.75rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;
    }
    .banner-text {
      h2 { font-size: 2.2rem; margin-bottom: 16px; }
      p  { color: rgba(255,255,255,0.75); font-size: 1rem; line-height: 1.8; margin-bottom: 28px; }
    }
    .banner-list {
      list-style: none; margin-bottom: 36px;
      li { display: flex; align-items: center; gap: 12px; padding: 8px 0; font-size: 0.92rem; font-weight: 600; color: white;
        lucide-icon { color: var(--primary-gold); flex-shrink: 0; }
        border-bottom: 1px solid rgba(255,255,255,0.08);
        &:last-child { border: none; }
      }
    }
    .banner-visual {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    }
    .visual-card {
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px; padding: 24px;
      display: flex; flex-direction: column; align-items: center; gap: 12px;
      text-align: center; color: white;
      lucide-icon { color: var(--primary-gold); }
      span { font-size: 0.88rem; font-weight: 600; }
      transition: all 0.2s ease;
      &:hover { background: rgba(255,255,255,0.12); }
    }

    /* ── Process ── */
    .process-steps {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
      margin-top: 50px; position: relative;
      @media(max-width:900px){ grid-template-columns: repeat(2, 1fr); }
      @media(max-width:480px){ grid-template-columns: 1fr; }
    }
    .step {
      text-align: center; position: relative; padding: 32px 20px;
      background: white; border-radius: 20px; border: 1px solid #E2E8F0;
      animation-delay: var(--delay, 0s);
      transition: all 0.3s ease;
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 45, 91, 0.08); border-color: var(--primary-gold); }
      h4 { font-size: 1rem; margin-bottom: 10px; margin-top: 16px; }
      p  { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }
    }
    .step-number {
      width: 52px; height: 52px; border-radius: 50%;
      background: var(--primary-gold); color: white;
      font-size: 1.2rem; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto;
    }

    /* ── CTA final ── */
    .srv-cta {
      background: linear-gradient(135deg, var(--primary-gold) 0%, var(--primary-deep) 100%);
      padding: 60px 5%; text-align: center; color: white;
      h1, h2, h3, h4 { color: white; };
      margin-bottom: 60px;
    }
    .cta-inner {
      max-width: 680px; margin: 0 auto;
      h2 { font-size: 3rem; margin-bottom: 16px; @media(max-width:768px){font-size:2rem} }
      p  { font-size: 1.1rem; opacity: 0.8; margin-bottom: 40px; }
    }
    .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* ── Reveal ── */
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class ServicesComponent implements AfterViewInit {
  readonly Settings = Settings;
  readonly BookOpen = BookOpen;
  readonly Award = Award;
  readonly BarChart = BarChart;
  readonly HardHat = HardHat;
  readonly Headphones = Headphones;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly Zap = Zap;
  readonly Shield = Shield;
  readonly TrendingUp = TrendingUp;
  readonly Users = Users;

  stats = [
    { value: '50+', label: 'Projets déployés' },
    { value: '300+', label: 'Professionnels formés' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '24h', label: 'Délai de réponse' },
  ];

  services = [
    {
      title: 'Intégration de Solutions PLM',
      desc: 'Déploiement complet et configuration personnalisée des logiciels Dassault Systèmes au sein de votre infrastructure existante.',
      icon: Settings, color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))',
      features: ['Installation on-premise et cloud', 'Migration de données existantes', 'Configuration PLM sur mesure', 'Tests & recette utilisateurs']
    },
    {
      title: 'Formation Professionnelle',
      desc: 'Programmes certifiants animés par des instructeurs accrédités Dassault Systèmes pour monter en compétence vos équipes.',
      icon: BookOpen, color: 'linear-gradient(135deg, #C5A059, #002D5B)',
      features: ['CATIA, SOLIDWORKS, SIMULIA', 'Formations intra et inter-entreprises', 'Certifications officielles', 'E-learning et présentiel']
    },
    {
      title: 'Accompagnement Industriel',
      desc: 'Expertise technique de haut niveau pour vos projets de conception, simulation et optimisation des processus de fabrication.',
      icon: HardHat, color: 'linear-gradient(135deg, var(--primary-deep), #C5A059)',
      features: ['Assistance à maîtrise d\'ouvrage', 'Optimisation des processus', 'Audit de conception et qualité', 'Ingénierie simultanée']
    },
    {
      title: 'Support & Maintenance',
      desc: 'Support réactif et proactif pour garantir la disponibilité et la performance de vos solutions digitales en continu.',
      icon: Headphones, color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))',
      features: ['Hotline dédiée 5j/7', 'Mises à jour et montées de version', 'Monitoring des performances', 'Contrats de maintenance SLA']
    },
    {
      title: 'Certifications & Audit',
      desc: 'Préparation aux certifications Dassault Systèmes et audit de vos compétences internes pour identifier les axes d\'amélioration.',
      icon: Award, color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))',
      features: ['Préparation CSWA/CSWP', 'Audit de compétences équipes', 'Plan de formation sur mesure', 'Suivi post-certification']
    },
    {
      title: 'Consulting Stratégique',
      desc: 'Conseils à haut niveau pour définir votre stratégie Industrie 4.0, prioriser vos investissements et maximiser le ROI.',
      icon: BarChart, color: 'linear-gradient(135deg, #C5A059, var(--primary-deep))',
      features: ['Roadmap de transformation', 'Analyse ROI et business case', 'Benchmark sectoriel', 'Change management']
    },
  ];

  consultingPoints = [
    'Audit complet de vos processus actuels',
    'Identification des opportunités de digitalisation',
    'Définition d\'une roadmap sur 12 à 36 mois',
    'Accompagnement au changement (conduite du changement)',
    'Mesure du ROI et des indicateurs de performance',
  ];

  visualCards = [
    { icon: Zap, label: 'Analyse rapide' },
    { icon: TrendingUp, label: 'Croissance mesurable' },
    { icon: Shield, label: 'Approche sécurisée' },
    { icon: Users, label: 'Équipes engagées' },
  ];

  process = [
    { title: 'Découverte', desc: 'Audit de vos besoins, de vos processus et de votre contexte industriel.' },
    { title: 'Conception', desc: 'Définition de la solution adaptée et de la feuille de route projet.' },
    { title: 'Déploiement', desc: 'Intégration technique, formation des équipes et accompagnement.' },
    { title: 'Optimisation', desc: 'Suivi des performances, support continu et montée en maturité.' },
  ];

  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.services-page .reveal').forEach(el => obs.observe(el));
  }
}
