import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="w-full bg-amber-50 text-gray-600 text-sm py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
        <p>© {new Date().getFullYear()} <strong className="text-[#26BAEF]">NexusBuy</strong>. All rights reserved.</p>

        <div className="flex gap-4 text-blue-500">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
