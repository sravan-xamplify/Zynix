import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authState: any;
  public showLoader = false;
  private readonly TOKEN_KEY = 'authToken';

  constructor(private afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) {
    this.afAuth.authState.subscribe((auth) => (this.authState = auth));
  }

  // Session state helpers
  get isUserAnonymousLoggedIn(): boolean {
    return this.authState ? !!this.authState.isAnonymous : false;
  }
  get currentUserId(): string {
    return this.authState ? this.authState.uid : '';
  }
  get currentUserName(): string {
    return this.authState?.email ?? '';
  }
  get currentUser(): any {
    return this.authState ?? null;
  }
  get hasToken(): boolean {
    try {
      return !!localStorage.getItem(this.TOKEN_KEY);
    } catch {
      return false;
    }
  }
  get isUserEmailLoggedIn(): boolean {
    if (this.authState && !this.isUserAnonymousLoggedIn) return true;
    return this.hasToken;
  }
  setLocalSession(token?: string): void {
    try {
      localStorage.setItem(this.TOKEN_KEY, token || 'local');
    } catch {}
  }

  // Firebase email/password APIs
  registerWithEmail(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        this.authState = cred?.user ?? null;
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (cred) => {
        this.authState = cred?.user ?? null;
        try {
          const token = await cred?.user?.getIdToken?.();
          localStorage.setItem(this.TOKEN_KEY, token || 'firebase');
        } catch {
          localStorage.setItem(this.TOKEN_KEY, 'firebase');
        }
      });
  }

  SignIn(email: string, password: string) {
    return this.loginWithEmail(email, password);
  }

  SignUp(email: string, password: string) {
    return this.registerWithEmail(email, password).then(() => this.SendVerificationMail());
  }

  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u) => u?.sendEmailVerification?.())
      .then(() => this.router.navigate(['/sales']));
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  signOut(): void {
    this.afAuth.signOut().finally(() => {
      try {
        localStorage.removeItem(this.TOKEN_KEY);
      } catch {}
      this.router.navigate(['/auth/login']);
    });
  }

  // Backward compatible alias
  singout(): void {
    this.signOut();
  }
}
