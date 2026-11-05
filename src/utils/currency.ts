/**
 * Currency Formatting Utility for Smart Mobile Store (Bilaspur, Chhattisgarh, India)
 * Uses Indian Rupees (INR) exclusively with en-IN locale grouping.
 */

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
