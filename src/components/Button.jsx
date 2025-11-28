import buttonBg from "../assets/images/background/button-pink-bg.svg";

export default function Button({ children, onClick, className = "" }) {
   return (
      <button
         onClick={onClick}
         className={`relative px-8 lg:py-4 text-white font-medium text-base uppercase tracking-wide overflow-hidden cursor-pointer ${className}`}
         style={{
            background: `url(${buttonBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50px",
         }}
      >
         {children}
      </button>
   );
}
