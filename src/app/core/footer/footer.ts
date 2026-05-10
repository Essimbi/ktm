import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="footer">
      <!-- ── Pre-footer CTA ── -->
      <div class="pre-footer">
        <div class="footer-container">
          <div class="cta-box glass reveal">
            <div class="cta-text">
              <h3>Restez informé de l'Industrie 4.0</h3>
              <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières analyses et actus.</p>
            </div>
            <div class="cta-form">
              <input type="email" placeholder="votre@email.com">
              <button class="btn-send"><lucide-icon [name]="Send" size="18"></lucide-icon></button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-col brand">
            <img src="/assets/logo_ktm.png" alt="KTM Logo" class="footer-logo">
            <p class="brand-desc">
              Partenaire officiel Dassault Systèmes en Afrique Centrale. Nous propulsons l'innovation industrielle par la digitalisation.
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
            <div class="legal-badge">
              RC: RC/YAO/2022/B/1366
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copy">&copy; 2026 KTM Digital & Innovation. Tous droits réservés.</div>
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
      transform: translateY(-50%);
      margin-bottom: -50px;
      position: relative; z-index: 10;
    }
    .cta-box {
      background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 30px;
      padding: 40px 60px;
      display: flex; align-items: center; justify-content: space-between; gap: 40px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
      @media(max-width:900px){ flex-direction: column; text-align: center; padding: 30px; }
      h3 { font-size: 1.8rem; color: white; margin-bottom: 8px; }
      p { color: #94A3B8; font-size: 1rem; }
    }
    .cta-form {
      display: flex; gap: 10px; min-width: 350px;
      @media(max-width:600px){ min-width: 100%; flex-direction: column; }
      input {
        flex: 1; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        padding: 15px 20px; border-radius: 12px;
        color: white; font-family: inherit;
        &:focus { outline: none; border-color: var(--primary-electric); }
      }
      .btn-send {
        width: 50px; height: 50px; border-radius: 12px;
        background: var(--primary-electric); color: white;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s;
        &:hover { transform: scale(1.05); background: #3385ff; }
      }
    }

    /* ── Main grid ── */
    .footer-grid {
      display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: 60px; padding: 100px 0 60px;
      @media(max-width:1024px){ grid-template-columns: repeat(2, 1fr); gap: 40px; }
      @media(max-width:640px){ grid-template-columns: 1fr; }
    }

    .footer-logo { height: 50px; margin-bottom: 25px; filter: brightness(1.2); }
    .brand-desc { color: #94A3B8; line-height: 1.7; margin-bottom: 30px; font-size: 0.95rem; max-width: 320px; }

    .social-links {
      display: flex; gap: 12px;
      a {
        width: 40px; height: 40px; border-radius: 50%;
        background: rgba(255,255,255,0.05); color: #94A3B8;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s;
        border: 1px solid rgba(255,255,255,0.1);
        &:hover { background: var(--primary-electric); color: white; transform: translateY(-3px); }
      }
    }

    .footer-col h4 {
      font-size: 1.1rem; color: white; margin-bottom: 30px;
      position: relative; padding-bottom: 12px;
      &::after { content: ''; position: absolute; bottom: 0; left: 0; width: 30px; height: 2px; background: var(--primary-electric); }
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
      lucide-icon { color: var(--primary-electric); }
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
  `]
})
export class FooterComponent {
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;
}
