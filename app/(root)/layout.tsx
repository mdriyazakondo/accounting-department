import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" bg-slate-50 text-slate-900">
      <Navbar />

      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
