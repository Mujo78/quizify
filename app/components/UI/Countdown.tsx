const Countdown = ({ counter }: { counter: number }) => {
  const style = { "--value": counter } as React.CSSProperties;
  return (
    <span className="countdown font-mono text-4xl">
      <span style={style}></span>
    </span>
  );
};

export default Countdown;
