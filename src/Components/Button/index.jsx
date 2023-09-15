import classnames from "classnames";
const Button = (props) => {
  const { variant, children, uppercase, className } = props;

  const buttonClasses = classnames("kode-btn", className, {
    "bg-kode-blue text-white": variant === "primario",
    "bg-kode-black text-white": variant === "secundario",
    "bg-kode-gray text-white": variant === "extra",
    "text-uppercase": uppercase,
  });
  return <button className={buttonClasses}>{children || "Botón"}</button>;
};

export default Button;
