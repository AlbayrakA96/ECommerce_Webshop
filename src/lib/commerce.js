import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(process.env.local.REACT_APP_CHEC_PUBLIC_KEY, true);
