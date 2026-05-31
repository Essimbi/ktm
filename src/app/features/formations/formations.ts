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
          <span class="hero-tag">Académie KTM</span>
          <h1>Formations & Certifications</h1>
          <p>Développez votre expertise sur les solutions Dassault Systèmes et NeoLedge avec nos programmes officiels, animés par des instructeurs certifiés.</p>
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
      <section class="section-container">
        <h2 class="section-title">Nos Modalités de Formation</h2>
        <p class="section-subtitle">Choisissez la formule qui correspond le mieux à vos besoins et contraintes.</p>
        
        <div class="formation-types-grid">
          <div class="formation-type-card" *ngFor="let type of formationTypes">
            <div class="type-icon" [style.background]="type.color">
              <lucide-icon [name]="type.icon" size="28"></lucide-icon>
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
      </section>

      <!-- Catalogue -->
      <section class="section-container catalog-section">
        <h2 class="section-title">Catalogue des Formations</h2>
        <p class="section-subtitle">Des programmes adaptés à tous les niveaux, du débutant à l'expert certifié.</p>

        <!-- Filters -->
        <div class="filter-bar">
          <button *ngFor="let f of filters" [class.active]="activeFilter === f" (click)="setFilter(f)">{{f}}</button>
        </div>

        <div class="courses-grid">
          <div class="course-card" *ngFor="let c of filteredCourses">
            <div class="course-header" [style.background]="c.color">
              <div class="course-icon">
                <lucide-icon [name]="GraduationCap" size="28"></lucide-icon>
              </div>
              <span class="course-level">{{c.level}}</span>
            </div>
            <div class="course-body">
              <h3>{{c.title}}</h3>
              <p>{{c.desc}}</p>
              <div class="course-meta">
                <span><lucide-icon [name]="Clock" size="14"></lucide-icon> {{c.duration}}</span>
                <span><lucide-icon [name]="Users" size="14"></lucide-icon> {{c.students}}+ inscrits</span>
              </div>
              <div class="course-tags">
                <span *ngFor="let t of c.tags">{{t}}</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="price">
                <span class="amount">Sur devis</span>
              </div>
              <button class="btn-enroll">S'inscrire <lucide-icon [name]="ArrowRight" size="14"></lucide-icon></button>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="certs-section">
        <div class="section-container">
          <h2 class="section-title" style="color:white">Certifications Officielles</h2>
          <p class="section-subtitle" style="color:rgba(255,255,255,0.7)">Valorisez votre expertise avec des certifications reconnues mondialement.</p>
          <div class="certs-grid">
            <div class="cert-item" *ngFor="let cert of certifications">
              <lucide-icon [name]="Award" size="32"></lucide-icon>
              <h4>{{cert.name}}</h4>
              <p>{{cert.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section section-container">
        <div class="cta-box">
          <h2>Besoin d'un programme sur mesure ?</h2>
          <p>Nous concevons des formations intra-entreprise adaptées à vos objectifs et vos équipes.</p>
          <a routerLink="/contact" class="btn-premium primary">Contactez notre équipe pédagogique <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
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
    
    /* Formation Types */
    .formation-types-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 50px;
    }
    .formation-type-card {
      background: white;
      border-radius: 20px;
      padding: 28px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 40px rgba(0,45,91,0.08);
        border-color: var(--primary-gold);
      }
      h3 {
        font-size: 1.2rem;
        margin-bottom: 12px;
        color: var(--primary-deep);
      }
      p {
        color: var(--text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 20px;
      }
    }
    .type-icon {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 20px;
      transition: all 0.3s ease;
    }
    .type-features {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--primary-deep);
        margin-bottom: 8px;
        lucide-icon {
          color: var(--primary-gold);
          flex-shrink: 0;
        }
      }
    }
    
    .catalog-section {
      background: #F8FAFC;
      padding: 80px 5%;
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
      grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
      gap: 28px;
    }
    .course-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #E2E8F0;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    }
    .course-header {
      padding: 28px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: white;
      .course-icon {
        width: 52px; height: 52px;
        background: rgba(255,255,255,0.2);
        border-radius: 12px;
        display: flex; align-items: center; justify-content: center;
      }
      .course-level {
        font-size: 0.75rem; font-weight: 700;
        background: rgba(255,255,255,0.2);
        padding: 5px 12px; border-radius: 50px;
        text-transform: uppercase; letter-spacing: 1px;
      }
    }
    .course-body {
      padding: 24px;
      flex: 1;
      h3 { font-size: 1.2rem; margin-bottom: 10px; }
      p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.6; }
    }
    .course-meta {
      display: flex; gap: 20px; margin-bottom: 16px;
      span { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; color: var(--text-muted); font-weight: 600; }
    }
    .course-tags {
      display: flex; gap: 8px; flex-wrap: wrap;
      span {
        font-size: 0.75rem; padding: 4px 10px;
        background: rgba(197, 160, 89, 0.08);
        color: var(--primary-gold);
        border-radius: 50px; font-weight: 600;
      }
    }
    .course-footer {
      padding: 16px 24px 24px;
      display: flex; justify-content: space-between; align-items: center;
      border-top: 1px solid #E2E8F0;
      .amount { font-weight: 800; font-size: 1rem; color: var(--primary-deep); }
    }
    .btn-enroll {
      display: flex; align-items: center; gap: 6px;
      padding: 10px 20px; border-radius: 10px;
      background: var(--primary-gold); color: white;
      font-weight: 700; font-size: 0.85rem; cursor: pointer; border: none;
      transition: all 0.2s ease;
      &:hover { background: var(--primary-deep); }
    }
    .certs-section {
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%);
      padding: 80px 5%;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px; margin-top: 50px;
    }
    .cert-item {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px; padding: 32px; text-align: center; color: white;
      transition: all 0.3s ease;
      lucide-icon { color: var(--primary-gold); margin-bottom: 16px; }
      h4 { font-size: 1.1rem; margin-bottom: 10px; }
      p { font-size: 0.88rem; opacity: 0.7; }
      &:hover { background: rgba(255,255,255,0.12); transform: translateY(-5px); }
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
    { value: '500+', label: 'Professionnels formés' },
    { value: '20+', label: 'Modules disponibles' },
    { value: '95%', label: 'Taux de satisfaction' },
    { value: '15+', label: 'Certifications officielles' },
  ];

  formationTypes = [
    {
      name: 'Formations Inter-entreprises',
      description: 'Rejoignez d\'autres professionnels dans nos sessions collectives pour partager expériences et bonnes pratiques.',
      icon: Users,
      color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-gold))',
      features: ['6 participants maximum', 'Échanges entre professionnels', 'Calendrier fixe', 'Tarif optimisé']
    },
    {
      name: 'Formations Intra-entreprise',
      description: 'Des programmes personnalisés construits pour répondre aux besoins spécifiques de votre organisation.',
      icon: Settings,
      color: 'linear-gradient(135deg, var(--primary-gold), var(--primary-deep))',
      features: ['Programme sur mesure', 'Dans vos locaux', 'Équipe dédiée', 'Flexibilité totale']
    },
    {
      name: 'Formations en Salle',
      description: 'Sessions présentielles dans nos centres de formation équipés des dernières technologies.',
      icon: MapPin,
      color: 'linear-gradient(135deg, #059669, var(--primary-deep))',
      features: ['Matériel professionnel', 'Formateur présent', '7 heures par jour', 'Exercices pratiques']
    },
    {
      name: 'Formations à Distance',
      description: 'Formations en temps réel avec accompagnement personnalisé, depuis votre poste de travail.',
      icon: Wifi,
      color: 'linear-gradient(135deg, var(--primary-deep), #059669)',
      features: ['Temps réel avec formateur', 'Depuis votre bureau', 'Exercices pratiques', 'Support technique']
    },
    {
      name: 'Formations Catalogue',
      description: 'Programmes standardisés couvrant l\'ensemble des fonctionnalités des solutions Dassault Systèmes.',
      icon: BookOpen,
      color: 'linear-gradient(135deg, #8B5CF6, var(--primary-deep))',
      features: ['Contenu structuré', 'Progression pédagogique', 'Supports inclus', 'Certification possible']
    },
    {
      name: 'Formations E-learning',
      description: 'Apprenez à votre rythme avec nos modules interactifs disponibles 24h/24.',
      icon: Laptop,
      color: 'linear-gradient(135deg, var(--primary-deep), #8B5CF6)',
      features: ['Accès 24h/24', 'Rythme personnel', 'Modules interactifs', 'Suivi de progression']
    }
  ];

  filters = ['Tous', 'CATIA', 'SOLIDWORKS', 'SIMULIA', '3DEXPERIENCE', 'NeoLedge', 'GEOVIA'];
  activeFilter = 'Tous';

  allCourses = [
    // CATIA
    { title: 'CATIA V5 – Initiation', desc: 'Maîtrisez les fondamentaux de la conception 3D avec CATIA V5. Pièces, assemblages et mise en plan.', duration: '3 jours', students: 120, level: 'Débutant', tags: ['CATIA', 'CAO', '3D'], color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))', category: 'CATIA' },
    { title: 'CATIA V5 – Conception Avancée', desc: 'Surfaces complexes, tolérancement, structures mécaniques avancées et automatisation.', duration: '5 jours', students: 80, level: 'Avancé', tags: ['CATIA', 'Surface', 'Expert'], color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))', category: 'CATIA' },
    { title: 'CATIA V5 – Surfacique', desc: 'Maîtrisez la modélisation surfacique pour les formes complexes et le design industriel.', duration: '3 jours', students: 65, level: 'Intermédiaire', tags: ['CATIA', 'Surfacique', 'Design'], color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))', category: 'CATIA' },
    
    // SOLIDWORKS
    { title: 'SOLIDWORKS Essentiel', desc: 'Conception de pièces et assemblages mécaniques. Simulation basique et mise en plan.', duration: '3 jours', students: 200, level: 'Débutant', tags: ['SOLIDWORKS', 'Mécanique'], color: 'linear-gradient(135deg, #C5A059, #002D5B)', category: 'SOLIDWORKS' },
    { title: 'SOLIDWORKS Simulation', desc: 'Analyse statique, fatigue, thermique et dynamique. Optimisation topologique.', duration: '4 jours', students: 90, level: 'Intermédiaire', tags: ['SOLIDWORKS', 'Simulation', 'FEA'], color: 'linear-gradient(135deg, #002D5B, #C5A059)', category: 'SOLIDWORKS' },
    { title: 'SOLIDWORKS PDM', desc: 'Gestion des données techniques et collaboration en équipe avec SOLIDWORKS PDM.', duration: '2 jours', students: 75, level: 'Intermédiaire', tags: ['SOLIDWORKS', 'PDM', 'Gestion'], color: 'linear-gradient(135deg, #C5A059, #002D5B)', category: 'SOLIDWORKS' },
    
    // SIMULIA
    { title: 'SIMULIA Abaqus', desc: 'Simulation éléments finis avancée pour la mécanique des structures et des fluides.', duration: '5 jours', students: 45, level: 'Expert', tags: ['SIMULIA', 'FEM', 'Abaqus'], color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))', category: 'SIMULIA' },
    { title: 'SIMULIA CST Studio', desc: 'Simulation électromagnétique pour les applications haute fréquence et antennes.', duration: '3 jours', students: 30, level: 'Avancé', tags: ['SIMULIA', 'Électromagnétisme'], color: 'linear-gradient(135deg, var(--primary-deep), var(--primary-deep))', category: 'SIMULIA' },
    
    // 3DEXPERIENCE
    { title: '3DEXPERIENCE Plateforme', desc: 'Administration, collaboration et gestion PLM sur la plateforme 3DEXPERIENCE de Dassault Systèmes.', duration: '4 jours', students: 60, level: 'Intermédiaire', tags: ['3DEXPERIENCE', 'PLM', 'Collaboration'], color: 'linear-gradient(135deg, #C5A059, #002D5B)', category: '3DEXPERIENCE' },
    { title: '3DEXPERIENCE CATIA', desc: 'Conception 3D collaborative sur la plateforme cloud 3DEXPERIENCE.', duration: '4 jours', students: 55, level: 'Intermédiaire', tags: ['3DEXPERIENCE', 'CATIA', 'Cloud'], color: 'linear-gradient(135deg, #002D5B, #C5A059)', category: '3DEXPERIENCE' },
    
    // NeoLedge
    { title: 'NeoLedge ECM Fundamentals', desc: 'Maîtrisez les bases de la gestion électronique de documents avec NeoLedge.', duration: '2 jours', students: 85, level: 'Débutant', tags: ['NeoLedge', 'GED', 'ECM'], color: 'linear-gradient(135deg, #002D5B, #059669)', category: 'NeoLedge' },
    { title: 'NeoLedge Workflows & RPA', desc: 'Automatisez vos processus métiers avec les workflows intelligents NeoLedge.', duration: '2 jours', students: 40, level: 'Intermédiaire', tags: ['NeoLedge', 'Workflow', 'RPA'], color: 'linear-gradient(135deg, #059669, #002D5B)', category: 'NeoLedge' },
    
    // GEOVIA
    { title: 'GEOVIA Surpac Essentials', desc: 'Modélisation géologique 3D et planification minière avec Surpac.', duration: '4 jours', students: 25, level: 'Intermédiaire', tags: ['GEOVIA', 'Mines', 'Géologie'], color: 'linear-gradient(135deg, #2D5B2D, #C5A059)', category: 'GEOVIA' },
  ];

  certifications = [
    { name: 'CSWA – SOLIDWORKS Associate', desc: 'Certification officielle pour les professionnels de la CAO SOLIDWORKS.' },
    { name: 'CSWP – SOLIDWORKS Professional', desc: 'Le standard international pour les ingénieurs SOLIDWORKS confirmés.' },
    { name: 'CATIA V5 Certified', desc: 'Reconnaissance officielle Dassault Systèmes pour les experts CATIA.' },
    { name: '3DEXPERIENCE Certified', desc: 'Maîtrise de la plateforme collaborative Dassault Systèmes.' },
    { name: 'SIMULIA Abaqus Certified', desc: 'Expertise reconnue en simulation par éléments finis avec Abaqus.' },
    { name: 'NeoLedge ECM Specialist', desc: 'Spécialiste certifié en gestion électronique de documents.' },
    { name: 'GEOVIA Surpac Professional', desc: 'Certification en modélisation géologique et planification minière.' },
    { name: 'DELMIA Manufacturing Expert', desc: 'Expert certifié en planification et optimisation industrielle.' },
  ];

  get filteredCourses() {
    if (this.activeFilter === 'Tous') return this.allCourses;
    return this.allCourses.filter(c => c.category === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }
}
