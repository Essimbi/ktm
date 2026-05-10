import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule, Target, Eye, Heart, Users,
  Award, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, MapPin
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <main class="about-page">

      <!-- ── Hero ─────────────────────────────────── -->
      <section class="about-hero">
        <div class="hero-bg-shapes">
          <div class="shape s1"></div>
          <div class="shape s2"></div>
          <div class="shape s3"></div>
        </div>
        <div class="hero-inner">
          <span class="hero-tag reveal">Qui sommes-nous</span>
          <h1 class="reveal">L'Innovation au Cœur<br>de <span class="gradient-text">Notre ADN</span></h1>
          <p class="reveal">KTM Green Energy group Sarl — Partenaire officiel Dassault Systèmes,<br>acteur clé de la transformation digitale en Afrique Centrale.</p>
        </div>
        <div class="hero-stats reveal">
          <div class="hstat" *ngFor="let s of heroStats">
            <strong>{{s.value}}</strong><span>{{s.label}}</span>
          </div>
        </div>
      </section>

      <!-- ── Mission / Vision / Valeurs ───────────── -->
      <section class="mvv-section section-container">
        <div class="mvv-grid">
          <div class="mvv-card reveal" *ngFor="let c of mvCards; let i = index" [style.--delay]="i * 0.15 + 's'">
            <div class="mvv-icon">
              <lucide-icon [name]="c.icon" size="28"></lucide-icon>
            </div>
            <h3>{{c.title}}</h3>
            <p>{{c.text}}</p>
          </div>
        </div>
      </section>

      <!-- ── Notre Histoire (Timeline) ─────────────── -->
      <section class="history-section">
        <div class="section-container">
          <h2 class="section-title" style="color:white">Notre Parcours</h2>
          <p class="section-subtitle" style="color:rgba(255,255,255,0.65)">De nos premiers pas à aujourd'hui, un chemin tracé par l'ambition et la passion.</p>
          <div class="timeline">
            <div class="tl-item reveal" *ngFor="let item of timeline; let i = index" [class.right]="i % 2 !== 0">
              <div class="tl-dot"></div>
              <div class="tl-card">
                <span class="tl-year">{{item.year}}</span>
                <h4>{{item.title}}</h4>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── L'Equipe ───────────────────────────────── -->
      <section class="team-section section-container">
        <h2 class="section-title reveal">Notre Équipe</h2>
        <p class="section-subtitle reveal">Des experts passionnés au service de votre réussite industrielle.</p>
        <div class="team-grid">
          <div class="team-card reveal" *ngFor="let m of team; let i = index" [style.--delay]="i * 0.1 + 's'">
            <div class="team-avatar" [style.background]="m.color">
              <span>{{m.initials}}</span>
            </div>
            <div class="team-info">
              <h4>{{m.name}}</h4>
              <span class="role">{{m.role}}</span>
              <p>{{m.bio}}</p>
              <div class="team-skills">
                <span *ngFor="let sk of m.skills">{{sk}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Nos Valeurs (détaillées) ──────────────── -->
      <section class="values-section">
        <div class="section-container">
          <h2 class="section-title reveal">Ce qui nous définit</h2>
          <div class="values-grid">
            <div class="value-item reveal" *ngFor="let v of values; let i = index" [style.--delay]="i * 0.1 + 's'">
              <div class="value-number">0{{i + 1}}</div>
              <lucide-icon [name]="v.icon" size="32"></lucide-icon>
              <h4>{{v.title}}</h4>
              <p>{{v.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Partenaires ───────────────────────────── -->
      <section class="partners-section section-container">
        <h2 class="section-title reveal">Nos Partenaires & Certifications</h2>
        <div class="partners-logos reveal">
          <div class="partner-badge" *ngFor="let p of partners">
            <lucide-icon [name]="Award" size="24"></lucide-icon>
            <span>{{p}}</span>
          </div>
        </div>
      </section>

      <!-- ── CTA Final ─────────────────────────────── -->
      <section class="about-cta">
        <div class="cta-inner">
          <h2>Prêt à transformer votre entreprise ?</h2>
          <p>Rejoignez des dizaines d'acteurs industriels qui nous font confiance.</p>
          <div class="cta-actions">
            <a routerLink="/contact" class="btn-premium primary">Nous contacter <lucide-icon [name]="ArrowRight" size="18"></lucide-icon></a>
            <a routerLink="/solutions" class="btn-premium secondary">Nos solutions</a>
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    /* ── Base ── */
    .about-page { overflow-x: hidden; }

    /* ── Hero ── */
    .about-hero {
      position: relative;
      min-height: 70vh;
      background: linear-gradient(135deg, var(--primary-deep) 0%, #0d3a6e 60%, var(--primary-electric) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding: 120px 5% 80px;
      overflow: hidden;
    }
    .hero-bg-shapes {
      position: absolute; inset: 0; pointer-events: none;
      .shape {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.04);
        animation: float 8s ease-in-out infinite;
      }
      .s1 { width: 600px; height: 600px; top: -200px; right: -200px; animation-delay: 0s; }
      .s2 { width: 400px; height: 400px; bottom: -150px; left: -100px; animation-delay: 2s; }
      .s3 { width: 300px; height: 300px; top: 50%; left: 50%; animation-delay: 4s; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50%       { transform: translateY(-20px) scale(1.03); }
    }
    .hero-tag {
      display: inline-block;
      padding: 8px 24px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 50px;
      font-size: 0.78rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 2.5px;
      margin-bottom: 28px;
    }
    .hero-inner {
      position: relative; z-index: 1;
      h1 { font-size: 4.5rem; font-weight: 800; line-height: 1.08; margin-bottom: 24px;
           @media(max-width:768px){ font-size: 2.8rem; } }
      p  { font-size: 1.15rem; opacity: 0.8; line-height: 1.7; }
    }
    .hero-stats {
      position: relative; z-index: 1;
      display: flex; gap: 0;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 20px; margin-top: 60px;
      backdrop-filter: blur(12px);
      .hstat {
        flex: 1; padding: 28px 36px; text-align: center;
        border-right: 1px solid rgba(255,255,255,0.12);
        &:last-child { border-right: none; }
        strong { display: block; font-size: 2.4rem; font-weight: 800; color: var(--primary-electric); line-height: 1; }
        span { font-size: 0.82rem; opacity: 0.7; margin-top: 6px; display: block; text-transform: uppercase; letter-spacing: 1px; }
      }
      @media(max-width:768px){ flex-direction: column; border-radius: 16px; .hstat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); } }
    }

    /* ── Mission / Vision / Valeurs ── */
    .mvv-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      @media(max-width:900px){ grid-template-columns: 1fr; }
    }
    .mvv-card {
      background: white;
      border-radius: 28px;
      padding: 44px 36px;
      border: 1px solid #E2E8F0;
      box-shadow: 0 8px 30px rgba(0,0,0,0.05);
      transition: all 0.4s ease;
      animation-delay: var(--delay, 0s);
      &:hover {
        transform: translateY(-12px);
        box-shadow: 0 24px 60px rgba(0, 91, 255, 0.1);
        border-color: var(--primary-electric);
        .mvv-icon { background: var(--primary-electric); color: white; }
      }
    }
    .mvv-icon {
      width: 64px; height: 64px;
      background: rgba(0, 91, 255, 0.08);
      color: var(--primary-electric);
      border-radius: 18px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 28px;
      transition: all 0.3s ease;
    }
    .mvv-card h3 { font-size: 1.4rem; margin-bottom: 14px; }
    .mvv-card p  { color: var(--text-muted); line-height: 1.7; }

    /* ── Timeline ── */
    .history-section {
      background: linear-gradient(160deg, var(--primary-deep) 0%, #0d3a6e 100%);
      padding: 100px 0;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .timeline {
      position: relative;
      margin-top: 60px;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0; bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, transparent, rgba(0, 91, 255, 0.5), transparent);
        transform: translateX(-50%);
        @media(max-width:768px){ left: 24px; }
      }
    }
    .tl-item {
      display: flex;
      justify-content: flex-end;
      padding: 0 calc(50% + 40px) 48px 0;
      position: relative;
      @media(max-width:768px){ padding: 0 0 40px 60px; justify-content: flex-start; }

      &.right {
        justify-content: flex-start;
        padding: 0 0 48px calc(50% + 40px);
        .tl-dot { left: auto; right: auto; left: 50%; }
        @media(max-width:768px){ padding: 0 0 40px 60px; }
      }
    }
    .tl-dot {
      position: absolute;
      top: 8px;
      left: calc(50% - 10px);
      width: 20px; height: 20px;
      background: var(--primary-electric);
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 0 0 4px rgba(0, 91, 255, 0.25);
      z-index: 2;
      @media(max-width:768px){ left: 16px; }
    }
    .tl-card {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 28px 32px;
      max-width: 380px;
      color: white;
      transition: all 0.3s ease;
      &:hover { background: rgba(255,255,255,0.12); transform: scale(1.02); }
      .tl-year { font-size: 0.78rem; font-weight: 800; color: var(--primary-electric); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; display: block; }
      h4 { font-size: 1.1rem; margin-bottom: 10px; }
      p  { font-size: 0.88rem; opacity: 0.7; line-height: 1.6; }
    }

    /* ── Team ── */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px; margin-top: 50px;
    }
    .team-card {
      background: white; border-radius: 24px;
      padding: 32px; display: flex; gap: 24px;
      border: 1px solid #E2E8F0;
      transition: all 0.3s ease;
      animation-delay: var(--delay, 0s);
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
      @media(max-width:480px){ flex-direction: column; }
    }
    .team-avatar {
      width: 72px; height: 72px; border-radius: 20px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      span { font-size: 1.6rem; font-weight: 800; color: white; }
    }
    .team-info {
      h4 { font-size: 1.05rem; margin-bottom: 4px; }
      .role { font-size: 0.8rem; font-weight: 700; color: var(--primary-electric); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px; }
      p  { font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 14px; }
    }
    .team-skills {
      display: flex; flex-wrap: wrap; gap: 7px;
      span { font-size: 0.72rem; padding: 4px 10px; background: rgba(0,91,255,0.07); color: var(--primary-electric); border-radius: 50px; font-weight: 600; }
    }

    /* ── Values ── */
    .values-section { padding: 80px 0; background: #F8FAFC; }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 28px; margin-top: 50px;
    }
    .value-item {
      background: white; border-radius: 24px; padding: 36px;
      border: 1px solid #E2E8F0; position: relative; overflow: hidden;
      transition: all 0.3s ease;
      animation-delay: var(--delay, 0s);
      lucide-icon { color: var(--primary-electric); margin-bottom: 20px; }
      h4 { font-size: 1.15rem; margin-bottom: 12px; }
      p  { font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; }
      &:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 91, 255, 0.1); border-color: var(--primary-electric); }
    }
    .value-number {
      position: absolute; top: -10px; right: 16px;
      font-size: 4.5rem; font-weight: 900;
      color: rgba(0, 91, 255, 0.06); line-height: 1;
      pointer-events: none;
    }

    /* ── Partners ── */
    .partners-logos {
      display: flex; flex-wrap: wrap; gap: 20px;
      justify-content: center; margin-top: 50px;
    }
    .partner-badge {
      display: flex; align-items: center; gap: 12px;
      padding: 18px 28px;
      background: white; border: 2px solid #E2E8F0;
      border-radius: 16px; font-weight: 700;
      color: var(--primary-deep); font-size: 0.9rem;
      transition: all 0.2s ease;
      lucide-icon { color: var(--primary-electric); }
      &:hover { border-color: var(--primary-electric); transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0, 91, 255, 0.1); }
    }

    /* ── CTA Final ── */
    .about-cta {
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-electric) 100%);
      padding: 100px 5%; text-align: center; color: white;
    }
    .cta-inner {
      max-width: 700px; margin: 0 auto;
      h2 { font-size: 3rem; margin-bottom: 16px; @media(max-width:768px){font-size:2rem} }
      p  { font-size: 1.1rem; opacity: 0.8; margin-bottom: 40px; }
    }
    .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

    /* ── Reveal animations ── */
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class AboutComponent implements AfterViewInit {
  readonly Target = Target;
  readonly Eye = Eye;
  readonly Heart = Heart;
  readonly Users = Users;
  readonly Award = Award;
  readonly Zap = Zap;
  readonly Shield = Shield;
  readonly TrendingUp = TrendingUp;
  readonly ArrowRight = ArrowRight;
  readonly CheckCircle = CheckCircle;
  readonly MapPin = MapPin;

  heroStats = [
    { value: '2022', label: 'Année de fondation' },
    { value: '50+', label: 'Projets réalisés' },
    { value: '20+', label: 'Clients majeurs' },
    { value: '15+', label: 'Certifications' },
  ];

  mvCards = [
    { icon: Target, title: 'Notre Mission', text: 'Démocratiser l\'accès aux technologies de pointe de Dassault Systèmes en Afrique Centrale pour accélérer la croissance industrielle locale et former la prochaine génération d\'ingénieurs.' },
    { icon: Eye, title: 'Notre Vision', text: 'Devenir le partenaire technologique de référence pour la transformation digitale en Afrique, reconnu pour notre excellence technique et notre impact social durable.' },
    { icon: Heart, title: 'Nos Valeurs', text: 'Innovation, Intégrité, Accompagnement et Excellence sont les piliers qui guident chacune de nos interventions auprès de nos clients et partenaires.' },
  ];

  timeline = [
    { year: '2022', title: 'Fondation de KTM', desc: 'Création de KTM Green Energy group Sarl à Douala avec une vision claire : digitaliser l\'industrie africaine.' },
    { year: '2022', title: 'Partenariat Dassault Systèmes', desc: 'Signature du partenariat officiel avec Dassault Systèmes, devenant l\'un des rares revendeurs agréés en Afrique Centrale.' },
    { year: '2023', title: 'Premiers grands projets', desc: 'Déploiement de CATIA et SOLIDWORKS dans plusieurs entreprises industrielles camerounaises.' },
    { year: '2023', title: 'Lancement de l\'Académie KTM', desc: 'Ouverture du programme de formation certifiante, avec les premières cohortes d\'ingénieurs certifiés Dassault Systèmes.' },
    { year: '2024', title: 'Expansion régionale', desc: 'Extension de nos activités au Gabon, Tchad et Congo, avec des projets de déploiement PLM à grande échelle.' },
    { year: '2025', title: 'KTM Digital & Innovation', desc: 'Rebranding et lancement de notre nouveau positionnement : acteur de référence de l\'industrie 4.0 en Afrique.' },
  ];

  team = [
    { name: 'Équipe Direction', role: 'Management & Stratégie', bio: 'Une équipe de direction expérimentée, combinant vision industrielle et expertise technologique pour piloter la croissance de KTM.', initials: 'KTM', color: 'linear-gradient(135deg, #005BFF, #0B1F3A)', skills: ['Stratégie', 'PLM', 'Partenariats'] },
    { name: 'Pôle Technique', role: 'Ingénieurs certifiés Dassault', bio: 'Des ingénieurs certifiés CATIA, SOLIDWORKS et 3DEXPERIENCE, capables d\'accompagner les projets les plus complexes.', initials: 'ENG', color: 'linear-gradient(135deg, #6B21A8, #005BFF)', skills: ['CATIA', 'SOLIDWORKS', 'SIMULIA'] },
    { name: 'Pôle Formation', role: 'Instructeurs & Pédagogie', bio: 'Des formateurs experts qui conjuguent maîtrise technique et pédagogie pour faire monter en compétence vos équipes.', initials: 'FAC', color: 'linear-gradient(135deg, #0d3a6e, #6B21A8)', skills: ['Formation', 'Certification', 'eLearning'] },
    { name: 'Pôle Commercial', role: 'Business Développement', bio: 'Une équipe commerciale à l\'écoute, capable d\'identifier vos besoins et de vous proposer les solutions les mieux adaptées.', initials: 'COM', color: 'linear-gradient(135deg, #005BFF, #0d3a6e)', skills: ['Conseil', 'Avant-vente', 'Suivi client'] },
  ];

  values = [
    { icon: Zap, title: 'Innovation Continue', desc: 'Nous anticipons les évolutions technologiques pour vous offrir toujours les meilleures solutions du marché.' },
    { icon: Shield, title: 'Intégrité', desc: 'La confiance est au cœur de chaque relation. Nous agissons avec transparence et honnêteté.' },
    { icon: Users, title: 'Accompagnement', desc: 'Nous ne vendons pas seulement un logiciel, nous construisons avec vous un projet de transformation durable.' },
    { icon: TrendingUp, title: 'Excellence', desc: 'Certifiés, formés et engagés — nous visons l\'excellence à chaque étape de nos interventions.' },
    { icon: Heart, title: 'Impact Local', desc: 'Nous croyons en l\'Afrique et nous investissons dans le développement des talents et des industries locales.' },
    { icon: Target, title: 'Orientation Résultats', desc: 'Chaque projet est mené avec des objectifs clairs, des livrables précis et une rigueur professionnelle.' },
  ];

  partners = [
    'Dassault Systèmes Certified Reseller',
    'SOLIDWORKS Official Partner',
    'CATIA Authorized Training Center',
    '3DEXPERIENCE Academic Partner',
    'SIMULIA Certified',
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
