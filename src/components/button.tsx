import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  variant?: "black" | "border" | "white";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button = ({
  label,
  variant = "black",
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  href,
  target,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const classNames = `
    ${styles.button} 
    ${styles[variant]} 
    ${disabled ? styles.disabled : ""} 
    ${loading ? styles.loading : ""}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classNames}
        aria-disabled={disabled}
      >
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        <span>{label}</span>
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames}
    >
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          <span>{label}</span>
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};
