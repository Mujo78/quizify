interface LoadingDotsColor {
  color: "white" | "black";
}

const LoadingDots = ({ color }: LoadingDotsColor) => {
  return (
    <span
      className={`loading loading-dots loading-lg ${
        color === "white" ? "text-white" : "text-slate-900"
      }`}
    ></span>
  );
};

export default LoadingDots;
