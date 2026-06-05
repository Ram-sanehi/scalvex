import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export const StickyConsultButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed right-0 top-1/3 z-50 hidden md:flex items-center gap-2.5 bg-primary hover:bg-accent text-white py-3.5 px-4 rounded-l-2xl shadow-2xl hover:translate-x-[-4px] transition-all duration-300 group border-l border-y border-white/10"
    >
      <Calendar className="h-4 w-4 text-accent group-hover:text-white transition-colors duration-300" />
      <span className="text-xs font-bold uppercase tracking-widest font-sans">Book Call</span>
    </Link>
  );
};

export default StickyConsultButton;
