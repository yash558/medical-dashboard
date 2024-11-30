import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => twMerge(clsx(inputs));

export const addSpaceIfCamelCase = (str) => {
      if (str === undefined || str === null) return "";

      if (typeof str !== "string") str = `${str}`;

      return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};
