export default async function () {
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/store/products/index"
  )) as any
  imports.allowedStoreProductsFields = [
    ...imports.allowedStoreProductsFields,
    "gender","sub_category",
  ]
  imports.defaultStoreProductsFields = [
    ...imports.defaultStoreProductsFields,
    "gender","sub_category",
  ]
}