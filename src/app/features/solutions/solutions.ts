import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Monitor, Database, Layers, Shield, Zap, Layout } from 'lucide-angular';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="solutions-page">
      <section class="page-header">
        <h1>Solutions <span class="gradient-text">Dassault Systèmes</span></h1>
        <p>L'excellence en ingénierie et collaboration digitale.</p>
      </section>

      <section class="solutions-list section-container">
        <div class="solution-detail" *ngFor="let sol of solutions; let i = index" [class.reverse]="i % 2 !== 0">
          <div class="sol-text">
            <h2>{{sol.name}}</h2>
            <p>{{sol.longDesc}}</p>
            <ul class="features">
              <li *ngFor="let feature of sol.features">{{feature}}</li>
            </ul>
            <button class="btn-premium primary">En savoir plus</button>
          </div>
          <div class="sol-visual glass">
             <lucide-icon [name]="sol.icon" size="120"></lucide-icon>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .solutions-page { padding-top: 120px; }
    .page-header { text-align: center; padding: 60px 5%; }
    
    .solution-detail {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 100px;
      align-items: center;
      margin-bottom: 120px;
      
      &.reverse {
        direction: rtl;
        .sol-text { direction: ltr; }
      }
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
        &.reverse { direction: ltr; }
      }
    }

    .sol-text h2 { font-size: 2.5rem; margin-bottom: 25px; }
    .sol-text p { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 30px; }
    
    .features {
      list-style: none;
      margin-bottom: 40px;
      li {
        margin-bottom: 15px;
        padding-left: 30px;
        position: relative;
        font-weight: 600;
        &:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-electric);
        }
      }
    }

    .sol-visual {
      height: 400px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(0, 91, 255, 0.05) 0%, rgba(0, 242, 255, 0.05) 100%);
      color: var(--primary-electric);
    }
  `]
})
export class SolutionsComponent {
  solutions = [
    { 
      name: '3DEXPERIENCE', 
      longDesc: 'Une plateforme d\'entreprise qui fournit des solutions logicielles pour chaque organisation de votre entreprise – du marketing aux ventes en passant par l\'ingénierie.',
      features: ['Gestion du cycle de vie des produits (PLM)', 'Collaboration en temps réel', 'Innovation basée sur les données'],
      icon: Layers
    },
    { 
      name: 'CATIA', 
      longDesc: 'La solution leader mondiale pour la conception et l\'expérience produit. Utilisée par les plus grandes entreprises dans de multiples industries.',
      features: ['Design industriel complexe', 'Ingénierie des systèmes', 'Modélisation 3D avancée'],
      icon: Monitor
    },
    { 
      name: 'SOLIDWORKS', 
      longDesc: 'Des solutions de conception 3D puissantes et faciles à utiliser pour permettre aux entreprises de concevoir de meilleurs produits.',
      features: ['CAO mécanique', 'Simulation de conception', 'Gestion des données techniques'],
      icon: Database
    }
  ];
}
