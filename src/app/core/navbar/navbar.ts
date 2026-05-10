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
          <img src="assets/logo_ktm.png" alt="KTM Digital & Innovation" class="nav-logo">
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
              <div class="mega-content">
                <div class="mega-col">
                  <span class="col-label">Conception & Design</span>
                  <a routerLink="/solutions/catia">CATIA</a>
                  <a routerLink="/solutions/solidworks">SOLIDWORKS</a>
                </div>
                <div class="mega-col">
                  <span class="col-label">Simulation</span>
                  <a routerLink="/solutions/simulia">SIMULIA</a>
                  <a routerLink="/solutions/delmia">DELMIA</a>
                </div>
                <div class="mega-col">
                  <span class="col-label">Collaboration</span>
                  <a routerLink="/solutions/3dexperience">3DEXPERIENCE</a>
                  <a routerLink="/solutions/enovia">ENOVIA</a>
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
              <a routerLink="/solutions/catia" (click)="closeMenu()">CATIA</a>
              <a routerLink="/solutions/solidworks" (click)="closeMenu()">SOLIDWORKS</a>
              <a routerLink="/solutions/simulia" (click)="closeMenu()">SIMULIA</a>
              <a routerLink="/solutions/3dexperience" (click)="closeMenu()">3DEXPERIENCE</a>
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
      height: 90px;
      display: flex;
      align-items: center;
      gap: 40px;

      @media (max-width: 768px) {
        padding: 0 20px;
        height: 70px;
      }
    }

    .logo { flex-shrink: 0; }

    .nav-logo {
      height: 48px;
      width: auto;
      object-fit: contain;
      display: block;

      @media (max-width: 768px) { height: 38px; }
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
          color: var(--primary-electric);
          background: rgba(0, 91, 255, 0.06);
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
      width: 580px;
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
    }

    .mega-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .col-label {
      display: block;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--text-muted);
      font-weight: 700;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #E2E8F0;
    }

    .mega-col a {
      display: block;
      padding: 6px 0;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--primary-deep);
      transition: all 0.2s ease;

      &:hover {
        color: var(--primary-electric);
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

      &:hover { color: var(--primary-electric); }
    }

    .btn-demo {
      padding: 10px 22px;
      background: var(--primary-electric);
      color: white;
      border-radius: 10px;
      font-size: 0.85rem;
      font-weight: 700;
      white-space: nowrap;
      transition: all 0.2s ease;
      box-shadow: 0 4px 15px rgba(0, 91, 255, 0.25);

      &:hover {
        background: var(--primary-deep);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 91, 255, 0.35);
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
      background: rgba(0, 91, 255, 0.06);
      color: var(--primary-deep);
      border: none;
      cursor: pointer;
      margin-left: auto;
      flex-shrink: 0;
      transition: background 0.2s;

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
          color: var(--primary-electric);
          background: rgba(0, 91, 255, 0.06);
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

        &:hover { background: rgba(0, 91, 255, 0.06); color: var(--primary-electric); }
      }

      .group-links {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease;
        padding-left: 16px;

        &.open { max-height: 300px; }

        a {
          font-size: 0.88rem;
          color: var(--text-muted);
          padding: 9px 16px;

          &:hover { color: var(--primary-electric); }
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
    }

    @media (max-width: 900px) {
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
