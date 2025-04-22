import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  className,
  id,
  disabled = false,
  loading,
  setLoading,
  loadingText = "Loading...",
}) => {
  // The loadingText property is optional, a loading icon can be used instead or use a library for loading.
  // I used useState to manage the loading state. So it has to be created in the parent component to be used without encountering errors
  // My parent component currently being App.jsx
  return (
    <button
      className={className}
      disabled={disabled}
      style={{ background: `${disabled === true ? "red" : ""}` }}
      onClick={onClick}
      id={id}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
