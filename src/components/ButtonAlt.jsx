export default function ButtonAlt({ children, onClick, disabled = false, className = "" }) {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={`lg:text-lg border-2 border-secondary text-secondary p-2 rounded-full w-35 h-12 lg:h-15 ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-secondary/5"
         } ${className}`}
      >
         {children}
      </button>
   );
}
