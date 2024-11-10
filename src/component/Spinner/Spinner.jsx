
const Spinner = () => {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin border-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
        >
          <g>
            <circle
              cx="31.0018"
              cy="30.9993"
              r="26.5091"
              stroke="#D1D5DB"
              strokeWidth="8"
              strokeDasharray="5 5"
            />
            <path
              d="M38.7435 56.3529C45.0336 54.4317 50.3849 50.2409 53.7578 44.5947C57.1307 38.9484 58.2842 32.25 56.9942 25.8008C55.7043 19.3516 52.063 13.6122 46.7779 9.69765C41.4928 5.78314 34.9412 3.97307 28.396 4.61912"
              stroke="#4F46E5"
              strokeWidth="8"
            />
          </g>
        </svg>
      </div>
      <span className="text-black text-sm text-center font-normal leading-snug">
        Cargando...
      </span>
    </div>
  );
};

export default Spinner;