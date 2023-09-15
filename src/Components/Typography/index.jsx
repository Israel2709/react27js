import classnames from "classnames";

const Typography = ({ children, size, className, tag }) => {
  const typographyClassess = classnames(className, {
    "font-size-xs": size === "xs",
    "font-size-base": size === "base",
    "font-size-md": size === "md",
    "font-size-lg": size === "lg",
    "font-size-xl": size === "xl",
  });

  const Tag = tag || "p";
  return <Tag className={typographyClassess}>{children}</Tag>;
};

export default Typography;
