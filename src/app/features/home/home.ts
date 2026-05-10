import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers, Plane, Car, Building2, GraduationCap, Stethoscope, X, Award, TrendingUp, Users } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main>
      <!-- ── Premium Hero Slider Section ── -->
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
                  <a routerLink="/solutions" class="btn-premium primary">{{slide.cta1}} <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
                  <a routerLink="/contact" class="btn-premium secondary">{{slide.cta2}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar" [style.width]="progress + '%'"></div>
        </div>

        <div class="slider-navigation">
          <button class="nav-btn prev" (click)="prevSlide()" aria-label="Précédent">
            <lucide-icon [name]="ArrowRight" size="24" style="transform: rotate(180deg)"></lucide-icon>
          </button>
          <div class="slider-dots">
            <button *ngFor="let dot of slides; let i = index" 
                    [class.active]="currentSlide === i" 
                    (click)="setSlide(i)" [attr.aria-label]="'Slide ' + (i+1)"></button>
          </div>
          <button class="nav-btn next" (click)="nextSlide()" aria-label="Suivant">
            <lucide-icon [name]="ArrowRight" size="24"></lucide-icon>
          </button>
        </div>
      </section>

      <!-- ── About / Value Prop ── -->
      <section class="about section-container">
        <div class="about-grid">
          <div class="about-text reveal">
            <span class="section-tag">Qui sommes-nous</span>
            <h2 class="section-title" style="text-align: left;">Partenaire de votre <span class="gradient-text">Réussite Industrielle</span></h2>
            <p>KTM est le leader de l'accompagnement technologique en Afrique Centrale. Nous combinons expertise locale et solutions de classe mondiale pour transformer votre vision en réalité industrielle.</p>
            
            <div class="value-props">
              <div class="vp-item">
                <div class="vp-icon"><lucide-icon [name]="Award" size="20"></lucide-icon></div>
                <div>
                  <h4>Expertise Certifiée</h4>
                  <p>Seul partenaire Elite Dassault Systèmes de la région.</p>
                </div>
              </div>
              <div class="vp-item">
                <div class="vp-icon"><lucide-icon [name]="TrendingUp" size="20"></lucide-icon></div>
                <div>
                  <h4>Accélération ROI</h4>
                  <p>Réduction prouvée des cycles de conception de 30%.</p>
                </div>
              </div>
            </div>

            <div class="stats-grid">
              <div class="stat-card" *ngFor="let s of mainStats">
                <h3>{{s.value}}</h3>
                <p>{{s.label}}</p>
              </div>
            </div>
          </div>
          <div class="about-visual reveal">
            <div class="visual-wrapper">
              <img src="/assets/factory.png" alt="Smart Factory Africa">
              <div class="experience-badge">
                <span class="number">10+</span>
                <span class="text">Ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Solutions Grid ── -->
      <section class="solutions-section">
        <div class="section-container">
          <div class="sec-header reveal">
            <h2 class="section-title">Nos Solutions Logicielles</h2>
            <p class="section-subtitle">Exploitez la puissance de la plateforme 3DEXPERIENCE et des solutions leaders du marché mondial.</p>
          </div>
          
          <div class="solutions-grid">
            <div class="sol-card reveal" *ngFor="let sol of solutions; let i = index" [style.--delay]="i * 0.1 + 's'">
              <div class="sol-icon" [style.background]="sol.color">
                <lucide-icon [name]="sol.icon" size="28"></lucide-icon>
              </div>
              <h3>{{sol.name}}</h3>
              <p>{{sol.desc}}</p>
              <a [routerLink]="sol.link" class="learn-more">
                En savoir plus <lucide-icon [name]="ArrowRight" size="14"></lucide-icon>
              </a>
            </div>
          </div>
          
          <div class="view-all-cta reveal">
            <a routerLink="/solutions" class="btn-premium secondary">Découvrir tout le portfolio</a>
          </div>
        </div>
      </section>

      <!-- ── Industries ── -->
      <section class="industries section-container">
        <div class="sec-header reveal">
          <h2 class="section-title">Secteurs d'Intervention</h2>
          <p class="section-subtitle">Notre expertise s'adapte aux exigences uniques de chaque industrie.</p>
        </div>
        
        <div class="industries-grid">
          <div class="industry-card reveal" *ngFor="let ind of industries">
            <div class="ind-image-overlay"></div>
            <div class="ind-content">
              <div class="ind-icon-wrapper">
                <lucide-icon [name]="ind.icon" size="28"></lucide-icon>
              </div>
              <h3>{{ind.name}}</h3>
              <p>{{ind.desc}}</p>
            </div>
            <div class="ind-hover-cta">
              <span>Voir les solutions</span>
              <lucide-icon [name]="ArrowRight" size="14"></lucide-icon>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Trust / Certs ── -->
      <section class="trust-section">
        <div class="section-container">
          <div class="trust-box glass reveal">
            <div class="trust-text">
              <h2>Certifications & Académie</h2>
              <p>Nous formons les ingénieurs de demain et certifions les experts d'aujourd'hui.</p>
              <ul class="trust-list">
                <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Centre de formation agréé</li>
                <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Examens de certification officiels</li>
                <li><lucide-icon [name]="CheckIcon" size="18"></lucide-icon> Partenariats universitaires</li>
              </ul>
              <a routerLink="/formations" class="btn-premium primary">Rejoindre l'Académie</a>
            </div>
            <div class="trust-badges">
              <div class="t-badge"><span>Dassault Systèmes</span> Elite Partner</div>
              <div class="t-badge"><span>CATIA</span> Specialist</div>
              <div class="t-badge"><span>SOLIDWORKS</span> Professional</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Final CTA ── -->
      <section class="home-final-cta">
        <div class="cta-overlay"></div>
        <div class="cta-inner reveal">
          <h2>Prêt à propulser votre innovation ?</h2>
          <p>Rejoignez les leaders de l'industrie qui font confiance à KTM pour leur transformation digitale.</p>
          <div class="cta-btns">
            <a routerLink="/contact" class="btn-premium primary">Démarrer un projet</a>
            <a routerLink="/services" class="btn-premium outline-white">Nos expertises</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    /* ── Hero Slider ── */
    .hero-slider {
      height: 100vh; width: 100%; overflow: hidden;
      position: relative; background: #050b1a;
    }
    .slide {
      position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
      opacity: 0; z-index: 1; clip-path: inset(0 0 0 100%);
      transition: clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease;
      &.active { opacity: 1; z-index: 2; clip-path: inset(0 0 0 0); }
      &.previous { z-index: 1; opacity: 1; clip-path: inset(0 0 0 0); }
    }
    .hero-bg {
      position: absolute; inset: 0; z-index: -1;
      img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.15); transition: transform 10s linear; }
      .overlay { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(5,11,26, 0.4) 0%, rgba(5,11,26, 0.9) 100%); }
    }
    .slide.active .hero-bg img { transform: scale(1); }

    .glass-card {
      background: rgba(255,255,255, 0.03); backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.1); padding: 60px;
      border-radius: 40px; max-width: 850px;
      box-shadow: 0 40px 120px rgba(0,0,0,0.5);
      transform: translateX(-40px); opacity: 0;
      transition: all 1s cubic-bezier(0.19, 1, 0.22, 1) 0.4s;
      @media (max-width: 768px) { padding: 40px; transform: translateX(0); }
    }
    .slide.active .glass-card { transform: translateX(0); opacity: 1; }

    .overflow-hidden { overflow: hidden; }
    .slide-tag {
      display: inline-block; padding: 10px 25px;
      background: var(--primary-electric); color: white;
      border-radius: 50px; font-weight: 800; font-size: 0.7rem;
      text-transform: uppercase; letter-spacing: 3px; margin-bottom: 30px;
      transform: translateY(100%); transition: transform 0.8s ease 0.6s;
    }
    .slide.active .slide-tag { transform: translateY(0); }

    .hero-content {
      h1 { font-size: 4.8rem; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: white;
           transform: translateY(100%); transition: transform 1s ease 0.7s;
           @media (max-width: 768px) { font-size: 2.5rem; } }
      p { font-size: 1.3rem; color: rgba(255,255,255,0.75); margin-bottom: 40px; max-width: 600px;
          transform: translateY(100%); transition: transform 1s ease 0.8s;
          @media (max-width: 768px) { font-size: 1.1rem; } }
      .hero-actions { display: flex; gap: 20px; opacity: 0; transform: translateY(20px); transition: all 1s ease 0.9s; }
    }
    .slide.active h1, .slide.active p { transform: translateY(0); }
    .slide.active .hero-actions { opacity: 1; transform: translateY(0); }

    .slider-navigation { position: absolute; bottom: 60px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 40px; z-index: 20; }
    .nav-btn { width: 50px; height: 50px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; backdrop-filter: blur(10px); &:hover { background: var(--primary-electric); transform: scale(1.1); } }
    .progress-container { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: rgba(255,255,255,0.1); z-index: 30; }
    .progress-bar { height: 100%; background: var(--primary-electric); transition: width 0.1s linear; }
    .slider-dots { display: flex; gap: 12px; button { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.3); border: none; padding: 0; transition: all 0.3s; &.active { background: var(--primary-electric); transform: scale(1.5); } } }

    /* ── About Section ── */
    .section-tag { display: block; font-size: 0.75rem; font-weight: 800; color: var(--primary-electric); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; @media (max-width: 1024px) { grid-template-columns: 1fr; } }
    .value-props { margin-top: 30px; display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px; }
    .vp-item { display: flex; gap: 20px; align-items: flex-start;
      .vp-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(0, 91, 255, 0.08); color: var(--primary-electric); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      h4 { font-size: 1rem; margin-bottom: 4px; }
      p { font-size: 0.9rem; color: var(--text-muted); margin: 0; }
    }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .stat-card { padding: 25px; background: #F8FAFC; border-radius: 20px; text-align: center; border: 1px solid #E2E8F0; h3 { color: var(--primary-electric); font-size: 2rem; margin-bottom: 5px; } p { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin: 0; } }
    .visual-wrapper { position: relative;
      img { width: 100%; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
      .experience-badge { position: absolute; bottom: -30px; right: -30px; background: var(--primary-deep); color: white; padding: 30px; border-radius: 24px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2); @media(max-width:480px){ right: 0; bottom: -10px; padding: 20px;}
        .number { display: block; font-size: 2.5rem; font-weight: 800; color: var(--primary-electric); line-height: 1; }
        .text { font-size: 0.75rem; text-transform: uppercase; font-weight: 700; opacity: 0.8; letter-spacing: 1px; }
      }
    }

    /* ── Solutions ── */
    .solutions-section { background: #F1F5F9; padding: 100px 0; }
    .sec-header { text-align: center; margin-bottom: 60px; }
    .solutions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
    .sol-card { padding: 40px; background: white; border-radius: 24px; border: 1px solid #E2E8F0; transition: all 0.4s; animation-delay: var(--delay);
      &:hover { transform: translateY(-10px); box-shadow: 0 24px 50px rgba(0,91,255,0.1); border-color: var(--primary-electric); .sol-icon { transform: scale(1.1) rotate(5deg); } }
      .sol-icon { width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 25px; transition: transform 0.3s; }
      h3 { margin-bottom: 12px; font-size: 1.4rem; }
      p { color: var(--text-muted); font-size: 0.92rem; margin-bottom: 25px; line-height: 1.6; }
      .learn-more { display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--primary-electric); font-size: 0.9rem; transition: gap 0.2s; &:hover { gap: 12px; } }
    }
    .view-all-cta { text-align: center; margin-top: 50px; }

    /* ── Industries ── */
    .industries-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
    .industry-card { position: relative; height: 280px; border-radius: 24px; overflow: hidden; cursor: pointer;
      &:hover { .ind-image-overlay { opacity: 0.8; transform: scale(1.1); } .ind-hover-cta { transform: translateY(0); opacity: 1; } }
    }
    .ind-image-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%); transition: all 0.6s ease; }
    .ind-content { position: relative; z-index: 2; padding: 40px; height: 100%; display: flex; flex-direction: column; color: white;
      .ind-icon-wrapper { width: 56px; height: 56px; border-radius: 14px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: var(--accent-cyan); }
      h3 { font-size: 1.5rem; color: white; margin-bottom: 10px; }
      p { font-size: 0.9rem; opacity: 0.75; line-height: 1.6; }
    }
    .ind-hover-cta { position: absolute; bottom: 30px; left: 40px; right: 40px; display: flex; align-items: center; justify-content: space-between; color: white; font-weight: 700; transform: translateY(20px); opacity: 0; transition: all 0.4s; }

    /* ── Trust / Certs ── */
    .trust-section { padding-bottom: 100px; }
    .trust-box { background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 100%); border-radius: 40px; padding: 60px; display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px; align-items: center; color: white; @media(max-width:900px){ grid-template-columns: 1fr; text-align: center; padding: 40px; }
      h2 { font-size: 2.5rem; color: white; margin-bottom: 20px; }
      p { font-size: 1.1rem; opacity: 0.8; margin-bottom: 30px; }
      .trust-list { list-style: none; margin-bottom: 40px; li { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-weight: 600; lucide-icon { color: var(--accent-cyan); } } @media(max-width:900px){ display: inline-block; text-align: left; } }
    }
    .trust-badges { display: flex; flex-direction: column; gap: 15px;
      .t-badge { padding: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; font-weight: 700; color: rgba(255,255,255,0.6); span { color: white; display: block; font-size: 1rem; margin-bottom: 4px; } }
    }

    /* ── Final CTA ── */
    .home-final-cta { position: relative; padding: 140px 5% 200px; background: url('/assets/hero-bg.png') center/cover; text-align: center; color: white; overflow: hidden;
      .cta-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-electric) 100%); opacity: 0.9; }
      .cta-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; h2 { font-size: 3.5rem; color: white; margin-bottom: 20px; @media(max-width:768px){font-size:2.5rem} } p { font-size: 1.25rem; margin-bottom: 45px; opacity: 0.9; } }
      .cta-btns { display: flex; gap: 20px; justify-content: center; @media(max-width:480px){ flex-direction: column; } }
      .btn-premium.outline-white { border: 2px solid white; color: white; &:hover { background: white; color: var(--primary-deep); } }
    }

    /* ── Reveal ── */
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly ArrowRight = ArrowRight;
  readonly X = X;
  readonly CheckIcon = CheckCircle;
  readonly Award = Award;
  readonly TrendingUp = TrendingUp;
  readonly Users = Users;

  currentSlide = 0;
  prevSlideIndex = -1;
  progress = 0;
  private slideInterval: any;
  private progressInterval: any;
  private readonly SLIDE_DURATION = 7000;

  slides = [
    {
      title: 'Accélérez votre <span class="gradient-text">Transformation Digitale</span>',
      subtitle: 'Partenaire officiel Dassault Systèmes. Nous propulsons l\'industrie 4.0 vers de nouveaux sommets en Afrique Centrale.',
      image: '/assets/hero-bg.png',
      cta1: 'Voir nos solutions',
      cta2: 'Nous contacter'
    },
    {
      title: 'L\'Usine du <span class="gradient-text">Futur</span>, Aujourd\'hui',
      subtitle: 'Optimisez votre production avec les jumeaux numériques et les solutions DELMIA & SIMULIA de pointe.',
      image: '/assets/factory.png',
      cta1: 'Nos expertises',
      cta2: 'Demander une démo'
    },
    {
      title: 'L\'Innovation <span class="gradient-text">Collaborative</span>',
      subtitle: 'Unissez vos talents sur la plateforme 3DEXPERIENCE pour concevoir les produits de demain.',
      image: '/assets/collab.png',
      cta1: 'Explorer le portfolio',
      cta2: 'S\'inscrire au blog'
    }
  ];

  mainStats = [
    { value: '50+', label: 'Projets' },
    { value: '20+', label: 'Clients' },
    { value: '15+', label: 'Certs' }
  ];

  solutions = [
    { name: '3DEXPERIENCE', desc: 'Plateforme unifiée pour connecter vos équipes et vos données Cloud.', icon: Layers, link: '/solutions/3dexperience', color: 'linear-gradient(135deg, #6B21A8, #005BFF)' },
    { name: 'CATIA', desc: 'Le standard mondial pour l\'ingénierie système et le design industriel.', icon: Monitor, link: '/solutions/catia', color: 'linear-gradient(135deg, #0B1F3A, #005BFF)' },
    { name: 'SOLIDWORKS', desc: 'Conception mécanique puissante et intuitive pour accélérer l\'innovation.', icon: Database, link: '/solutions/solidworks', color: 'linear-gradient(135deg, #1a73e8, #0B1F3A)' },
    { name: 'SIMULIA', desc: 'Simulation multi-physique pour tester et valider vos produits virtuellement.', icon: Zap, link: '/solutions/simulia', color: 'linear-gradient(135deg, #0B1F3A, #6B21A8)' },
    { name: 'ENOVIA', desc: 'Gouvernance et gestion du cycle de vie des produits en toute sécurité.', icon: Shield, link: '/solutions/enovia', color: 'linear-gradient(135deg, #0d3a6e, #0B1F3A)' },
    { name: 'DELMIA', desc: 'Planification et optimisation des opérations pour l\'excellence industrielle.', icon: Layout, link: '/solutions/delmia', color: 'linear-gradient(135deg, #005BFF, #0d3a6e)' }
  ];

  industries = [
    { name: 'Aéronautique', desc: 'Ingénierie de systèmes aéronautiques complexes.', icon: Plane },
    { name: 'Automobile', desc: 'Production optimisée et design véhicule futuriste.', icon: Car },
    { name: 'Énergie', desc: 'Infrastructures durables et simulation de réseaux.', icon: Zap },
    { name: 'Éducation', desc: 'Programmes académiques Dassault Systèmes.', icon: GraduationCap }
  ];

  ngAfterViewInit() {
    this.initScrollReveal();
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  private initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  startSlider() {
    this.progress = 0;
    this.slideInterval = setInterval(() => this.nextSlide(), this.SLIDE_DURATION);
    this.progressInterval = setInterval(() => this.progress += (100 / (this.SLIDE_DURATION / 100)), 100);
  }

  stopSlider() {
    if (this.slideInterval) clearInterval(this.slideInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
  }

  setSlide(index: number) {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = index;
    this.progress = 0;
    clearInterval(this.slideInterval);
    clearInterval(this.progressInterval);
    this.startSlider();
  }

  nextSlide() {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.progress = 0;
  }

  prevSlide() {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.progress = 0;
  }
}
