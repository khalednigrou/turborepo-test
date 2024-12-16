import { forwardRef, type ButtonHTMLAttributes } from "react";

const SpecialButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ ...props }, ref) => {
  return (
    <button className="relative items-center justify-center inline-flex overflow-hidden font-medium text-sm text-indigo-600 shadow-2xl group text-shadow px-8 py-2" ref={ref} {...props}>
      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-yellow-500 rounded-full blur-md"></span>
        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
      </span>
      <span className="relative text-white">{props.children}</span>
    </button>
  );
});
SpecialButton.displayName = "SpecialButton";

export { SpecialButton };
