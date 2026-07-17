import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X, ChevronDown, Search, Globe, Phone } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">

        <!-- Logo -->
        <a routerLink="/" class="logo">
          <img src="assets/logo_ktm.png" alt="KTM Green Energy Group" class="nav-logo">
        </a>

        <!-- Desktop Links -->
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a></li>
          <li><a routerLink="/a-propos" routerLinkActive="active">À Propos</a></li>
          <li class="dropdown">
            <a routerLink="/solutions" class="dropdown-trigger">
              Solutions <lucide-icon [name]="ChevronDown" size="14"></lucide-icon>
            </a>
            <div class="mega-menu">
              <div class="mega-header">
                <span class="mega-title">3DEXPERIENCE Platform</span>
                <span class="mega-subtitle">Solutions Dassault Systèmes par catégorie</span>
              </div>
              <div class="mega-content">
                <div class="mega-col">
                  <span class="col-label col-3d">3D Modeling</span>
                  <!-- <span class="col-desc">Concevoir, fabriquer et simuler le produit virtuel</span> -->
                  <a routerLink="/solutions/solidworks">SOLIDWORKS</a>
                  <a routerLink="/solutions/catia">CATIA</a>
                  <a routerLink="/solutions/geovia">GEOVIA</a>
                  <a routerLink="/solutions/#">BIOVIA</a>
                </div>
                <div class="mega-col">
                  <span class="col-label col-social">Social &amp; Collaborative</span>
                  <!-- <span class="col-desc">Connecter les utilisateurs aux applications collaboratives</span> -->
                  <a routerLink="/solutions/enovia">ENOVIA</a>
                  <a routerLink="/solutions/3dexcite">3DEXCITE</a>
                  <a routerLink="/solutions/centricplm">CENTRIC PLM</a>
                </div>
                <div class="mega-col">
                  <span class="col-label col-info">Information Intelligence</span>
                  <!-- <span class="col-desc">Analyser, prévoir et élaborer des idées à partir des données</span> -->
                  <a routerLink="/solutions/netvibes">NETVIBES</a>
                  <a routerLink="/solutions/medidata">MEDIDATA</a>
                </div>
                <div class="mega-col">
                  <span class="col-label col-simu">Simulation</span>
                  <!-- <span class="col-desc">Simuler et optimiser le virtuel et le réel</span> -->
                  <a routerLink="/solutions/simulia">SIMULIA</a>
                  <a routerLink="/solutions/delmia">DELMIA</a>
                  <a routerLink="/solutions/3dvia">3DVIA</a>
                </div>
                <div class="mega-col">
                  <span class="col-label col-digital">Digitalisation</span>
                  <a routerLink="/solutions/neoledge">GED &amp; ECM</a>
                  <a routerLink="/solutions/iterop">ITEROP</a>
                  <a routerLink="/solutions/jumeau-numerique">Jumeau Numérique</a>
                  <a routerLink="/services">Reverse Engineering</a>
                </div>
              </div>
            </div>
          </li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/formations" routerLinkActive="active">Formations</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>

        <!-- Desktop Actions -->
        <div class="nav-actions">
          <a href="tel:+237656168894" class="tel-link">
            <lucide-icon [name]="Phone" size="16"></lucide-icon>
            +237 656 16 88 94
          </a>
          <a routerLink="/contact" class="btn-demo">Demander une démo</a>
        </div>

        <a routerLink="/" class="logo dassault-logo">
          <img src="assets/dassault.jpeg" alt="Dassault Systemes" class="nav-logo-certif">
        </a>

        <!-- Mobile Toggle -->
        <button class="mobile-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen" aria-label="Menu">
          <lucide-icon [name]="isMenuOpen ? X : Menu" size="24"></lucide-icon>
        </button>
      </div>

      <!-- Mobile Drawer Overlay -->
      <div class="mobile-overlay" [class.active]="isMenuOpen" (click)="closeMenu()"></div>

      <!-- Mobile Drawer -->
      <div class="mobile-drawer" [class.open]="isMenuOpen">
        <div class="drawer-header">
          <img src="assets/logo_ktm.png" alt="KTM Logo" class="nav-logo">
          <button class="close-btn" (click)="closeMenu()">
            <lucide-icon [name]="X" size="24"></lucide-icon>
          </button>
        </div>

        <nav class="drawer-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Accueil</a>
          <a routerLink="/a-propos" routerLinkActive="active" (click)="closeMenu()">À Propos</a>
          <div class="drawer-group">
            <button class="group-trigger" (click)="toggleSolutions()">
              Solutions <lucide-icon [name]="ChevronDown" size="16" [style.transform]="solutionsOpen ? 'rotate(180deg)' : ''"></lucide-icon>
            </button>
            <div class="group-links" [class.open]="solutionsOpen">
              <span class="drawer-group-label">🟦 3D Modeling</span>
              <a routerLink="/solutions/solidworks" (click)="closeMenu()">SOLIDWORKS</a>
              <a routerLink="/solutions/catia" (click)="closeMenu()">CATIA</a>
              <a routerLink="/solutions/geovia" (click)="closeMenu()">GEOVIA</a>
              <span class="drawer-group-label">🟫 Collaborative</span>
              <a routerLink="/solutions/enovia" (click)="closeMenu()">ENOVIA</a>
              <a routerLink="/solutions/3dexperience" (click)="closeMenu()">3DEXPERIENCE</a>
              <a routerLink="/solutions/iterop" (click)="closeMenu()">ITEROP</a>
              <span class="drawer-group-label">🟧 Information</span>
              <a routerLink="/solutions/intelligence-artificielle" (click)="closeMenu()">IA & Analytics</a>
              <a routerLink="/solutions/neoledge" (click)="closeMenu()">NeoLedge (ECM)</a>
              <span class="drawer-group-label">🟩 Simulation</span>
              <a routerLink="/solutions/simulia" (click)="closeMenu()">SIMULIA</a>
              <a routerLink="/solutions/delmia" (click)="closeMenu()">DELMIA</a>
              <a routerLink="/solutions/jumeau-numerique" (click)="closeMenu()">Jumeau Numérique</a>
              <span class="drawer-group-label">📲 Digitalisation</span>
              <a routerLink="/solutions/neoledge" (click)="closeMenu()">GED &amp; ECM</a>
              <a routerLink="/solutions/iterop" (click)="closeMenu()">ITEROP</a>
              <a routerLink="/solutions/jumeau-numerique" (click)="closeMenu()">Jumeau Numérique</a>
              <a routerLink="/services" (click)="closeMenu()">Reverse Engineering</a>
            </div>
          </div>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
          <a routerLink="/formations" routerLinkActive="active" (click)="closeMenu()">Formations</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </nav>

        <div class="drawer-footer">
          <a href="tel:+237656168894" class="tel-link">
            <lucide-icon [name]="Phone" size="16"></lucide-icon>
            +237 656 16 88 94
          </a>
          <a routerLink="/contact" class="btn-demo" (click)="closeMenu()">Demander une démo</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: relative;
      z-index: 1000;
      background: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.3s ease;
    }

    .navbar.scrolled {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
    }

    .nav-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 40px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      @media (max-width: 1024px) {
        padding: 0 20px;
      }

      @media (max-width: 768px) {
        height: 80px;
        padding: 0 16px;
        gap: 12px;
      }
    }

    .logo { 
      flex-shrink: 0; 
      display: flex;
      align-items: center;
    }

    .dassault-logo {
      margin-left: auto;
    }

    .nav-logo {
      height: 80px;
      width: auto;
      object-fit: contain;
      display: block;

      @media (max-width: 768px) { height: 50px; }
    }

    .nav-logo-certif {
      height: 70px;
      width: auto;
      object-fit: contain;
      display: block;

      @media (max-width: 768px) { height: 45px; }
    }

    /* ── Desktop links ── */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
      list-style: none;
      margin: 0 auto;

      li a, li .dropdown-trigger {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 14px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-main);
        border-radius: 8px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover, &.active {
          color: var(--primary-gold);
          background: rgba(197, 160, 89, 0.08);
        }
      }
    }

    /* ── Mega menu ── */
    .dropdown {
      position: relative;

      &:hover .mega-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        pointer-events: all;
      }
    }

    .mega-menu {
      position: absolute;
      top: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      width: 1050px;
      max-width: 90vw;
      background: white;
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 20px 60px rgba(11, 31, 58, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.05);
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: none;

      &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid white;
      }

      /* Invisible bridge to keep menu open while moving cursor */
      &::after {
        content: '';
        position: absolute;
        top: -15px;
        left: 0;
        right: 0;
        height: 20px;
      }
    }

    .mega-header {
      padding-bottom: 16px;
      margin-bottom: 20px;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .mega-title {
      font-size: 0.9rem;
      font-weight: 800;
      color: var(--primary-deep);
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .mega-subtitle {
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .mega-content {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
    }

    .col-label {
      display: block;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      margin-bottom: 6px;
      padding-bottom: 6px;
      border-bottom: 2px solid #E2E8F0;
      color: var(--primary-deep);
    }

    .col-desc {
      display: block;
      font-size: 0.72rem;
      color: var(--text-muted);
      font-style: italic;
      line-height: 1.4;
      margin-bottom: 10px;
      padding-bottom: 8px;
    }

    .col-3d { border-color: #3B82F6; color: #1D4ED8; }
    .col-social { border-color: #92400E; color: #78350F; }
    .col-info { border-color: #EA580C; color: #C2410C; }
    .col-simu { border-color: #16A34A; color: #15803D; }
    .col-digital { border-color: #7C3AED; color: #6D28D9; }

    .mega-col a {
      display: block;
      padding: 6px 0;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--primary-deep);
      transition: all 0.2s ease;

      &:hover {
        color: var(--primary-gold);
        padding-left: 6px;
      }
    }

    /* ── Nav actions ── */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-shrink: 0;
    }

    .tel-link {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-main);
      white-space: nowrap;
      transition: color 0.2s;

      &:hover { color: var(--primary-gold); }
    }

    .btn-demo {
      padding: 10px 22px;
      background: var(--primary-deep);
      color: white;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 700;
      white-space: nowrap;
      transition: all 0.2s ease;
      box-shadow: 0 4px 15px rgba(0, 45, 91, 0.2);

      &:hover {
        background: var(--primary-gold);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(197, 160, 89, 0.3);
      }
    }

    /* ── Mobile toggle ── */
    .mobile-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: rgba(197, 160, 89, 0.06);
      color: var(--primary-deep);
      border: none;
      cursor: pointer;
      flex-shrink: 0;
      transition: background 0.2s;
      order: 10;

      &:hover { background: rgba(0, 91, 255, 0.12); }
    }

    /* ── Mobile overlay ── */
    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      z-index: 1100;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 320px;
      background: white;
      z-index: 1200;
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      box-shadow: -20px 0 60px rgba(0, 0, 0, 0.15);

      &.open { transform: translateX(0); }
    }

    .drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 24px 20px;
      border-bottom: 1px solid #E2E8F0;
    }

    .close-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #F1F5F9;
      color: var(--text-main);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover { background: #E2E8F0; }
    }

    .drawer-nav {
      flex: 1;
      padding: 16px 24px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;

      a {
        display: block;
        padding: 13px 16px;
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--text-main);
        border-radius: 10px;
        transition: all 0.2s ease;

        &:hover, &.active {
          color: var(--primary-gold);
          background: rgba(197, 160, 89, 0.06);
        }
      }
    }

    .drawer-group {
      .group-trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 13px 16px;
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--text-main);
        background: none;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.2s ease;

        lucide-icon { transition: transform 0.3s ease; }

        &:hover { background: rgba(197, 160, 89, 0.06); color: var(--primary-gold); }
      }

      .group-links {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease;
        padding-left: 16px;

        &.open { max-height: 600px; }

        a {
          font-size: 0.88rem;
          color: var(--text-muted);
          padding: 9px 16px;

          &:hover { color: var(--primary-gold); }
        }

        .drawer-group-label {
          display: block;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-gold);
          padding: 10px 16px 4px;
        }
      }
    }

    .drawer-footer {
      padding: 20px 24px 32px;
      border-top: 1px solid #E2E8F0;
      display: flex;
      flex-direction: column;
      gap: 12px;

      .tel-link {
        justify-content: center;
        padding: 12px;
        border-radius: 10px;
        background: #F8FAFC;
      }

      .btn-demo {
        text-align: center;
        padding: 14px;
        border-radius: 12px;
        font-size: 0.9rem;
      }
    }

    /* ── Responsive breakpoints ── */
    @media (max-width: 1100px) {
      .tel-link { display: none; }
      .mega-menu { width: 900px; }
      .mega-content { gap: 10px; }
      .nav-links { gap: 0px; }
      .nav-links li a, .nav-links li .dropdown-trigger { padding: 8px 10px; font-size: 0.85rem; }
    }

    @media (max-width: 1024px) {
      .nav-links, .nav-actions { display: none; }
      .mobile-toggle { display: flex; }
    }
  `]
})
export class NavbarComponent {
  readonly Menu = Menu;
  readonly X = X;
  readonly ChevronDown = ChevronDown;
  readonly Search = Search;
  readonly Globe = Globe;
  readonly Phone = Phone;

  isMenuOpen = false;
  isScrolled = false;
  solutionsOpen = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.solutionsOpen = false;
    document.body.style.overflow = '';
  }

  toggleSolutions() {
    this.solutionsOpen = !this.solutionsOpen;
  }
}
