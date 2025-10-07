import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, FileIcon, Mail, Check, Copy, Github, Linkedin } from 'lucide-angular';

@Component({
  selector: 'app-social',
  imports: [LucideAngularModule],
  templateUrl: './social.html',
  styleUrl: './social.css',
})
export class Social {
  @Input() email!: string;
  @Input() linkedinUrl!: string;
  @Input() githubUrl!: string;
  @Input() copySuccess = false;
  @Output() copyEmail = new EventEmitter<void>();

  // Lucide icons
  readonly FileIcon = FileIcon;
  readonly CheckIcon = Check;
  readonly MailIcon = Mail;
  readonly CopyIcon = Copy;
  readonly GithubIcon = Github; // Esta deprecado, ya descargado el svg, solo queda actualizarlo manualmente
  readonly LinkedinIcon = Linkedin; // Esta deprecated pero no aparece en la web recomendada

  onCopyEmail(): void {
    this.copyEmail.emit();
  }
}
