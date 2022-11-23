import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBundleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<BundleProductCartItemInput>>;
};

export type AddBundleProductsToCartOutput = {
  __typename?: 'AddBundleProductsToCartOutput';
  cart: Cart;
};

export type AddConfigurableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<ConfigurableProductCartItemInput>>;
};

export type AddConfigurableProductsToCartOutput = {
  __typename?: 'AddConfigurableProductsToCartOutput';
  cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<DownloadableProductCartItemInput>>;
};

export type AddDownloadableProductsToCartOutput = {
  __typename?: 'AddDownloadableProductsToCartOutput';
  cart: Cart;
};

export type AddProductsToCartOutput = {
  __typename?: 'AddProductsToCartOutput';
  /** The cart after products have been added */
  cart: Cart;
  /** An error encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
};

/** Contains the customer's wish list and any errors encountered */
export type AddProductsToWishlistOutput = {
  __typename?: 'AddProductsToWishlistOutput';
  /** An array of errors encountered while adding products to a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
};

export type AddSimpleProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<SimpleProductCartItemInput>>;
};

export type AddSimpleProductsToCartOutput = {
  __typename?: 'AddSimpleProductsToCartOutput';
  cart: Cart;
};

export type AddVirtualProductsToCartInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<VirtualProductCartItemInput>>;
};

export type AddVirtualProductsToCartOutput = {
  __typename?: 'AddVirtualProductsToCartOutput';
  cart: Cart;
};

/** A bucket that contains information for each filterable option (such as price, category ID, and custom attributes). */
export type Aggregation = {
  __typename?: 'Aggregation';
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
};

export type AggregationOption = AggregationOptionInterface & {
  __typename?: 'AggregationOption';
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type AggregationOptionInterface = {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
};

export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  code: Scalars['String'];
};

export type ApplyCouponToCartInput = {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
  __typename?: 'ApplyCouponToCartOutput';
  cart: Cart;
};

/** AreaInput defines the parameters which will be used for filter by specified location. */
export type AreaInput = {
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
};

export type Assets = {
  __typename?: 'Assets';
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']>;
};

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export type Attribute = {
  __typename?: 'Attribute';
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute */
  input_type?: Maybe<Scalars['String']>;
};

/** AttributeInput specifies the attribute_code and entity_type to search */
export type AttributeInput = {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: InputMaybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: InputMaybe<Scalars['String']>;
};

/** Attribute option. */
export type AttributeOption = {
  __typename?: 'AttributeOption';
  /** Attribute option label. */
  label?: Maybe<Scalars['String']>;
  /** Attribute option value. */
  value?: Maybe<Scalars['String']>;
};

export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The payment method title. */
  title: Scalars['String'];
};

export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  amount: Money;
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_code?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Money;
  price_incl_tax: Money;
};

export type BillingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  /** Set billing address same as shipping */
  same_as_shipping?: InputMaybe<Scalars['Boolean']>;
  /** Deprecated: use `same_as_shipping` field instead */
  use_for_shipping?: InputMaybe<Scalars['Boolean']>;
};

export type BillingCartAddress = CartAddressInterface & {
  __typename?: 'BillingCartAddress';
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address */
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type BraintreeCcVaultInput = {
  device_data?: InputMaybe<Scalars['String']>;
  public_hash: Scalars['String'];
};

export type BraintreeInput = {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. Should be specified only in a case if Kount (advanced fraud protection) is enabled for Braintree payment integration. */
  device_data?: InputMaybe<Scalars['String']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String'];
};

/** Breadcrumb item. */
export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /** Category ID. */
  category_id?: Maybe<Scalars['Int']>;
  /** Category level. */
  category_level?: Maybe<Scalars['Int']>;
  /** Category name. */
  category_name?: Maybe<Scalars['String']>;
  /** Category URL key. */
  category_url_key?: Maybe<Scalars['String']>;
  /** Category URL path. */
  category_url_path?: Maybe<Scalars['String']>;
};

