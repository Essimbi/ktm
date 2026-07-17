import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, Monitor, Database, Layers, Shield, Zap, Layout,
  ArrowRight, CheckCircle, Globe, FileText, Cpu, BarChart2, Beaker,
  Network, FlaskConical, Leaf
} from 'lucide-angular';

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
          <h1>L'Écosystème <br><span class="gradient-text-light">KTM Green Energy Group</span></h1>
          <p>Partenaire officiel Dassault Systèmes & NeoLedge en Afrique Centrale. Explorez notre suite complète de solutions industrielles, de simulation, de gestion documentaire et de collaboration pour l'Industrie 4.0.</p>
        </div>
        <div class="hero-badges reveal">
          <span class="h-badge"><lucide-icon [name]="CheckCircle" size="14"></lucide-icon> Dassault Systèmes Certified</span>
          <span class="h-badge green"><lucide-icon [name]="CheckCircle" size="14"></lucide-icon> NeoLedge Partner</span>
          <span class="h-badge"><lucide-icon [name]="CheckCircle" size="14"></lucide-icon> 10+ Solutions disponibles</span>
        </div>
      </section>

      <!-- ── Tabs ─────────────────────────────────── -->
      <div class="tabs-bar">
        <div class="tabs-container">
          <button class="tab-btn" [class.active]="activeTab === 'dassault'" (click)="setTab('dassault')">
            Dassault Systèmes
          </button>
          <button class="tab-btn" [class.active]="activeTab === 'neoledge'" (click)="setTab('neoledge')">
            KTM Group
          </button>
        </div>
      </div>

      <!-- ── Grid Dassault ─────────────────────────── -->
      <section class="section-container" *ngIf="activeTab === 'dassault'">
        <div class="tab-intro reveal">
          <div class="partner-badge-header">
            <div class="partner-logo-mock">3DS</div>
            <div>
              <h3>Dassault Systèmes — Solutions PLM & Industrie 4.0</h3>
              <p>Leader mondial des logiciels de conception, simulation et gestion du cycle de vie. KTM Group est revendeur et formateur agréé en Afrique Centrale.</p>
            </div>
          </div>
        </div>
        <div class="solutions-grid">
          <a [routerLink]="['/solutions', sol.id]" class="sol-card reveal" *ngFor="let sol of dassaultSolutions; let i = index" [style.--delay]="i * 0.08 + 's'">
            <div class="card-glow" [style.background]="sol.color"></div>
            <div class="card-content">
              <div class="sol-icon-box" [style.background]="sol.color">
                <lucide-icon [name]="sol.icon" size="30"></lucide-icon>
              </div>
              <div class="sol-info">
                <div class="sol-category">{{sol.category}}</div>
                <h3>{{sol.name}}</h3>
                <p>{{sol.shortDesc}}</p>
                <ul class="features">
                  <li *ngFor="let f of sol.features">
                    <lucide-icon [name]="CheckCircle" size="13"></lucide-icon>
                    {{f}}
                  </li>
                </ul>
              </div>
              <span class="sol-cta-link">Explorer {{sol.name}} <lucide-icon [name]="ArrowRight" size="15"></lucide-icon></span>
            </div>
          </a>
        </div>
      </section>

      <!-- ── Grid NeoLedge ─────────────────────────── -->
      <section class="section-container" *ngIf="activeTab === 'neoledge'">
        <div class="tab-intro reveal">
          <div class="partner-badge-header neoledge">
            <div class="partner-logo-mock green">NL</div>
            <div>
              <h3>NeoLedge — ECM & GED propulsés par l'IA</h3>
              <p>Plateforme cloud de gestion de contenu d'entreprise. KTM Group est partenaire revendeur agréé NeoLedge pour la sous-région Afrique Centrale.</p>
            </div>
          </div>
        </div>
        <div class="solutions-grid">
          <a [routerLink]="['/solutions', sol.id]" class="sol-card reveal" *ngFor="let sol of neoledgeSolutions; let i = index" [style.--delay]="i * 0.08 + 's'">
            <div class="card-glow" [style.background]="sol.color"></div>
            <div class="card-content">
              <div class="sol-icon-box" [style.background]="sol.color">
                <lucide-icon [name]="sol.icon" size="30"></lucide-icon>
              </div>
              <div class="sol-info">
                <div class="sol-category green">{{sol.category}}</div>
                <h3>{{sol.name}}</h3>
                <p>{{sol.shortDesc}}</p>
                <ul class="features">
                  <li *ngFor="let f of sol.features">
                    <lucide-icon [name]="CheckCircle" size="13"></lucide-icon>
                    {{f}}
                  </li>
                </ul>
              </div>
              <span class="sol-cta-link green">Explorer {{sol.name}} <lucide-icon [name]="ArrowRight" size="15"></lucide-icon></span>
            </div>
          </a>
        </div>
      </section>

      <!-- ── Secteurs ──────────────────────────────── -->
      <section class="sectors-section">
        <div class="section-container">
          <div class="sec-header reveal">
            <span class="section-tag">Nos domaines d'application</span>
            <h2 class="section-title" style="color:white">Pour Quels Secteurs ?</h2>
            <p style="color:rgba(255,255,255,0.65);text-align:center">KTM Group accompagne les industries les plus exigeantes dans leur transformation digitale.</p>
          </div>
          <div class="sectors-grid">
            <div class="sector-item reveal" *ngFor="let s of sectors; let i = index" [style.--delay]="i * 0.07 + 's'">
              <lucide-icon [name]="s.icon" size="28"></lucide-icon>
              <span>{{s.name}}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CTA ──────────────────────────────────── -->
      <section class="sol-cta">
        <div class="cta-card reveal">
          <div class="cta-text">
            <h2>Vous ne savez pas par où commencer ?</h2>
            <p>Nos experts vous aident à choisir la solution la mieux adaptée à vos défis industriels et à votre budget.</p>
          </div>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn-premium primary">Consultation Gratuite <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/services" class="btn-premium outline-white">Nos Services</a>
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
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 55%, var(--primary-gold) 100%);
      padding: 100px 5% 80px;
      text-align: center;
      color: white;
      overflow: hidden;
      h1, h2, h3, h4 { color: white; }
    }
    .hero-glow {
      position: absolute; top: 50%; left: 50%;
      width: 1200px; height: 1200px;
      background: radial-gradient(circle, rgba(0, 176, 90, 0.08) 0%, transparent 65%);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    .hero-content {
      position: relative; z-index: 1; max-width: 860px; margin: 0 auto;
      h1 { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 24px;
           @media(max-width:768px){ font-size: 2.6rem; } }
      p { font-size: 1.15rem; opacity: 0.85; line-height: 1.8; max-width: 700px; margin: 0 auto; }
    }
    .hero-tag {
      display: inline-block; padding: 8px 24px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px; font-size: 0.75rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 24px;
    }
    .hero-badges {
      position: relative; z-index: 1;
      display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 40px;
    }
    .h-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 20px; background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15); border-radius: 50px;
      font-size: 0.82rem; font-weight: 600; color: white;
      lucide-icon { color: var(--accent-cyan); }
      &.green lucide-icon { color: var(--accent-green); }
    }

    /* ── Tabs ── */
    .tabs-bar {
      background: white; border-bottom: 2px solid #E2E8F0;
      position: sticky; top: 0; z-index: 100;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .tabs-container {
      max-width: 1440px; margin: 0 auto; padding: 0 5%;
      display: flex; gap: 0;
    }
    .tab-btn {
      padding: 18px 32px; font-weight: 700; font-size: 0.92rem;
      color: var(--text-muted); background: none; border: none; cursor: pointer;
      border-bottom: 3px solid transparent; transition: all 0.2s ease;
      &:hover { color: var(--primary-gold); }
      &.active { color: var(--primary-gold); border-bottom-color: var(--primary-gold); }
    }

    /* ── Tab intro ── */
    .tab-intro { margin-bottom: 48px; }
    .partner-badge-header {
      display: flex; align-items: center; gap: 28px;
      background: white; border-radius: 24px; padding: 32px;
      border: 1px solid #E2E8F0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      h3 { font-size: 1.35rem; margin-bottom: 8px; }
      p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; }
      @media(max-width:640px){ flex-direction: column; text-align: center; }
    }
    .partner-logo-mock {
      width: 70px; height: 70px; border-radius: 18px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-gold) 100%);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; font-weight: 900; color: white; letter-spacing: -1px;
      &.green { background: linear-gradient(135deg, var(--accent-green) 0%, #007A3E 100%); }
    }

    /* ── Grid ── */
    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 28px;
      @media(max-width:400px){ grid-template-columns: 1fr; }
    }
    .sol-card {
      position: relative; display: block;
      background: white; border-radius: 28px;
      overflow: hidden; border: 2px solid #E8EEF6;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      animation-delay: var(--delay, 0s);
      cursor: pointer;
      &:hover {
        transform: translateY(-12px);
        box-shadow: 0 32px 64px rgba(0, 45, 91, 0.14);
        border-color: var(--primary-gold);
        .card-glow { opacity: 0.08; }
        .sol-cta-link { gap: 14px; }
      }
    }
    .card-glow {
      position: absolute; top: -50%; left: -50%;
      width: 200%; height: 200%;
      opacity: 0; transition: opacity 0.4s ease;
      pointer-events: none;
    }
    .card-content {
      position: relative; z-index: 1; padding: 36px;
      display: flex; flex-direction: column; height: 100%;
    }
    .sol-icon-box {
      width: 62px; height: 62px; border-radius: 18px;
      display: flex; align-items: center; justify-content: center;
      color: white; margin-bottom: 24px; flex-shrink: 0;
    }
    .sol-category {
      font-size: 0.68rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 1.5px; color: var(--primary-gold);
      margin-bottom: 8px;
      &.green { color: var(--accent-green); }
    }
    .sol-info {
      flex: 1;
      h3 { font-size: 1.4rem; margin-bottom: 10px; }
      p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.65; margin-bottom: 20px; }
    }
    .features {
      list-style: none; margin-bottom: 28px;
      li {
        display: flex; align-items: center; gap: 10px;
        font-size: 0.85rem; font-weight: 600; color: var(--primary-deep);
        margin-bottom: 8px;
        lucide-icon { color: var(--primary-gold); flex-shrink: 0; }
      }
    }
    .sol-cta-link {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.88rem; font-weight: 700;
      color: var(--primary-gold); margin-top: auto;
      padding-top: 20px; border-top: 1px solid #E8EEF6;
      transition: gap 0.25s ease;
      &.green { color: var(--accent-green); }
    }

    /* ── Sectors ── */
    .sectors-section {
      background: linear-gradient(160deg, var(--primary-deep) 0%, #0a2d5e 100%);
      padding: 0;
    }
    .sec-header { text-align: center; margin-bottom: 50px; }
    .section-tag {
      display: inline-block; padding: 8px 22px;
      background: rgba(197, 160, 89, 0.12); border: 1px solid rgba(197, 160, 89, 0.25);
      border-radius: 50px; font-size: 0.85rem; font-weight: 800;
      color: var(--primary-gold); text-transform: uppercase; letter-spacing: 1.5px;
      margin-bottom: 16px;
    }
    .sectors-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 16px;
    }
    .sector-item {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px; padding: 20px; text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 12px;
      color: white; font-size: 0.88rem; font-weight: 600;
      transition: all 0.25s ease;
      animation-delay: var(--delay, 0s);
      lucide-icon { color: var(--accent-cyan); }
      &:hover { background: rgba(255,255,255,0.12); transform: translateY(-6px); }
    }

    /* ── CTA ── */
    .sol-cta { padding: 60px 5% 80px; text-align: center; }
    .cta-card {
      max-width: 1100px; margin: 0 auto;
      padding: 70px; border-radius: 40px;
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%);
      color: white;
      display: flex; align-items: center; justify-content: space-between; gap: 48px;
      text-align: left;
      @media(max-width:900px){ flex-direction: column; text-align: center; padding: 48px 32px; }
      h2 { font-size: 2.4rem; color: white; margin-bottom: 16px; }
      p { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 500px; }
    }
    .cta-actions { display: flex; gap: 16px; flex-shrink: 0;
      @media(max-width:480px){ flex-direction: column; }
    }

    /* ── Reveal ── */
    .reveal { opacity: 0; transform: translateY(28px); transition: all 0.7s cubic-bezier(0.22,1,0.36,1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class SolutionsComponent implements AfterViewInit {
  readonly CheckCircle = CheckCircle;
  readonly ArrowRight = ArrowRight;

  activeTab = 'dassault';

  setTab(tab: string) {
    this.activeTab = tab;
    setTimeout(() => this.observeReveal(), 100);
  }

  dassaultSolutions = [
    {
      id: 'solidworks',
      name: 'SOLIDWORKS',
      category: '3D CAD & Product Development',
      shortDesc: 'La solution CAO 3D la plus utilisée au monde pour la conception mécanique et le développement de produits.',
      features: ['Conception mécanique 3D', 'Assemblages complexes', 'Mise en plan 2D', 'Simulation intégrée'],
      icon: Layout,
      color: 'linear-gradient(135deg, #E32636, var(--primary-deep))'
    },
    {
      id: 'catia',
      name: 'CATIA',
      category: '3D Modeling Apps',
      shortDesc: 'Le leader mondial de la conception 3D et de l\'ingénierie système pour les industries aéronautique, automobile et industrielle de pointe.',
      features: ['CAO 3D avancée multi-discipline', 'Surfacique & carrosserie complexe', 'Ingénierie système (MBSE)', 'Conception mécatronique'],
      icon: Monitor,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: '3dexperience',
      name: '3DEXPERIENCE',
      category: 'Plateforme Globale',
      shortDesc: 'La plateforme collaborative ultime pour connecter personnes, idées et données sur un environnement Cloud unifié. Le hub digitale de votre entreprise.',
      features: ['PLM collaboratif cloud', 'Gestion des données produits', 'Tableaux de bord business', 'Jumeaux numériques'],
      icon: Layers,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: 'geovia',
      name: 'GEOVIA',
      category: 'Smart Mining & Smart Cities',
      shortDesc: 'Smart Mining et Smart Cities - Mines et villes intelligentes. Avec Surpac, MineSched, Whittle, GEMS et City Planner pour la gestion optimisée des ressources et l\'aménagement urbain.',
      features: ['GEOVIA Surpac - Modélisation géologique', 'GEOVIA MineSched - Production minière', 'GEOVIA Whittle - Optimisation stratégique', 'City Planner - Aménagement urbain'],
      icon: Leaf,
      color: 'linear-gradient(135deg, #2D5B2D, #C5A059)'
    },
    {
      id: 'delmia',
      name: 'DELMIA',
      category: 'Manufacturing & Operations Apps',
      shortDesc: 'Planification et optimisation des opérations industrielles pour atteindre l\'excellence opérationnelle et réduire les coûts de production.',
      features: ['Simulation d\'usine digitale', 'Programmation robotique hors-ligne', 'Optimisation logistique', 'Planification de production'],
      icon: Layout,
      color: 'linear-gradient(135deg, #C5A059, #002D5B)'
    },
    {
      id: 'simulia',
      name: 'SIMULIA',
      category: 'Simulation Apps',
      shortDesc: 'Simulation multi-physique avancée pour prédire et valider le comportement réel de vos produits avant fabrication.',
      features: ['Analyse FEA / CFD', 'Optimisation topologique', 'Simulation thermique & acoustique', 'Fatigue et durabilité'],
      icon: Zap,
      color: 'linear-gradient(135deg, #002D5B, #A68545)'
    },
    {
      id: 'enovia',
      name: 'ENOVIA',
      category: 'Social & Collaborative Apps',
      shortDesc: 'Gérez et sécurisez vos données produits avec une solution de gouvernance et de collaboration PLM à l\'échelle de l\'entreprise.',
      features: ['Gestion des nomenclatures (BOM)', 'Contrôle des versions documentaires', 'Workflows de validation', 'Gestion des exigences'],
      icon: Shield,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: 'biovia',
      name: 'BIOVIA',
      category: '3D Modeling Apps',
      shortDesc: 'Plateforme scientifique pour accélérer la découverte et l\'innovation dans les sciences de la vie, chimie et matériaux.',
      features: ['Cahiers de laboratoire électroniques', 'Gestion des données scientifiques', 'Modélisation moléculaire', 'Conformité réglementaire'],
      icon: FlaskConical,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: 'netvibes',
      name: 'NETVIBES',
      category: 'Information Intelligence Apps',
      shortDesc: 'Plateforme d\'intelligence artificielle et de veille stratégique pour piloter votre entreprise avec des données en temps réel.',
      features: ['Tableaux de bord IA temps réel', 'Veille concurrentielle automatisée', 'Alertes intelligentes', 'Analyse prédictive'],
      icon: BarChart2,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: 'iterop',
      name: 'ITEROP',
      category: 'BPM & Automatisation',
      shortDesc: 'Plateforme BPM low-code pour modéliser, automatiser et optimiser vos processus métiers sans développement complexe.',
      features: ['Modélisation BPMN visuelle', 'Automatisation sans code', 'Intégration système SI', 'Suivi des performances KPI'],
      icon: Network,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: 'medidata',
      name: 'MEDIDATA',
      category: 'Life Sciences & Clinical Research',
      shortDesc: 'Plateforme cloud dédiée aux essais cliniques, à la recherche médicale et au développement des médicaments.',
      features: ['Gestion des essais cliniques (EDC)', 'Données patients sécurisées', 'IA pour la recherche clinique', 'Conformité FDA / EMA'],
      icon: FlaskConical,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: 'centric-plm',
      name: 'CENTRIC PLM',
      category: 'Retail, Mode & Produits de consommation',
      shortDesc: 'Solution PLM destinée aux secteurs de la mode, textile, cosmétique, distribution et produits de consommation.',
      features: ['Développement produit', 'Gestion des collections', 'Supply Chain', 'Time-to-Market réduit'],
      icon: Layers,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: 'draftsight',
      name: 'DraftSight',
      category: 'Solution de CAO 2D',
      shortDesc: 'Solution de CAO 2D professionnelle compatible DWG pour tous vos dessins techniques.',
      features: ['Dessin 2D', 'Compatibilité AutoCAD', 'Plans techniques', 'Documentation'],
      icon: Monitor,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: '3dvia',
      name: '3DVIA',
      category: 'Visualisation et communication 3D',
      shortDesc: 'Visualisation et communication 3D pour créer des expériences clients immersives et interactives.',
      features: ['Configurateurs produits', 'Documentation interactive', 'Expérience client', 'Marketing 3D'],
      icon: Globe,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: 'reverse-engineering',
      name: 'Reverse Engineering',
      category: 'Numérisation & Reconstruction 3D',
      shortDesc: 'Transformez des pièces physiques en modèles CAO exploitables grâce aux technologies de scan 3D et de rétroconception.',
      features: ['Scan 3D haute précision', 'Reconstruction de modèles CAO', 'Comparaison CAO / pièce réelle', 'Contrôle qualité et inspection'],
      icon: Database,
      color: 'linear-gradient(135deg, #002D5B, #A68545)'
    }
  ];

  neoledgeSolutions = [
    {
      id: 'neoledge',
      name: 'ECM Elise',
      category: 'Gestion de Contenu Cloud',
      shortDesc: 'La plateforme ECM tout-en-un propulsée par l\'IA pour moderniser la gestion documentaire, automatiser les processus et centraliser l\'information.',
      features: ['Capture multicanal & LAD/RAD', 'Gestion de dossiers & workflows', 'Signature électronique intégrée', 'Intelligence artificielle AI.Lise'],
      icon: FileText,
      color: 'linear-gradient(135deg, #002D5B, #C5A059)'
    },
    {
      id: 'neoledge-ged',
      name: 'GED & Archivage',
      category: 'Gestion Documentaire',
      shortDesc: 'Dématérialisez et centralisez l\'ensemble de vos documents avec une solution GED sécurisée, conforme et accessible partout.',
      features: ['Indexation automatique des documents', 'Archivage à valeur probante', 'Recherche full-text avancée', 'Droits d\'accès granulaires'],
      icon: Database,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))'
    },
    {
      id: 'neoledge-workflow',
      name: 'Workflows & RPA',
      category: 'Automatisation',
      shortDesc: 'Automatisez vos flux de travail et vos processus répétitifs grâce à des workflows intelligents et la robotisation des tâches.',
      features: ['Workflow de validation collaboratif', 'Parapheur électronique', 'RPA — automatisation robotisée', 'Intégration ERP/SAP'],
      icon: Network,
      color: 'linear-gradient(135deg, #002D5B, #A68545)'
    },
    {
      id: 'neoledge-ai',
      name: 'AI.Lise — IA Documentaire',
      category: 'Intelligence Artificielle',
      shortDesc: 'Décuplez votre capacité à organiser, retrouver et exploiter vos données grâce aux services d\'intelligence artificielle intégrés.',
      features: ['Classification automatique IA', 'Extraction de données LAD/RAD', 'Résumé automatique de documents', 'Détection d\'anomalies'],
      icon: Cpu,
      color: 'linear-gradient(135deg, #C5A059, #002D5B)'
    },
    {
      id: 'intelligence-artificielle',
      name: 'Intelligence artificielle',
      category: 'Solutions IA',
      shortDesc: 'Des solutions de maintenance prédictive, de surveillance industrielle et de gestion intelligente adaptées aux ports, dépôts pétroliers, villes et industries.',
      features: ['Maintenance prédictive', 'Surveillance IoT', 'Détection d’anomalies', 'Tableaux de bord opérationnels'],
      icon: Cpu,
      color: 'linear-gradient(135deg, #0F766E, #C5A059)'
    },
  ];

  sectors = [
    { name: 'Aéronautique', icon: Globe },
    { name: 'Automobile', icon: Monitor },
    { name: 'Industrie manufacturière', icon: Layout },
    { name: 'Éducation & Recherche', icon: Database },
    { name: 'Mines & Ressources', icon: Leaf },
    { name: 'Sciences de la Vie', icon: FlaskConical },
    { name: 'Énergie & Utilities', icon: Zap },
    { name: 'Secteur Public', icon: Shield },
  ];

  ngAfterViewInit() {
    this.observeReveal();
  }

  observeReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.solutions-page .reveal').forEach(el => obs.observe(el));
  }
}
