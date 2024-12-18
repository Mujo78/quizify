import React from "react";

const Progress = ({ progressValue }: { progressValue: string | number }) => {
  const style = { "--value": progressValue } as React.CSSProperties;
  return (
    <div
      className="radial-progress text-slate-600"
      style={style}
      role="progressbar"
    >
      {progressValue}
    </div>
  );
};

export default Progress;
