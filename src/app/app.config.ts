import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { 
  LucideAngularModule, 
  Menu, X, ChevronDown, ChevronUp, ChevronRight, Search, Globe, 
  Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin,
  ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers,
  Plane, Car, Building2, GraduationCap, Stethoscope, Scissors, Pickaxe,
  Clock, Users, Award, Star, Newspaper, Calendar, Tag,
  Target, Eye, Heart, TrendingUp,
  MessageSquare, BarChart, BarChart2, HardHat, BookOpen, Settings, Headphones,
  BellRing, ShieldCheck, FileText, Cpu, Network, FlaskConical, Leaf, Beaker, Send
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu, X, ChevronDown, ChevronUp, ChevronRight, Search, Globe,
        Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin,
        ArrowRight, CheckCircle, Database, Layout, Shield, Zap, Monitor, Layers,
        Plane, Car, Building2, GraduationCap, Stethoscope, Scissors, Pickaxe,
        Clock, Users, Award, Star, Newspaper, Calendar, Tag,
        Target, Eye, Heart, TrendingUp,
        MessageSquare, BarChart, BarChart2, HardHat, BookOpen, Settings, Headphones,
        BellRing, ShieldCheck, FileText, Cpu, Network, FlaskConical, Leaf, Beaker, Send
      })
    )
  ]
};
