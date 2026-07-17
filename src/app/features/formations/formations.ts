import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, GraduationCap, Clock, Users, Award, ArrowRight, CheckCircle, Star, Monitor, Wifi, MapPin, BookOpen, Settings, Laptop } from 'lucide-angular';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="page-main">
      <!-- Hero -->
      <section class="page-hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <span class="hero-tag">Centre de formation</span>
          <h1>Toutes nos formations</h1>
          <p>Des parcours pour prendre en main les solutions de conception, simulation, PLM, fabrication et collaboration, avec des formats adaptés aux équipes métier, bureaux d'études et administrateurs.</p>
        </div>
      </section>

      <!-- Stats -->
      <section class="stats-band">
        <div class="stat" *ngFor="let s of stats">
          <strong>{{s.value}}</strong>
          <span>{{s.label}}</span>
        </div>
      </section>

      <!-- Types de formations -->
      <section class="formation-types-section">
        <div class="section-container">
          <h2 class="section-title">Se former avec KTM</h2>
          <p class="section-subtitle">Un accompagnement structuré autour des logiciels Dassault Systèmes, des solutions NeoLedge et des technologies industrielles associées.</p>
          
          <div class="formation-types-grid">
            <div class="formation-type-card" *ngFor="let type of formationTypes">
              <div class="type-icon" [style.background]="type.color">
                <lucide-icon [name]="type.icon" size="32"></lucide-icon>
              </div>
              <h3>{{type.name}}</h3>
              <p>{{type.description}}</p>
              <ul class="type-features">
                <li *ngFor="let feature of type.features">
                  <lucide-icon [name]="CheckCircle" size="14"></lucide-icon>
                  {{feature}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Catalogue -->
      <section class="section-container catalog-section">
        <h2 class="section-title">L'ensemble des domaines de formations</h2>
        <p class="section-subtitle">Retrouvez les grandes familles de formations proposées pour développer, fiabiliser et partager vos savoir-faire numériques.</p>

        <div class="courses-grid">
          <article class="course-card" *ngFor="let c of allCourses" [class.course-card--large-image]="c.title === 'Formations ORTEMS' || c.title === 'Formations COMPOSER'">
            <div class="course-media">
              <img [src]="c.image" [alt]="c.title">
              <span class="course-level">{{c.family}}</span>
            </div>
            <div class="course-body">
              <h3>{{c.title}}</h3>
              <p>{{c.desc}}</p>
            </div>
            <div class="course-footer">
              <a routerLink="/contact" class="btn-enroll">{{c.cta}} <lucide-icon [name]="ArrowRight" size="17"></lucide-icon></a>
            </div>
          </article>
        </div>
      </section>

      <!-- Ressources pratiques -->
      <section class="section-container resources-section">
        <h2 class="section-title">En savoir plus</h2>
        <p class="section-subtitle">Les informations utiles pour organiser un parcours, vérifier un niveau ou préparer une certification.</p>
        <div class="resources-grid">
          <a routerLink="/contact" class="resource-card" *ngFor="let resource of resources">
            <lucide-icon [name]="resource.icon" size="24"></lucide-icon>
            <span>{{resource.name}}</span>
          </a>
        </div>
      </section>

      <!-- Certifications -->
      <section class="certs-section">
        <div class="section-container">
          <h2 class="section-title" style="color:white">Certifications Dassault Systèmes</h2>
          <p class="section-subtitle" style="color:rgba(255,255,255,0.7)">Préparez les validations de compétences attendues sur les solutions Dassault Systèmes.</p>
          <div class="certs-solutions-grid">
            <div class="cert-solution-group" *ngFor="let group of certificationsBySolution">
              <div class="cert-solution-header">
                <img [src]="group.icon" [alt]="group.solution">
                <h3>{{group.solution}}</h3>
              </div>
              <div class="cert-solution-certs">
                <div class="cert-item" *ngFor="let cert of group.certifications">
                  <div class="cert-level-badge" [class]="cert.level.toLowerCase()">{{cert.level}}</div>
                  <h4>{{cert.name}}</h4>
                  <p>{{cert.desc}}</p>
                  <span class="cert-duration">{{cert.duration}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section section-container">
        <div class="cta-box">
          <h2>Contactez un expert formation</h2>
          <p>Définissons le bon format, le bon niveau et les modules utiles à vos équipes avant de planifier votre parcours.</p>
          <a routerLink="/contact" class="btn-premium primary">Être accompagné <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .page-hero {
      height: 55vh;
      min-height: 400px;
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 60%, var(--primary-gold) 100%);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      overflow: hidden;
      &::before {
        content: '';
        position: absolute;
        width: 600px; height: 600px;
        background: rgba(197, 160, 89, 0.15);
        border-radius: 50%;
        top: -200px; right: -200px;
      }
    }
    .hero-tag {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 0 5%;
      h1 { font-size: 3.5rem; font-weight: 800; margin-bottom: 20px; @media(max-width:768px){font-size:2.2rem} }
      p { font-size: 1.2rem; opacity: 0.85; }
    }
    .stats-band {
      display: flex;
      justify-content: center;
      gap: 0;
      background: white;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
      .stat {
        flex: 1;
        max-width: 220px;
        text-align: center;
        padding: 30px 20px;
        border-right: 1px solid #E2E8F0;
        &:last-child { border-right: none; }
        strong { display: block; font-size: 2.2rem; font-weight: 800; color: var(--primary-gold); }
        span { font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }
      }
      @media(max-width:768px) { flex-wrap: wrap; .stat { flex: 1 1 50%; } }
    }
    
    /* Formation Types Section */
    .formation-types-section {
      background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 30%, #CBD5E1 100%);
      padding: 100px 0;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 25% 25%, rgba(197, 160, 89, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(0, 45, 91, 0.04) 0%, transparent 50%),
          linear-gradient(45deg, rgba(197, 160, 89, 0.02) 0%, transparent 30%, rgba(0, 45, 91, 0.02) 100%);
        pointer-events: none;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002D5B' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        pointer-events: none;
      }
      
      .section-container {
        position: relative;
        z-index: 1;
      }
    }
    
    /* Formation Types */
    .formation-types-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      margin-top: 60px;
    }
    .formation-type-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      padding: 32px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 8px 32px rgba(0, 45, 91, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(197, 160, 89, 0.03) 0%, rgba(0, 45, 91, 0.02) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 60px rgba(0, 45, 91, 0.15);
        border-color: rgba(197, 160, 89, 0.25);
        background: rgba(255, 255, 255, 0.08);
        
        &::before {
          opacity: 1;
        }
        
        .type-icon {
          transform: scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
      }
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 16px;
        color: var(--primary-deep);
        font-weight: 700;
        position: relative;
        z-index: 2;
      }
      
      p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: 24px;
        opacity: 0.85;
        position: relative;
        z-index: 2;
      }
    }
    
    .type-icon {
      width: 72px;
      height: 72px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 24px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
    }
    
    .formation-type-card:hover .type-icon::after {
      opacity: 1;
    }
    
    .type-features {
      list-style: none;
      
      li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--primary-deep);
        margin-bottom: 12px;
        padding: 8px 0;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:hover {
          background: rgba(197, 160, 89, 0.04);
          padding-left: 8px;
        }
        
        lucide-icon {
          color: var(--primary-gold);
          flex-shrink: 0;
          background: rgba(197, 160, 89, 0.1);
          border-radius: 50%;
          padding: 2px;
          width: 18px;
          height: 18px;
        }
      }
    }
    
    .catalog-section {
      // background: #FFFFFF;
      padding: 86px 5% 96px;
      .section-title {
        max-width: 980px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        color: #151515;
        font-size: 2.1rem;
        line-height: 1.15;
      }
      .section-subtitle {
        display: none;
      }
    }
    .filter-bar {
      display: flex;
      gap: 10px;
      margin-bottom: 40px;
      flex-wrap: wrap;
      button {
        padding: 10px 24px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 0.88rem;
        border: 2px solid #E2E8F0;
        background: white;
        color: var(--text-muted);
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover, &.active {
          background: var(--primary-gold);
          border-color: var(--primary-gold);
          color: white;
        }
      }
    }
    .courses-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      max-width: 980px;
      margin: 70px auto 0;
    }
    .course-card {
      min-height: 410px;
      background: #F4F4FB;
      border-radius: 8px;
      overflow: hidden;
      border: none;
      display: flex;
      flex-direction: column;
      transition: transform 0.28s ease, box-shadow 0.28s ease;
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 42px rgba(17, 24, 39, 0.08);
      }
    }
    .course-media {
      position: relative;
      height: 157px;
      overflow: hidden;
      background: linear-gradient(135deg, #F0F1F6 0%, #E8E9F0 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 8px 8px 0 0;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        object-fit: contain;
        transition: transform 0.35s ease;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.08));
      }
      .course-level {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
        color: #3D3D43;
        font-size: 0.72rem;
        line-height: 1;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(20, 20, 25, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
    .course-card:hover .course-media img {
      transform: scale(1.04);
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12));
    }
    .course-card--large-image .course-media {
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        object-fit: cover;
        filter: none;
      }
    }
    .course-card--large-image:hover .course-media img {
      transform: scale(1.035);
      filter: none;
    }
    .course-body {
      padding: 17px 17px 0;
      flex: 1;
      h3 {
        margin-bottom: 10px;
        color: #3F3F46;
        font-size: 1.04rem;
        font-weight: 800;
        line-height: 1.25;
      }
      p {
        color: #44444A;
        font-size: 0.91rem;
        line-height: 1.48;
        margin-bottom: 0;
      }
    }
    .course-footer {
      padding: 28px 17px 31px;
      display: flex;
      align-items: center;
      border-top: none;
    }
    .btn-enroll {
      display: inline-flex;
      align-items: center;
      gap: 15px;
      min-height: 42px;
      padding: 10px 23px 10px 25px;
      border-radius: 999px;
      background: transparent;
      color: #2D2D33;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      border: 2px solid #2D2D33;
      transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
      text-decoration: none;
      &:hover {
        background: #2D2D33;
        color: #FFFFFF;
      }
      &:active {
        transform: translateY(1px);
      }
    }
    @media(max-width: 1100px) {
      .catalog-section .section-title,
      .courses-grid {
        max-width: 100%;
      }
    }
    @media(max-width: 900px) {
      .courses-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-top: 42px;
      }
    }
    @media(max-width: 620px) {
      .catalog-section {
        padding: 62px 5% 72px;
        .section-title { font-size: 1.7rem; }
      }
      .courses-grid {
        grid-template-columns: 1fr;
      }
      .course-card {
        min-height: auto;
      }
    }
    .resources-section {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .resources-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 40px;
    }
    .resource-card {
      display: flex;
      align-items: center;
      gap: 14px;
      min-height: 72px;
      padding: 18px 20px;
      background: white;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      color: var(--primary-deep);
      text-decoration: none;
      font-weight: 700;
      transition: all 0.2s ease;
      lucide-icon { color: var(--primary-gold); flex-shrink: 0; }
      &:hover {
        border-color: var(--primary-gold);
        transform: translateY(-3px);
        box-shadow: 0 12px 28px rgba(0,45,91,0.08);
      }
    }
    .certs-section {
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%);
      padding: 80px 5%;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .certs-solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
      margin-top: 50px;
    }
    .cert-solution-group {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
      &:hover {
        background: rgba(255,255,255,0.08);
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.2);
      }
    }
    .cert-solution-header {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 24px;
      background: rgba(197, 160, 89, 0.1);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      img {
        width: 48px;
        height: 48px;
        object-fit: contain;
        border-radius: 8px;
      }
      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
        margin: 0;
      }
    }
    .cert-solution-certs {
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .cert-item {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 16px;
      position: relative;
      transition: all 0.2s ease;
      &:hover {
        background: rgba(255,255,255,0.06);
        border-color: rgba(197, 160, 89, 0.3);
      }
      .cert-level-badge {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 8px;
        &.débutant { background: #22C55E; color: white; }
        &.intermédiaire { background: #F59E0B; color: white; }
        &.avancé { background: var(--primary-gold); color: white; }
        &.expert { background: #8B5CF6; color: white; }
        &.spécialiste { background: #059669; color: white; }
      }
      h4 {
        font-size: 0.95rem;
        font-weight: 700;
        color: white;
        margin-bottom: 6px;
      }
      p {
        font-size: 0.85rem;
        color: rgba(255,255,255,0.7);
        margin-bottom: 8px;
        line-height: 1.4;
      }
      .cert-duration {
        font-size: 0.75rem;
        color: rgba(255,255,255,0.5);
        font-weight: 500;
        display: block;
      }
    }
    .cta-section { text-align: center; padding-top: 80px; padding-bottom: 140px; }
    .cta-box {
      max-width: 700px; margin: 0 auto;
      h2 { font-size: 2.8rem; margin-bottom: 16px; color: var(--primary-deep); }
      p { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 36px; }
    }
  `]
})
export class FormationsComponent {
  readonly GraduationCap = GraduationCap;
  readonly Clock = Clock;
  readonly Users = Users;
  readonly Award = Award;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly Star = Star;
  readonly Monitor = Monitor;
  readonly Wifi = Wifi;
  readonly MapPin = MapPin;
  readonly BookOpen = BookOpen;
  readonly Settings = Settings;
  readonly Laptop = Laptop;

  stats = [
    { value: '3', label: "Ans d'expérience formation" },
    { value: '20', label: 'Domaines de formation' },
    { value: '2021', label: 'Référence Qualiopi' },
    { value: '100%', label: 'Parcours orientés métier' },
  ];

  formationTypes = [
    {
      name: 'Formations en présentiel',
      description: 'Des sessions encadrées dans un environnement structuré, avec un formateur disponible et des manipulations guidées.',
      icon: Users,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-gold))',
      features: ['Accompagnement direct', 'Exercices pratiques', 'Supports pédagogiques', 'Progression encadrée']
    },
    {
      name: 'Formations à distance',
      description: 'Des cours animés en temps réel depuis le poste de travail, avec interactions, ressources digitales et suivi du formateur.',
      icon: Settings,
      color: 'linear-gradient(135deg, var(--primary-gold), var(--primary-deep))',
      features: ['Classe virtuelle', 'Outils interactifs', 'Environnement simulé possible', 'Connexion simple']
    },
    {
      name: 'Formations inter-entreprises',
      description: "Des sessions collectives qui favorisent le partage d'expérience entre professionnels de secteurs variés.",
      icon: MapPin,
      color: 'linear-gradient(135deg, #059669, var(--primary-deep))',
      features: ['Calendrier planifié', 'Groupes métier', 'Échanges de pratiques', 'Cadre standardisé']
    },
    {
      name: 'Formations personnalisées',
      description: 'Des contenus adaptés aux objectifs, aux données métier et au niveau réel des utilisateurs à former.',
      icon: Wifi,
      color: 'linear-gradient(135deg, var(--primary-deep), #059669)',
      features: ['Programme sur mesure', "Cas d'usage internes", 'Objectifs opérationnels', 'Accompagnement ciblé']
    },
    {
      name: 'Formations en ligne',
      description: 'Des ressources digitales pour progresser à son rythme, revoir des notions clés ou consolider les acquis.',
      icon: BookOpen,
      color: 'linear-gradient(135deg, #8B5CF6, var(--primary-deep))',
      features: ['myCADacademy', 'myCADultimate', 'Accès autonome', 'Parcours complémentaires']
    },
    {
      name: 'Bilans et quiz',
      description: "Des évaluations pour situer le niveau de connaissances avant d'engager un cursus ou une certification.",
      icon: Laptop,
      color: 'linear-gradient(135deg, var(--primary-deep), #8B5CF6)',
      features: ['Quiz CATIA', 'Quiz 3DEXPERIENCE', 'Bilan de compétences', 'Orientation de parcours']
    }
  ];

  allCourses = [
    { title: 'Formations 3DEXPERIENCE', desc: 'Modules pour mieux collaborer, piloter les projets et délivrer plus vite sur la plateforme 3DEXPERIENCE, dans le respect des processus métier.', family: 'Plateforme Globale', cta: 'Voir la catégorie', image: 'assets/solutions/compas.webp', category: '3DEXPERIENCE' },
    { title: 'Formations CATIA V5', desc: "Formations orientées conception avancée, modélisation 3D, assemblages, surfaces et méthodes de bureau d'études pour les environnements CATIA V5.", family: '3D Modeling Apps', cta: 'Voir la catégorie', image: 'assets/solutions/catia.png', category: 'CATIA V5' },
    { title: 'Formations COMPOSER', desc: 'Apprendre à produire des livrables techniques, notices, vues éclatées et supports de documentation à partir des données de conception.', family: '3D Modeling Apps', cta: 'Voir la catégorie', image: 'assets/catia.png', category: 'COMPOSER' },
    { title: 'Formations ORTEMS', desc: "Parcours autour de la planification industrielle et de l'ordonnancement pour améliorer la visibilité de production et la prise de décision.", family: 'Simulation Apps', cta: 'Voir la catégorie', image: 'assets/factory.png', category: 'ORTEMS' },
    { title: 'Formations ABAQUS', desc: 'Modules SIMULIA pour aborder la simulation numérique, les calculs avancés et les analyses par éléments finis avec Abaqus.', family: 'Simulation Apps', cta: 'Voir la catégorie', image: 'assets/solutions/simulia.png', category: 'ABAQUS' },
    { title: 'Formations IMPRESSION 3D', desc: "Formations consacrées aux usages de fabrication additive, à la préparation des pièces et à l'exploitation des équipements associés.", family: '3D Modeling Apps', cta: 'Voir la catégorie', image: 'assets/solutions/3D.png', category: 'IMPRESSION 3D' },
    { title: 'Formations RV-RA', desc: 'Parcours autour de la réalité virtuelle et augmentée pour visualiser, former, assister et valoriser les contenus industriels.', family: 'Simulation Apps', cta: 'Voir la catégorie', image: 'assets/solutions/delmia.png', category: 'RV-RA' },
  ];

  resources = [
    { name: 'Calendrier des formations', icon: Clock },
    { name: 'Financer sa formation', icon: Award },
    { name: 'Cursus métier', icon: GraduationCap },
    { name: 'Informations pratiques', icon: MapPin },
    { name: 'Démarche qualité', icon: CheckCircle },
    { name: 'Tester ses connaissances', icon: Laptop },
  ];

  certificationsBySolution = [
    {
      solution: 'SOLIDWORKS',
      icon: 'assets/solutions_icons/solidworks.png',
      certifications: [
        { name: 'CSWA – Certified SOLIDWORKS Associate', level: 'Débutant', duration: 'Bases', desc: 'Niveau débutant – bases de la modélisation 3D.' },
        { name: 'CSWP – Certified SOLIDWORKS Professional', level: 'Avancé', duration: 'Avancé', desc: 'Niveau avancé – conception professionnelle.' },
        { name: 'CSWE – Certified SOLIDWORKS Expert', level: 'Expert', duration: 'Expert', desc: 'Niveau expert – maîtrise complète du logiciel.' },
        { name: 'TECE – Certifications Éducateurs', level: 'Expert', duration: 'Pédagogie', desc: 'Pour enseignants & formateurs techniques.' }
      ]
    },
    {
      solution: 'GEOVIA',
      icon: 'assets/solutions_icons/geovia.png',
      certifications: [
        { name: 'GEOVIA Surpac', level: 'Spécialiste', duration: 'Modélisation', desc: 'Certification sur la modélisation géologique.' },
        { name: 'GEOVIA MineSched', level: 'Spécialiste', duration: 'Exploitation', desc: 'Certification pour l\'exploitation et la production minière.' },
        { name: 'City Planner', level: 'Expert', duration: 'Urbanisme', desc: 'Spécialisation en aménagement de villes intelligentes.' }
      ]
    },
    {
      solution: 'CATIA',
      icon: 'assets/solutions_icons/catia.png',
      certifications: [
        { name: 'CATIA V5 Essentials', level: 'Débutant', duration: '5 jours', desc: 'Maîtrisez les fondamentaux de la modélisation 3D et des assemblages avec CATIA V5.' },
        { name: 'CATIA V5 Surfacique', level: 'Intermédiaire', duration: '3 jours', desc: 'Apprenez les techniques avancées de modélisation surfacique pour le design complexe.' },
        { name: 'CATIA V6 3DEXPERIENCE', level: 'Intermédiaire', duration: '4 jours', desc: 'Découvrez la nouvelle génération CATIA sur plateforme collaborative 3DEXPERIENCE.' }
      ]
    },
    {
      solution: '3DEXPERIENCE',
      icon: 'assets/solutions_icons/3dexcite.png',
      certifications: [
        { name: '3DEXPERIENCE Fundamentals', level: 'Débutant', duration: '2 jours', desc: 'Découvrez les bases de la plateforme collaborative 3DEXPERIENCE.' },
        { name: '3DEXPERIENCE PLM', level: 'Intermédiaire', duration: '4 jours', desc: 'Maîtrisez la gestion du cycle de vie produit sur 3DEXPERIENCE.' },
        { name: '3DEXPERIENCE Administrator', level: 'Avancé', duration: '3 jours', desc: 'Administrez et configurez la plateforme 3DEXPERIENCE pour votre entreprise.' }
      ]
    },
    {
      solution: 'SIMULIA',
      icon: 'assets/solutions_icons/simula.png',
      certifications: [
        { name: 'SIMULIA Abaqus Fundamentals', level: 'Débutant', duration: '4 jours', desc: 'Apprenez les bases de la simulation par éléments finis avec Abaqus.' },
        { name: 'SIMULIA Advanced Nonlinear', level: 'Avancé', duration: '3 jours', desc: 'Maîtrisez les analyses non-linéaires complexes avec SIMULIA.' },
        { name: 'SIMULIA CFD Specialist', level: 'Intermédiaire', duration: '3 jours', desc: 'Spécialisez-vous dans la dynamique des fluides computationnelle.' }
      ]
    },
    {
      solution: 'DELMIA',
      icon: 'assets/solutions_icons/delmia.png',
      certifications: [
        { name: 'DELMIA Process Planning', level: 'Intermédiaire', duration: '4 jours', desc: 'Maîtrisez la planification des processus de fabrication avec DELMIA.' },
        { name: 'DELMIA Robotics', level: 'Avancé', duration: '3 jours', desc: 'Programmation et simulation robotique avancée avec DELMIA.' }
      ]
    },
    {
      solution: 'ENOVIA',
      icon: 'assets/solutions_icons/enovia.png',
      certifications: [
        { name: 'ENOVIA Fundamentals', level: 'Débutant', duration: '3 jours', desc: 'Découvrez les bases de la gestion PLM avec ENOVIA.' },
        { name: 'ENOVIA Administrator', level: 'Avancé', duration: '4 jours', desc: 'Administrez et configurez ENOVIA pour votre organisation.' }
      ]
    },
    {
      solution: 'BIOVIA',
      icon: 'assets/solutions_icons/biovia.png',
      certifications: [
        { name: 'BIOVIA Discovery Studio', level: 'Intermédiaire', duration: '3 jours', desc: 'Modélisation moléculaire et découverte de médicaments.' },
        { name: 'BIOVIA Pipeline Pilot', level: 'Avancé', duration: '2 jours', desc: 'Automatisation des workflows scientifiques.' }
      ]
    },
    {
      solution: 'NETVIBES',
      icon: 'assets/solutions_icons/netvibes.png',
      certifications: [
        { name: 'NETVIBES Dashboard Creation', level: 'Débutant', duration: '1 jour', desc: 'Créez des tableaux de bord intelligents avec NETVIBES.' },
        { name: 'NETVIBES AI Analytics', level: 'Intermédiaire', duration: '2 jours', desc: 'Exploitez l\'IA pour l\'analyse prédictive et la veille.' }
      ]
    },
    {
      solution: '3DVIA',
      icon: 'assets/solutions_icons/3dvia.png',
      certifications: [
        { name: '3DVIA Fundamentals', level: 'Débutant', duration: '2 jours', desc: 'Découvrez les bases de la visualisation 3D avec 3DVIA.' },
        { name: '3DVIA Advanced', level: 'Avancé', duration: '3 jours', desc: 'Maîtrisez les fonctionnalités avancées et l\'intégration web.' }
      ]
    }
  ];

}
