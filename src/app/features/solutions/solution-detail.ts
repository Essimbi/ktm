import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, ArrowRight, CheckCircle, ChevronRight } from 'lucide-angular';

interface SolutionDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  features: string[];
  useCases: { title: string; desc: string }[];
  industries: string[];
  certifications: { name: string; level: string; duration: string; desc: string }[];
  sectors?: { name: string; description: string; features: string[]; kpis: string[]; alert: string }[];
}

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="page-main" *ngIf="solution">
      <!-- Hero -->
      <section class="sol-hero" [style.background]="solution.gradient">
        <div class="breadcrumb">
          <a routerLink="/">Accueil</a>
          <lucide-icon [name]="ChevronRight" size="14"></lucide-icon>
          <a routerLink="/solutions">Solutions</a>
          <lucide-icon [name]="ChevronRight" size="14"></lucide-icon>
          <span>{{solution.name}}</span>
        </div>
        <h1>{{solution.name}}</h1>
        <p class="tagline">{{solution.tagline}}</p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn-premium primary">Demander une démo <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
          <a routerLink="/formations" class="btn-premium secondary">Voir les formations</a>
        </div>
      </section>

      <!-- Description -->
      <section class="section-container">
        <div class="sol-overview">
          <div class="overview-text">
            <h2>Qu'est-ce que {{solution.name}} ?</h2>
            <p>{{solution.description}}</p>
            <div class="industries-list">
              <h4>Industries clés</h4>
              <div class="tags">
                <span *ngFor="let ind of solution.industries">{{ind}}</span>
              </div>
            </div>
          </div>
          <div class="features-box">
            <h3>Fonctionnalités clés</h3>
            <ul>
              <li *ngFor="let f of solution.features">
                <lucide-icon [name]="CheckCircle" size="16"></lucide-icon>
                <span>{{f}}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Sector details -->
      <section class="sector-details-section" *ngIf="solution.sectors?.length">
        <div class="section-container">
          <div class="sec-header">
            <span class="section-tag">Solutions sectorielles</span>
            <h2 class="section-title">Une réponse précise pour chaque secteur</h2>
          </div>
          <div class="sector-detail-grid">
            <article class="sector-card" *ngFor="let sector of solution.sectors">
              <h3>{{sector.name}}</h3>
              <p>{{sector.description}}</p>
              <div class="sector-block">
                <h4>Fonctionnalités</h4>
                <ul>
                  <li *ngFor="let feature of sector.features">{{feature}}</li>
                </ul>
              </div>
              <div class="sector-block">
                <h4>KPIs</h4>
                <ul class="kpi-list">
                  <li *ngFor="let kpi of sector.kpis">{{kpi}}</li>
                </ul>
              </div>
              <div class="sector-alert">
                <h4>Exemple d'alerte IA</h4>
                <p>{{sector.alert}}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="use-cases-section">
        <div class="section-container">
          <h2 class="section-title" style="color:white">Cas d'usage</h2>
          <div class="use-cases-grid">
            <div class="use-case-card" *ngFor="let uc of solution.useCases">
              <h4>{{uc.title}}</h4>
              <p>{{uc.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="certifications-section">
        <div class="section-container">
          <div class="cert-header">
            <h2 class="section-title">Certifications {{solution.name}}</h2>
            <p>Validez votre expertise et boostez votre carrière avec nos certifications officielles reconnues mondialement.</p>
          </div>
          <div class="certifications-grid">
            <div class="cert-card" *ngFor="let cert of solution.certifications">
              <div class="cert-level-badge" [class]="cert.level.toLowerCase()">{{cert.level}}</div>
              <h4>{{cert.name}}</h4>
              <p>{{cert.desc}}</p>
              <a routerLink="/formations" class="cert-cta">
                S'inscrire <lucide-icon [name]="ArrowRight" size="14"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-container cta-bottom">
        <div class="cta-box">
          <h2>Prêt à adopter {{solution.name}} ?</h2>
          <p>Nos experts vous accompagnent de l'évaluation à la mise en production.</p>
          <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
            <a routerLink="/contact" class="btn-premium primary">Contactez un expert <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/formations" class="btn-premium secondary">Se former</a>
          </div>
        </div>
      </section>
    </main>

    <div class="not-found" *ngIf="!solution">
      <h2>Solution introuvable</h2>
      <a routerLink="/solutions" class="btn-premium primary">Voir toutes les solutions</a>
    </div>
  `,
  styles: [`
    .sol-hero {
      padding: 85px 5% 65px;
      color: white; text-align: center;
      h1, h2, h3, h4 { color: white; }
      .breadcrumb {
        display: flex; align-items: center; justify-content: center; gap: 8px;
        font-size: 0.85rem; opacity: 0.7; margin-bottom: 32px;
        a { color: white; } a:hover { opacity: 1; }
      }
      h1 { font-size: 4.5rem; font-weight: 800; margin-bottom: 20px; @media(max-width:768px){font-size:2.8rem} }
      .tagline { font-size: 1.3rem; opacity: 0.85; max-width: 700px; margin: 0 auto 40px; }
      .hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    }
    .sol-overview {
      display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
      @media(max-width:900px) { grid-template-columns: 1fr; }
      h2 { font-size: 2.2rem; margin-bottom: 20px; }
      p { color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; }
    }
    .industries-list {
      margin-top: 30px;
      h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 12px; }
      .tags { display: flex; flex-wrap: wrap; gap: 10px;
        span { padding: 7px 16px; background: rgba(197, 160, 89, 0.08); color: var(--primary-gold); border-radius: 50px; font-size: 0.82rem; font-weight: 600; }
      }
    }
    .features-box {
      background: white; border-radius: 24px; padding: 36px;
      border: 1px solid #E2E8F0; box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      h3 { font-size: 1.3rem; margin-bottom: 24px; }
      ul { list-style: none;
        li { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #F1F5F9; font-size: 0.95rem;
          &:last-child { border: none; }
          lucide-icon { color: var(--primary-gold); flex-shrink: 0; }
        }
      }
    }
    .sector-details-section {
      background: linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%);
      padding: 80px 5%;
    }
    .sec-header { text-align: center; margin-bottom: 40px; }
    .section-tag {
      display: inline-block; padding: 8px 20px; border-radius: 999px; font-size: 0.75rem;
      font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;
      background: rgba(197, 160, 89, 0.12); color: var(--primary-gold);
      margin-bottom: 16px;
    }
    .section-title { font-size: 2.2rem; margin-bottom: 10px; color: var(--primary-deep); }
    .sector-detail-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;
    }
    .sector-card {
      background: white; border-radius: 24px; padding: 28px; border: 1px solid #E2E8F0;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
      h3 { font-size: 1.2rem; margin-bottom: 12px; color: var(--primary-deep); }
      p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; }
    }
    .sector-block {
      margin-top: 18px;
      h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 10px; }
      ul { list-style: none; padding: 0; margin: 0; }
      li { padding: 6px 0; font-size: 0.9rem; color: var(--primary-deep); }
    }
    .kpi-list li { color: var(--primary-gold); font-weight: 700; }
    .sector-alert {
      margin-top: 18px; background: rgba(197, 160, 89, 0.08); border-radius: 16px; padding: 16px;
      h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary-gold); margin-bottom: 10px; }
      p { font-size: 0.9rem; color: var(--primary-deep); margin: 0; }
    }
    .use-cases-section {
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%);
      padding: 60px 5%;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .use-cases-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px; margin-top: 50px;
    }
    .use-case-card {
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px; padding: 32px; color: white;
      transition: all 0.3s ease;
      h4 { font-size: 1.1rem; margin-bottom: 12px; }
      p { font-size: 0.9rem; opacity: 0.7; line-height: 1.6; }
      &:hover { background: rgba(255,255,255,0.12); transform: translateY(-5px); }
    }
    
    /* ── Certifications ── */
    .certifications-section {
      background: #F8FAFC; padding: 80px 5%;
    }
    .cert-header {
      text-align: center; margin-bottom: 50px;
      h2 { font-size: 2.5rem; margin-bottom: 16px; }
      p { color: var(--text-muted); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }
    }
    .certifications-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px; max-width: 1200px; margin: 0 auto;
    }
    .cert-card {
      background: white; border-radius: 20px; padding: 28px;
      border: 1px solid #E2E8F0; box-shadow: 0 4px 16px rgba(0,0,0,0.04);
      transition: all 0.3s ease; position: relative;
      &:hover {
        transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,45,91,0.08);
        border-color: var(--primary-gold);
      }
      h4 { font-size: 1.2rem; margin-bottom: 12px; color: var(--primary-deep); }
      p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px; }
    }
    .cert-level-badge {
      position: absolute; top: 16px; right: 16px;
      padding: 4px 12px; border-radius: 12px; font-size: 0.7rem;
      font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
      &.débutant { background: rgba(34, 197, 94, 0.1); color: #16A34A; }
      &.intermédiaire { background: rgba(251, 191, 36, 0.1); color: #D97706; }
      &.avancé { background: rgba(239, 68, 68, 0.1); color: #DC2626; }
      &.expert { background: rgba(147, 51, 234, 0.1); color: #9333EA; }
    }
    .cert-cta {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.9rem; font-weight: 700; color: var(--primary-gold);
      transition: gap 0.2s ease;
      &:hover { gap: 12px; }
    }
    .cta-bottom { padding: 60px 5%; padding-bottom: 140px;}
    .cta-box {
      max-width: 700px; margin: 0 auto; text-align: center;
      h2 { font-size: 2.5rem; margin-bottom: 16px; }
      p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 36px; }
    }
    .not-found { text-align: center; padding: 80px 20px; padding-bottom: 140px; h2 { margin-bottom: 24px; } }
  `]
})
export class SolutionDetailComponent implements OnInit {
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly ChevronRight = ChevronRight;

  solution: SolutionDetail | undefined;

  private solutions: SolutionDetail[] = [
    {
      id: 'solidworks',
      name: 'SOLIDWORKS',
      tagline: 'La référence mondiale en conception 3D',
      description: 'Le Digital Tech Park, centre agréé Dassault Systèmes, vous accompagne vers la réussite de vos certifications professionnelles en conception 3D. L\'objectif est d\'acquérir une expertise certifiée SOLIDWORKS pour exceller dans le monde professionnel et industriel.',
      gradient: 'linear-gradient(135deg, #E32636 0%, var(--primary-deep) 100%)',
      features: [
        'Interface intuitive et professionnelle',
        'Standards industriels internationaux',
        'Large communauté et support mondial',
        'Utilisé par les entreprises, écoles et universités',
        'Intégré à la plateforme 3DEXPERIENCE'
      ],
      useCases: [
        { title: 'Ingénierie & Conception', desc: 'Conception rapide et intuitive de pièces mécaniques et d\'assemblages complexes.' },
        { title: 'Design Industriel', desc: 'Création de formes ergonomiques et esthétiques pour les produits grand public.' },
        { title: 'Simulation', desc: 'Test de résistance, de cinématique et de dynamique des fluides intégré.' },
        { title: 'Mise en production', desc: 'Génération automatique de mises en plan et de nomenclatures précises.' }
      ],
      industries: ['Ingénieurs', 'Designers industriels', 'Écoles & universités', 'PME / Start-ups'],
      certifications: [
        { name: 'CSWA – Certified SOLIDWORKS Associate', level: 'Débutant', duration: 'Bases', desc: 'Niveau débutant – bases de la modélisation 3D.' },
        { name: 'CSWP – Certified SOLIDWORKS Professional', level: 'Avancé', duration: 'Avancé', desc: 'Niveau avancé – conception professionnelle.' },
        { name: 'CSWE – Certified SOLIDWORKS Expert', level: 'Expert', duration: 'Expert', desc: 'Niveau expert – maîtrise complète du logiciel.' },
        { name: 'TECE – Certifications Éducateurs', level: 'Expert', duration: 'Pédagogie', desc: 'Pour enseignants & formateurs techniques.' }
      ]
    },
    {
      id: 'jumeau-numerique',
      name: 'Jumeau Numérique',
      tagline: 'Imaginez pouvoir tester le réel avant même qu\'il n\'existe.',
      description: 'Le Jumeau Numérique au service de tous les secteurs. Découvrez comment nous digitalisons les villes, l\'industrie, la santé et plus encore grâce aux technologies Dassault Systèmes et partenaires. L\'innovation au service de votre transformation digitale.',
      gradient: 'linear-gradient(135deg, #00B4D8 0%, #002D5B 100%)',
      features: [
        'City Planner - Villes et Urbanisme',
        'DELMIA - Industrie maîtrisée',
        'ITEROP - Gestion des Processus',
        'BIOVIA - Santé et Sciences de la vie',
        'GEOVIA - Mines et Infrastructures'
      ],
      useCases: [
        { title: 'Villes et Urbanisme', desc: 'Visualisez vos villes en 3D et planifiez leur futur de manière intelligente (City Planner).' },
        { title: 'Industrie et Gestion des Processus', desc: 'Optimisez vos lignes de production et automatisez vos processus pour gagner en efficacité (DELMIA / ITEROP).' },
        { title: 'Santé et Sciences de la Vie', desc: 'Simulez, testez et améliorez vos traitements et laboratoires en toute sécurité (BIOVIA).' },
        { title: 'Mines & Infrastructures / Génie Civil', desc: 'Planifiez vos ressources et concevez vos infrastructures avec précision et durabilité (GEOVIA).' }
      ],
      industries: ['Urbanisme', 'Industrie', 'Santé', 'Mines', 'Génie Civil'],
      certifications: [
        { name: 'Initiation au Jumeau Numérique', level: 'Débutant', duration: '1 jour', desc: 'Comprendre les concepts, les enjeux et les bénéfices du Digital Twin.' },
        { name: 'Déploiement IoT & Digital Twin', level: 'Avancé', duration: '3 jours', desc: 'Maîtriser l\'intégration des capteurs et la remontée de données vers la maquette 3D.' }
      ]
    },
    {
      id: 'catia',
      name: 'CATIA',
      tagline: 'Le leader mondial de la conception 3D et de l\'ingénierie avancée.',
      description: 'CATIA est la solution de conception 3D la plus avancée du marché. Utilisée par les leaders mondiaux de l\'aéronautique, l\'automobile et l\'industrie, elle offre des capacités de modélisation surfacique, de conception mécanique et d\'ingénierie système inégalées.',
      gradient: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%)',
      features: ['Modélisation 3D paramétrique', 'Design surfacique avancé', 'Assemblages complexes', 'Simulation cinématique', 'Mise en plan technique', 'Gestion des configurations', 'Collaboration en temps réel'],
      useCases: [
        { title: 'Aéronautique', desc: 'Conception de structures aéronefs, moteurs et systèmes embarqués à haute précision.' },
        { title: 'Automobile', desc: 'Design de carrosserie, pièces mécaniques et assemblages véhicules.' },
        { title: 'Énergie', desc: 'Conception d\'équipements industriels pour les secteurs pétrolier et énergétique.' },
        { title: 'BTP', desc: 'Ingénierie des structures, gros œuvre et équipements de construction.' },
      ],
      industries: ['Aéronautique', 'Automobile', 'Énergie', 'BTP', 'Naval', 'Défense'],
      certifications: [
        { name: 'CATIA V5 Essentials', level: 'Débutant', duration: '5 jours', desc: 'Maîtrisez les fondamentaux de la modélisation 3D et des assemblages avec CATIA V5.' },
        { name: 'CATIA V5 Surfacique', level: 'Intermédiaire', duration: '3 jours', desc: 'Apprenez les techniques avancées de modélisation surfacique pour le design complexe.' },
        { name: 'CATIA V6 3DEXPERIENCE', level: 'Intermédiaire', duration: '4 jours', desc: 'Découvrez la nouvelle génération CATIA sur plateforme collaborative 3DEXPERIENCE.' },
        { name: 'CATIA Expert Certification', level: 'Expert', duration: '2 jours', desc: 'Certification officielle Dassault Systèmes pour devenir expert CATIA reconnu.' },
      ],
    },
    {
      id: '3dexperience',
      name: '3DEXPERIENCE',
      tagline: 'La plateforme unifiée pour l\'innovation collaborative.',
      description: 'La plateforme 3DEXPERIENCE de Dassault Systèmes connecte les personnes, les idées et les données sur une seule plateforme cloud. Elle permet une collaboration sans frontières et une gestion PLM complète, du concept au service après-vente.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['PLM intégré', 'Collaboration cloud', 'Gestion des données produit', 'Workflow intelligent', 'Tableau de bord analytique', 'Gestion des exigences', 'Intégration CATIA & applications métiers'],
      useCases: [
        { title: 'Co-développement', desc: 'Équipes distribuées collaborant en temps réel sur les mêmes modèles.' },
        { title: 'Gestion du cycle de vie', desc: 'Suivi complet du produit de la conception à la maintenance.' },
        { title: 'Universités', desc: 'Environnement pédagogique collaboratif pour les étudiants ingénieurs.' },
        { title: 'Industrie agile', desc: 'Accélération du time-to-market grâce aux workflows automatisés.' },
      ],
      industries: ['Toutes industries', 'Éducation', 'Défense', 'Sciences de la vie'],
      certifications: [
        { name: '3DEXPERIENCE Fundamentals', level: 'Débutant', duration: '2 jours', desc: 'Découvrez les bases de la plateforme collaborative 3DEXPERIENCE.' },
        { name: '3DEXPERIENCE PLM', level: 'Intermédiaire', duration: '4 jours', desc: 'Maîtrisez la gestion du cycle de vie produit sur 3DEXPERIENCE.' },
        { name: '3DEXPERIENCE Administrator', level: 'Avancé', duration: '3 jours', desc: 'Administrez et configurez la plateforme 3DEXPERIENCE pour votre entreprise.' },
      ],
    },
    {
      id: 'simulia',
      name: 'SIMULIA',
      tagline: 'Simulation avancée pour des produits fiables et optimisés.',
      description: 'SIMULIA offre des capacités de simulation multi-physiques de pointe. De l\'analyse par éléments finis (FEA) à la dynamique des fluides (CFD), en passant par l\'analyse des matériaux composites, SIMULIA permet de prédire le comportement des produits avant leur fabrication.',
      gradient: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%)',
      features: ['Analyse statique et dynamique', 'Simulation thermique', 'Dynamique des fluides (CFD)', 'Analyse de fatigue', 'Optimisation topologique', 'Matériaux composites', 'Crash test virtuel'],
      useCases: [
        { title: 'Résistance des structures', desc: 'Vérification de la tenue mécanique sous contraintes statiques et dynamiques.' },
        { title: 'Réduction des prototypes', desc: 'Éliminer les cycles de test physiques coûteux grâce à la simulation.' },
        { title: 'Aérodynamisme', desc: 'Optimisation des formes pour réduire la traînée et améliorer les performances.' },
        { title: 'Électronique & thermique', desc: 'Gestion thermique des composants électroniques sous contrainte.' },
      ],
      industries: ['Aéronautique', 'Automobile', 'Énergie', 'Défense', 'Médical'],
      certifications: [
        { name: 'SIMULIA Abaqus Fundamentals', level: 'Débutant', duration: '4 jours', desc: 'Apprenez les bases de la simulation par éléments finis avec Abaqus.' },
        { name: 'SIMULIA Advanced Nonlinear', level: 'Avancé', duration: '3 jours', desc: 'Maîtrisez les analyses non-linéaires complexes avec SIMULIA.' },
        { name: 'SIMULIA CFD Specialist', level: 'Intermédiaire', duration: '3 jours', desc: 'Spécialisez-vous dans la dynamique des fluides computationnelle.' },
      ],
    },
    {
      id: 'enovia',
      name: 'ENOVIA',
      tagline: 'Gérez, sécurisez et collaborez autour de vos données produit.',
      description: 'ENOVIA est la solution PLM de Dassault Systèmes dédiée à la gestion des données produit et à la collaboration d\'entreprise. Elle centralise l\'ensemble des informations techniques, gère les workflows et assure la conformité réglementaire.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Gestion des nomenclatures (BOM)', 'Contrôle de version des documents', 'Workflow de validation', 'Conformité réglementaire', 'Gestion des modifications', 'Portail fournisseurs', 'Reporting et tableaux de bord'],
      useCases: [
        { title: 'Industrie pharmaceutique', desc: 'Gestion des dossiers réglementaires et validation des processus.' },
        { title: 'Équipements complexes', desc: 'Suivi des configurations et gestion des variantes produit.' },
        { title: 'Chaîne d\'approvisionnement', desc: 'Collaboration avec les fournisseurs et sous-traitants.' },
        { title: 'Qualité & conformité', desc: 'Gestion des non-conformités et actions correctives.' },
      ],
      industries: ['Pharmaceutique', 'Aéronautique', 'Automobile', 'Électronique'],
      certifications: [
        { name: 'ENOVIA Fundamentals', level: 'Débutant', duration: '3 jours', desc: 'Découvrez les bases de la gestion PLM avec ENOVIA.' },
        { name: 'ENOVIA Administrator', level: 'Avancé', duration: '4 jours', desc: 'Administrez et configurez ENOVIA pour votre organisation.' },
      ],
    },
    {
      id: 'delmia',
      name: 'DELMIA',
      tagline: 'Excellence opérationnelle et planification de la production du futur.',
      description: 'DELMIA est la solution de Dassault Systèmes dédiée à la planification et l\'optimisation des opérations industrielles. Elle permet de simuler les processus de fabrication, d\'optimiser les lignes de production et de réduire les temps de cycle.',
      gradient: 'linear-gradient(135deg, #C5A059 0%, var(--primary-deep) 100%)',
      features: ['Simulation des processus de fabrication', 'Planification de la production', 'Optimisation des flux', 'Ergonomie et sécurité opérateur', 'Programmation robots', 'Gestion MES', 'Jumeau numérique d\'usine'],
      useCases: [
        { title: 'Usine intelligente', desc: 'Simulation complète de l\'atelier de production avant investissement.' },
        { title: 'Programmation robotique', desc: 'Simulation et validation des programmes robots offline.' },
        { title: 'Logistique industrielle', desc: 'Optimisation des flux matières et de la logistique interne.' },
        { title: 'Formation opérateurs', desc: 'Réalité virtuelle pour former les opérateurs aux gestes métier.' },
      ],
      industries: ['Automobile', 'Aéronautique', 'Agroalimentaire', 'Électronique', 'Énergie'],
      certifications: [
        { name: 'DELMIA Process Planning', level: 'Intermédiaire', duration: '4 jours', desc: 'Maîtrisez la planification des processus de fabrication avec DELMIA.' },
        { name: 'DELMIA Robotics', level: 'Avancé', duration: '3 jours', desc: 'Programmation et simulation robotique avancée avec DELMIA.' },
      ],
    },
    {
      id: 'geovia',
      name: 'GEOVIA',
      tagline: 'Smart Mining et Smart Cities. Mines et villes intelligentes.',
      description: 'Le Digital Tech Park : Pôle d\'excellence pour votre formation. Maîtrisez les solutions GEOVIA pour gérer et exploiter les ressources minières, planifier les villes intelligentes et concevoir les infrastructures de demain.',
      gradient: 'linear-gradient(135deg, #2D5B2D 0%, #C5A059 100%)',
      features: [
        'GEOVIA Surpac : Modélisation géologique et planification minière',
        'GEOVIA MineSched : Exploitation et production minières',
        'GEOVIA Whittle : Optimisation stratégique des ressources minières',
        'GEOVIA GEMS : Gestion centralisée des données minières',
        'City Planner : Aménagement urbain et jumeaux numériques'
      ],
      useCases: [
        { title: 'Modélisation Géologique', desc: 'Modélisation géologique et planification minière via GEOVIA Surpac.' },
        { title: 'Production Minière', desc: 'Gestion de l\'exploitation et production minières avec GEOVIA MineSched.' },
        { title: 'Optimisation de Ressources', desc: 'Optimisation stratégique des ressources minières avec GEOVIA Whittle et gestion avec GEMS.' },
        { title: 'Aménagement Urbain', desc: 'Conception de villes intelligentes et de jumeaux numériques grâce à City Planner.' }
      ],
      industries: [
        'Ingénieurs Mines & Géologues',
        'Ingénieurs Génie Civil & Infrastructures',
        'Urbanistes & Aménageurs',
        'Bureaux d\'Études'
      ],
      certifications: [
        { name: 'GEOVIA Surpac', level: 'Spécialiste', duration: 'Modélisation', desc: 'Certification sur la modélisation géologique.' },
        { name: 'GEOVIA MineSched', level: 'Spécialiste', duration: 'Exploitation', desc: 'Certification pour l\'exploitation et la production minière.' },
        { name: 'City Planner', level: 'Expert', duration: 'Urbanisme', desc: 'Spécialisation en aménagement de villes intelligentes.' },
        { name: '3DEXPERIENCE', level: 'Expert', duration: 'Plateforme', desc: 'Maîtrise de l\'écosystème collaboratif.' }
      ]
    },
    {
      id: 'biovia',
      name: 'BIOVIA',
      tagline: 'Plateforme scientifique pour accélérer l\'innovation en sciences de la vie.',
      description: 'BIOVIA est la plateforme scientifique de Dassault Systèmes dédiée aux sciences de la vie, chimie et matériaux. Elle permet aux chercheurs et scientifiques de collaborer, d\'innover et de découvrir de nouveaux médicaments, matériaux et formulations grâce à des outils de modélisation moléculaire et de gestion des données scientifiques.',
      gradient: 'linear-gradient(135deg, #10B981 0%, #002D5B 100%)',
      features: ['Cahiers de laboratoire électroniques', 'Gestion des données scientifiques', 'Modélisation moléculaire', 'Conformité réglementaire', 'Collaboration scientifique', 'Analyse prédictive', 'Workflow automatisés'],
      useCases: [
        { title: 'Découverte de médicaments', desc: 'Accélération du développement pharmaceutique par la simulation.' },
        { title: 'Recherche matériaux', desc: 'Innovation dans les nouveaux matériaux et composites.' },
        { title: 'Conformité qualité', desc: 'Respect des normes FDA, EMA et autres réglementations.' },
        { title: 'Collaboration R&D', desc: 'Partage sécurisé des données entre équipes de recherche.' },
      ],
      industries: ['Pharmaceutique', 'Biotechnologie', 'Chimie', 'Matériaux', 'Cosmétique'],
      certifications: [
        { name: 'BIOVIA Discovery Studio', level: 'Intermédiaire', duration: '3 jours', desc: 'Modélisation moléculaire et découverte de médicaments.' },
        { name: 'BIOVIA Pipeline Pilot', level: 'Avancé', duration: '2 jours', desc: 'Automatisation des workflows scientifiques.' },
      ],
    },
    {
      id: 'netvibes',
      name: 'NETVIBES',
      tagline: 'Intelligence artificielle et veille stratégique pour piloter votre entreprise.',
      description: 'NETVIBES est la plateforme d\'intelligence artificielle et de veille stratégique de Dassault Systèmes. Elle transforme les données en insights actionnables grâce à l\'IA, permettant aux entreprises de prendre des décisions éclairées, d\'anticiper les tendances du marché et d\'optimiser leurs performances business.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #002D5B 100%)',
      features: ['Tableaux de bord IA temps réel', 'Veille concurrentielle automatisée', 'Alertes intelligentes', 'Analyse prédictive', 'Traitement du langage naturel', 'Visualisation avancée', 'Intégration multi-sources'],
      useCases: [
        { title: 'Veille concurrentielle', desc: 'Surveillance automatisée de la concurrence et du marché.' },
        { title: 'Analyse de tendances', desc: 'Détection précoce des signaux faibles et opportunités.' },
        { title: 'Pilotage performance', desc: 'Tableaux de bord exécutifs avec KPI en temps réel.' },
        { title: 'Intelligence client', desc: 'Analyse des sentiments et comportements clients.' },
      ],
      industries: ['Retail', 'Finance', 'Média', 'Consulting', 'Technologie'],
      certifications: [
        { name: 'NETVIBES Dashboard Creation', level: 'Débutant', duration: '1 jour', desc: 'Créez des tableaux de bord intelligents avec NETVIBES.' },
        { name: 'NETVIBES AI Analytics', level: 'Intermédiaire', duration: '2 jours', desc: 'Exploitez l\'IA pour l\'analyse prédictive et la veille.' },
      ],
    },
    {
      id: 'intelligence-artificielle',
      name: 'Intelligence artificielle',
      tagline: 'Une réponse précise pour chaque secteur, déployée en quelques semaines sans remplacer vos systèmes existants.',
      description: 'Notre solution d’intelligence artificielle connecte vos équipements, vos données et vos équipes pour anticiper les incidents, améliorer la sécurité et optimiser la performance opérationnelle. Déployée en quelques semaines, elle s’intègre à vos systèmes existants sans remplacement.',
      gradient: 'linear-gradient(135deg, #0F766E 0%, #002D5B 100%)',
      features: ['Connectivité IoT et intégration aux systèmes existants', 'Détection précoce des anomalies', 'Alertes sécurité et maintenance prédictive', 'Tableaux de bord décisionnels et conformité'],
      useCases: [
        { title: 'Ports maritimes', desc: 'Surveillez grues, quais et équipements de manutention pour réduire les arrêts imprévus et anticiper les pannes.' },
        { title: 'Dépôts pétroliers', desc: 'Suivez cuves, pipelines et équipements critiques pour détecter les fuites, anomalies et risques de sécurité.' },
        { title: 'Villes & FEICOM', desc: 'Pilotez l’éclairage public, les infrastructures urbaines et le patrimoine municipal grâce à des décisions basées sur les données.' },
        { title: 'Industries', desc: 'Optimisez la maintenance, la planification des arrêts et la durabilité des équipements critiques.' },
      ],
      industries: ['Ports maritimes', 'Dépôts pétroliers', 'Villes & FEICOM', 'Industries', 'Utilities'],
      certifications: [
        { name: 'Déploiement rapide', level: 'Débutant', duration: '2 à 6 semaines', desc: 'Mise en place rapide de la solution, sans remplacement des systèmes existants.' },
        { name: 'Intégration IoT & data', level: 'Intermédiaire', duration: '3 à 8 semaines', desc: 'Connexion des capteurs, équipements et plateformes de supervision existantes.' },
        { name: 'Accompagnement opérationnel', level: 'Avancé', duration: 'Selon périmètre', desc: 'Formation des équipes terrain et mise en place d’un plan de gouvernance.' },
      ],
      sectors: [
        {
          name: 'Ports maritimes',
          description: 'Chaque grue, quai, conteneur et équipement de manutention devient un actif connecté. L’IA surveille, prédit et prescrit pour que votre port ne s’arrête jamais.',
          features: ['Digital Twin 3D du port', 'Capteurs IoT sur équipements critiques', 'Détection précoce de défaillances', 'Alertes sécurité workers', 'Tableau de bord directorial'],
          kpis: ['−42 % arrêts non planifiés', '24/7 surveillance active', '+14 jours d’anticipation des pannes', '−35 % coûts maintenance'],
          alert: 'Grue n°4 — Quai 7 · Vibration anormale détectée sur palier roulement · Intervention recommandée avant J+5 · Durée estimée : 3h'
        },
        {
          name: 'Dépôts pétroliers',
          description: 'Sur un dépôt pétrolier, chaque seconde compte. Notre solution surveille en continu les cuves, pipelines et équipements pour anticiper les incidents avant qu’ils ne se produisent.',
          features: ['Surveillance continue des cuves', 'Analyse corrosion prédictive', 'Conformité automatisée', 'Détection gaz & fuites', 'Plan d’intervention automatique'],
          kpis: ['0 tolérance incidents', '−60 % risque de fuite', '100 % traçabilité conformité', '30 s délai détection anomalie'],
          alert: 'Cuve 12 — Zone B · Variation de pression inhabituelle · Inspection recommandée · Priorité : HAUTE'
        },
        {
          name: 'Villes & FEICOM',
          description: 'Donnez à vos élus et directeurs techniques une vision complète du patrimoine municipal et optimisez la gestion des infrastructures urbaines.',
          features: ['Tableau de bord patrimonial', 'Priorisation budgétaire par IA', 'Rapports automatiques pour le FEICOM', 'Gestion intelligente de l’éclairage public', 'Suivi du réseau d’eau potable'],
          kpis: ['360 communes éligibles', '−30 % coûts opérationnels', '100 % traçabilité dépenses', 'Smart City ready'],
          alert: 'Quartier Bastos — 14 points lumineux hors service · Bon de travail généré automatiquement'
        },
        {
          name: 'Industries',
          description: 'Cimenteries, agro-industrie, mines et usines de transformation bénéficient d’une maintenance prédictive et d’un pilotage opérationnel plus fiable.',
          features: ['Monitoring des machines critiques', 'Planification optimisée des arrêts', 'Gestion prédictive des pièces de rechange', 'Analyse des causes racines', 'Formation des équipes terrain'],
          kpis: ['−45 % pannes imprévues', '+20 % durée de vie équipements', 'ROI dès le 1er semestre'],
          alert: 'Broyeur 3 — Usure anormale détectée · Remplacement conseillé sous 9 jours'
        }
      ]
    },
    {
      id: 'neoledge',
      name: 'NeoLedge',
      tagline: 'La plateforme ECM tout-en-un propulsée par l\'IA pour moderniser la gestion documentaire.',
      description: 'NeoLedge est une solution complète de gestion de contenu d\'entreprise (ECM) qui révolutionne la façon dont les organisations gèrent leurs documents et processus. Propulsée par l\'intelligence artificielle, elle automatise la capture, le traitement et l\'archivage des documents tout en garantissant la conformité réglementaire.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #059669 100%)',
      features: ['Capture multicanal & LAD/RAD', 'Gestion de dossiers & workflows', 'Signature électronique intégrée', 'Intelligence artificielle AI.Lise', 'Archivage à valeur probante', 'Recherche full-text avancée', 'Conformité RGPD'],
      useCases: [
        { title: 'Transformation digitale RH', desc: 'Transformation digitale complète des processus ressources humaines.' },
        { title: 'Gestion comptable', desc: 'Automatisation du traitement des factures et documents comptables.' },
        { title: 'Conformité réglementaire', desc: 'Archivage légal et respect des obligations de conservation.' },
        { title: 'Collaboration documentaire', desc: 'Partage sécurisé et co-édition de documents en temps réel.' },
      ],
      industries: ['Services', 'Santé', 'Finance', 'Administration', 'Industrie'],
      certifications: [
        { name: 'NeoLedge User Fundamentals', level: 'Débutant', duration: '1 jour', desc: 'Maîtrisez les fonctionnalités de base de la plateforme NeoLedge ECM.' },
        { name: 'NeoLedge Administrator', level: 'Intermédiaire', duration: '2 jours', desc: 'Administrez et configurez NeoLedge pour votre organisation.' },
        { name: 'NeoLedge AI.Lise Specialist', level: 'Avancé', duration: '2 jours', desc: 'Exploitez pleinement les capacités d\'IA pour l\'automatisation documentaire.' },
      ],
    },
    {
      id: 'iterop',
      name: 'ITEROP',
      tagline: 'Plateforme BPM low-code pour modéliser, automatiser et optimiser vos processus métiers.',
      description: 'ITEROP est une plateforme BPM (Business Process Management) nouvelle génération qui permet aux entreprises de modéliser, automatiser et optimiser leurs processus métiers sans développement complexe. Grâce à son approche low-code et ses connecteurs natifs, ITEROP démocratise l\'automatisation des processus.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #002D5B 100%)',
      features: ['Modélisation BPMN visuelle', 'Automatisation sans code', 'Intégration système SI', 'Suivi des performances KPI', 'Workflows intelligents', 'Connecteurs pré-configurés', 'Tableau de bord analytique'],
      useCases: [
        { title: 'Automatisation RH', desc: 'Digitalisation des processus de recrutement et onboarding.' },
        { title: 'Gestion des achats', desc: 'Automatisation du cycle procure-to-pay complet.' },
        { title: 'Service client', desc: 'Orchestration des processus de support et réclamations.' },
        { title: 'Conformité qualité', desc: 'Automatisation des processus qualité et audits.' },
      ],
      industries: ['Services', 'Industrie', 'Santé', 'Finance', 'Administration'],
      certifications: [
        { name: 'ITEROP Process Designer', level: 'Débutant', duration: '2 jours', desc: 'Concevez et modélisez vos processus métiers avec ITEROP.' },
        { name: 'ITEROP Advanced Automation', level: 'Intermédiaire', duration: '2 jours', desc: 'Automatisez vos workflows complexes sans développement.' },
      ],
    },
    {
      id: 'medidata',
      name: 'MEDIDATA',
      tagline: 'Life Sciences & Clinical Research',
      description: 'Plateforme cloud dédiée aux essais cliniques, à la recherche médicale et au développement des médicaments.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Gestion des essais cliniques (EDC)', 'Données patients sécurisées', 'IA pour la recherche clinique', 'Conformité FDA / EMA'],
      useCases: [],
      industries: ['Santé', 'Sciences de la vie'],
      certifications: []
    },
    {
      id: 'centric-plm',
      name: 'CENTRIC PLM',
      tagline: 'Retail, Mode & Produits de consommation',
      description: 'Solution PLM destinée aux secteurs de la mode, textile, cosmétique, distribution et produits de consommation.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Développement produit', 'Gestion des collections', 'Supply Chain', 'Time-to-Market réduit'],
      useCases: [],
      industries: ['Retail', 'Mode'],
      certifications: []
    },
    {
      id: 'draftsight',
      name: 'DraftSight',
      tagline: 'Solution de CAO 2D professionnelle compatible DWG.',
      description: 'Solution de CAO 2D professionnelle compatible DWG pour tous vos dessins et documentations techniques.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Dessin 2D', 'Compatibilité AutoCAD', 'Plans techniques', 'Documentation'],
      useCases: [],
      industries: ['Ingénierie', 'Architecture', 'Industrie'],
      certifications: []
    },
    {
      id: '3dvia',
      name: '3DVIA',
      tagline: 'Visualisation et communication 3D.',
      description: 'Créez des expériences clients immersives et interactives pour la présentation et la documentation de vos produits.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Configurateurs produits', 'Documentation interactive', 'Expérience client', 'Marketing 3D'],
      useCases: [],
      industries: ['Marketing', 'Vente', 'Retail'],
      certifications: []
    },
    {
      id: 'reverse-engineering',
      name: 'Reverse Engineering',
      tagline: 'Numérisation & Reconstruction 3D',
      description: 'Transformez des pièces physiques en modèles CAO exploitables grâce aux technologies de scan 3D et de rétroconception.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['Scan 3D haute précision', 'Reconstruction de modèles CAO', 'Comparaison CAO / pièce réelle', 'Contrôle qualité et inspection'],
      useCases: [],
      industries: ['Industrie', 'Ingénierie de précision'],
      certifications: []
    },
    {
      id: 'neoledge-ged',
      name: 'NeoLedge GED & Archivage',
      tagline: 'Dématérialisez et centralisez l\'ensemble de vos documents avec une solution GED sécurisée.',
      description: 'La solution GED & Archivage de NeoLedge permet aux entreprises de dématérialiser, centraliser et sécuriser l\'ensemble de leurs documents. Avec des fonctionnalités d\'indexation automatique, d\'archivage à valeur probante et de recherche avancée, elle transforme la gestion documentaire traditionnelle en un système intelligent et conforme.',
      gradient: 'linear-gradient(135deg, var(--primary-deep) 0%, #059669 100%)',
      features: ['Indexation automatique des documents', 'Archivage à valeur probante', 'Recherche full-text avancée', 'Droits d\'accès granulaires', 'Versioning automatique', 'Conformité RGPD', 'Sauvegarde sécurisée cloud'],
      useCases: [
        { title: 'Archivage légal', desc: 'Conservation sécurisée des documents avec valeur probante juridique.' },
        { title: 'Dématérialisation RH', desc: 'Digitalisation complète des dossiers employés et processus RH.' },
        { title: 'Gestion comptable', desc: 'Centralisation et archivage des factures et documents comptables.' },
        { title: 'Documentation qualité', desc: 'Gestion des procédures, certifications et documents qualité.' },
      ],
      industries: ['Services', 'Santé', 'Finance', 'Administration', 'Industrie'],
      certifications: [
        { name: 'NeoLedge GED Fundamentals', level: 'Débutant', duration: '1 jour', desc: 'Maîtrisez la gestion électronique de documents avec NeoLedge.' },
        { name: 'NeoLedge Archiving Specialist', level: 'Intermédiaire', duration: '1 jour', desc: 'Spécialisez-vous dans l\'archivage à valeur probante.' },
      ],
    },
    {
      id: 'neoledge-workflow',
      name: 'NeoLedge Workflows & RPA',
      tagline: 'Automatisez vos flux de travail et processus répétitifs grâce à l\'intelligence artificielle.',
      description: 'La solution Workflows & RPA de NeoLedge révolutionne l\'automatisation des processus métiers. Combinant workflows collaboratifs intelligents et robotisation des tâches répétitives (RPA), elle permet aux entreprises d\'optimiser leur productivité, réduire les erreurs et accélérer leurs processus de validation.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #A68545 100%)',
      features: ['Workflow de validation collaboratif', 'Parapheur électronique', 'RPA — automatisation robotisée', 'Intégration ERP/SAP', 'Notifications intelligentes', 'Tableau de bord des processus', 'API REST complète'],
      useCases: [
        { title: 'Validation de factures', desc: 'Automatisation complète du circuit de validation des factures fournisseurs.' },
        { title: 'Processus RH', desc: 'Workflows de recrutement, congés et évaluations automatisés.' },
        { title: 'Approbations budgétaires', desc: 'Circuits de validation hiérarchique avec seuils automatiques.' },
        { title: 'Gestion des contrats', desc: 'Workflow de création, validation et signature des contrats.' },
      ],
      industries: ['Services', 'Finance', 'Administration', 'Industrie', 'Santé'],
      certifications: [
        { name: 'NeoLedge Workflow Designer', level: 'Débutant', duration: '1 jour', desc: 'Concevez des workflows collaboratifs avec NeoLedge.' },
        { name: 'NeoLedge RPA Specialist', level: 'Intermédiaire', duration: '2 jours', desc: 'Automatisez vos processus avec la robotisation RPA.' },
      ],
    },
    {
      id: 'neoledge-ai',
      name: 'AI.Lise — IA Documentaire',
      tagline: 'Décuplez votre capacité à organiser et exploiter vos données grâce à l\'IA.',
      description: 'AI.Lise est le moteur d\'intelligence artificielle intégré à la plateforme NeoLedge. Cette solution révolutionnaire utilise les dernières avancées en IA pour automatiser la classification, l\'extraction de données et l\'analyse documentaire. Elle transforme vos documents en données exploitables et actionables.',
      gradient: 'linear-gradient(135deg, #C5A059 0%, #002D5B 100%)',
      features: ['Classification automatique IA', 'Extraction de données LAD/RAD', 'Résumé automatique de documents', 'Détection d\'anomalies', 'Reconnaissance optique avancée', 'Analyse sémantique', 'Machine Learning adaptatif'],
      useCases: [
        { title: 'Traitement automatique factures', desc: 'Extraction automatique des données de facturation avec validation IA.' },
        { title: 'Classification intelligente', desc: 'Tri automatique des documents entrants par type et priorité.' },
        { title: 'Analyse de contrats', desc: 'Extraction des clauses importantes et détection des risques.' },
        { title: 'Veille documentaire', desc: 'Surveillance automatique et résumé des documents critiques.' },
      ],
      industries: ['Finance', 'Juridique', 'Assurance', 'Administration', 'Santé'],
      certifications: [
        { name: 'AI.Lise Fundamentals', level: 'Débutant', duration: '1 jour', desc: 'Découvrez les capacités d\'IA documentaire avec AI.Lise.' },
        { name: 'AI.Lise Advanced Analytics', level: 'Avancé', duration: '2 jours', desc: 'Exploitez pleinement l\'IA pour l\'analyse documentaire avancée.' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.solution = this.solutions.find(s => s.id === params['id']);
    });
  }
}
