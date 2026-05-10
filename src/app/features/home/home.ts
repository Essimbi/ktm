import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers, Plane, Car, Building2, GraduationCap, Stethoscope, X } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main>
      <!-- Premium Hero Slider Section -->
      <section class="hero-slider">
        <div class="slides-wrapper">
          <div class="slide" *ngFor="let slide of slides; let i = index" 
               [class.active]="currentSlide === i"
               [class.previous]="prevSlideIndex === i">
            <div class="hero-bg">
              <img [src]="slide.image" [alt]="slide.title">
              <div class="overlay"></div>
            </div>
            <div class="hero-content">
              <div class="glass-card">
                <div class="overflow-hidden">
                  <span class="slide-tag">Innovation Excellence</span>
                </div>
                <div class="overflow-hidden">
                  <h1 [innerHTML]="slide.title"></h1>
                </div>
                <div class="overflow-hidden">
                  <p>{{slide.subtitle}}</p>
                </div>
                <div class="hero-actions">
                  <button class="btn-premium primary">{{slide.cta1}} <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></button>
                  <button class="btn-premium secondary">{{slide.cta2}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="progress-container">
          <div class="progress-bar" [style.width]="progress + '%'"></div>
        </div>

        <!-- Slider Controls -->
        <div class="slider-navigation">
          <button class="nav-btn prev" (click)="prevSlide()">
            <lucide-icon [name]="ArrowRight" size="24" style="transform: rotate(180deg)"></lucide-icon>
          </button>
          <div class="slider-dots">
            <button *ngFor="let dot of slides; let i = index" 
                    [class.active]="currentSlide === i" 
                    (click)="setSlide(i)"></button>
          </div>
          <button class="nav-btn next" (click)="nextSlide()">
            <lucide-icon [name]="ArrowRight" size="24"></lucide-icon>
          </button>
        </div>
      </section>

      <!-- About Section -->
      <section class="about section-container">
        <div class="about-grid">
          <div class="about-text">
            <h2 class="section-title" style="text-align: left;">Partenaire de votre Réussite Industrielle</h2>
            <p>KTM est le leader de l'accompagnement technologique en Afrique Centrale. Nous combinons expertise locale et solutions de classe mondiale pour transformer votre vision en réalité industrielle.</p>
            <div class="stats-grid">
              <div class="stat-card">
                <h3>50+</h3>
                <p>Projets Réalisés</p>
              </div>
              <div class="stat-card">
                <h3>20+</h3>
                <p>Clients Majeurs</p>
              </div>
              <div class="stat-card">
                <h3>15+</h3>
                <p>Certifications</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="assets/factory.png" alt="Smart Factory Africa">
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section class="solutions section-container" id="solutions">
        <h2 class="section-title">Nos Solutions Logicielles</h2>
        <p class="section-subtitle">Exploitez la puissance de la plateforme 3DEXPERIENCE et des solutions leaders du marché.</p>
        
        <div class="solutions-grid">
          <div class="solution-card reveal" *ngFor="let sol of solutions">
            <div class="sol-icon">
              <lucide-icon [name]="sol.icon" size="32"></lucide-icon>
            </div>
            <h3>{{sol.name}}</h3>
            <p>{{sol.desc}}</p>
            <a [routerLink]="sol.link" class="learn-more">En savoir plus <lucide-icon [name]="ArrowRight" size="14"></lucide-icon></a>
          </div>
        </div>
      </section>

      <!-- Featured Image Section -->
      <section class="featured-banner">
        <div class="banner-content">
          <div class="banner-text">
            <h2>Conception Avancée avec CATIA</h2>
            <p>Le standard mondial pour le design et l'ingénierie. Créez des produits intelligents et durables avec une précision inégalée.</p>
            <button class="btn-premium primary">Voir la Solution</button>
          </div>
          <div class="banner-img">
            <img src="assets/catia.png" alt="CATIA Design">
          </div>
        </div>
      </section>

      <!-- Industries Section -->
      <section class="industries section-container">
        <h2 class="section-title">Industries Accompagnées</h2>
        <p class="section-subtitle">Notre expertise s'étend à travers les secteurs les plus exigeants de l'économie camerounaise et régionale.</p>
        
        <div class="industries-grid">
          <div class="industry-card reveal" *ngFor="let ind of industries">
            <div class="ind-card-bg"></div>
            <div class="ind-card-content">
              <div class="ind-icon-wrapper">
                <lucide-icon [name]="ind.icon" size="32"></lucide-icon>
              </div>
              <h3>{{ind.name}}</h3>
              <p>{{ind.desc}}</p>
            </div>
            <div class="ind-card-footer">
              <span>Voir les solutions</span>
              <lucide-icon [name]="ArrowRight" size="14"></lucide-icon>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="certs section-container glass">
        <div class="certs-content">
          <div class="certs-text">
            <h2>Certifications & Formations</h2>
            <p>Montez en compétence avec nos programmes de certification officiels Dassault Systèmes.</p>
            <ul class="cert-list">
              <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Formations Académiques</li>
              <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Certifications Professionnelles</li>
              <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Accompagnement sur Mesure</li>
            </ul>
            <button class="btn-premium secondary">Rejoindre une formation</button>
          </div>
          <div class="certs-logos">
            <div class="cert-badge">3DEXPERIENCE Certified</div>
            <div class="cert-badge">CATIA Expert</div>
            <div class="cert-badge">SOLIDWORKS Professional</div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials section-container">
        <h2 class="section-title">Ce que disent nos clients</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card glass" *ngFor="let t of testimonials">
            <p class="quote">"{{t.text}}"</p>
            <div class="client-info">
              <div class="client-avatar">{{t.name[0]}}</div>
              <div>
                <h4>{{t.name}}</h4>
                <span>{{t.role}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="final-cta">
        <div class="cta-content">
          <h2>Prêt à transformer votre entreprise ?</h2>
          <p>Rejoignez les leaders de l'industrie qui font confiance à KTM pour leur innovation.</p>
          <div class="cta-btns">
            <button class="btn-premium primary">Contactez-nous dès aujourd'hui</button>
            <button class="btn-premium secondary">Réserver une démo gratuite</button>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .hero-slider {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      position: relative;
      background: var(--primary-deep);
    }

    .slides-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      z-index: 1;
      clip-path: inset(0 0 0 100%);
      transition: clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease;
      
      &.active {
        opacity: 1;
        z-index: 2;
        clip-path: inset(0 0 0 0);
      }
      
      &.previous {
        z-index: 1;
        opacity: 1;
        clip-path: inset(0 0 0 0);
      }
    }

    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.2);
        transition: transform 12s linear;
      }
      
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 50%, rgba(11, 31, 58, 0.4) 0%, rgba(11, 31, 58, 0.9) 100%);
      }
    }

    .slide.active .hero-bg img {
      transform: scale(1);
    }

    .overflow-hidden {
      overflow: hidden;
      display: block;
    }

    .glass-card {
      background: rgba(11, 31, 58, 0.3);
      backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 60px;
      border-radius: 40px;
      max-width: 850px;
      box-shadow: 0 40px 120px rgba(0,0,0,0.6);
      transform: translateX(-50px);
      opacity: 0;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0.4s;
      
      @media (max-width: 768px) { padding: 40px; transform: translateX(0); }
    }

    .slide.active .glass-card {
      transform: translateX(0);
      opacity: 1;
    }

    .slide-tag {
      display: inline-block;
      padding: 10px 25px;
      background: var(--primary-electric);
      color: white;
      border-radius: 50px;
      font-weight: 800;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 30px;
      transform: translateY(100%);
      transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    }

    .slide.active .slide-tag { transform: translateY(0); }

    .hero-content {
      h1 {
        font-size: 5rem;
        font-weight: 800;
        line-height: 1.05;
        margin-bottom: 24px;
        color: white;
        transform: translateY(100%);
        transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1) 0.7s;
        
        @media (max-width: 768px) { font-size: 2.8rem; }
      }
      
      p {
        font-size: 1.4rem;
        color: #E2E8F0;
        margin-bottom: 40px;
        max-width: 650px;
        transform: translateY(100%);
        transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1) 0.8s;
        
        @media (max-width: 768px) { font-size: 1.1rem; }
      }
      
      .hero-actions {
        display: flex;
        gap: 20px;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
        
        @media (max-width: 640px) { flex-direction: column; }
      }
    }

    .slide.active h1, .slide.active p { transform: translateY(0); }
    .slide.active .hero-actions { opacity: 1; transform: translateY(0); }

    .slider-navigation {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 40px;
      z-index: 20;
    }

    .nav-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.1);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: var(--primary-electric);
        border-color: var(--primary-electric);
        transform: scale(1.1);
      }
    }

    .progress-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgba(255,255,255,0.1);
      z-index: 30;
    }

    .progress-bar {
      height: 100%;
      background: var(--primary-electric);
      transition: width 0.1s linear;
    }

    .slider-dots {
      display: flex;
      gap: 12px;
      
      button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        border: none;
        transition: all 0.3s ease;
        padding: 0;
        
        &.active {
          background: var(--primary-electric);
          transform: scale(1.4);
        }
      }
    }

    /* About Section */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      
      @media (max-width: 1024px) { grid-template-columns: 1fr; }
    }

    .about-text p {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 40px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .stat-card {
      padding: 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      text-align: center;
      
      h3 { color: var(--primary-electric); font-size: 2rem; margin-bottom: 5px; }
      p { font-size: 0.85rem; margin-bottom: 0; font-weight: 600; }
    }

    .about-image img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.1);
    }

    /* Solutions Grid */
    .section-subtitle {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 60px;
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .solution-card {
      padding: 40px;
      background: white;
      border-radius: 16px;
      border: 1px solid #E2E8F0;
      transition: var(--transition-smooth);
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(11, 31, 58, 0.1);
        border-color: var(--primary-electric);
      }
      
      .sol-icon {
        width: 60px;
        height: 60px;
        background: rgba(0, 91, 255, 0.1);
        color: var(--primary-electric);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
      }
      
      h3 { margin-bottom: 15px; font-size: 1.4rem; }
      p { color: var(--text-muted); margin-bottom: 25px; font-size: 0.95rem; }
      
      .learn-more {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        color: var(--primary-electric);
        font-size: 0.9rem;
      }
    }

    /* Featured Banner */
    .featured-banner {
      background: var(--primary-deep);
      padding: 100px 5%;
      color: white;
    }

    .banner-content {
      max-width: 1440px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      
      @media (max-width: 1024px) { grid-template-columns: 1fr; }
    }

    .banner-text {
      h2 { color: white; font-size: 3rem; margin-bottom: 20px; }
      p { font-size: 1.2rem; color: #CBD5E1; margin-bottom: 40px; }
    }

    .banner-img img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    }

    /* Certifications */
    .certs {
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%);
      border-radius: 40px;
      margin-top: 60px;
      margin-bottom: 60px;
      color: white;
      h2, h3, p { color: white; }
      p { opacity: 0.85; }
    }

    .certs-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      
      @media (max-width: 768px) { grid-template-columns: 1fr; text-align: center; }
    }

    .cert-list {
      list-style: none;
      margin: 30px 0;
      li { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-weight: 600; color: white; }
      lucide-icon { color: var(--primary-electric); }
    }

    .certs-logos {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .cert-badge {
      padding: 15px 25px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 12px;
      font-weight: 700;
      color: white;
      backdrop-filter: blur(8px);
    }

    /* Testimonials */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }

    .testimonial-card {
      padding: 40px;
      border-radius: 24px;
      background: white;
      box-shadow: 0 15px 30px rgba(0,0,0,0.03);
      
      .quote { font-style: italic; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 30px; }
    }

    /* Industries */
    .industries-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }

    .industry-card {
      position: relative;
      height: 320px;
      background: white;
      border-radius: 24px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px;
      border: 1px solid #E2E8F0;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      
      &:hover {
        transform: translateY(-10px);
        border-color: var(--primary-electric);
        box-shadow: 0 20px 40px rgba(0, 91, 255, 0.1);
        
        .ind-card-bg { opacity: 0.05; transform: scale(1.1); }
        .ind-icon-wrapper { background: var(--primary-electric); color: white; transform: rotate(10deg); }
        .ind-card-footer { transform: translateY(0); opacity: 1; }
      }
    }

    .ind-card-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--primary-electric) 0%, var(--primary-deep) 100%);
      opacity: 0;
      transition: all 0.5s ease;
      z-index: 0;
    }

    .ind-card-content {
      position: relative;
      z-index: 1;
    }

    .ind-icon-wrapper {
      width: 64px;
      height: 64px;
      background: rgba(11, 31, 58, 0.05);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 25px;
      transition: all 0.4s ease;
    }

    .industry-card h3 {
      font-size: 1.5rem;
      margin-bottom: 12px;
      transition: all 0.3s ease;
    }

    .industry-card p {
      font-size: 0.95rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .ind-card-footer {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--primary-electric);
      font-weight: 700;
      font-size: 0.9rem;
      transform: translateY(10px);
      opacity: 0;
      transition: all 0.3s ease;
    }

    /* Final CTA */
    .final-cta {
      padding: 120px 5%;
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-electric) 100%);
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 800px;
      margin: 0 auto;
      
      h2 { color: white; font-size: 3.5rem; margin-bottom: 20px; }
      p { font-size: 1.25rem; margin-bottom: 40px; opacity: 0.9; }
    }

    .cta-btns {
      display: flex;
      gap: 20px;
      justify-content: center;
      
      .btn-premium.secondary {
        border-color: white;
        color: white;
        &:hover { background: white; color: var(--primary-deep); }
      }
    }
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly ArrowRight = ArrowRight;
  readonly X = X;
  readonly CheckIcon = CheckCircle;

  currentSlide = 0;
  prevSlideIndex = -1;
  progress = 0;
  private slideInterval: any;
  private progressInterval: any;
  private readonly SLIDE_DURATION = 6000;

  slides = [
    {
      title: 'Accélérez votre <span class="gradient-text">Transformation Digitale</span>',
      subtitle: 'Partenaire officiel Dassault Systèmes. Nous propulsons l\'industrie 4.0 vers de nouveaux sommets en Afrique.',
      image: 'assets/hero-bg.png',
      cta1: 'Découvrir nos solutions',
      cta2: 'Demander une démo'
    },
    {
      title: 'L\'Usine du <span class="gradient-text">Futur</span>, Aujourd\'hui',
      subtitle: 'Optimisez votre production avec les jumeaux numériques et les solutions DELMIA & SIMULIA.',
      image: 'assets/factory.png',
      cta1: 'Voir nos expertises',
      cta2: 'Nous contacter'
    },
    {
      title: 'L\'Innovation <span class="gradient-text">Collaborative</span>',
      subtitle: 'Unissez vos talents sur la plateforme 3DEXPERIENCE pour concevoir des produits durables.',
      image: 'assets/collab.png',
      cta1: 'Explorer la plateforme',
      cta2: 'En savoir plus'
    }
  ];

  solutions = [
    { name: '3DEXPERIENCE', desc: 'Plateforme collaborative pour l\'innovation produit et la gestion PLM.', icon: Layers, link: '/solutions/3dexperience' },
    { name: 'CATIA', desc: 'Solution leader pour la conception 3D et le design industriel.', icon: Monitor, link: '/solutions/catia' },
    { name: 'SOLIDWORKS', desc: 'CAO mécanique et simulation intuitive pour les ingénieurs.', icon: Database, link: '/solutions/solidworks' },
    { name: 'SIMULIA', desc: 'Simulation réaliste pour tester et optimiser les performances.', icon: Zap, link: '/solutions/simulia' },
    { name: 'ENOVIA', desc: 'Gestion sécurisée des données et collaboration en entreprise.', icon: Shield, link: '/solutions/enovia' },
    { name: 'DELMIA', desc: 'Excellence opérationnelle et planification de la production.', icon: Layout, link: '/solutions/delmia' }
  ];

  industries = [
    { name: 'Aéronautique', desc: 'Conception de systèmes complexes et gestion du cycle de vie.', icon: Plane },
    { name: 'Automobile', desc: 'Optimisation de la production et design industriel innovant.', icon: Car },
    { name: 'Énergie', desc: 'Simulation avancée pour les infrastructures énergétiques.', icon: Zap },
    { name: 'BTP', desc: 'Digitalisation des processus de construction et BIM.', icon: Building2 },
    { name: 'Éducation', desc: 'Programmes académiques et certifications pour les universités.', icon: GraduationCap },
    { name: 'Santé', desc: 'Innovation dans les dispositifs médicaux et recherche.', icon: Stethoscope }
  ];

  testimonials = [
    { name: 'Jean Dupont', role: 'Directeur Industriel, AfricaCorp', text: 'KTM a transformé notre chaîne de production grâce à CATIA. Un partenaire incontournable.' },
    { name: 'Sarah Mbia', role: 'Doyenne, Université Tech', text: 'Le programme académique de KTM est une opportunité incroyable pour nos étudiants.' }
  ];

  ngAfterViewInit() {
    this.initScrollReveal();
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.progress = 0;
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_DURATION);

    this.progressInterval = setInterval(() => {
      this.progress += (100 / (this.SLIDE_DURATION / 100));
    }, 100);
  }

  stopSlider() {
    if (this.slideInterval) clearInterval(this.slideInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
  }

  nextSlide() {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetProgress();
  }

  prevSlide() {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetProgress();
  }

  setSlide(index: number) {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = index;
    this.resetProgress();
  }

  private resetProgress() {
    this.stopSlider();
    this.startSlider();
  }

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
