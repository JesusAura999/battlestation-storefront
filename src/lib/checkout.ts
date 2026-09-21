export const SHOPIFY_STORE_DOMAIN = "kjsy4w-34.myshopify.com";
export const DEFAULT_DISCOUNT_CODE = "SETUPWARS10";
export const FREE_SHIPPING_THRESHOLD = 75;

export interface CartItem {
  shopifyVariantId: string;
  quantity: number;
}

/**
 * Builds a direct Shopify Headless Cart Permalink.
 * Takes the user straight to checkout with preloaded items and active coupon code.
 */
export function buildCheckoutUrl(
  items: CartItem[],
  discountCode: string = DEFAULT_DISCOUNT_CODE
): string {
  if (!items || items.length === 0) {
    return `https://${SHOPIFY_STORE_DOMAIN}`;
  }

  // Format: {variant_id}:{quantity},{variant_id2}:{quantity2}
  const cartLines = items
    .filter((item) => item.shopifyVariantId && item.quantity > 0)
    .map((item) => `${item.shopifyVariantId}:${item.quantity}`)
    .join(",");

  let url = `https://${SHOPIFY_STORE_DOMAIN}/cart/${cartLines}`;
  if (discountCode && discountCode.trim().length > 0) {
    url += `?discount=${encodeURIComponent(discountCode.trim())}`;
  }

  return url;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