export type BundleCartItem = CartItemInterface & {
  __typename?: 'BundleCartItem';
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type BundleCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'BundleCreditMemoItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the credit memo item, used for API purposes */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export type BundleInvoiceItem = InvoiceItemInterface & {
  __typename?: 'BundleInvoiceItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the invoice item */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** BundleItem defines an individual item in a bundle product. */
export type BundleItem = {
  __typename?: 'BundleItem';
  /** An ID assigned to each type of item in a bundle product. */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** he relative position of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>;
};

/** BundleItemOption defines characteristics and options for a specific bundle item. */
export type BundleItemOption = {
  __typename?: 'BundleItemOption';
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  /** The ID assigned to the bundled item option. */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated The `qty` is deprecated. Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /** Indicates the quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

export type BundleOptionInput = {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<InputMaybe<Scalars['String']>>;
};

export type BundleOrderItem = OrderItemInterface & {
  __typename?: 'BundleOrderItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique identifier of the order item */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** BundleProduct defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & {
  __typename?: 'BundleProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamic SK. */
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** BundleProduct defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type BundleProductCartItemInput = {
  bundle_options: Array<InputMaybe<BundleOptionInput>>;
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

export type BundleShipmentItem = ShipmentItemInterface & {
  __typename?: 'BundleShipmentItem';
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Shipment item unique identifier */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

export type Cart = {
  __typename?: 'Cart';
  /**
   * An array of coupons that have been applied to the cart
   * @deprecated Use applied_coupons instead
   */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** Available payment methods */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  billing_address?: Maybe<BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The ID of the cart. */
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  prices?: Maybe<CartPrices>;
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
};

export type CartAddressCountry = {
  __typename?: 'CartAddressCountry';
  code: Scalars['String'];
  label: Scalars['String'];
};

export type CartAddressInput = {
  city: Scalars['String'];
  company?: InputMaybe<Scalars['String']>;
  country_code: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  region_id?: InputMaybe<Scalars['Int']>;
  /** Determines whether to save the address in the customer's address book. The default value is true */
  save_in_address_book?: InputMaybe<Scalars['Boolean']>;
  street: Array<InputMaybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressInterface = {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

export type CartAddressRegion = {
  __typename?: 'CartAddressRegion';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
};

export type CartDiscount = {
  __typename?: 'CartDiscount';
  amount: Money;
  label: Array<Maybe<Scalars['String']>>;
};

export type CartItemInput = {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For child products, the SKU of its parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
  /** The selected options for the base product, such as color or size */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sku: Scalars['String'];
};

export type CartItemInterface = {
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

export type CartItemPrices = {
  __typename?: 'CartItemPrices';
  /** An array of discounts to be applied to the cart item */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  price: Money;
  row_total: Money;
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item */
  total_item_discount?: Maybe<Money>;
};

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export type CartItemQuantity = {
  __typename?: 'CartItemQuantity';
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  cart_item_id: Scalars['Int'];
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  quantity: Scalars['Float'];
};

export type CartItemSelectedOptionValuePrice = {
  __typename?: 'CartItemSelectedOptionValuePrice';
  type: PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
};

export type CartItemUpdateInput = {
  cart_item_id: Scalars['Int'];
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: InputMaybe<GiftMessageInput>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type CartPrices = {
  __typename?: 'CartPrices';
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead  */
  discount?: Maybe<CartDiscount>;
  /** An array of applied discounts */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  grand_total?: Maybe<Money>;
  subtotal_excluding_tax?: Maybe<Money>;
  subtotal_including_tax?: Maybe<Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
  __typename?: 'CartTaxItem';
  amount: Money;
  label: Scalars['String'];
};

/** An error encountered while adding an item to the the cart. */
export type CartUserInputError = {
  __typename?: 'CartUserInputError';
  /** Cart-specific error code */
  code: CartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum CartUserInputErrorType {
  /** @deprecated  */
  INSUFFICIENT_STOCK = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NOT_SALABLE = 'NOT_SALABLE',
  /** @deprecated  */
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  UNDEFINED = 'UNDEFINED'
}

export type Categories = {
  __typename?: 'Categories';
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Assets>>>;
  /** The payment method identifier */
  identifier: Scalars['String'];
  /** The payment method name */
  name: Scalars['String'];
};

/** CategoryFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
  /** Filter by category ID that uniquely identifies the category. */
  ids?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: InputMaybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: InputMaybe<FilterEqualTypeInput>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /** Timestamp indicating when the category was created. */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /** An ID that uniquely identifies the category. */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Timestamp indicating when the category was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** The category products object returned in the Category query. */
export type CategoryProducts = {
  __typename?: 'CategoryProducts';
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};

/** A collection of CategoryTree objects and pagination information. */
export type CategoryResult = {
  __typename?: 'CategoryResult';
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
};

/** Category Tree implementation. */
export type CategoryTree = CategoryInterface & {
  __typename?: 'CategoryTree';
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** Child categories tree. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /** Timestamp indicating when the category was created. */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /** An ID that uniquely identifies the category. */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** Timestamp indicating when the category was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
};


/** Category Tree implementation. */
export type CategoryTreeProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};

/** Defines all Checkout Agreement information */
export type CheckoutAgreement = {
  __typename?: 'CheckoutAgreement';
  /** Checkout Agreement identifier */
  agreement_id: Scalars['Int'];
  /** Checkout Agreement checkbox text */
  checkbox_text: Scalars['String'];
  /** Checkout Agreement content */
  content: Scalars['String'];
  /** Checkout Agreement content height */
  content_height?: Maybe<Scalars['String']>;
  /** Is Checkout Agreement content in HTML format */
  is_html: Scalars['Boolean'];
  mode: CheckoutAgreementMode;
  /** Checkout Agreement name */
  name: Scalars['String'];
};

export enum CheckoutAgreementMode {
  /** @deprecated  */
  AUTO = 'AUTO',
  /** @deprecated  */
  MANUAL = 'MANUAL'
}

/** An error encountered while adding an item the the cart. */
export type CheckoutUserInputError = {
  __typename?: 'CheckoutUserInputError';
  /** Checkout-specific error code */
  code: CheckoutUserInputErrorCodes;
  /** Localized error message */
  message: Scalars['String'];
  /** Path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']>>;
};

export enum CheckoutUserInputErrorCodes {
  /** @deprecated  */
  INSUFFICIENT_STOCK = 'INSUFFICIENT_STOCK',
  /** @deprecated  */
  NOT_SALABLE = 'NOT_SALABLE',
  /** @deprecated  */
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  REORDER_NOT_AVAILABLE = 'REORDER_NOT_AVAILABLE',
  /** @deprecated  */
  UNDEFINED = 'UNDEFINED'
}

/** CMS block defines all CMS block information */
export type CmsBlock = {
  __typename?: 'CmsBlock';
  /** CMS block content */
  content?: Maybe<Scalars['String']>;
  /** CMS block identifier */
  identifier?: Maybe<Scalars['String']>;
  /** CMS block title */
  title?: Maybe<Scalars['String']>;
};

/** CMS blocks information */
export type CmsBlocks = {
  __typename?: 'CmsBlocks';
  /** An array of CMS blocks */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** CMS page defines all CMS page information */
export type CmsPage = {
  __typename?: 'CmsPage';
  /** CMS page content */
  content?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Identifier of the CMS page */
  identifier?: Maybe<Scalars['String']>;
  /** CMS page meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** CMS page meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** CMS page meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  page_layout?: Maybe<Scalars['String']>;
  /** CMS page title */
  title?: Maybe<Scalars['String']>;
  /** URL key of CMS page */
  url_key?: Maybe<Scalars['String']>;
};

export type CodilarBannerSlider = {
  __typename?: 'CodilarBannerSlider';
  banners?: Maybe<Array<Maybe<CodilarBannerSliderBanner>>>;
  is_enabled?: Maybe<Scalars['Int']>;
  is_show_title?: Maybe<Scalars['Int']>;
  slider_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CodilarBannerSliderBanner = {
  __typename?: 'CodilarBannerSliderBanner';
  alt_text?: Maybe<Scalars['String']>;
  is_enabled?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  resource_map?: Maybe<CodilarBannerSliderResourceMap>;
  resource_path?: Maybe<Scalars['String']>;
  resource_type?: Maybe<Scalars['String']>;
  slider_id?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CodilarBannerSliderResourceMap = {
  __typename?: 'CodilarBannerSliderResourceMap';
  max_width?: Maybe<Scalars['Int']>;
  min_width?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type ColorSwatchData = SwatchDataInterface & {
  __typename?: 'ColorSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type ComplexTextValue = {
  __typename?: 'ComplexTextValue';
  /** HTML format */
  html: Scalars['String'];
};

/** ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option */
export type ConfigurableAttributeOption = {
  __typename?: 'ConfigurableAttributeOption';
  /** The ID assigned to the attribute */
  code?: Maybe<Scalars['String']>;
  /** A string that describes the configurable attribute option */
  label?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
  /** A unique index number assigned to the configurable product option */
  value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
  __typename?: 'ConfigurableCartItem';
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & {
  __typename?: 'ConfigurableProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** An array of linked simple product items */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of variants of products */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ConfigurableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  /** Configurable product SKU. */
  parent_sku?: InputMaybe<Scalars['String']>;
  variant_sku?: InputMaybe<Scalars['String']>;
};

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export type ConfigurableProductOptions = {
  __typename?: 'ConfigurableProductOptions';
  /** A string that identifies the attribute */
  attribute_code?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_id_v2 instead
   */
  attribute_id?: Maybe<Scalars['String']>;
  /** The ID assigned to the attribute */
  attribute_id_v2?: Maybe<Scalars['Int']>;
  /** The configurable option ID number assigned by the system */
  id?: Maybe<Scalars['Int']>;
  /** A string that describes the configurable product option, which is displayed on the UI */
  label?: Maybe<Scalars['String']>;
  /** A number that indicates the order in which the attribute is displayed */
  position?: Maybe<Scalars['Int']>;
  /** This is the same as a product's id field */
  product_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is the default */
  use_default?: Maybe<Scalars['Boolean']>;
  /** An array that defines the value_index codes assigned to the configurable product */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export type ConfigurableProductOptionsValues = {
  __typename?: 'ConfigurableProductOptionsValues';
  /** The label of the product on the default store */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for configurable product option */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** Indicates whether to use the default_label */
  use_default_value?: Maybe<Scalars['Boolean']>;
  /** A unique index number assigned to the configurable product option */
  value_index?: Maybe<Scalars['Int']>;
};

/** An array containing all the simple product variants of a configurable product */
export type ConfigurableVariant = {
  __typename?: 'ConfigurableVariant';
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  product?: Maybe<SimpleProduct>;
};

export type Country = {
  __typename?: 'Country';
  available_regions?: Maybe<Array<Maybe<Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
};

/** The list of countries codes */
export enum CountryCodeEnum {
  /**
   * Andorra
   * @deprecated
   */
  AD = 'AD',
  /**
   * United Arab Emirates
   * @deprecated
   */
  AE = 'AE',
  /**
   * Afghanistan
   * @deprecated
   */
  AF = 'AF',
  /**
   * Antigua & Barbuda
   * @deprecated
   */
  AG = 'AG',
  /**
   * Anguilla
   * @deprecated
   */
  AI = 'AI',
  /**
   * Albania
   * @deprecated
   */
  AL = 'AL',
  /**
   * Armenia
   * @deprecated
   */
  AM = 'AM',
  /**
   * Netherlands Antilles
   * @deprecated
   */
  AN = 'AN',
  /**
   * Angola
   * @deprecated
   */
  AO = 'AO',
  /**
   * Antarctica
   * @deprecated
   */
  AQ = 'AQ',
  /**
   * Argentina
   * @deprecated
   */
  AR = 'AR',
  /**
   * American Samoa
   * @deprecated
   */
  AS = 'AS',
  /**
   * Austria
   * @deprecated
   */
  AT = 'AT',
  /**
   * Australia
   * @deprecated
   */
  AU = 'AU',
  /**
   * Aruba
   * @deprecated
   */
  AW = 'AW',
  /**
   * Åland Islands
   * @deprecated
   */
  AX = 'AX',
  /**
   * Azerbaijan
   * @deprecated
   */
  AZ = 'AZ',
  /**
   * Bosnia & Herzegovina
   * @deprecated
   */
  BA = 'BA',
  /**
   * Barbados
   * @deprecated
   */
  BB = 'BB',
  /**
   * Bangladesh
   * @deprecated
   */
  BD = 'BD',
  /**
   * Belgium
   * @deprecated
   */
  BE = 'BE',
  /**
   * Burkina Faso
   * @deprecated
   */
  BF = 'BF',
  /**
   * Bulgaria
   * @deprecated
   */
  BG = 'BG',
  /**
   * Bahrain
   * @deprecated
   */
  BH = 'BH',
  /**
   * Burundi
   * @deprecated
   */
  BI = 'BI',
  /**
   * Benin
   * @deprecated
   */
  BJ = 'BJ',
  /**
   * St. Barthélemy
   * @deprecated
   */
  BL = 'BL',
  /**
   * Bermuda
   * @deprecated
   */
  BM = 'BM',
  /**
   * Brunei
   * @deprecated
   */
  BN = 'BN',
  /**
   * Bolivia
   * @deprecated
   */
  BO = 'BO',
  /**
   * Brazil
   * @deprecated
   */
  BR = 'BR',
  /**
   * Bahamas
   * @deprecated
   */
  BS = 'BS',
  /**
   * Bhutan
   * @deprecated
   */
  BT = 'BT',
  /**
   * Bouvet Island
   * @deprecated
   */
  BV = 'BV',
  /**
   * Botswana
   * @deprecated
   */
  BW = 'BW',
  /**
   * Belarus
   * @deprecated
   */
  BY = 'BY',
  /**
   * Belize
   * @deprecated
   */
  BZ = 'BZ',
  /**
   * Canada
   * @deprecated
   */
  CA = 'CA',
  /**
   * Cocos (Keeling) Islands
   * @deprecated
   */
  CC = 'CC',
  /**
   * Congo-Kinshasa
   * @deprecated
   */
  CD = 'CD',
  /**
   * Central African Republic
   * @deprecated
   */
  CF = 'CF',
  /**
   * Congo-Brazzaville
   * @deprecated
   */
  CG = 'CG',
  /**
   * Switzerland
   * @deprecated
   */
  CH = 'CH',
  /**
   * Côte d’Ivoire
   * @deprecated
   */
  CI = 'CI',
  /**
   * Cook Islands
   * @deprecated
   */
  CK = 'CK',
  /**
   * Chile
   * @deprecated
   */
  CL = 'CL',
  /**
   * Cameroon
   * @deprecated
   */
  CM = 'CM',
  /**
   * China
   * @deprecated
   */
  CN = 'CN',
  /**
   * Colombia
   * @deprecated
   */
  CO = 'CO',
  /**
   * Costa Rica
   * @deprecated
   */
  CR = 'CR',
  /**
   * Cuba
   * @deprecated
   */
  CU = 'CU',
  /**
   * Cape Verde
   * @deprecated
   */
  CV = 'CV',
  /**
   * Christmas Island
   * @deprecated
   */
  CX = 'CX',
  /**
   * Cyprus
   * @deprecated
   */
  CY = 'CY',
  /**
   * Czech Republic
   * @deprecated
   */
  CZ = 'CZ',
  /**
   * Germany
   * @deprecated
   */
  DE = 'DE',
  /**
   * Djibouti
   * @deprecated
   */
  DJ = 'DJ',
  /**
   * Denmark
   * @deprecated
   */
  DK = 'DK',
  /**
   * Dominica
   * @deprecated
   */
  DM = 'DM',
  /**
   * Dominican Republic
   * @deprecated
   */
  DO = 'DO',
  /**
   * Algeria
   * @deprecated
   */
  DZ = 'DZ',
  /**
   * Ecuador
   * @deprecated
   */
  EC = 'EC',
  /**
   * Estonia
   * @deprecated
   */
  EE = 'EE',
  /**
   * Egypt
   * @deprecated
   */
  EG = 'EG',
  /**
   * Western Sahara
   * @deprecated
   */
  EH = 'EH',
  /**
   * Eritrea
   * @deprecated
   */
  ER = 'ER',
  /**
   * Spain
   * @deprecated
   */
  ES = 'ES',
  /**
   * Ethiopia
   * @deprecated
   */
  ET = 'ET',
  /**
   * Finland
   * @deprecated
   */
  FI = 'FI',
  /**
   * Fiji
   * @deprecated
   */
  FJ = 'FJ',
  /**
   * Falkland Islands
   * @deprecated
   */
  FK = 'FK',
  /**
   * Micronesia
   * @deprecated
   */
  FM = 'FM',
  /**
   * Faroe Islands
   * @deprecated
   */
  FO = 'FO',
  /**
   * France
   * @deprecated
   */
  FR = 'FR',
  /**
   * Gabon
   * @deprecated
   */
  GA = 'GA',
  /**
   * United Kingdom
   * @deprecated
   */
  GB = 'GB',
  /**
   * Grenada
   * @deprecated
   */
  GD = 'GD',
  /**
   * Georgia
   * @deprecated
   */
  GE = 'GE',
  /**
   * French Guiana
   * @deprecated
   */
  GF = 'GF',
  /**
   * Guernsey
   * @deprecated
   */
  GG = 'GG',
  /**
   * Ghana
   * @deprecated
   */
  GH = 'GH',
  /**
   * Gibraltar
   * @deprecated
   */
  GI = 'GI',
  /**
   * Greenland
   * @deprecated
   */
  GL = 'GL',
  /**
   * Gambia
   * @deprecated
   */
  GM = 'GM',
  /**
   * Guinea
   * @deprecated
   */
  GN = 'GN',
  /**
   * Guadeloupe
   * @deprecated
   */
  GP = 'GP',
  /**
   * Equatorial Guinea
   * @deprecated
   */
  GQ = 'GQ',
  /**
   * Greece
   * @deprecated
   */
  GR = 'GR',
  /**
   * South Georgia & South Sandwich Islands
   * @deprecated
   */
  GS = 'GS',
  /**
   * Guatemala
   * @deprecated
   */
  GT = 'GT',
  /**
   * Guam
   * @deprecated
   */
  GU = 'GU',
  /**
   * Guinea-Bissau
   * @deprecated
   */
  GW = 'GW',
  /**
   * Guyana
   * @deprecated
   */
  GY = 'GY',
  /**
   * Hong Kong SAR China
   * @deprecated
   */
  HK = 'HK',
  /**
   * Heard &amp; McDonald Islands
   * @deprecated
   */
  HM = 'HM',
  /**
   * Honduras
   * @deprecated
   */
  HN = 'HN',
  /**
   * Croatia
   * @deprecated
   */
  HR = 'HR',
  /**
   * Haiti
   * @deprecated
   */
  HT = 'HT',
  /**
   * Hungary
   * @deprecated
   */
  HU = 'HU',
  /**
   * Indonesia
   * @deprecated
   */
  ID = 'ID',
  /**
   * Ireland
   * @deprecated
   */
  IE = 'IE',
  /**
   * Israel
   * @deprecated
   */
  IL = 'IL',
  /**
   * Isle of Man
   * @deprecated
   */
  IM = 'IM',
  /**
   * India
   * @deprecated
   */
  IN = 'IN',
  /**
   * British Indian Ocean Territory
   * @deprecated
   */
  IO = 'IO',
  /**
   * Iraq
   * @deprecated
   */
  IQ = 'IQ',
  /**
   * Iran
   * @deprecated
   */
  IR = 'IR',
  /**
   * Iceland
   * @deprecated
   */
  IS = 'IS',
  /**
   * Italy
   * @deprecated
   */
  IT = 'IT',
  /**
   * Jersey
   * @deprecated
   */
  JE = 'JE',
  /**
   * Jamaica
   * @deprecated
   */
  JM = 'JM',
  /**
   * Jordan
   * @deprecated
   */
  JO = 'JO',
  /**
   * Japan
   * @deprecated
   */
  JP = 'JP',
  /**
   * Kenya
   * @deprecated
   */
  KE = 'KE',
  /**
   * Kyrgyzstan
   * @deprecated
   */
  KG = 'KG',
  /**
   * Cambodia
   * @deprecated
   */
  KH = 'KH',
  /**
   * Kiribati
   * @deprecated
   */
  KI = 'KI',
  /**
   * Comoros
   * @deprecated
   */
  KM = 'KM',
  /**
   * St. Kitts & Nevis
   * @deprecated
   */
  KN = 'KN',
  /**
   * North Korea
   * @deprecated
   */
  KP = 'KP',
  /**
   * South Korea
   * @deprecated
   */
  KR = 'KR',
  /**
   * Kuwait
   * @deprecated
   */
  KW = 'KW',
  /**
   * Cayman Islands
   * @deprecated
   */
  KY = 'KY',
  /**
   * Kazakhstan
   * @deprecated
   */
  KZ = 'KZ',
  /**
   * Laos
   * @deprecated
   */
  LA = 'LA',
  /**
   * Lebanon
   * @deprecated
   */
  LB = 'LB',
  /**
   * St. Lucia
   * @deprecated
   */
  LC = 'LC',
  /**
   * Liechtenstein
   * @deprecated
   */
  LI = 'LI',
  /**
   * Sri Lanka
   * @deprecated
   */
  LK = 'LK',
  /**
   * Liberia
   * @deprecated
   */
  LR = 'LR',
  /**
   * Lesotho
   * @deprecated
   */
  LS = 'LS',
  /**
   * Lithuania
   * @deprecated
   */
  LT = 'LT',
  /**
   * Luxembourg
   * @deprecated
   */
  LU = 'LU',
  /**
   * Latvia
   * @deprecated
   */
  LV = 'LV',
  /**
   * Libya
   * @deprecated
   */
  LY = 'LY',
  /**
   * Morocco
   * @deprecated
   */
  MA = 'MA',
  /**
   * Monaco
   * @deprecated
   */
  MC = 'MC',
  /**
   * Moldova
   * @deprecated
   */
  MD = 'MD',
  /**
   * Montenegro
   * @deprecated
   */
  ME = 'ME',
  /**
   * St. Martin
   * @deprecated
   */
  MF = 'MF',
  /**
   * Madagascar
   * @deprecated
   */
  MG = 'MG',
  /**
   * Marshall Islands
   * @deprecated
   */
  MH = 'MH',
  /**
   * Macedonia
   * @deprecated
   */
  MK = 'MK',
  /**
   * Mali
   * @deprecated
   */
  ML = 'ML',
  /**
   * Myanmar (Burma)
   * @deprecated
   */
  MM = 'MM',
  /**
   * Mongolia
   * @deprecated
   */
  MN = 'MN',
  /**
   * Macau SAR China
   * @deprecated
   */
  MO = 'MO',
  /**
   * Northern Mariana Islands
   * @deprecated
   */
  MP = 'MP',
  /**
   * Martinique
   * @deprecated
   */
  MQ = 'MQ',
  /**
   * Mauritania
   * @deprecated
   */
  MR = 'MR',
  /**
   * Montserrat
   * @deprecated
   */
  MS = 'MS',
  /**
   * Malta
   * @deprecated
   */
  MT = 'MT',
  /**
   * Mauritius
   * @deprecated
   */
  MU = 'MU',
  /**
   * Maldives
   * @deprecated
   */
  MV = 'MV',
  /**
   * Malawi
   * @deprecated
   */
  MW = 'MW',
  /**
   * Mexico
   * @deprecated
   */
  MX = 'MX',
  /**
   * Malaysia
   * @deprecated
   */
  MY = 'MY',
  /**
   * Mozambique
   * @deprecated
   */
  MZ = 'MZ',
  /**
   * Namibia
   * @deprecated
   */
  NA = 'NA',
  /**
   * New Caledonia
   * @deprecated
   */
  NC = 'NC',
  /**
   * Niger
   * @deprecated
   */
  NE = 'NE',
  /**
   * Norfolk Island
   * @deprecated
   */
  NF = 'NF',
  /**
   * Nigeria
   * @deprecated
   */
  NG = 'NG',
  /**
   * Nicaragua
   * @deprecated
   */
  NI = 'NI',
  /**
   * Netherlands
   * @deprecated
   */
  NL = 'NL',
  /**
   * Norway
   * @deprecated
   */
  NO = 'NO',
  /**
   * Nepal
   * @deprecated
   */
  NP = 'NP',
  /**
   * Nauru
   * @deprecated
   */
  NR = 'NR',
  /**
   * Niue
   * @deprecated
   */
  NU = 'NU',
  /**
   * New Zealand
   * @deprecated
   */
  NZ = 'NZ',
  /**
   * Oman
   * @deprecated
   */
  OM = 'OM',
  /**
   * Panama
   * @deprecated
   */
  PA = 'PA',
  /**
   * Peru
   * @deprecated
   */
  PE = 'PE',
  /**
   * French Polynesia
   * @deprecated
   */
  PF = 'PF',
  /**
   * Papua New Guinea
   * @deprecated
   */
  PG = 'PG',
  /**
   * Philippines
   * @deprecated
   */
  PH = 'PH',
  /**
   * Pakistan
   * @deprecated
   */
  PK = 'PK',
  /**
   * Poland
   * @deprecated
   */
  PL = 'PL',
  /**
   * St. Pierre & Miquelon
   * @deprecated
   */
  PM = 'PM',
  /**
   * Pitcairn Islands
   * @deprecated
   */
  PN = 'PN',
  /**
   * Palestinian Territories
   * @deprecated
   */
  PS = 'PS',
  /**
   * Portugal
   * @deprecated
   */
  PT = 'PT',
  /**
   * Palau
   * @deprecated
   */
  PW = 'PW',
  /**
   * Paraguay
   * @deprecated
   */
  PY = 'PY',
  /**
   * Qatar
   * @deprecated
   */
  QA = 'QA',
  /**
   * Réunion
   * @deprecated
   */
  RE = 'RE',
  /**
   * Romania
   * @deprecated
   */
  RO = 'RO',
  /**
   * Serbia
   * @deprecated
   */
  RS = 'RS',
  /**
   * Russia
   * @deprecated
   */
  RU = 'RU',
  /**
   * Rwanda
   * @deprecated
   */
  RW = 'RW',
  /**
   * Saudi Arabia
   * @deprecated
   */
  SA = 'SA',
  /**
   * Solomon Islands
   * @deprecated
   */
  SB = 'SB',
  /**
   * Seychelles
   * @deprecated
   */
  SC = 'SC',
  /**
   * Sudan
   * @deprecated
   */
  SD = 'SD',
  /**
   * Sweden
   * @deprecated
   */
  SE = 'SE',
  /**
   * Singapore
   * @deprecated
   */
  SG = 'SG',
  /**
   * St. Helena
   * @deprecated
   */
  SH = 'SH',
  /**
   * Slovenia
   * @deprecated
   */
  SI = 'SI',
  /**
   * Svalbard & Jan Mayen
   * @deprecated
   */
  SJ = 'SJ',
  /**
   * Slovakia
   * @deprecated
   */
  SK = 'SK',
  /**
   * Sierra Leone
   * @deprecated
   */
  SL = 'SL',
  /**
   * San Marino
   * @deprecated
   */
  SM = 'SM',
  /**
   * Senegal
   * @deprecated
   */
  SN = 'SN',
  /**
   * Somalia
   * @deprecated
   */
  SO = 'SO',
  /**
   * Suriname
   * @deprecated
   */
  SR = 'SR',
  /**
   * São Tomé & Príncipe
   * @deprecated
   */
  ST = 'ST',
  /**
   * El Salvador
   * @deprecated
   */
  SV = 'SV',
  /**
   * Syria
   * @deprecated
   */
  SY = 'SY',
  /**
   * Swaziland
   * @deprecated
   */
  SZ = 'SZ',
  /**
   * Turks & Caicos Islands
   * @deprecated
   */
  TC = 'TC',
  /**
   * Chad
   * @deprecated
   */
  TD = 'TD',
  /**
   * French Southern Territories
   * @deprecated
   */
  TF = 'TF',
  /**
   * Togo
   * @deprecated
   */
  TG = 'TG',
  /**
   * Thailand
   * @deprecated
   */
  TH = 'TH',
  /**
   * Tajikistan
   * @deprecated
   */
  TJ = 'TJ',
  /**
   * Tokelau
   * @deprecated
   */
  TK = 'TK',
  /**
   * Timor-Leste
   * @deprecated
   */
  TL = 'TL',
  /**
   * Turkmenistan
   * @deprecated
   */
  TM = 'TM',
  /**
   * Tunisia
   * @deprecated
   */
  TN = 'TN',
  /**
   * Tonga
   * @deprecated
   */
  TO = 'TO',
  /**
   * Turkey
   * @deprecated
   */
  TR = 'TR',
  /**
   * Trinidad & Tobago
   * @deprecated
   */
  TT = 'TT',
  /**
   * Tuvalu
   * @deprecated
   */
  TV = 'TV',
  /**
   * Taiwan
   * @deprecated
   */
  TW = 'TW',
  /**
   * Tanzania
   * @deprecated
   */
  TZ = 'TZ',
  /**
   * Ukraine
   * @deprecated
   */
  UA = 'UA',
  /**
   * Uganda
   * @deprecated
   */
  UG = 'UG',
  /**
   * U.S. Outlying Islands
   * @deprecated
   */
  UM = 'UM',
  /**
   * United States
   * @deprecated
   */
  US = 'US',
  /**
   * Uruguay
   * @deprecated
   */
  UY = 'UY',
  /**
   * Uzbekistan
   * @deprecated
   */
  UZ = 'UZ',
  /**
   * Vatican City
   * @deprecated
   */
  VA = 'VA',
  /**
   * St. Vincent & Grenadines
   * @deprecated
   */
  VC = 'VC',
  /**
   * Venezuela
   * @deprecated
   */
  VE = 'VE',
  /**
   * British Virgin Islands
   * @deprecated
   */
  VG = 'VG',
  /**
   * U.S. Virgin Islands
   * @deprecated
   */
  VI = 'VI',
  /**
   * Vietnam
   * @deprecated
   */
  VN = 'VN',
  /**
   * Vanuatu
   * @deprecated
   */
  VU = 'VU',
  /**
   * Wallis & Futuna
   * @deprecated
   */
  WF = 'WF',
  /**
   * Samoa
   * @deprecated
   */
  WS = 'WS',
  /**
   * Yemen
   * @deprecated
   */
  YE = 'YE',
  /**
   * Mayotte
   * @deprecated
   */
  YT = 'YT',
  /**
   * South Africa
   * @deprecated
   */
  ZA = 'ZA',
  /**
   * Zambia
   * @deprecated
   */
  ZM = 'ZM',
  /**
   * Zimbabwe
   * @deprecated
   */
  ZW = 'ZW'
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
  __typename?: 'CreatePayflowProTokenOutput';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

export type CreateProductReviewInput = {
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Ratings details by category. e.g price: 5, quality: 4 etc */
  ratings: Array<InputMaybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product */
  sku: Scalars['String'];
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type CreateProductReviewOutput = {
  __typename?: 'CreateProductReviewOutput';
  /** Contains the completed product review */
  review: ProductReview;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export type CreditCardDetailsInput = {
  /** Credit card expiration month */
  cc_exp_month: Scalars['Int'];
  /** Credit card expiration year */
  cc_exp_year: Scalars['Int'];
  /** Last 4 digits of the credit card */
  cc_last_4: Scalars['Int'];
  /** Credit card type */
  cc_type: Scalars['String'];
};

/** Credit memo details */
export type CreditMemo = {
  __typename?: 'CreditMemo';
  /** Comments on the credit memo */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID of the credit memo, used for API purposes */
  id: Scalars['ID'];
  /** An array containing details about refunded items */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number */
  number: Scalars['String'];
  /** Contains details about the total refunded amount */
  total?: Maybe<CreditMemoTotal>;
};

export type CreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'CreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the credit memo item, used for API purposes */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo item details */
export type CreditMemoItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the credit memo item, used for API purposes */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

/** Credit memo price details */
export type CreditMemoTotal = {
  __typename?: 'CreditMemoTotal';
  /** An adjustment manually applied to the order */
  adjustment: Money;
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the credit memo */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the credit memo */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The credit memo tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo */
  total_tax: Money;
};

export type Currency = {
  __typename?: 'Currency';
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_currency_symbol?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_symbol`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

/** The list of available currency codes */
export enum CurrencyEnum {
  /** @deprecated  */
  AED = 'AED',
  /** @deprecated  */
  AFN = 'AFN',
  /** @deprecated  */
  ALL = 'ALL',
  /** @deprecated  */
  AMD = 'AMD',
  /** @deprecated  */
  ANG = 'ANG',
  /** @deprecated  */
  AOA = 'AOA',
  /** @deprecated  */
  ARS = 'ARS',
  /** @deprecated  */
  AUD = 'AUD',
  /** @deprecated  */
  AWG = 'AWG',
  /** @deprecated  */
  AZM = 'AZM',
  /** @deprecated  */
  AZN = 'AZN',
  /** @deprecated  */
  BAM = 'BAM',
  /** @deprecated  */
  BBD = 'BBD',
  /** @deprecated  */
  BDT = 'BDT',
  /** @deprecated  */
  BGN = 'BGN',
  /** @deprecated  */
  BHD = 'BHD',
  /** @deprecated  */
  BIF = 'BIF',
  /** @deprecated  */
  BMD = 'BMD',
  /** @deprecated  */
  BND = 'BND',
  /** @deprecated  */
  BOB = 'BOB',
  /** @deprecated  */
  BRL = 'BRL',
  /** @deprecated  */
  BSD = 'BSD',
  /** @deprecated  */
  BTN = 'BTN',
  /** @deprecated  */
  BUK = 'BUK',
  /** @deprecated  */
  BWP = 'BWP',
  /** @deprecated  */
  BYN = 'BYN',
  /** @deprecated  */
  BZD = 'BZD',
  /** @deprecated  */
  CAD = 'CAD',
  /** @deprecated  */
  CDF = 'CDF',
  /** @deprecated  */
  CHE = 'CHE',
  /** @deprecated  */
  CHF = 'CHF',
  /** @deprecated  */
  CHW = 'CHW',
  /** @deprecated  */
  CLP = 'CLP',
  /** @deprecated  */
  CNY = 'CNY',
  /** @deprecated  */
  COP = 'COP',
  /** @deprecated  */
  CRC = 'CRC',
  /** @deprecated  */
  CUP = 'CUP',
  /** @deprecated  */
  CVE = 'CVE',
  /** @deprecated  */
  CZK = 'CZK',
  /** @deprecated  */
  DJF = 'DJF',
  /** @deprecated  */
  DKK = 'DKK',
  /** @deprecated  */
  DOP = 'DOP',
  /** @deprecated  */
  DZD = 'DZD',
  /** @deprecated  */
  EEK = 'EEK',
  /** @deprecated  */
  EGP = 'EGP',
  /** @deprecated  */
  ERN = 'ERN',
  /** @deprecated  */
  ETB = 'ETB',
  /** @deprecated  */
  EUR = 'EUR',
  /** @deprecated  */
  FJD = 'FJD',
  /** @deprecated  */
  FKP = 'FKP',
  /** @deprecated  */
  GBP = 'GBP',
  /** @deprecated  */
  GEK = 'GEK',
  /** @deprecated  */
  GEL = 'GEL',
  /** @deprecated  */
  GHS = 'GHS',
  /** @deprecated  */
  GIP = 'GIP',
  /** @deprecated  */
  GMD = 'GMD',
  /** @deprecated  */
  GNF = 'GNF',
  /** @deprecated  */
  GQE = 'GQE',
  /** @deprecated  */
  GTQ = 'GTQ',
  /** @deprecated  */
  GYD = 'GYD',
  /** @deprecated  */
  HKD = 'HKD',
  /** @deprecated  */
  HNL = 'HNL',
  /** @deprecated  */
  HRK = 'HRK',
  /** @deprecated  */
  HTG = 'HTG',
  /** @deprecated  */
  HUF = 'HUF',
  /** @deprecated  */
  IDR = 'IDR',
  /** @deprecated  */
  ILS = 'ILS',
  /** @deprecated  */
  INR = 'INR',
  /** @deprecated  */
  IQD = 'IQD',
  /** @deprecated  */
  IRR = 'IRR',
  /** @deprecated  */
  ISK = 'ISK',
  /** @deprecated  */
  JMD = 'JMD',
  /** @deprecated  */
  JOD = 'JOD',
  /** @deprecated  */
  JPY = 'JPY',
  /** @deprecated  */
  KES = 'KES',
  /** @deprecated  */
  KGS = 'KGS',
  /** @deprecated  */
  KHR = 'KHR',
  /** @deprecated  */
  KMF = 'KMF',
  /** @deprecated  */
  KPW = 'KPW',
  /** @deprecated  */
  KRW = 'KRW',
  /** @deprecated  */
  KWD = 'KWD',
  /** @deprecated  */
  KYD = 'KYD',
  /** @deprecated  */
  KZT = 'KZT',
  /** @deprecated  */
  LAK = 'LAK',
  /** @deprecated  */
  LBP = 'LBP',
  /** @deprecated  */
  LKR = 'LKR',
  /** @deprecated  */
  LRD = 'LRD',
  /** @deprecated  */
  LSL = 'LSL',
  /** @deprecated  */
  LSM = 'LSM',
  /** @deprecated  */
  LTL = 'LTL',
  /** @deprecated  */
  LVL = 'LVL',
  /** @deprecated  */
  LYD = 'LYD',
  /** @deprecated  */
  MAD = 'MAD',
  /** @deprecated  */
  MDL = 'MDL',
  /** @deprecated  */
  MGA = 'MGA',
  /** @deprecated  */
  MKD = 'MKD',
  /** @deprecated  */
  MMK = 'MMK',
  /** @deprecated  */
  MNT = 'MNT',
  /** @deprecated  */
  MOP = 'MOP',
  /** @deprecated  */
  MRO = 'MRO',
  /** @deprecated  */
  MUR = 'MUR',
  /** @deprecated  */
  MVR = 'MVR',
  /** @deprecated  */
  MWK = 'MWK',
  /** @deprecated  */
  MXN = 'MXN',
  /** @deprecated  */
  MYR = 'MYR',
  /** @deprecated  */
  MZN = 'MZN',
  /** @deprecated  */
  NAD = 'NAD',
  /** @deprecated  */
  NGN = 'NGN',
  /** @deprecated  */
  NIC = 'NIC',
  /** @deprecated  */
  NOK = 'NOK',
  /** @deprecated  */
  NPR = 'NPR',
  /** @deprecated  */
  NZD = 'NZD',
  /** @deprecated  */
  OMR = 'OMR',
  /** @deprecated  */
  PAB = 'PAB',
  /** @deprecated  */
  PEN = 'PEN',
  /** @deprecated  */
  PGK = 'PGK',
  /** @deprecated  */
  PHP = 'PHP',
  /** @deprecated  */
  PKR = 'PKR',
  /** @deprecated  */
  PLN = 'PLN',
  /** @deprecated  */
  PYG = 'PYG',
  /** @deprecated  */
  QAR = 'QAR',
  /** @deprecated  */
  RHD = 'RHD',
  /** @deprecated  */
  ROL = 'ROL',
  /** @deprecated  */
  RON = 'RON',
  /** @deprecated  */
  RSD = 'RSD',
  /** @deprecated  */
  RUB = 'RUB',
  /** @deprecated  */
  RWF = 'RWF',
  /** @deprecated  */
  SAR = 'SAR',
  /** @deprecated  */
  SBD = 'SBD',
  /** @deprecated  */
  SCR = 'SCR',
  /** @deprecated  */
  SDG = 'SDG',
  /** @deprecated  */
  SEK = 'SEK',
  /** @deprecated  */
  SGD = 'SGD',
  /** @deprecated  */
  SHP = 'SHP',
  /** @deprecated  */
  SKK = 'SKK',
  /** @deprecated  */
  SLL = 'SLL',
  /** @deprecated  */
  SOS = 'SOS',
  /** @deprecated  */
  SRD = 'SRD',
  /** @deprecated  */
  STD = 'STD',
  /** @deprecated  */
  SVC = 'SVC',
  /** @deprecated  */
  SYP = 'SYP',
  /** @deprecated  */
  SZL = 'SZL',
  /** @deprecated  */
  THB = 'THB',
  /** @deprecated  */
  TJS = 'TJS',
  /** @deprecated  */
  TMM = 'TMM',
  /** @deprecated  */
  TND = 'TND',
  /** @deprecated  */
  TOP = 'TOP',
  /** @deprecated  */
  TRL = 'TRL',
  /** @deprecated  */
  TRY = 'TRY',
  /** @deprecated  */
  TTD = 'TTD',
  /** @deprecated  */
  TWD = 'TWD',
  /** @deprecated  */
  TZS = 'TZS',
  /** @deprecated  */
  UAH = 'UAH',
  /** @deprecated  */
  UGX = 'UGX',
  /** @deprecated  */
  USD = 'USD',
  /** @deprecated  */
  UYU = 'UYU',
  /** @deprecated  */
  UZS = 'UZS',
  /** @deprecated  */
  VEB = 'VEB',
  /** @deprecated  */
  VEF = 'VEF',
  /** @deprecated  */
  VND = 'VND',
  /** @deprecated  */
  VUV = 'VUV',
  /** @deprecated  */
  WST = 'WST',
  /** @deprecated  */
  XCD = 'XCD',
  /** @deprecated  */
  XOF = 'XOF',
  /** @deprecated  */
  XPF = 'XPF',
  /** @deprecated  */
  YER = 'YER',
  /** @deprecated  */
  YTL = 'YTL',
  /** @deprecated  */
  ZAR = 'ZAR',
  /** @deprecated  */
  ZMK = 'ZMK',
  /** @deprecated  */
  ZWD = 'ZWD'
}

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export type CustomAttributeMetadata = {
  __typename?: 'CustomAttributeMetadata';
  /** An array of attributes */
  items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Customer defines the customer name and address and other details */
export type Customer = {
  __typename?: 'Customer';
  /** An array containing the customer's shipping and billing addresses */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Timestamp indicating when the account was created */
  created_at?: Maybe<Scalars['String']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** The ID assigned to the billing address */
  default_billing?: Maybe<Scalars['String']>;
  /** The ID assigned to the shipping address */
  default_shipping?: Maybe<Scalars['String']>;
  /**
   * The customer's date of birth
   * @deprecated Use `date_of_birth` instead
   */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios */
  group_id?: Maybe<Scalars['Int']>;
  /**
   * The ID assigned to the customer
   * @deprecated id is not needed as part of Customer because on server side it can be identified based on customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Contains the customer's product reviews */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
  /** Contains the contents of a customer's wish lists */
  wishlist: Wishlist;
};


/** Customer defines the customer name and address and other details */
export type CustomerOrdersArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CustomerOrdersFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


/** Customer defines the customer name and address and other details */
export type CustomerReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into container */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated customer_id is not needed as part of CustomerAddress, address ID (id) is unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the address is the default billing address */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** Address extension attributes */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: Maybe<Scalars['String']>;
  /** The ID assigned to the address object */
  id?: Maybe<Scalars['Int']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
  /** An array of strings that define the street number and name */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttribute = {
  __typename?: 'CustomerAddressAttribute';
  /** Attribute code */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
  /** Attribute code */
  attribute_code: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

export type CustomerAddressInput = {
  /** The city or town */
  city?: InputMaybe<Scalars['String']>;
  /** The customer's company */
  company?: InputMaybe<Scalars['String']>;
  /** The customer's country */
  country_code?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: InputMaybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: InputMaybe<Array<InputMaybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address */
  default_billing?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: InputMaybe<Scalars['Boolean']>;
  /** The fax number */
  fax?: InputMaybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: InputMaybe<Scalars['String']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: InputMaybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: InputMaybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name */
  street?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The telephone number */
  telephone?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  vat_id?: InputMaybe<Scalars['String']>;
};

/** CustomerAddressRegion defines the customer's state or province */
export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
};

/** CustomerAddressRegionInput defines the customer's state or province */
export type CustomerAddressRegionInput = {
  /** The state or province name */
  region?: InputMaybe<Scalars['String']>;
  /** The address region code */
  region_code?: InputMaybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: InputMaybe<Scalars['Int']>;
};

export type CustomerCreateInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email: Scalars['String'];
  /** The customer's first name */
  firstname: Scalars['String'];
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname: Scalars['String'];
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

export type CustomerDownloadableProduct = {
  __typename?: 'CustomerDownloadableProduct';
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CustomerDownloadableProducts = {
  __typename?: 'CustomerDownloadableProducts';
  /** List of purchased downloadable items */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** The customer's password */
  password?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** Contains details about each of the customer's orders */
export type CustomerOrder = {
  __typename?: 'CustomerOrder';
  /** The billing address for the order */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the order_date attribute instead */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the totals.grand_total attribute instead */
  grand_total?: Maybe<Scalars['Float']>;
  /** Unique identifier for the order */
  id: Scalars['ID'];
  /** @deprecated Use the id attribute instead */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number */
  number: Scalars['String'];
  /** The date the order was placed */
  order_date: Scalars['String'];
  /** @deprecated Use the number attribute instead */
  order_number: Scalars['String'];
  /** Payment details for the order */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current status of the order */
  status: Scalars['String'];
  /** Contains details about the calculated totals for this order */
  total?: Maybe<OrderTotal>;
};

/** The collection of orders that match the conditions defined in the filter */
export type CustomerOrders = {
  __typename?: 'CustomerOrders';
  /** An array of customer orders */
  items: Array<Maybe<CustomerOrder>>;
  /** An object that includes the current_page, page_info, and page_size values specified in the query */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders */
  total_count?: Maybe<Scalars['Int']>;
};

/** Identifies the filter to use for filtering orders. */
export type CustomerOrdersFilterInput = {
  /** Filters by order number. */
  number?: InputMaybe<FilterStringTypeInput>;
};

export type CustomerOutput = {
  __typename?: 'CustomerOutput';
  customer: Customer;
};

export type CustomerPaymentTokens = {
  __typename?: 'CustomerPaymentTokens';
  /** An array of payment tokens */
  items: Array<Maybe<PaymentToken>>;
};

export type CustomerToken = {
  __typename?: 'CustomerToken';
  /** The customer token */
  token?: Maybe<Scalars['String']>;
};

export type CustomerUpdateInput = {
  /** The customer's date of birth */
  date_of_birth?: InputMaybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: InputMaybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: InputMaybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: InputMaybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: InputMaybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: InputMaybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: InputMaybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: InputMaybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: InputMaybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: InputMaybe<Scalars['String']>;
};

/** CustomizableAreaOption contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableAreaOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
};

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
  __typename?: 'CustomizableAreaValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableCheckbbixOption contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableCheckboxOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
  __typename?: 'CustomizableCheckboxValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableDateOption contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDateOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
};

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
  __typename?: 'CustomizableDateValue';
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableDropDownOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
  __typename?: 'CustomizableDropDownValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableFieldOption contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFieldOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
};

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
  __typename?: 'CustomizableFieldValue';
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableFileOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
};

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
  __typename?: 'CustomizableFileValue';
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableMultipleOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
  __typename?: 'CustomizableMultipleValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

export type CustomizableOptionInput = {
  id: Scalars['Int'];
  value_string: Scalars['String'];
};

/** The CustomizableOptionInterface contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
};

/** CustomizableProductInterface contains information about customizable product options. */
export type CustomizableProductInterface = {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
  __typename?: 'CustomizableRadioOption';
  /** Option ID. */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
  __typename?: 'CustomizableRadioValue';
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

export type DeletePaymentTokenOutput = {
  __typename?: 'DeletePaymentTokenOutput';
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  result: Scalars['Boolean'];
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
  __typename?: 'Discount';
  /** The amount of the discount */
  amount: Money;
  /** A description of the discount */
  label: Scalars['String'];
};

/** Downloadable Cart Item */
export type DownloadableCartItem = CartItemInterface & {
  __typename?: 'DownloadableCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  id: Scalars['String'];
  /** An array containing information about the links for the added to cart downloadable product */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** DownloadableProductSamples defines characteristics of a downloadable product */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

export type DownloadableCreditMemoItem = CreditMemoItemInterface & {
  __typename?: 'DownloadableCreditMemoItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID of the credit memo item, used for API purposes */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
};

export enum DownloadableFileTypeEnum {
  /** @deprecated `sample_url` serves to get the downloadable sample */
  FILE = 'FILE',
  /** @deprecated `sample_url` serves to get the downloadable sample */
  URL = 'URL'
}

export type DownloadableInvoiceItem = InvoiceItemInterface & {
  __typename?: 'DownloadableInvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID of the invoice item */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableItemsLinks = {
  __typename?: 'DownloadableItemsLinks';
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

export type DownloadableOrderItem = OrderItemInterface & {
  __typename?: 'DownloadableOrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique identifier of the order item */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** DownloadableProduct defines a product that the customer downloads */
export type DownloadableProduct = CustomizableProductInterface & ProductInterface & {
  __typename?: 'DownloadableProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products */
  links_title?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** DownloadableProduct defines a product that the customer downloads */
export type DownloadableProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type DownloadableProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  downloadable_product_links?: InputMaybe<Array<InputMaybe<DownloadableProductLinksInput>>>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableProductLinks = {
  __typename?: 'DownloadableProductLinks';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** A string that encodes option details. */
  uid: Scalars['ID'];
};

export type DownloadableProductLinksInput = {
  link_id: Scalars['Int'];
};

/** DownloadableProductSamples defines characteristics of a downloadable product */
export type DownloadableProductSamples = {
  __typename?: 'DownloadableProductSamples';
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample */
  title?: Maybe<Scalars['String']>;
};

/** Defines a customer-entered option */
export type EnteredOptionInput = {
  /** An encoded ID */
  uid: Scalars['ID'];
  /** Text the customer entered */
  value: Scalars['String'];
};

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export type EntityUrl = {
  __typename?: 'EntityUrl';
  /** @deprecated The canonical_url field is deprecated, use relative_url instead. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID. */
  id?: Maybe<Scalars['Int']>;
  /** 301 or 302 HTTP code for url permanent or temporary redirect or 0 for the 200 no redirect */
  redirectCode?: Maybe<Scalars['Int']>;
  /** The internal relative URL. If the specified  url is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
  /** A string to filter on */
  eq?: InputMaybe<Scalars['String']>;
  /** An array of values to filter on */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
  /** One or more words to filter on */
  match?: InputMaybe<Scalars['String']>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
  /** The beginning of the range */
  from?: InputMaybe<Scalars['String']>;
  /** The end of the range */
  to?: InputMaybe<Scalars['String']>;
};

/** Defines a filter for an input string. */
export type FilterStringTypeInput = {
  /** Filters items that are exactly the same as the specified string. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: InputMaybe<Scalars['String']>;
};

/** FilterTypeInput specifies which action will be performed in a query  */
export type FilterTypeInput = {
  /** Equals */
  eq?: InputMaybe<Scalars['String']>;
  finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** From. Must be used with 'to' */
  from?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to */
  gteq?: InputMaybe<Scalars['String']>;
  /** In. The value can contain a set of comma-separated values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
  like?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal to */
  lteq?: InputMaybe<Scalars['String']>;
  /** More than or equal to */
  moreq?: InputMaybe<Scalars['String']>;
  /** Not equal to */
  neq?: InputMaybe<Scalars['String']>;
  /** Not in. The value can contain a set of comma-separated values */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Not null */
  notnull?: InputMaybe<Scalars['String']>;
  /** Is null */
  null?: InputMaybe<Scalars['String']>;
  /** To. Must be used with 'from' */
  to?: InputMaybe<Scalars['String']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
  __typename?: 'FixedProductTax';
  /** Amount of the FPT as a money object. */
  amount?: Maybe<Money>;
  /** The label assigned to the FPT to be displayed on the frontend. */
  label?: Maybe<Scalars['String']>;
};

/** This enumeration display settings for the fixed product tax */
export enum FixedProductTaxDisplaySettings {
  /**
   * The displayed price does not include the FPT amount. The values of ProductPrice.fixed_product_taxes and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price'
   * @deprecated
   */
  EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /**
   * The displayed price does not include the FPT amount. The values from ProductPrice.fixed_product_taxes are not displayed. This value corresponds to 'Excluding FPT'
   * @deprecated
   */
  EXCLUDE_FPT_WITHOUT_DETAILS = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The FPT feature is not enabled. You can omit  ProductPrice.fixed_product_taxes from your query
   * @deprecated
   */
  FPT_DISABLED = 'FPT_DISABLED',
  /**
   * The displayed price includes the FPT amount without displaying the ProductPrice.fixed_product_taxes values. This value corresponds to 'Including FPT only'
   * @deprecated
   */
  INCLUDE_FPT_WITHOUT_DETAILS = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /**
   * The displayed price includes the FPT amount while displaying the values of ProductPrice.fixed_product_taxes separately. This value corresponds to 'Including FPT and FPT description'
   * @deprecated
   */
  INCLUDE_FPT_WITH_DETAILS = 'INCLUDE_FPT_WITH_DETAILS'
}

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessage = {
  __typename?: 'GiftMessage';
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** Contains the text of a gift message, its sender, and recipient */
export type GiftMessageInput = {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
};

/** GroupedProduct defines a grouped product */
export type GroupedProduct = PhysicalProductInterface & ProductInterface & {
  __typename?: 'GroupedProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** GroupedProduct defines a grouped product */
export type GroupedProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** GroupedProductItem contains information about an individual grouped product item */
export type GroupedProductItem = {
  __typename?: 'GroupedProductItem';
  /** The relative position of this item compared to the other group items */
  position?: Maybe<Scalars['Int']>;
  /** The ProductInterface object, which contains details about this product option */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item */
  qty?: Maybe<Scalars['Float']>;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Contains secure URL used for Payments Pro Hosted Solution payment method. */
export type HostedProUrl = {
  __typename?: 'HostedProUrl';
  /** Secure Url generated by PayPal */
  secure_form_url?: Maybe<Scalars['String']>;
};

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** The object details of target path parameters */
export type HttpQueryParameter = {
  __typename?: 'HttpQueryParameter';
  /** Parameter name */
  name?: Maybe<Scalars['String']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']>;
};

export type ImageSwatchData = SwatchDataInterface & {
  __typename?: 'ImageSwatchData';
  /** Thumbnail swatch image URL */
  thumbnail?: Maybe<Scalars['String']>;
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** Invoice details */
export type Invoice = {
  __typename?: 'Invoice';
  /** Comments on the invoice */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The ID of the invoice, used for API purposes */
  id: Scalars['ID'];
  /** Invoiced product details */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number */
  number: Scalars['String'];
  /** Invoice total amount details */
  total?: Maybe<InvoiceTotal>;
};

export type InvoiceItem = InvoiceItemInterface & {
  __typename?: 'InvoiceItem';
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the invoice item */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Invoice item details */
export type InvoiceItemInterface = {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID of the invoice item */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
};

/** Contains price details from an invoice */
export type InvoiceTotal = {
  __typename?: 'InvoiceTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the invoice */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the invoice */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The invoice tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice */
  total_shipping: Money;
  /** The amount of tax applied to the invoice */
  total_tax: Money;
};

export type IsEmailAvailableOutput = {
  __typename?: 'IsEmailAvailableOutput';
  /** Is email availabel value */
  is_email_available?: Maybe<Scalars['Boolean']>;
};

/** A list of options of the selected bundle product */
export type ItemSelectedBundleOption = {
  __typename?: 'ItemSelectedBundleOption';
  /** The unique identifier of the option */
  id: Scalars['ID'];
  /** The label of the option */
  label: Scalars['String'];
  /** A list of products that represent the values of the parent option */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
};

/** A list of values for the selected bundle product */
export type ItemSelectedBundleOptionValue = {
  __typename?: 'ItemSelectedBundleOptionValue';
  /** The unique identifier of the value */
  id: Scalars['ID'];
  /** The price of the child bundle product */
  price: Money;
  /** The name of the child bundle product */
  product_name: Scalars['String'];
  /** The SKU of the child bundle product */
  product_sku: Scalars['String'];
  /** Indicates how many of this bundle product were ordered */
  quantity: Scalars['Float'];
};

/** The key-value type */
export type KeyValue = {
  __typename?: 'KeyValue';
  /** The name part of the name/value pair */
  name?: Maybe<Scalars['String']>;
  /** The value part of the name/value pair */
  value?: Maybe<Scalars['String']>;
};

export type KlarnaInput = {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String'];
};

export type LayerFilter = {
  __typename?: 'LayerFilter';
  /**
   * Array of filter items.
   * @deprecated Use Aggregation.options instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * Count of filter items in filter group.
   * @deprecated Use Aggregation.count instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>;
  /**
   * Layered navigation filter name.
   * @deprecated Use Aggregation.label instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Request variable name for filter query.
   * @deprecated Use Aggregation.attribute_code instead.
   */
  request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
  __typename?: 'LayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

/** MediaGalleryEntry defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
  __typename?: 'MediaGalleryEntry';
  /** Contains a ProductMediaGalleryEntriesContent object. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>;
  /** The identifier assigned to the object. */
  id?: Maybe<Scalars['Int']>;
  /** The alt text displayed on the UI when the user points to the image. */
  label?: Maybe<Scalars['String']>;
  /** image or video. */
  media_type?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** A Money object defines a monetary value, including a numeric value and a currency code. */
export type Money = {
  __typename?: 'Money';
  /** A three-letter currency code, such as USD or EUR */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value */
  value?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Adds one or more products to the specified wish list. This mutation supports all product types */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Changes the password for the logged-in customer */
  changeCustomerPassword?: Maybe<Customer>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Create customer account */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create customer address */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create customer account */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Creates an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<CreateKlarnaPaymentsSessionOutput>;
  /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiates an Express Checkout transaction and receives a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Creates a product review for the specified SKU */
  createProductReview: CreateProductReviewOutput;
  /** Delete customer address */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer payment token */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Retrieve the customer token */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Merges the source cart into the destination cart */
  mergeCarts: Cart;
  placeOrder?: Maybe<PlaceOrderOutput>;
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Removes one or more products from the specified wish list */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Adds all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using requestPasswordResetEmail. */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Revoke the customer token */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Recommends Product by Sending Single/Multiple Email */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribes the specified email to a newsletter */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Deprecated. Use UpdateCustomerV2 instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update customer address */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Updates one or more products in the specified wish list */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
};


export type MutationAddBundleProductsToCartArgs = {
  input?: InputMaybe<AddBundleProductsToCartInput>;
};


export type MutationAddConfigurableProductsToCartArgs = {
  input?: InputMaybe<AddConfigurableProductsToCartInput>;
};


export type MutationAddDownloadableProductsToCartArgs = {
  input?: InputMaybe<AddDownloadableProductsToCartInput>;
};


export type MutationAddProductsToCartArgs = {
  cartId: Scalars['String'];
  cartItems: Array<CartItemInput>;
};


export type MutationAddProductsToWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemInput>;
};


export type MutationAddSimpleProductsToCartArgs = {
  input?: InputMaybe<AddSimpleProductsToCartInput>;
};


export type MutationAddVirtualProductsToCartArgs = {
  input?: InputMaybe<AddVirtualProductsToCartInput>;
};


export type MutationApplyCouponToCartArgs = {
  input?: InputMaybe<ApplyCouponToCartInput>;
};


export type MutationChangeCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CustomerAddressInput;
};


export type MutationCreateCustomerV2Args = {
  input: CustomerCreateInput;
};


export type MutationCreateEmptyCartArgs = {
  input?: InputMaybe<CreateEmptyCartInput>;
};


export type MutationCreateKlarnaPaymentsSessionArgs = {
  input?: InputMaybe<CreateKlarnaPaymentsSessionInput>;
};


export type MutationCreatePayflowProTokenArgs = {
  input: PayflowProTokenInput;
};


export type MutationCreatePaypalExpressTokenArgs = {
  input: PaypalExpressTokenInput;
};


export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePaymentTokenArgs = {
  public_hash: Scalars['String'];
};


export type MutationGenerateCustomerTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationHandlePayflowProResponseArgs = {
  input: PayflowProResponseInput;
};


export type MutationMergeCartsArgs = {
  destination_cart_id: Scalars['String'];
  source_cart_id: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  input?: InputMaybe<PlaceOrderInput>;
};


export type MutationRemoveCouponFromCartArgs = {
  input?: InputMaybe<RemoveCouponFromCartInput>;
};


export type MutationRemoveItemFromCartArgs = {
  input?: InputMaybe<RemoveItemFromCartInput>;
};


export type MutationRemoveProductsFromWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
};


export type MutationReorderItemsArgs = {
  orderNumber: Scalars['String'];
};


export type MutationRequestPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type MutationSendEmailToFriendArgs = {
  input?: InputMaybe<SendEmailToFriendInput>;
};


export type MutationSetBillingAddressOnCartArgs = {
  input?: InputMaybe<SetBillingAddressOnCartInput>;
};


export type MutationSetGuestEmailOnCartArgs = {
  input?: InputMaybe<SetGuestEmailOnCartInput>;
};


export type MutationSetPaymentMethodAndPlaceOrderArgs = {
  input?: InputMaybe<SetPaymentMethodAndPlaceOrderInput>;
};


export type MutationSetPaymentMethodOnCartArgs = {
  input?: InputMaybe<SetPaymentMethodOnCartInput>;
};


export type MutationSetShippingAddressesOnCartArgs = {
  input?: InputMaybe<SetShippingAddressesOnCartInput>;
};


export type MutationSetShippingMethodsOnCartArgs = {
  input?: InputMaybe<SetShippingMethodsOnCartInput>;
};


export type MutationSubscribeEmailToNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateCartItemsArgs = {
  input?: InputMaybe<UpdateCartItemsInput>;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  id: Scalars['Int'];
  input?: InputMaybe<CustomerAddressInput>;
};


export type MutationUpdateCustomerEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCustomerV2Args = {
  input: CustomerUpdateInput;
};


export type MutationUpdateProductsInWishlistArgs = {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemUpdateInput>;
};

export type Order = {
  __typename?: 'Order';
  /** @deprecated The order_id field is deprecated, use order_number instead. */
  order_id?: Maybe<Scalars['String']>;
  order_number: Scalars['String'];
};

/** OrderAddress contains detailed information about an order's billing and shipping addresses */
export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The city or town */
  city: Scalars['String'];
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname: Scalars['String'];
  /** The family name of the person associated with the shipping/billing address */
  lastname: Scalars['String'];
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's order ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['ID']>;
  /** An array of strings that define the street number and name */
  street: Array<Maybe<Scalars['String']>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone: Scalars['String'];
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
};

export type OrderItem = OrderItemInterface & {
  __typename?: 'OrderItem';
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique identifier of the order item */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Order item details */
export type OrderItemInterface = {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique identifier of the order item */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
};

/** Represents order item options like selected or entered */
export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  /** The name of the option */
  label: Scalars['String'];
  /** The value of the option */
  value: Scalars['String'];
};

/** Contains details about the payment method used to pay for the order */
export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** Additional data per payment method type */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for */
  type: Scalars['String'];
};

/** Order shipment details */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** Comments added to the shipment */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID of the shipment */
  id: Scalars['ID'];
  /** Contains items included in the shipment */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number */
  number: Scalars['String'];
  /** Contains shipment tracking details */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
};

/** Contains details about the sales total amounts used to calculate the final price */
export type OrderTotal = {
  __typename?: 'OrderTotal';
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the order */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the order */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The order tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order */
  total_shipping: Money;
  /** The amount of tax applied to the order */
  total_tax: Money;
};

/** Required input for Payflow Express Checkout payments */
export type PayflowExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

/** Mode for payment: TEST or LIVE. Applies to Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  /** @deprecated  */
  LIVE = 'LIVE',
  /** @deprecated  */
  TEST = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
  __typename?: 'PayflowLinkToken';
  /** Mode for Payflow transaction */
  mode?: Maybe<PayflowLinkMode>;
  /** PayPal URL used for requesting Payflow form */
  paypal_url?: Maybe<Scalars['String']>;
  /** Secure token generated by PayPal */
  secure_token?: Maybe<Scalars['String']>;
  /** Secure token ID generated by PayPal */
  secure_token_id?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
};

/** Required input for Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
  /** Required input for credit card related information */
  cc_details: CreditCardDetailsInput;
  /** States whether details about the customer's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: InputMaybe<Scalars['Boolean']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
  __typename?: 'PayflowProResponseOutput';
  cart: Cart;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
  __typename?: 'PayflowProToken';
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
};

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
};

export type PaymentMethodInput = {
  braintree?: InputMaybe<BraintreeInput>;
  braintree_cc_vault?: InputMaybe<BraintreeCcVaultInput>;
  /** Payment method code */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments */
  hosted_pro?: InputMaybe<HostedProInput>;
  klarna?: InputMaybe<KlarnaInput>;
  /** Required input for Payflow Express Checkout payments */
  payflow_express?: InputMaybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments */
  payflow_link?: InputMaybe<PayflowLinkInput>;
  /** Required input type for PayPal Payflow Pro and Payment Pro payments */
  payflowpro?: InputMaybe<PayflowProInput>;
  /** Required input type for PayPal Payflow Pro vault payments */
  payflowpro_cc_vault?: InputMaybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments */
  paypal_express?: InputMaybe<PaypalExpressInput>;
  /** Purchase order number */
  purchase_order_number?: InputMaybe<Scalars['String']>;
};

/** The stored payment method available to the customer */
export type PaymentToken = {
  __typename?: 'PaymentToken';
  /** Stored account details */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token */
  payment_method_code: Scalars['String'];
  /** The public hash of the token */
  public_hash: Scalars['String'];
  type: PaymentTokenTypeEnum;
};

/** The list of available payment token types */
export enum PaymentTokenTypeEnum {
  /** @deprecated  */
  account = 'account',
  /** @deprecated  */
  card = 'card'
}

/** Required input for Express Checkout and Payments Standard payments */
export type PaypalExpressInput = {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
};

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export type PaypalExpressToken = {
  __typename?: 'PaypalExpressToken';
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details
   * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal
   * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
   */
  token?: Maybe<Scalars['String']>;
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** Payment method code */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false */
  express_button?: InputMaybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
  use_paypal_credit?: InputMaybe<Scalars['Boolean']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
  __typename?: 'PaypalExpressTokenOutput';
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal */
  token?: Maybe<Scalars['String']>;
};

/** A set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
  __typename?: 'PaypalExpressUrlList';
  /** The PayPal URL that allows the buyer to edit their checkout details */
  edit?: Maybe<Scalars['String']>;
  /** The URL to the PayPal login page */
  start?: Maybe<Scalars['String']>;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the page that PayPal will redirect to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html.  */
  pending_url?: InputMaybe<Scalars['String']>;
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: InputMaybe<Scalars['String']>;
};

/** PhysicalProductInterface contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};

/** Defines Pickup Location information. */
export type PickupLocation = {
  __typename?: 'PickupLocation';
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export type PickupLocationFilterInput = {
  /** Filter by city. */
  city?: InputMaybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: InputMaybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: InputMaybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: InputMaybe<FilterTypeInput>;
  /** Filter by region. */
  region?: InputMaybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: InputMaybe<FilterTypeInput>;
  /** Filter by street. */
  street?: InputMaybe<FilterTypeInput>;
};

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type PickupLocationSortInput = {
  /** City where pickup location is placed. */
  city?: InputMaybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: InputMaybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: InputMaybe<SortEnum>;
  /** Description of the pickup location. */
  description?: InputMaybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: InputMaybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: InputMaybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: InputMaybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: InputMaybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: InputMaybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: InputMaybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: InputMaybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: InputMaybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: InputMaybe<SortEnum>;
  /** Name of the region. */
  region?: InputMaybe<SortEnum>;
  /** Id of the region. */
  region_id?: InputMaybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: InputMaybe<SortEnum>;
};

/** Top level object returned in a pickup locations search. */
export type PickupLocations = {
  __typename?: 'PickupLocations';
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
};

export type PlaceOrderInput = {
  cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
  __typename?: 'PlaceOrderOutput';
  order: Order;
};

/** Price is deprecated, replaced by ProductPrice. The Price object defines the price of a product as well as any tax-related adjustments. */
export type Price = {
  __typename?: 'Price';
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  amount?: Maybe<Money>;
};

/** PriceAdjustment is deprecated. Taxes will be included or excluded in the price. The PricedAdjustment object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
  __typename?: 'PriceAdjustment';
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated PriceAdjustment is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated PriceAdjustment is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum PriceAdjustmentCodesEnum {
  /** @deprecated PriceAdjustmentCodesEnum is deprecated. Tax is included or excluded in price. Tax is not shown separtely in Catalog */
  TAX = 'TAX',
  /** @deprecated WEEE code is deprecated, use fixed_product_taxes.label */
  WEEE = 'WEEE',
  /** @deprecated Use fixed_product_taxes. PriceAdjustmentCodesEnum is deprecated. Tax is included or excluded in price. Tax is not shown separtely in Catalog */
  WEEE_TAX = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  /** @deprecated  */
  EXCLUDED = 'EXCLUDED',
  /** @deprecated  */
  INCLUDED = 'INCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
  __typename?: 'PriceRange';
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
};

/** This enumeration the price type. */
export enum PriceTypeEnum {
  /** @deprecated  */
  DYNAMIC = 'DYNAMIC',
  /** @deprecated  */
  FIXED = 'FIXED',
  /** @deprecated  */
  PERCENT = 'PERCENT'
}

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  /** @deprecated  */
  AS_LOW_AS = 'AS_LOW_AS',
  /** @deprecated  */
  PRICE_RANGE = 'PRICE_RANGE'
}

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
  /** Attribute label: Activity */
  activity?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: InputMaybe<FilterEqualTypeInput>;
  /** Filter product by category id */
  category_id?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: InputMaybe<FilterRangeTypeInput>;
  /** Attribute label: Sale */
  sale?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: InputMaybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: InputMaybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: InputMaybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterEqualTypeInput>;
};

/** ProductAttributeSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
  /** Attribute label: Product Name */
  name?: InputMaybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: InputMaybe<SortEnum>;
  /** Attribute label: Price */
  price?: InputMaybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: InputMaybe<SortEnum>;
};

/** A discount applied to a product price. */
export type ProductDiscount = {
  __typename?: 'ProductDiscount';
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>;
};

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
  /** Category ID the product belongs to. */
  category_id?: InputMaybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: InputMaybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: InputMaybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: InputMaybe<ProductFilterInput>;
  /** The price of an item. */
  price?: InputMaybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: InputMaybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<FilterTypeInput>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<FilterTypeInput>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<FilterTypeInput>;
  url_path?: InputMaybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<FilterTypeInput>;
};

/** Product image information. Contains the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
  __typename?: 'ProductImage';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
};

/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterface = {
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterfaceReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

/** ProductLinks is an implementation of ProductLinksInterface. */
export type ProductLinks = ProductLinksInterface & {
  __typename?: 'ProductLinks';
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductLinks contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesContent contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
  __typename?: 'ProductMediaGalleryEntriesContent';
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
  __typename?: 'ProductMediaGalleryEntriesVideoContent';
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>;
};

/** Represents a product price. */
export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after discounts applied. */
  final_price: Money;
  /** The multiple FPTs that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
};

/** ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the to value.
   * @deprecated Use PriceRange.maximum_price.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the from value.
   * @deprecated Use PriceRange.minimum_price.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
   */
  regularPrice?: Maybe<Price>;
};

/** Details of a product review */
export type ProductReview = {
  __typename?: 'ProductReview';
  /** The average rating for product review. */
  average_rating: Scalars['Float'];
  /** Date indicating when the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Contains details about the reviewed product */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
};

export type ProductReviewRating = {
  __typename?: 'ProductReviewRating';
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
};

export type ProductReviewRatingInput = {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingMetadata = {
  __typename?: 'ProductReviewRatingMetadata';
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
};

export type ProductReviewRatingValueMetadata = {
  __typename?: 'ProductReviewRatingValueMetadata';
  /** A ratings scale, such as the number of stars awarded */
  value: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
};

export type ProductReviewRatingsMetadata = {
  __typename?: 'ProductReviewRatingsMetadata';
  /** List of product reviews sorted by position */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
};

export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
};

/** ProductSortInput is deprecated, use @ProductAttributeSortInput instead. ProductSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
  /** The product's country of origin. */
  country_of_manufacture?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was created. */
  created_at?: InputMaybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: InputMaybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: InputMaybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: InputMaybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: InputMaybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: InputMaybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: InputMaybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: InputMaybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: InputMaybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: InputMaybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: InputMaybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: InputMaybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: InputMaybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: InputMaybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: InputMaybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: InputMaybe<SortEnum>;
  /** The price of the item. */
  price?: InputMaybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: InputMaybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: InputMaybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: InputMaybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: InputMaybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: InputMaybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: InputMaybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: InputMaybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: InputMaybe<SortEnum>;
  /** The file name of a swatch image */
  swatch_image?: InputMaybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: InputMaybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: InputMaybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: InputMaybe<SortEnum>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: InputMaybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: InputMaybe<SortEnum>;
  url_path?: InputMaybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: InputMaybe<SortEnum>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  /** @deprecated  */
  IN_STOCK = 'IN_STOCK',
  /** @deprecated  */
  OUT_OF_STOCK = 'OUT_OF_STOCK'
}

/** ProductTierPrices is deprecated and has been replaced by TierPrice. The ProductTierPrices object defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
  __typename?: 'ProductTierPrices';
  /**
   * The ID of the customer group.
   * @deprecated customer_group_id is not relevant for storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>;
  /**
   * The percentage discount of the item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.discount.
   */
  percentage_value?: Maybe<Scalars['Float']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated ProductTierPrices is deprecated, use TierPrice.quantity.
   */
  qty?: Maybe<Scalars['Float']>;
  /**
   * The price of the fixed price item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.final_price
   */
  value?: Maybe<Scalars['Float']>;
  /**
   * The ID assigned to the website.
   * @deprecated website_id is not relevant for storefront.
   */
  website_id?: Maybe<Scalars['Float']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
  __typename?: 'ProductVideo';
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** The Products object is the top-level object returned in a product search. */
export type Products = {
  __typename?: 'Products';
  /** Layered navigation aggregations. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use aggregations instead
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Returns information about shopping cart */
  cart?: Maybe<Cart>;
  categories?: Maybe<CategoryResult>;
  /**
   * The category query searches for categories that match the criteria specified in the search and filter attributes.
   * @deprecated Use 'categoryList' query instead of 'category' query
   */
  category?: Maybe<CategoryTree>;
  /** Returns an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** The Checkout Agreements information */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** The CMS block query returns information about CMS blocks */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** The CMS page query returns information about a CMS page */
  cmsPage?: Maybe<CmsPage>;
  /** Get banner slider bu slider ID */
  codilarBannerSlider?: Maybe<CodilarBannerSlider>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** The currency query returns information about store currency. */
  currency?: Maybe<Currency>;
  /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** The customer query returns information about a customer account */
  customer?: Maybe<Customer>;
  /** Returns information about the customer shopping cart */
  customerCart: Cart;
  /** The query returns the contents of a customer's downloadable products */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use orders from customer instead */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Retrieves metadata required by clients to render the Reviews section. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** The products query searches for products that match the criteria specified in the search and filter attributes. */
  products?: Maybe<Products>;
  /** The store config query */
  storeConfig?: Maybe<StoreConfig>;
  /** The urlResolver query returns the relative URL for a specified product, category or CMS page, using as input a url_key appended by the url_suffix, if one exists */
  urlResolver?: Maybe<EntityUrl>;
  /**
   * The wishlist query returns the contents of a customer's wish list
   * @deprecated Moved under `Customer` `wishlist`
   */
  wishlist?: Maybe<WishlistOutput>;
};


export type QueryCartArgs = {
  cart_id: Scalars['String'];
};


export type QueryCategoriesArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<CategoryFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryListArgs = {
  filters?: InputMaybe<CategoryFilterInput>;
};


export type QueryCmsBlocksArgs = {
  identifiers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCmsPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
  identifier?: InputMaybe<Scalars['String']>;
};


export type QueryCodilarBannerSliderArgs = {
  sliderId: Scalars['Int'];
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCustomAttributeMetadataArgs = {
  attributes: Array<AttributeInput>;
};


export type QueryGetHostedProUrlArgs = {
  input: HostedProUrlInput;
};


export type QueryGetPayflowLinkTokenArgs = {
  input: PayflowLinkTokenInput;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String'];
};


export type QueryPickupLocationsArgs = {
  area?: InputMaybe<AreaInput>;
  currentPage?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<PickupLocationFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PickupLocationSortInput>;
};


export type QueryProductsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<ProductAttributeFilterInput>;
  pageSize?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ProductAttributeSortInput>;
};


export type QueryUrlResolverArgs = {
  url: Scalars['String'];
};

export type Region = {
  __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RemoveCouponFromCartInput = {
  cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
  __typename?: 'RemoveCouponFromCartOutput';
  cart?: Maybe<Cart>;
};

export type RemoveItemFromCartInput = {
  cart_id: Scalars['String'];
  cart_item_id: Scalars['Int'];
};

export type RemoveItemFromCartOutput = {
  __typename?: 'RemoveItemFromCartOutput';
  cart: Cart;
};

/** Contains the customer's wish list and any errors encountered */
export type RemoveProductsFromWishlistOutput = {
  __typename?: 'RemoveProductsFromWishlistOutput';
  /** An array of errors encountered while deleting products from a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted */
  wishlist: Wishlist;
};

export type ReorderItemsOutput = {
  __typename?: 'ReorderItemsOutput';
  /** Contains detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
};

export type RevokeCustomerTokenOutput = {
  __typename?: 'RevokeCustomerTokenOutput';
  result: Scalars['Boolean'];
};

/** Comment item details */
export type SalesCommentItem = {
  __typename?: 'SalesCommentItem';
  /** The text of the message */
  message: Scalars['String'];
  /** The timestamp of the comment */
  timestamp: Scalars['String'];
};

export type SalesItemInterface = {
  __typename?: 'SalesItemInterface';
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
};

/** SearchResultPageInfo provides navigation for the query response */
export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  /** Specifies which page of results to return */
  current_page?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of items to return */
  page_size?: Maybe<Scalars['Int']>;
  /** Total pages */
  total_pages?: Maybe<Scalars['Int']>;
};

export type SelectedBundleOption = {
  __typename?: 'SelectedBundleOption';
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
  __typename?: 'SelectedBundleOptionValue';
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type SelectedConfigurableOption = {
  __typename?: 'SelectedConfigurableOption';
  id: Scalars['Int'];
  option_label: Scalars['String'];
  value_id: Scalars['Int'];
  value_label: Scalars['String'];
};

export type SelectedCustomizableOption = {
  __typename?: 'SelectedCustomizableOption';
  id: Scalars['Int'];
  is_required: Scalars['Boolean'];
  label: Scalars['String'];
  sort_order: Scalars['Int'];
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
  __typename?: 'SelectedCustomizableOptionValue';
  id: Scalars['Int'];
  label: Scalars['String'];
  price: CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
};

export type SelectedPaymentMethod = {
  __typename?: 'SelectedPaymentMethod';
  /** The payment method code */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
};

export type SelectedShippingMethod = {
  __typename?: 'SelectedShippingMethod';
  amount: Money;
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
};

export type SendEmailToFriendInput = {
  product_id: Scalars['Int'];
  recipients: Array<InputMaybe<SendEmailToFriendRecipientInput>>;
  sender: SendEmailToFriendSenderInput;
};

export type SendEmailToFriendOutput = {
  __typename?: 'SendEmailToFriendOutput';
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  sender?: Maybe<SendEmailToFriendSender>;
};

export type SendEmailToFriendRecipient = {
  __typename?: 'SendEmailToFriendRecipient';
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendRecipientInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSender = {
  __typename?: 'SendEmailToFriendSender';
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendEmailToFriendSenderInput = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type SendFriendConfiguration = {
  __typename?: 'SendFriendConfiguration';
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
};

export type SetBillingAddressOnCartInput = {
  billing_address: BillingAddressInput;
  cart_id: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
  __typename?: 'SetBillingAddressOnCartOutput';
  cart: Cart;
};

export type SetGuestEmailOnCartInput = {
  cart_id: Scalars['String'];
  email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
  __typename?: 'SetGuestEmailOnCartOutput';
  cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartInput = {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
  __typename?: 'SetPaymentMethodOnCartOutput';
  cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
  cart_id: Scalars['String'];
  shipping_addresses: Array<InputMaybe<ShippingAddressInput>>;
};

export type SetShippingAddressesOnCartOutput = {
  __typename?: 'SetShippingAddressesOnCartOutput';
  cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
  cart_id: Scalars['String'];
  shipping_methods: Array<InputMaybe<ShippingMethodInput>>;
};

export type SetShippingMethodsOnCartOutput = {
  __typename?: 'SetShippingMethodsOnCartOutput';
  cart: Cart;
};

/** This enumeration defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  /** @deprecated  */
  SEPARATELY = 'SEPARATELY',
  /** @deprecated  */
  TOGETHER = 'TOGETHER'
}

export type ShipmentItem = ShipmentItemInterface & {
  __typename?: 'ShipmentItem';
  /** Shipment item unique identifier */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment item details */
export type ShipmentItemInterface = {
  /** Shipment item unique identifier */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
};

/** Order shipment tracking details */
export type ShipmentTracking = {
  __typename?: 'ShipmentTracking';
  /** The shipping carrier for the order delivery */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title */
  title: Scalars['String'];
};

export type ShippingAddressInput = {
  address?: InputMaybe<CartAddressInput>;
  customer_address_id?: InputMaybe<Scalars['Int']>;
  customer_notes?: InputMaybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: InputMaybe<Scalars['String']>;
};

export type ShippingCartAddress = CartAddressInterface & {
  __typename?: 'ShippingCartAddress';
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated `cart_items_v2` should be used instead */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  /** @deprecated This information shoud not be exposed on frontend */
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
};

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export type ShippingDiscount = {
  __typename?: 'ShippingDiscount';
  /** The amount of the discount */
  amount: Money;
};

/** The Shipping handling details */
export type ShippingHandling = {
  __typename?: 'ShippingHandling';
  /** The shipping amount, excluding tax */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Contains details about taxes applied for shipping */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping */
  total_amount: Money;
};

export type ShippingMethodInput = {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
};

/** Simple Cart Item */
export type SimpleCartItem = CartItemInterface & {
  __typename?: 'SimpleCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

/** A simple product is tangible and are usually sold as single units or in fixed quantities. */
export type SimpleProduct = CustomizableProductInterface & PhysicalProductInterface & ProductInterface & {
  __typename?: 'SimpleProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
};


/** A simple product is tangible and are usually sold as single units or in fixed quantities. */
export type SimpleProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SimpleProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** This enumeration indicates whether to return results in ascending or descending order */
export enum SortEnum {
  /** @deprecated  */
  ASC = 'ASC',
  /** @deprecated  */
  DESC = 'DESC'
}

export type SortField = {
  __typename?: 'SortField';
  /** Label of sort field. */
  label?: Maybe<Scalars['String']>;
  /** Attribute code of sort field. */
  value?: Maybe<Scalars['String']>;
};

/** SortFields contains a default value for sort fields and all available sort fields. */
export type SortFields = {
  __typename?: 'SortFields';
  /** Default value of sort fields. */
  default?: Maybe<Scalars['String']>;
  /** Available sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
};

/** The type contains information about a store config */
export type StoreConfig = {
  __typename?: 'StoreConfig';
  /** Footer Miscellaneous HTML */
  absolute_footer?: Maybe<Scalars['String']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No) */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>;
  /** Enable autocomplete on login and forgot password forms */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
  /** Base currency code */
  base_currency_code?: Maybe<Scalars['String']>;
  /** Base link URL for the store */
  base_link_url?: Maybe<Scalars['String']>;
  /** Base media URL for the store */
  base_media_url?: Maybe<Scalars['String']>;
  /** Base static URL for the store */
  base_static_url?: Maybe<Scalars['String']>;
  /** Base URL for the store */
  base_url?: Maybe<Scalars['String']>;
  /** Default Sort By. */
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices In Product Lists' field. It indicates how FPT information is displayed on category pages */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Category URL Suffix. */
  category_url_suffix?: Maybe<Scalars['String']>;
  /** CMS Home Page */
  cms_home_page?: Maybe<Scalars['String']>;
  /** CMS No Cookies Page */
  cms_no_cookies?: Maybe<Scalars['String']>;
  /** CMS No Route Page */
  cms_no_route?: Maybe<Scalars['String']>;
  /** A code assigned to the store to identify it */
  code?: Maybe<Scalars['String']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Default Meta Description */
  default_description?: Maybe<Scalars['String']>;
  /** Default display currency code */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** Default Meta Keywords */
  default_keywords?: Maybe<Scalars['String']>;
  /** Default Page Title */
  default_title?: Maybe<Scalars['String']>;
  /** Display Demo Store Notice */
  demonotice?: Maybe<Scalars['Int']>;
  /** Default Web URL */
  front?: Maybe<Scalars['String']>;
  /** Products per Page on Grid Default Value. */
  grid_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on Grid Allowed Values. */
  grid_per_page_values?: Maybe<Scalars['String']>;
  /** Scripts and Style Sheets */
  head_includes?: Maybe<Scalars['String']>;
  /** Favicon Icon */
  head_shortcut_icon?: Maybe<Scalars['String']>;
  /** Logo Image */
  header_logo_src?: Maybe<Scalars['String']>;
  /** The ID number assigned to the store */
  id?: Maybe<Scalars['Int']>;
  /** List Mode. */
  list_mode?: Maybe<Scalars['String']>;
  /** Products per Page on List Default Value. */
  list_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on List Allowed Values. */
  list_per_page_values?: Maybe<Scalars['String']>;
  /** Store locale */
  locale?: Maybe<Scalars['String']>;
  /** Logo Image Alt */
  logo_alt?: Maybe<Scalars['String']>;
  /** Logo Attribute Height */
  logo_height?: Maybe<Scalars['Int']>;
  /** Logo Attribute Width */
  logo_width?: Maybe<Scalars['Int']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0) */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>;
  /** Default No-route URL */
  no_route?: Maybe<Scalars['String']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices On Product View Page' field. It indicates how FPT information is displayed on product pages */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No) */
  product_reviews_enabled?: Maybe<Scalars['String']>;
  /** Product URL Suffix. */
  product_url_suffix?: Maybe<Scalars['String']>;
  /** The number of different character classes required in a password (lowercase, uppercase, digits, special characters). */
  required_character_classes_number?: Maybe<Scalars['String']>;
  /** The ID of the root category */
  root_category_id?: Maybe<Scalars['Int']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field. It indicates how FPT information is displayed on cart, checkout, and order pages */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Secure base link URL for the store */
  secure_base_link_url?: Maybe<Scalars['String']>;
  /** Secure base media URL for the store */
  secure_base_media_url?: Maybe<Scalars['String']>;
  /** Secure base static URL for the store */
  secure_base_static_url?: Maybe<Scalars['String']>;
  /** Secure base URL for the store */
  secure_base_url?: Maybe<Scalars['String']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Show Breadcrumbs for CMS Pages */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  /** Name of the store */
  store_name?: Maybe<Scalars['String']>;
  /** Timezone of the store */
  timezone?: Maybe<Scalars['String']>;
  /** Page Title Prefix */
  title_prefix?: Maybe<Scalars['String']>;
  /** Page Title Separator. */
  title_separator?: Maybe<Scalars['String']>;
  /** Page Title Suffix */
  title_suffix?: Maybe<Scalars['String']>;
  /** The ID number assigned to the website store belongs */
  website_id?: Maybe<Scalars['Int']>;
  /** The unit of weight */
  weight_unit?: Maybe<Scalars['String']>;
  /** Welcome Text */
  welcome?: Maybe<Scalars['String']>;
};

export type SubscribeEmailToNewsletterOutput = {
  __typename?: 'SubscribeEmailToNewsletterOutput';
  /** Returns the status of the subscription request */
  status?: Maybe<SubscriptionStatusesEnum>;
};

export enum SubscriptionStatusesEnum {
  /** @deprecated  */
  NOT_ACTIVE = 'NOT_ACTIVE',
  /** @deprecated  */
  SUBSCRIBED = 'SUBSCRIBED',
  /** @deprecated  */
  UNCONFIRMED = 'UNCONFIRMED',
  /** @deprecated  */
  UNSUBSCRIBED = 'UNSUBSCRIBED'
}

export type SwatchData = {
  __typename?: 'SwatchData';
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchDataInterface = {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface & SwatchLayerFilterItemInterface & {
  __typename?: 'SwatchLayerFilterItem';
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItemInterface = {
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
};

/** The tax item details */
export type TaxItem = {
  __typename?: 'TaxItem';
  /** The amount of tax applied to the item */
  amount: Money;
  /** The rate used to calculate the tax */
  rate: Scalars['Float'];
  /** A title that describes the tax */
  title: Scalars['String'];
};

export type TextSwatchData = SwatchDataInterface & {
  __typename?: 'TextSwatchData';
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
};

/** A price based on the quantity purchased. */
export type TierPrice = {
  __typename?: 'TierPrice';
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
};

export type UpdateCartItemsInput = {
  cart_id: Scalars['String'];
  cart_items: Array<InputMaybe<CartItemUpdateInput>>;
};

export type UpdateCartItemsOutput = {
  __typename?: 'UpdateCartItemsOutput';
  cart: Cart;
};

/** Contains the customer's wish list and any errors encountered */
export type UpdateProductsInWishlistOutput = {
  __typename?: 'UpdateProductsInWishlistOutput';
  /** An array of errors encountered while updating products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated */
  wishlist: Wishlist;
};

/** The object contains URL rewrite details */
export type UrlRewrite = {
  __typename?: 'UrlRewrite';
  /** Request parameters */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** Request URL */
  url?: Maybe<Scalars['String']>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  /** @deprecated  */
  CATEGORY = 'CATEGORY',
  /** @deprecated  */
  CMS_PAGE = 'CMS_PAGE',
  /** @deprecated  */
  PRODUCT = 'PRODUCT'
}

/** Required input for payment methods with Vault support. */
export type VaultTokenInput = {
  /** The public hash of the payment token */
  public_hash: Scalars['String'];
};

/** Virtual Cart Item */
export type VirtualCartItem = CartItemInterface & {
  __typename?: 'VirtualCartItem';
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
};

/** A virtual product is non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = CustomizableProductInterface & ProductInterface & {
  __typename?: 'VirtualProduct';
  activity?: Maybe<Scalars['String']>;
  /** The attribute set assigned to the product. */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /** The ID number assigned to the product. */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  new_from_date?: Maybe<Scalars['String']>;
  /** The end date for new product listings. */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
};


/** A virtual product is non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProductReviewsArgs = {
  currentPage?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type VirtualProductCartItemInput = {
  customizable_options?: InputMaybe<Array<InputMaybe<CustomizableOptionInput>>>;
  data: CartItemInput;
};

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export type Website = {
  __typename?: 'Website';
  /**
   * A code assigned to the website to identify it
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The default group ID that the website has
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the website
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>;
  /**
   * Specifies if this is the default website
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The attribute to use for sorting websites
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>;
};

/** An error encountered while performing operations with WishList. */
export type WishListUserInputError = {
  __typename?: 'WishListUserInputError';
  /** Wishlist-specific error code */
  code: WishListUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
};

export enum WishListUserInputErrorType {
  /** @deprecated  */
  PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',
  /** @deprecated  */
  UNDEFINED = 'UNDEFINED'
}

export type Wishlist = {
  __typename?: 'Wishlist';
  /** Wishlist unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** An array of items in the customer's wish list */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list */
  items_count?: Maybe<Scalars['Int']>;
  /** An encrypted code that Magento uses to link to the wish list */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list */
  updated_at?: Maybe<Scalars['String']>;
};

export type WishlistItem = {
  __typename?: 'WishlistItem';
  /** The time when the customer added the item to the wish list */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item */
  description?: Maybe<Scalars['String']>;
  /** The wish list item ID */
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
};

/** Defines the items to add to a wish list */
export type WishlistItemInput = {
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: InputMaybe<Scalars['String']>;
  /** The amount or number of items to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU */
  sku: Scalars['String'];
};

/** Defines updates to items in a wish list */
export type WishlistItemUpdateInput = {
  /** Customer-entered comments about the item */
  description?: InputMaybe<Scalars['String']>;
  /** An array of options that the customer entered */
  entered_options?: InputMaybe<Array<InputMaybe<EnteredOptionInput>>>;
  /** The new amount or number of this item */
  quantity?: InputMaybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected */
  selected_options?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** The ID of the wishlist item to update */
  wishlist_item_id: Scalars['ID'];
};

/** Deprecated: `Wishlist` type should be used instead */
export type WishlistOutput = {
  __typename?: 'WishlistOutput';
  /**
   * An array of items in the customer's wish list
   * @deprecated Use field `items` from type `Wishlist` instead
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list
   * @deprecated Use field `items_count` from type `Wishlist` instead
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source edition
   */
  name?: Maybe<Scalars['String']>;
  /**
   * An encrypted code that Magento uses to link to the wish list
   * @deprecated Use field `sharing_code` from type `Wishlist` instead
   */
  sharing_code?: Maybe<Scalars['String']>;
  /**
   * The time of the last modification to the wish list
   * @deprecated Use field `updated_at` from type `Wishlist` instead
   */
  updated_at?: Maybe<Scalars['String']>;
};

export type CreateEmptyCartInput = {
  cart_id?: InputMaybe<Scalars['String']>;
};

export type CreateKlarnaPaymentsSessionInput = {
  cart_id: Scalars['String'];
};

export type CreateKlarnaPaymentsSessionOutput = {
  __typename?: 'createKlarnaPaymentsSessionOutput';
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Categories>>>;
};

export type AddProductToCartMutationVariables = Exact<{
  cartItems: Array<CartItemInput> | CartItemInput;
}>;


export type AddProductToCartMutation = { __typename?: 'Mutation', addProductsToCart?: { __typename?: 'AddProductsToCartOutput', cart: { __typename?: 'Cart', email?: string | null, id: string, is_virtual: boolean, total_quantity: number, applied_coupons?: Array<{ __typename?: 'AppliedCoupon', code: string } | null> | null, available_payment_methods?: Array<{ __typename?: 'AvailablePaymentMethod', code: string, title: string } | null> | null, billing_address?: { __typename?: 'BillingCartAddress', firstname: string, lastname: string, street: Array<string | null>, city: string, postcode?: string | null, telephone: string, region?: { __typename?: 'CartAddressRegion', code?: string | null, label?: string | null, region_id?: number | null } | null, country: { __typename?: 'CartAddressCountry', code: string, label: string } } | null, gift_message?: { __typename?: 'GiftMessage', from: string, message: string, to: string } | null, items?: Array<{ __typename?: 'BundleCartItem', id: string, prices?: { __typename?: 'CartItemPrices', row_total_including_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null, product: { __typename?: 'BundleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'ConfigurableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'DownloadableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'GroupedProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'SimpleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'VirtualProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } } | { __typename?: 'ConfigurableCartItem', id: string, prices?: { __typename?: 'CartItemPrices', row_total_including_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null, product: { __typename?: 'BundleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'ConfigurableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'DownloadableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'GroupedProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'SimpleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'VirtualProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } } | { __typename?: 'DownloadableCartItem', id: string, prices?: { __typename?: 'CartItemPrices', row_total_including_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null, product: { __typename?: 'BundleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'ConfigurableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'DownloadableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'GroupedProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'SimpleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'VirtualProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } } | { __typename?: 'SimpleCartItem', id: string, prices?: { __typename?: 'CartItemPrices', row_total_including_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null, product: { __typename?: 'BundleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'ConfigurableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'DownloadableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'GroupedProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'SimpleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'VirtualProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } } | { __typename?: 'VirtualCartItem', id: string, prices?: { __typename?: 'CartItemPrices', row_total_including_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null, product: { __typename?: 'BundleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'ConfigurableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'DownloadableProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'GroupedProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'SimpleProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } | { __typename?: 'VirtualProduct', name?: string | null, small_image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null } } | null> | null, prices?: { __typename?: 'CartPrices', grand_total?: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } | null } | null, selected_payment_method?: { __typename?: 'SelectedPaymentMethod', code: string, purchase_order_number?: string | null, title: string } | null, shipping_addresses: Array<{ __typename?: 'ShippingCartAddress', available_shipping_methods?: Array<{ __typename?: 'AvailableShippingMethod', available: boolean, carrier_code: string, carrier_title: string, error_message?: string | null, method_title?: string | null, method_code?: string | null, amount: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, price_excl_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null }, price_incl_tax: { __typename?: 'Money', currency?: CurrencyEnum | null, value?: number | null } } | null> | null } | null> }, user_errors: Array<{ __typename?: 'CartUserInputError', code: CartUserInputErrorType, message: string } | null> } | null };

export type CreateEmptyCartForUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateEmptyCartForUserMutation = { __typename?: 'Mutation', createEmptyCart?: string | null };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryResult', total_count?: number | null, items?: Array<{ __typename?: 'CategoryTree', available_sort_by?: Array<string | null> | null, canonical_url?: string | null, children_count?: string | null, created_at?: string | null, name?: string | null, url_path?: string | null, url_key?: string | null, product_count?: number | null, updated_at?: string | null, children?: Array<{ __typename?: 'CategoryTree', id?: number | null, name?: string | null, children_count?: string | null, url_path?: string | null, url_key?: string | null, children?: Array<{ __typename?: 'CategoryTree', id?: number | null, name?: string | null, url_path?: string | null, url_key?: string | null, children_count?: string | null, children?: Array<{ __typename?: 'CategoryTree', id?: number | null, name?: string | null, url_path?: string | null, url_key?: string | null } | null> | null } | null> | null } | null> | null } | null> | null, page_info?: { __typename?: 'SearchResultPageInfo', current_page?: number | null, page_size?: number | null, total_pages?: number | null } | null } | null };

export type GetProductsForIdQueryVariables = Exact<{
  searchId?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  currentPage?: InputMaybe<Scalars['Int']>;
}>;


export type GetProductsForIdQuery = { __typename?: 'Query', products?: { __typename?: 'Products', total_count?: number | null, items?: Array<{ __typename: 'BundleProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | { __typename: 'ConfigurableProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, configurable_options?: Array<{ __typename?: 'ConfigurableProductOptions', id?: number | null, label?: string | null, position?: number | null, use_default?: boolean | null, attribute_code?: string | null, product_id?: number | null, values?: Array<{ __typename?: 'ConfigurableProductOptionsValues', value_index?: number | null, label?: string | null, swatch_data?: { __typename?: 'ColorSwatchData', value?: string | null } | { __typename?: 'ImageSwatchData', value?: string | null } | { __typename?: 'TextSwatchData', value?: string | null } | null } | null> | null } | null> | null, variants?: Array<{ __typename?: 'ConfigurableVariant', product?: { __typename?: 'SimpleProduct', id?: number | null, name?: string | null, sku?: string | null, attribute_set_id?: number | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } } } | null, attributes?: Array<{ __typename?: 'ConfigurableAttributeOption', label?: string | null, code?: string | null, value_index?: number | null } | null> | null } | null> | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | { __typename: 'DownloadableProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | { __typename: 'GroupedProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | { __typename: 'SimpleProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | { __typename: 'VirtualProduct', id?: number | null, attribute_set_id?: number | null, name?: string | null, sku?: string | null, image?: { __typename?: 'ProductImage', url?: string | null, label?: string | null } | null, price_range: { __typename?: 'PriceRange', minimum_price: { __typename?: 'ProductPrice', regular_price: { __typename?: 'Money', value?: number | null, currency?: CurrencyEnum | null } } }, categories?: Array<{ __typename?: 'CategoryTree', id?: number | null } | null> | null } | null> | null, page_info?: { __typename?: 'SearchResultPageInfo', current_page?: number | null, page_size?: number | null, total_pages?: number | null } | null, sort_fields?: { __typename?: 'SortFields', default?: string | null, options?: Array<{ __typename?: 'SortField', value?: string | null, label?: string | null } | null> | null } | null } | null };


export const AddProductToCartDocument = gql`
    mutation addProductToCart($cartItems: [CartItemInput!]!) {
  addProductsToCart(cartId: "string", cartItems: $cartItems) {
    cart {
      applied_coupons {
        code
      }
      available_payment_methods {
        code
        title
      }
      billing_address {
        firstname
        lastname
        street
        region {
          code
          label
          region_id
        }
        city
        postcode
        country {
          code
          label
        }
        telephone
      }
      email
      gift_message {
        from
        message
        to
      }
      id
      is_virtual
      items {
        id
        prices {
          row_total_including_tax {
            currency
            value
          }
        }
        product {
          name
          small_image {
            url
            label
          }
        }
      }
      prices {
        grand_total {
          currency
          value
        }
      }
      selected_payment_method {
        code
        purchase_order_number
        title
      }
      shipping_addresses {
        available_shipping_methods {
          amount {
            currency
            value
          }
          available
          carrier_code
          carrier_title
          error_message
          price_excl_tax {
            currency
            value
          }
          price_incl_tax {
            currency
            value
          }
          method_title
          method_code
        }
      }
      total_quantity
    }
    user_errors {
      code
      message
    }
  }
}
    `;
export type AddProductToCartMutationFn = Apollo.MutationFunction<AddProductToCartMutation, AddProductToCartMutationVariables>;

/**
 * __useAddProductToCartMutation__
 *
 * To run a mutation, you first call `useAddProductToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToCartMutation, { data, loading, error }] = useAddProductToCartMutation({
 *   variables: {
 *      cartItems: // value for 'cartItems'
 *   },
 * });
 */
export function useAddProductToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToCartMutation, AddProductToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToCartMutation, AddProductToCartMutationVariables>(AddProductToCartDocument, options);
      }
export type AddProductToCartMutationHookResult = ReturnType<typeof useAddProductToCartMutation>;
export type AddProductToCartMutationResult = Apollo.MutationResult<AddProductToCartMutation>;
export type AddProductToCartMutationOptions = Apollo.BaseMutationOptions<AddProductToCartMutation, AddProductToCartMutationVariables>;
export const CreateEmptyCartForUserDocument = gql`
    mutation createEmptyCartForUser {
  createEmptyCart(input: {})
}
    `;
export type CreateEmptyCartForUserMutationFn = Apollo.MutationFunction<CreateEmptyCartForUserMutation, CreateEmptyCartForUserMutationVariables>;

/**
 * __useCreateEmptyCartForUserMutation__
 *
 * To run a mutation, you first call `useCreateEmptyCartForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmptyCartForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmptyCartForUserMutation, { data, loading, error }] = useCreateEmptyCartForUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateEmptyCartForUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmptyCartForUserMutation, CreateEmptyCartForUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmptyCartForUserMutation, CreateEmptyCartForUserMutationVariables>(CreateEmptyCartForUserDocument, options);
      }
export type CreateEmptyCartForUserMutationHookResult = ReturnType<typeof useCreateEmptyCartForUserMutation>;
export type CreateEmptyCartForUserMutationResult = Apollo.MutationResult<CreateEmptyCartForUserMutation>;
export type CreateEmptyCartForUserMutationOptions = Apollo.BaseMutationOptions<CreateEmptyCartForUserMutation, CreateEmptyCartForUserMutationVariables>;
export const GetAllCategoriesDocument = gql`
    query getAllCategories {
  categories(filters: {}, pageSize: 1, currentPage: 1) {
    items {
      available_sort_by
      canonical_url
      children_count
      created_at
      children {
        id
        name
        children_count
        url_path
        url_key
        children {
          id
          name
          children {
            id
            name
            url_path
            url_key
          }
          url_path
          url_key
          children_count
        }
      }
      name
      url_path
      url_key
      product_count
      updated_at
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetProductsForIdDocument = gql`
    query getProductsForId($searchId: [String!], $currentPage: Int) {
  products(
    search: ""
    filter: {category_id: {in: $searchId}}
    pageSize: 9
    currentPage: $currentPage
    sort: {}
  ) {
    items {
      id
      attribute_set_id
      name
      sku
      image {
        url
        label
      }
      __typename
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
      categories {
        id
      }
      ... on ConfigurableProduct {
        configurable_options {
          id
          label
          position
          use_default
          attribute_code
          values {
            value_index
            label
            swatch_data {
              value
            }
          }
          product_id
        }
        variants {
          product {
            id
            name
            sku
            attribute_set_id
            image {
              url
              label
            }
            price_range {
              minimum_price {
                regular_price {
                  value
                  currency
                }
              }
            }
          }
          attributes {
            label
            code
            value_index
          }
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    sort_fields {
      default
      options {
        value
        label
      }
    }
    total_count
  }
}
    `;

/**
 * __useGetProductsForIdQuery__
 *
 * To run a query within a React component, call `useGetProductsForIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsForIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsForIdQuery({
 *   variables: {
 *      searchId: // value for 'searchId'
 *      currentPage: // value for 'currentPage'
 *   },
 * });
 */
export function useGetProductsForIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsForIdQuery, GetProductsForIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsForIdQuery, GetProductsForIdQueryVariables>(GetProductsForIdDocument, options);
      }
export function useGetProductsForIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsForIdQuery, GetProductsForIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsForIdQuery, GetProductsForIdQueryVariables>(GetProductsForIdDocument, options);
        }
export type GetProductsForIdQueryHookResult = ReturnType<typeof useGetProductsForIdQuery>;
export type GetProductsForIdLazyQueryHookResult = ReturnType<typeof useGetProductsForIdLazyQuery>;
export type GetProductsForIdQueryResult = Apollo.QueryResult<GetProductsForIdQuery, GetProductsForIdQueryVariables>;