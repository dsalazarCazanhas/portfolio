import { Component, signal } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { CV } from '../types.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { CredlyBadgeComponent } from '../credly/credly';
import { LucideAngularModule, BrickWallShield, SunIcon, MoonIcon } from 'lucide-angular';

import { Social } from '../social/social';

@Component({
  selector: 'app-home',
  imports: [NgxTypedJsModule, CredlyBadgeComponent, Social, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly BrickWallShieldIcon = BrickWallShield;
  protected readonly SunIcon = SunIcon;
  protected readonly MoonIcon = MoonIcon;
  protected readonly title = signal('portfolio');
  private readonly JSONBIN_BIN_ID = environment.JSONBIN_BIN_ID;
  private readonly JSONBIN_API_KEY = environment.JSONBIN_API_KEY;

  loading = signal(true);
  error = signal<string | null>(null);
  copySuccess = signal(false);
  copied = false;

  handleCopyEmail() {
    navigator.clipboard.writeText(this.cv().contact.email);
    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }

  theme = signal<'light' | 'dark'>('light');
  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  cv = signal<CV>({
    name: '',
    title: [''],
    about: '',
    contact: { email: '', linkedin: '', github: '' },
    experience: [],
    education: [],
    skills: [],
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 1. Revisar localStorage
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    // 2. Si hay tema guardado, usarlo, si no, detectar el preferido del sistema
    if (stored) {
      this.setTheme(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
    this.loadCV();
  }

  async loadCV() {
    try {
      const url = `https://api.jsonbin.io/v3/b/${this.JSONBIN_BIN_ID}`;
      const response = await firstValueFrom(
        this.http.get<{ record: CV }>(url, {
          headers: {
            'X-Access-Key': this.JSONBIN_API_KEY,
          },
        })
      );

      this.cv.set(response.record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        // Error específico de Angular HttpClient
        console.error('HTTP error:', err.status, err.message);
        this.error.set(`Error ${err.status}: ${err.message}`);
      } else {
        // Error genérico
        console.error('Unexpected error:', err);
        this.error.set('Unexpected error while loading CV');
      }
    } finally {
      this.loading.set(false);
    }
  }

  private setTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
    localStorage.setItem('theme', theme);

    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  handleCopyContact() {
    navigator.clipboard.writeText(this.cv().contact.email);
    this.copySuccess.set(true);
    setTimeout(() => this.copySuccess.set(false), 2000);
  }
}
