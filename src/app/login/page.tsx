import Login from "@/components/Login";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <Login />
      <Footer />
    </main>
  );
}
