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
    },
    {
      id: 'solidworks',
      name: 'SOLIDWORKS',
      tagline: 'La CAO mécanique intuitive pour concevoir plus vite et mieux.',
      description: 'SOLIDWORKS est le logiciel de conception mécanique 3D le plus utilisé dans le monde. Alliant puissance et facilité d\'utilisation, il permet aux ingénieurs et concepteurs de créer des produits innovants, de les simuler et de les fabriquer avec une précision maximale.',
      gradient: 'linear-gradient(135deg, #C5A059 0%, #002D5B 100%)',
      features: ['Conception de pièces 3D', 'Assemblages paramétriques', 'Simulation FEA', 'Analyse thermique', 'Conception de tôlerie', 'Modélisation de moules', 'Rendu photoréaliste'],
      useCases: [
        { title: 'PME Industrielles', desc: 'Conception rapide de produits mécaniques et prototypage virtuel.' },
        { title: 'Formation académique', desc: 'Outil pédagogique idéal pour les écoles d\'ingénieurs et universités.' },
        { title: 'Équipements médicaux', desc: 'Conception de dispositifs médicaux avec respect des normes ISO.' },
        { title: 'Électronique', desc: 'Intégration mécatronique et conception de boîtiers électroniques.' },
      ],
      industries: ['PME', 'Médical', 'Électronique', 'Éducation', 'Mécanique générale'],
    },
    {
      id: '3dexperience',
      name: '3DEXPERIENCE',
      tagline: 'La plateforme unifiée pour l\'innovation collaborative.',
      description: 'La plateforme 3DEXPERIENCE de Dassault Systèmes connecte les personnes, les idées et les données sur une seule plateforme cloud. Elle permet une collaboration sans frontières et une gestion PLM complète, du concept au service après-vente.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #C5A059 100%)',
      features: ['PLM intégré', 'Collaboration cloud', 'Gestion des données produit', 'Workflow intelligent', 'Tableau de bord analytique', 'Gestion des exigences', 'Intégration CATIA & SOLIDWORKS'],
      useCases: [
        { title: 'Co-développement', desc: 'Équipes distribuées collaborant en temps réel sur les mêmes modèles.' },
        { title: 'Gestion du cycle de vie', desc: 'Suivi complet du produit de la conception à la maintenance.' },
        { title: 'Universités', desc: 'Environnement pédagogique collaboratif pour les étudiants ingénieurs.' },
        { title: 'Industrie agile', desc: 'Accélération du time-to-market grâce aux workflows automatisés.' },
      ],
      industries: ['Toutes industries', 'Éducation', 'Défense', 'Sciences de la vie'],
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
    },
    {
      id: 'geovia',
      name: 'GEOVIA',
      tagline: 'Solutions géosciences pour l\'exploitation durable des ressources naturelles.',
      description: 'GEOVIA de Dassault Systèmes offre des solutions complètes pour l\'industrie minière et les géosciences. De la modélisation géologique 3D à la planification minière optimisée, GEOVIA permet une exploitation responsable et rentable des ressources naturelles tout en respectant l\'environnement.',
      gradient: 'linear-gradient(135deg, #2D5B2D 0%, #C5A059 100%)',
      features: ['Modélisation géologique 3D', 'Planification minière optimisée', 'Simulation des opérations', 'Gestion environnementale', 'Analyse géostatistique', 'Optimisation des ressources', 'Conformité réglementaire'],
      useCases: [
        { title: 'Exploration minière', desc: 'Modélisation 3D des gisements pour optimiser l\'exploration.' },
        { title: 'Planification de mine', desc: 'Optimisation des séquences d\'extraction et des coûts.' },
        { title: 'Impact environnemental', desc: 'Évaluation et minimisation de l\'impact écologique.' },
        { title: 'Sécurité minière', desc: 'Simulation des risques et optimisation de la sécurité.' },
      ],
      industries: ['Mines & Métaux', 'Pétrole & Gaz', 'Géotechnique', 'Environnement', 'Énergie'],
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
    },
    {
      id: 'neoledge',
      name: 'NeoLedge',
      tagline: 'La plateforme ECM tout-en-un propulsée par l\'IA pour moderniser la gestion documentaire.',
      description: 'NeoLedge est une solution complète de gestion de contenu d\'entreprise (ECM) qui révolutionne la façon dont les organisations gèrent leurs documents et processus. Propulsée par l\'intelligence artificielle, elle automatise la capture, le traitement et l\'archivage des documents tout en garantissant la conformité réglementaire.',
      gradient: 'linear-gradient(135deg, #002D5B 0%, #059669 100%)',
      features: ['Capture multicanal & LAD/RAD', 'Gestion de dossiers & workflows', 'Signature électronique intégrée', 'Intelligence artificielle AI.Lise', 'Archivage à valeur probante', 'Recherche full-text avancée', 'Conformité RGPD'],
      useCases: [
        { title: 'Dématérialisation RH', desc: 'Digitalisation complète des processus ressources humaines.' },
        { title: 'Gestion comptable', desc: 'Automatisation du traitement des factures et documents comptables.' },
        { title: 'Conformité réglementaire', desc: 'Archivage légal et respect des obligations de conservation.' },
        { title: 'Collaboration documentaire', desc: 'Partage sécurisé et co-édition de documents en temps réel.' },
      ],
      industries: ['Services', 'Santé', 'Finance', 'Administration', 'Industrie'],
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
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.solution = this.solutions.find(s => s.id === params['id']);
    });
  }
}
