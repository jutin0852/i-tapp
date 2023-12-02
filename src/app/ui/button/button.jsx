import buttoncss from "@/app/ui/button/buttonCss.module.scss"

export default function Button({
  children,
  variant,
  startIcon,
  endIcon,
  size,
  color,
  type,
  ...props
}) {
  return (
    <div>
      <p>{`<Button ${type} />`}</p>
      <button
        {...props}
        className={`${buttoncss.button} ${variant} ${size} ${color}`}
      >
        <span>{startIcon}</span>
        <span className="children">{children}</span>
        <span>{endIcon}</span>
      </button>
    </div>
  );
}
