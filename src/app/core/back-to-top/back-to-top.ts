import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button 
      class="back-to-top" 
      [class.visible]="isVisible" 
      (click)="scrollToTop()"
      aria-label="Back to top">
      <lucide-icon [name]="ChevronUp" size="24"></lucide-icon>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary-electric);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 1001;
      box-shadow: 0 10px 20px rgba(0, 91, 255, 0.3);
      cursor: pointer;
      border: none;
      outline: none;
      
      &.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      &:hover {
        background: var(--primary-deep);
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(11, 31, 58, 0.4);
      }
    }
  `]
})
export class BackToTopComponent {
  readonly ChevronUp = ChevronUp;
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
