import React from "react";

const Progress = ({ progressValue }: { progressValue: string | number }) => {
  const style = { "--value": progressValue } as React.CSSProperties;
  return (
    <div
      className="radial-progress text-slate-600"
      style={style}
      role="progressbar"
      aria-label="progress-bar-num-question"
    >
      {parseInt(progressValue as string).toFixed(0)}%
    </div>
  );
};

export default Progress;
