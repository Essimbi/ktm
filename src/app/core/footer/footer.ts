import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="footer-brand">
            <img src="assets/logo_ktm.png" alt="KTM Logo" class="footer-logo">
            <p class="brand-desc">
              Accélérez votre transformation digitale avec KTM Digital & Innovation. 
              Partenaire officiel Dassault Systèmes en Afrique Centrale.
            </p>
            <div class="social-links">
              <a href="#"><lucide-icon [name]="Linkedin" size="20"></lucide-icon></a>
              <a href="#"><lucide-icon [name]="Twitter" size="20"></lucide-icon></a>
              <a href="#"><lucide-icon [name]="Facebook" size="20"></lucide-icon></a>
              <a href="#"><lucide-icon [name]="Instagram" size="20"></lucide-icon></a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><a routerLink="/solutions/3dexperience">3DEXPERIENCE</a></li>
              <li><a routerLink="/solutions/catia">CATIA</a></li>
              <li><a routerLink="/solutions/solidworks">SOLIDWORKS</a></li>
              <li><a routerLink="/solutions/simulia">SIMULIA</a></li>
              <li><a routerLink="/solutions/enovia">ENOVIA</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Entreprise</h4>
            <ul>
              <li><a routerLink="/a-propos">À Propos</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/formations">Formations</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><lucide-icon [name]="Mail" size="16"></lucide-icon> infos&#64;ktm-digit-innov.com</li>
              <li><lucide-icon [name]="Phone" size="16"></lucide-icon> +237 656 16 88 94</li>
              <li><lucide-icon [name]="MapPin" size="16"></lucide-icon> BP 6596 Douala-Yassa</li>
            </ul>
            <div class="legal-info" style="font-size: 0.75rem; margin-top: 20px; color: #94A3B8;">
              RC: RC/YAO/2022/B/1366 | NIU: M072217476240M
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 KTM Digital & Innovation. Tous droits réservés.</p>
          <div class="legal-links">
            <a href="#">Mentions Légales</a>
            <a href="#">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--primary-deep);
      color: white;
      padding: 80px 0 30px;
    }

    .footer-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 5%;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: 60px;
      margin-bottom: 60px;
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }

    .footer-logo {
      height: 60px;
      width: auto;
      object-fit: contain;
      margin-bottom: 20px;
    }

    .brand-desc {
      color: #CBD5E1;
      font-size: 0.95rem;
      margin-bottom: 25px;
      max-width: 300px;
    }

    .social-links {
      display: flex;
      gap: 15px;
      
      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition-smooth);
        
        &:hover {
          background: var(--primary-electric);
          transform: translateY(-3px);
        }
      }
    }

    .footer-links h4, .footer-contact h4 {
      font-size: 1.1rem;
      margin-bottom: 25px;
      color: var(--primary-electric);
    }

    .footer-links ul, .footer-contact ul {
      list-style: none;
    }

    .footer-links ul li {
      margin-bottom: 12px;
      
      a {
        color: #CBD5E1;
        font-size: 0.95rem;
        &:hover { color: white; padding-left: 5px; }
      }
    }

    .footer-contact ul li {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #CBD5E1;
      font-size: 0.95rem;
      margin-bottom: 15px;
      
      lucide-icon { color: var(--primary-electric); }
    }

    .footer-bottom {
      padding-top: 30px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #94A3B8;
      font-size: 0.85rem;
      
      @media (max-width: 640px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
      }
    }

    .legal-links {
      display: flex;
      gap: 25px;
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
}
