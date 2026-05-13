import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  LucideAngularModule, Mail, Phone, MapPin, Send,
  MessageSquare, Clock, CheckCircle, ArrowRight
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, LucideAngularModule],
  template: `
    <main class="contact-page">

      <!-- ── Hero ── -->
      <section class="contact-hero">
        <div class="hero-shapes">
          <div class="blob b1"></div>
          <div class="blob b2"></div>
        </div>
        <div class="hero-inner reveal">
          <span class="hero-tag">Parlons de votre projet</span>
          <h1>Contactez <span class="gradient-text-light">KTM Group</span></h1>
          <p>Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous accompagner dans votre transformation digitale.</p>
        </div>
      </section>

      <!-- ── Quick-contact band ── -->
      <div class="quick-band">
        <a href="tel:+237656168894" class="qc-item">
          <div class="qc-icon"><lucide-icon [name]="Phone" size="22"></lucide-icon></div>
          <div>
            <span class="qc-label">Appelez-nous</span>
            <strong>+237 656 16 88 94</strong>
          </div>
        </a>
        <a href="mailto:infos@ktm-digit-innov.com" class="qc-item">
          <div class="qc-icon"><lucide-icon [name]="Mail" size="22"></lucide-icon></div>
          <div>
            <span class="qc-label">Écrivez-nous</span>
            <strong>infos&#64;ktm-digit-innov.com</strong>
          </div>
        </a>
        <a href="https://wa.me/237656168894" target="_blank" class="qc-item whatsapp">
          <div class="qc-icon"><lucide-icon [name]="MessageSquare" size="22"></lucide-icon></div>
          <div>
            <span class="qc-label">WhatsApp</span>
            <strong>Chat en direct</strong>
          </div>
        </a>
        <div class="qc-item">
          <div class="qc-icon"><lucide-icon [name]="Clock" size="22"></lucide-icon></div>
          <div>
            <span class="qc-label">Heures d'ouverture</span>
            <strong>Lun–Ven, 8h–17h</strong>
          </div>
        </div>
      </div>

      <!-- ── Main content ── -->
      <section class="contact-main section-container">
        <div class="contact-grid">

          <!-- Left: Info + Map placeholder -->
          <div class="contact-left reveal">
            <h2>Nous trouver</h2>
            <p class="intro-text">Basés à Douala, nous intervenons dans toute l'Afrique Centrale. Venez nous rencontrer ou contactez-nous en ligne.</p>

            <div class="info-cards">
              <div class="info-card">
                <div class="ic-icon"><lucide-icon [name]="MapPin" size="20"></lucide-icon></div>
                <div class="ic-body">
                  <h4>Adresse</h4>
                  <p>BP 6596 Douala-Yassa<br>Cameroun</p>
                  <span class="ic-badge">RC: RC/YAO/2022/B/1366</span>
                </div>
              </div>
              <div class="info-card">
                <div class="ic-icon"><lucide-icon [name]="Phone" size="20"></lucide-icon></div>
                <div class="ic-body">
                  <h4>Téléphone</h4>
                  <p>+237 656 16 88 94</p>
                </div>
              </div>
              <div class="info-card">
                <div class="ic-icon"><lucide-icon [name]="Mail" size="20"></lucide-icon></div>
                <div class="ic-body">
                  <h4>Email</h4>
                  <p>infos&#64;ktm-digit-innov.com</p>
                </div>
              </div>
            </div>

            <!-- Google Maps embed -->
            <div class="map-wrapper">
              <iframe
                [src]="safeMapUrl"
                width="100%" height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="KTM Group SARL - Douala-Yassa, Cameroun">
              </iframe>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-right reveal">
            <div class="form-card">
              <div class="form-header">
                <h3>Envoyez-nous un message</h3>
                <p>Réponse garantie sous 24h ouvrées.</p>
              </div>

              <form (submit)="submitForm($event)" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>Prénom <span class="req">*</span></label>
                    <input type="text" [(ngModel)]="form.firstName" name="firstName" placeholder="Jean" required>
                  </div>
                  <div class="form-group">
                    <label>Nom <span class="req">*</span></label>
                    <input type="text" [(ngModel)]="form.lastName" name="lastName" placeholder="Dupont" required>
                  </div>
                </div>

                <div class="form-group">
                  <label>Email Professionnel <span class="req">*</span></label>
                  <input type="email" [(ngModel)]="form.email" name="email" placeholder="jean&#64;entreprise.com" required>
                </div>

                <div class="form-group">
                  <label>Téléphone</label>
                  <input type="tel" [(ngModel)]="form.phone" name="phone" placeholder="+237 6XX XXX XXX">
                </div>

                <div class="form-group">
                  <label>Entreprise</label>
                  <input type="text" [(ngModel)]="form.company" name="company" placeholder="Nom de votre entreprise">
                </div>

                <div class="form-group">
                  <label>Sujet <span class="req">*</span></label>
                  <div class="select-wrapper">
                    <select [(ngModel)]="form.subject" name="subject" required>
                      <option value="" disabled selected>Sélectionnez un sujet</option>
                      <option>Demande de démonstration</option>
                      <option>Demande de devis</option>
                      <option>Formations & Certifications</option>
                      <option>Assistance technique</option>
                      <option>Partenariat</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label>Message <span class="req">*</span></label>
                  <textarea rows="5" [(ngModel)]="form.message" name="message" placeholder="Décrivez votre besoin ou votre projet..." required></textarea>
                </div>

                <button type="submit" class="btn-submit" [class.sent]="formSent">
                  <span *ngIf="!formSent">
                    Envoyer le message <lucide-icon [name]="Send" size="18"></lucide-icon>
                  </span>
                  <span *ngIf="formSent" class="sent-msg">
                    <lucide-icon [name]="CheckCircle" size="18"></lucide-icon> Message envoyé !
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- ── FAQ / Response time ── -->
      <section class="promise-section">
        <div class="section-container">
          <div class="promises">
            <div class="promise-item" *ngFor="let p of promises">
              <lucide-icon [name]="CheckCircle" size="24"></lucide-icon>
              <div>
                <h4>{{p.title}}</h4>
                <p>{{p.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    .contact-page { overflow-x: hidden; }

    /* ── Hero ── */
    .contact-hero {
      position: relative;
      background: linear-gradient(135deg, var(--primary-deep) 0%, #001A38 60%, var(--primary-gold) 100%);
      padding: 120px 5% 100px;
      text-align: center;
      color: white;
      overflow: hidden;
      h1, h2, h3, h4 { color: white; }
    }
    .hero-shapes { position: absolute; inset: 0; pointer-events: none;
      .blob { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.05); }
      .b1 { width: 500px; height: 500px; top: -200px; right: -100px; }
      .b2 { width: 300px; height: 300px; bottom: -100px; left: -80px; }
    }
    .hero-inner {
      position: relative; z-index: 1; max-width: 700px; margin: 0 auto;
      h1 { font-size: 4rem; font-weight: 800; margin: 20px 0; @media(max-width:768px){font-size:2.5rem} }
      p  { font-size: 1.15rem; opacity: 0.82; line-height: 1.7; }
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

    /* ── Quick band ── */
    .quick-band {
      display: grid; grid-template-columns: repeat(4, 1fr);
      background: white;
      box-shadow: 0 4px 30px rgba(0,0,0,0.08);
      @media(max-width:900px){ grid-template-columns: repeat(2, 1fr); }
      @media(max-width:480px){ grid-template-columns: 1fr; }
    }
    .qc-item {
      display: flex; align-items: center; gap: 16px;
      padding: 24px 28px;
      border-right: 1px solid #E2E8F0;
      transition: background 0.2s;
      cursor: pointer;
      &:last-child { border-right: none; }
      &:hover { background: #F8FAFC; }
      &.whatsapp .qc-icon { background: rgba(37, 211, 102, 0.1); color: #25D366; }
    }
    .qc-icon {
      width: 48px; height: 48px; border-radius: 14px;
      background: rgba(197, 160, 89, 0.08); color: var(--primary-gold);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .qc-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 3px; }
    .qc-item strong { display: block; font-size: 0.92rem; color: var(--primary-deep); }

    /* ── Contact main ── */
    .contact-grid {
      display: grid; grid-template-columns: 1fr 1.4fr;
      gap: 60px; align-items: start;
      @media(max-width:1024px){ grid-template-columns: 1fr; }
    }
    .contact-left {
      h2 { font-size: 2rem; margin-bottom: 14px; }
      .intro-text { color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 32px; }
    }

    /* Info cards */
    .info-cards { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
    .info-card {
      display: flex; align-items: flex-start; gap: 16px;
      padding: 20px 24px; background: white;
      border: 1px solid #E2E8F0; border-radius: 16px;
      transition: all 0.2s ease;
      &:hover { border-color: var(--primary-gold); box-shadow: 0 8px 20px rgba(0, 45, 91, 0.08); }
    }
    .ic-icon {
      width: 42px; height: 42px; border-radius: 12px;
      background: rgba(197, 160, 89, 0.08); color: var(--primary-gold);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .ic-body {
      h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 4px; }
      p  { font-size: 0.95rem; font-weight: 600; color: var(--primary-deep); margin: 0; }
    }
    .ic-badge {
      display: inline-block; margin-top: 6px;
      font-size: 0.72rem; color: var(--text-muted);
      background: #F1F5F9; padding: 3px 10px; border-radius: 50px;
    }

    /* Google Map wrapper */
    .map-wrapper {
      height: 240px;
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid #E2E8F0;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      transition: box-shadow 0.3s ease;
      iframe { display: block; width: 100%; height: 100%; }
      &:hover { box-shadow: 0 16px 40px rgba(0, 45, 91, 0.12); border-color: var(--primary-gold); }
    }

    /* ── Form ── */
    .form-card {
      background: white; border-radius: 28px; padding: 48px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.07);
      border: 1px solid #E2E8F0;
      @media(max-width:600px){ padding: 28px; }
    }
    .form-header {
      margin-bottom: 32px;
      h3 { font-size: 1.6rem; margin-bottom: 6px; }
      p  { color: var(--text-muted); font-size: 0.92rem; }
    }
    .form-row {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
      @media(max-width:560px){ grid-template-columns: 1fr; }
    }
    .form-group {
      margin-bottom: 20px;
      label {
        display: block; margin-bottom: 8px;
        font-weight: 600; font-size: 0.88rem; color: var(--primary-deep);
        .req { color: var(--primary-gold); }
      }
      input, select, textarea {
        width: 100%; padding: 13px 16px;
        border-radius: 12px; border: 1.5px solid #E2E8F0;
        font-family: inherit; font-size: 0.95rem; background: #FAFBFC;
        transition: all 0.2s ease; color: var(--primary-deep);
        &::placeholder { color: #B0B8C8; }
        &:focus {
          border-color: var(--primary-gold); outline: none; background: white;
          box-shadow: 0 0 0 4px rgba(197, 160, 89, 0.08);
        }
      }
      textarea { resize: vertical; min-height: 130px; }
    }
    .select-wrapper { position: relative;
      &::after {
        content: '▾'; position: absolute; right: 16px; top: 50%;
        transform: translateY(-50%); pointer-events: none; color: var(--text-muted);
      }
      select { appearance: none; cursor: pointer; }
    }

    .btn-submit {
      width: 100%; padding: 15px;
      background: var(--primary-gold); color: white;
      border-radius: 14px; font-weight: 700; font-size: 1rem;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      border: none; cursor: pointer;
      transition: all 0.3s ease;
      &:hover { background: var(--primary-deep); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0, 45, 91, 0.3); }
      &.sent { background: #10B981; }
    }
    .sent-msg { display: flex; align-items: center; gap: 8px; }

    /* ── Promise section ── */
    .promise-section {
      background: linear-gradient(135deg, var(--primary-deep) 0%, #001A38 100%);
      padding: 60px 0 140px;
      color: white;
      h1, h2, h3, h4 { color: white; }
    }
    .promises {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px;
    }
    .promise-item {
      display: flex; gap: 16px; align-items: flex-start;
      lucide-icon { color: var(--primary-gold); flex-shrink: 0; margin-top: 3px; }
      h4 { font-size: 1rem; color: white; margin-bottom: 5px; }
      p  { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.5; }
    }

    /* Reveal */
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class ContactComponent implements AfterViewInit {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;
  readonly MessageSquare = MessageSquare;
  readonly Clock = Clock;
  readonly CheckCircle = CheckCircle;
  readonly ArrowRight = ArrowRight;

  safeMapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31839.71930269064!2d9.770149812194749!3d4.027575700373092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d4b48c6ccdf%3A0xb9660102070bcae7!2sKTM-Group-SARL!5e0!3m2!1sfr!2scm!4v1778383290272!5m2!1sfr!2scm'
    );
  }

  formSent = false;
  form = { firstName: '', lastName: '', email: '', phone: '', company: '', subject: '', message: '' };

  promises = [
    { title: 'Réponse sous 24h', desc: 'Nous nous engageons à vous répondre dans les 24 heures ouvrées suivant votre message.' },
    { title: 'Expert dédié', desc: 'Un expert KTM certifié Dassault Systèmes sera assigné à votre demande.' },
    { title: 'Démo gratuite', desc: 'Découvrez nos solutions sans engagement avec une démonstration personnalisée.' },
    { title: 'Devis sur mesure', desc: 'Nos offres sont adaptées à votre taille, secteur et objectifs spécifiques.' },
  ];

  submitForm(e: Event) {
    e.preventDefault();
    this.formSent = true;
    setTimeout(() => { this.formSent = false; }, 4000);
  }

  ngAfterViewInit() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.contact-page .reveal').forEach(el => obs.observe(el));
  }
}
