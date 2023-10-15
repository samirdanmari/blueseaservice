import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, first, tap } from 'rxjs';
import {}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthServicesService {
  //exposing all the data
  public authErrorMessages$ = new Subject<string>();
  public isLoading$=  new BehaviorSubject<boolean>(true);
  public login$ = new Subject<Login>();
  
  constructor(private afAuth: AngularFireAuth) {
    this.isLoggedIn().subscribe();
   }
   private isLoggedIn(){
    return this.afAuth.authState.pipe(
      first(),
       tap(login =>{
        this.isLoading$.next(false);
        if (login) {
          const {email, uid} = login;
          this.login$.next({email, uid});
        }
       })
    );
   }
  public signUpFirebase ({email, password}){
    this.isLoading$.next(true);
    this.handleErrorOrSuccess(() =>{
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    });
  }
  handleErrorOrSuccess(arg0: () => any) {
    throw new Error('Method not implemented.');
  }
  public loginFireBase({email, password}){
    this.isLoading$.next(true);
    this.handleErrorOrSuccess(()=>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  });
  public logOutFirebase() {
    this.isLoading$.next(true);
    this.afAuth.auth
    .signOut()
    .then(() => {
    this.isLoading$.next(false);
    this.user$.next(null);
    })
    .catch(e => {
    console.error(e);
    this.isLoading$.next(false);
    this.authErrorMessages$.next("Something is wrong when signing out!");
    });
    }
    private handleErrorOrSuccess(
    cb: () => Promise<firebase.auth.UserCredential>
    ) {
    cb()
    .then(data => this.authenticateUser(data))
    .catch(e => this.handleSignUpLoginError(e));
    }
    private authenticateUser(UserCredential: { user: { email: any; uid: any; }; }) {
    const {
    user: { email, uid }
    } = UserCredential;
    this.isLoading$.next(false);
    this.login$.next({ email, uid });
    }
    private handleSignUpLoginError(error: { code: string; message: string }) 
   {
    this.isLoading$.next(false);
    const errorMessage = error.message;
    this.authErrorMessages$.next(errorMessage);
}
}
