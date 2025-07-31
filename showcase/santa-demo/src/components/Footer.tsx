import { GitFork, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between gap-4">
      <a 
        href="https://www.vecteezy.com/free-vector/abstract"
        target="_blank"
        className="relative flex items-center justify-center gap-2 rounded-3xl bg-[rgba(28,18,30,0.20)] px-2 py-3 text-sm font-medium backdrop-blur-sm hover:underline sm:p-4"
      >
        Abstract Vectors by Vecteezy
      </a>
    </footer>
  );
};
