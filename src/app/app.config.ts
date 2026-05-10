import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { 
  LucideAngularModule, 
  Menu, X, ChevronDown, ChevronUp, ChevronRight, Search, Globe, 
  Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin,
  ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers,
  Plane, Car, Building2, GraduationCap, Stethoscope, Scissors, Pickaxe,
  Clock, Users, Award, Star, Newspaper, Calendar, Tag,
  Target, Eye, Heart, TrendingUp,
  MessageSquare, BarChart, HardHat, BookOpen, Settings, Headphones
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu, X, ChevronDown, ChevronUp, ChevronRight, Search, Globe,
        Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin,
        ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers,
        Plane, Car, Building2, GraduationCap, Stethoscope, Scissors, Pickaxe,
        Clock, Users, Award, Star, Newspaper, Calendar, Tag,
        Target, Eye, Heart, TrendingUp,
        MessageSquare, BarChart, HardHat, BookOpen, Settings, Headphones
      })
    )
  ]
};
