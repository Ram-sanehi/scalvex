import { useNavigate } from 'react-router-dom';

export function BackArrow() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center gap-2 text-accent hover:underline mb-6"
      style={{ fontWeight: 500, fontSize: '1rem' }}
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      Back
    </button>
  );
}
