import type { Component } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type Nativetype = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
  nativeType?: Nativetype;
  tag?: string;
    icon?: string|Component;

}