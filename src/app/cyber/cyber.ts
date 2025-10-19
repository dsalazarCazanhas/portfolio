import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ShieldCheck,
  LucideAngularModule,
  Eye,
  BookOpen,
  BookCheck,
  Shield,
  HatGlasses,
} from 'lucide-angular';

@Component({
  selector: 'app-cyber',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './cyber.html',
  styleUrl: './cyber.css',
})
export class Cyber {
  protected readonly ShieldCheck = ShieldCheck;
  protected readonly Eye = Eye;
  protected readonly BookOpen = BookOpen;
  protected readonly BookCheck = BookCheck;
  protected readonly Shield = Shield;
  protected readonly HatGlasses = HatGlasses;

  constructor(private router: Router) {}

  goToFakeLogin() {
    this.router.navigate(['/fake-login']);
  }
}
