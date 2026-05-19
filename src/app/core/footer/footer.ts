import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Send, BellRing, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="footer">
      <!-- ── Pre-footer CTA ── -->
      <div class="pre-footer">
        <div class="footer-container">
          <div class="cta-box reveal">
            <div class="cta-decoration">
              <div class="circle c1"></div>
              <div class="circle c2"></div>
            </div>
            
            <div class="cta-content-inner">
              <div class="cta-text">
                <div class="cta-badge">
                  <lucide-icon [name]="BellRing" size="14"></lucide-icon>
                  <span>Hebdomadaire</span>
                </div>
                <h3>Restez informé de <span class="gradient-text-alt">l'Industrie 4.0</span></h3>
                <p>Recevez nos analyses exclusives, études de cas et actualités technologiques directement dans votre boîte mail.</p>
              </div>
              
              <div class="cta-form-wrapper">
                <div class="cta-form">
                  <div class="input-wrapper">
                    <lucide-icon [name]="Mail" size="18" class="input-icon"></lucide-icon>
                    <input type="email" placeholder="votre@email.com">
                  </div>
                  <button class="btn-send-premium">
                    S'abonner <lucide-icon [name]="Send" size="18"></lucide-icon>
                  </button>
                </div>
                <div class="form-trust">
                  <lucide-icon [name]="ShieldCheck" size="12"></lucide-icon>
                  <span>Pas de spam. Désinscription possible à tout moment.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-col brand">
            <img src="/assets/logo_ktm.png" alt="KTM Green Energy Group" class="footer-logo">
            <p class="brand-desc">
              KTM Green Energy Group Sarl — Partenaire officiel Dassault Systèmes &amp; NeoLedge en Afrique Centrale. Nous accélérons la transformation digitale industrielle.
            </p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn"><lucide-icon [name]="Linkedin" size="18"></lucide-icon></a>
              <a href="#" aria-label="Facebook"><lucide-icon [name]="Facebook" size="18"></lucide-icon></a>
              <a href="#" aria-label="Twitter"><lucide-icon [name]="Twitter" size="18"></lucide-icon></a>
              <a href="#" aria-label="Instagram"><lucide-icon [name]="Instagram" size="18"></lucide-icon></a>
            </div>
          </div>

          <!-- Links 1 -->
          <div class="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a routerLink="/solutions/3dexperience">3DEXPERIENCE</a></li>
              <li><a routerLink="/solutions/catia">CATIA</a></li>
              <li><a routerLink="/solutions/solidworks">SOLIDWORKS</a></li>
              <li><a routerLink="/solutions/simulia">SIMULIA</a></li>
              <li><a routerLink="/solutions/delmia">DELMIA</a></li>
              <li><a routerLink="/solutions/enovia">ENOVIA</a></li>
              <li><a routerLink="/solutions/neoledge">NeoLedge ECM</a></li>
            </ul>
          </div>

          <!-- Links 2 -->
          <div class="footer-col">
            <h4>Entreprise</h4>
            <ul>
              <li><a routerLink="/a-propos">À Propos</a></li>
              <li><a routerLink="/services">Nos Services</a></li>
              <li><a routerLink="/formations">Formations</a></li>
              <li><a routerLink="/blog">Actualités</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col contact">
            <h4>Contact</h4>
            <div class="contact-item">
              <lucide-icon [name]="MapPin" size="16"></lucide-icon>
              <span>BP 6596 Douala-Yassa, Cameroun</span>
            </div>
            <div class="contact-item">
              <lucide-icon [name]="Phone" size="16"></lucide-icon>
              <span>+237 656 16 88 94</span>
            </div>
            <div class="contact-item">
              <lucide-icon [name]="Mail" size="16"></lucide-icon>
              <span>infos&#64;ktm-digit-innov.com</span>
            </div>
            <!-- <div class="legal-badge">
              RC: RC/YAO/2022/B/1366
            </div> -->
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copy">&copy; 2026 KTM Green Energy Group Sarl. Tous droits réservés.</div>
          <div class="bottom-links">
            <a href="#">Mentions Légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #050b1a;
      color: white;
      position: relative;
      padding-top: 0;
    }

    .footer-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 5%;
    }

    /* ── Pre-footer ── */
    .pre-footer {
      position: relative;
      z-index: 10;
      margin-top: -80px;
      margin-bottom: 40px;
    }
    
    .cta-box {
      background: var(--primary-deep);
      background: linear-gradient(135deg, var(--primary-deep) 0%, var(--primary-deep) 100%);
      border: 1px solid rgba(197, 160, 89, 0.2);
      border-radius: 35px;
      padding: 60px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 40px 80px rgba(0,0,0,0.5);
      @media(max-width:1024px){ padding: 40px; }
    }

    .cta-decoration {
      position: absolute; inset: 0; pointer-events: none;
      .circle { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
      .c1 { width: 300px; height: 300px; background: var(--primary-gold); top: -100px; right: -50px; }
      .c2 { width: 200px; height: 200px; background: var(--primary-deep); bottom: -50px; left: -50px; }
    }

    .cta-content-inner {
      position: relative; z-index: 1;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 60px; align-items: center;
      @media(max-width:900px){ grid-template-columns: 1fr; gap: 40px; text-align: center; }
    }

    .cta-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 14px; background: rgba(197, 160, 89, 0.1);
      border: 1px solid rgba(197, 160, 89, 0.2);
      border-radius: 50px; font-size: 0.7rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 1.5px; color: var(--primary-gold);
      margin-bottom: 20px;
    }

    .cta-text h3 {
      font-size: 2.5rem; line-height: 1.2; margin-bottom: 16px; color: white;
      @media(max-width:600px){ font-size: 2rem; }
    }
    .gradient-text-alt {
      background: linear-gradient(135deg, var(--primary-gold) 0%, #FFFFFF 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .cta-text p { color: #94A3B8; font-size: 1.1rem; line-height: 1.6; }

    .cta-form-wrapper { width: 100%; }
    .cta-form {
      display: flex; gap: 12px; background: rgba(255,255,255,0.03);
      padding: 8px; border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.08);
      @media(max-width:600px){ flex-direction: column; padding: 15px; background: transparent; border: none; }
    }
    
    .input-wrapper {
      flex: 1; position: relative;
      display: flex; align-items: center;
      .input-icon { position: absolute; left: 15px; color: #64748B; transition: color 0.3s; }
      input {
        width: 100%; background: transparent; border: none;
        padding: 15px 15px 15px 45px; color: white; font-family: inherit;
        font-size: 1rem;
        &::placeholder { color: #64748B; }
        &:focus { outline: none; }
        &:focus + .input-icon { color: var(--primary-gold); }
      }
      @media(max-width:600px){ background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
    }

    .btn-send-premium {
      padding: 15px 30px; border-radius: 14px;
      background: var(--primary-gold); color: white;
      font-weight: 700; border: none; cursor: pointer;
      display: flex; align-items: center; gap: 10px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 25px rgba(197, 160, 89, 0.4); background: #b08e4d; }
      @media(max-width:600px){ width: 100%; justify-content: center; }
    }

    .form-trust {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin-top: 15px; color: #475569; font-size: 0.75rem; font-weight: 500;
      lucide-icon { color: #475569; }
    }

    /* ── Main grid ── */
    .footer-grid {
      display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: 60px; padding: 100px 0 60px;
      @media(max-width:1024px){ grid-template-columns: repeat(2, 1fr); gap: 40px; }
      @media(max-width:640px){ grid-template-columns: 1fr; }
    }

    .footer-logo { height: 150px; margin-bottom: 25px; filter: brightness(1.2); }
    .brand-desc { color: #94A3B8; line-height: 1.7; margin-bottom: 30px; font-size: 0.95rem; max-width: 320px; }

    .social-links {
      display: flex; gap: 12px;
      a {
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.05); color: #94A3B8;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s;
        border: 1px solid rgba(255,255,255,0.1);
        &:hover { background: var(--primary-gold); color: white; transform: translateY(-3px); }
      }
    }

    .footer-col h4 {
      font-size: 1.1rem; color: white; margin-bottom: 30px;
      position: relative; padding-bottom: 12px;
      &::after { content: ''; position: absolute; bottom: 0; left: 0; width: 30px; height: 2px; background: var(--primary-gold); }
    }

    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 15px;
      a {
        color: #94A3B8; font-size: 0.95rem; transition: all 0.3s;
        &:hover { color: white; padding-left: 8px; }
      }
    }

    .contact-item {
      display: flex; align-items: center; gap: 15px;
      color: #94A3B8; font-size: 0.92rem; margin-bottom: 18px;
      lucide-icon { color: var(--primary-gold); }
    }
    .legal-badge {
      display: inline-block; margin-top: 15px;
      padding: 6px 12px; background: rgba(255,255,255,0.03);
      border-radius: 6px; font-size: 0.75rem; color: #64748B;
      border: 1px solid rgba(255,255,255,0.05);
    }

    /* ── Bottom ── */
    .footer-bottom {
      padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.05);
      display: flex; justify-content: space-between; align-items: center;
      color: #64748B; font-size: 0.85rem;
      @media(max-width:768px){ flex-direction: column; gap: 20px; text-align: center; }
    }
    .bottom-links {
      display: flex; gap: 25px;
      a:hover { color: white; }
    }
    
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
  `]
})
export class FooterComponent implements AfterViewInit {
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;
  readonly BellRing = BellRing;
  readonly ShieldCheck = ShieldCheck;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.footer .reveal').forEach(el => observer.observe(el));
  }
}
