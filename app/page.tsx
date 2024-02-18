import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-[100dvh] overflow-hidden">
      <Navbar />

      <section className="flex h-[100dvh] flex-row">
        <Live />
      </section>
    </main>
  );
}
