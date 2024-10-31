export interface Iproduct{
    productId:number
    productSku:string
    productName:string
    productPrice:number
    productShortName:string
    productDescription:string
    createdDate:string
    deliveryTimespan:string
    categoryId:number
    productImageUrl:string
    categoryName:string

}


export interface ApiResponseModel{
    message:string
    result:boolean
    data:any
}

export interface CategoryModel{
    categoryId:number
    categoryname:string
    parentCategoryId:number

}