// Firebase başlatma. Aşağıdaki firebaseConfig'i Firebase konsolundan kopyalayıp yapıştırın.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as A from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import * as F from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR9YOw1xSXBTehtMSLJ3uIwfdS_9EMypQ",
  authDomain: "kocluk-c45f6.firebaseapp.com",
  projectId: "kocluk-c45f6",
  storageBucket: "kocluk-c45f6.firebasestorage.app",
  messagingSenderId: "176967251276",
  appId: "1:176967251276:web:681eea86a57b8de1dccbe9"
};

const app = initializeApp(firebaseConfig);
export const auth = A.getAuth(app);
export const db = F.getFirestore(app);
export { A, F };

// Öğretmen hesabı: bu e-posta ile Firebase'de oluşturulur (şifre kodda tutulmaz).
export const TEACHER_EMAIL = "fatiher45@icloud.com";
export const isTeacher = u => u.email === TEACHER_EMAIL && u.providerData.some(p => p.providerId === "password");
