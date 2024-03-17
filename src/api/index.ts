import { registerOverriddenValidators } from "@medusajs/medusa"
import {
   AdminPostProductsReq as MedusaAdminPostProductsReq,
} from "@medusajs/medusa/dist/api/routes/admin/products/create-product"
import {
   AdminPostProductsProductReq as MedusaAdminPostProductsProductReq
} from "@medusajs/medusa/dist/api/routes/admin/products/update-product"
import { IsString,IsOptional ,IsEnum} from "class-validator"

enum Gender {
  HIM = 'him',
  HER = 'her',
  ALL = 'all',
}
class AdminPostProductsReq extends MedusaAdminPostProductsReq {
   @IsEnum(Gender)
   @IsOptional()
   gender: string

   @IsString()
   @IsOptional()
   sub_category: string
}
class AdminPostProductsProductReq extends MedusaAdminPostProductsProductReq {
   @IsEnum(Gender)
   @IsOptional()
   gender: string

   @IsString()
   @IsOptional()
   sub_category: string
}

registerOverriddenValidators(AdminPostProductsReq)
registerOverriddenValidators(AdminPostProductsProductReq)