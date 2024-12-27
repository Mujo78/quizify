type LabelProps = {
  htmlFor: string;
  text: string;
  className?: string;
};

const Label = ({ htmlFor, text, className }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      <span className="label-text text-slate-600">{text}</span>
    </label>
  );
};

export default Label;
