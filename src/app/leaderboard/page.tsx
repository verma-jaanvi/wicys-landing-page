import Leaderboard from "@/components/Leaderboard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function LeaderboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <Leaderboard />
      <Footer />
    </main>
  );
}
