import { Component, signal } from '@angular/core';
import { TriangleAlert, LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fakefacebook',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './fakefacebook.html',
  styleUrl: './fakefacebook.css',
})
export class Fakefacebook {
  email = signal('');
  password = signal('');
  showWarning = signal(false);
  showPasswordModal = false;
  protected readonly TriangleAlert = TriangleAlert;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.showWarning.set(true);
  }

  openPasswordModal(): void {
    this.showPasswordModal = true;
  }

  closePasswordModal(): void {
    this.showPasswordModal = false;
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closePasswordModal();
    }
  }
}
