import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
  userId: Scalars['String']['output']
}

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type AdminWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  id: Scalars['String']['output']
  type: AuthProviderType
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type Company = {
  __typename?: 'Company'
  coupons: Array<Coupon>
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  managers: Array<Manager>
  updatedAt: Scalars['DateTime']['output']
}

export type CompanyOrderByWithRelationInput = {
  coupons?: InputMaybe<CouponOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>
  isNot?: InputMaybe<CompanyWhereInput>
}

export enum CompanyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>
  NOT?: InputMaybe<Array<CompanyWhereInput>>
  OR?: InputMaybe<Array<CompanyWhereInput>>
  coupons?: InputMaybe<CouponListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  managers?: InputMaybe<ManagerListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CompanyWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Coupon = {
  __typename?: 'Coupon'
  code: Scalars['String']['output']
  company?: Maybe<Company>
  companyId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  customerId?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  discount: Scalars['Float']['output']
  expiryDate: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  status: CouponStatus
  updatedAt: Scalars['DateTime']['output']
}

export enum CouponAction {
  Assigned = 'ASSIGNED',
  Created = 'CREATED',
  Expired = 'EXPIRED',
  Redeemed = 'REDEEMED',
  Revoked = 'REVOKED',
}

export type CouponHistory = {
  __typename?: 'CouponHistory'
  action: CouponAction
  couponId: Scalars['String']['output']
  id: Scalars['String']['output']
  performedBy: Scalars['String']['output']
  timestamp: Scalars['DateTime']['output']
}

export type CouponHistoryListRelationFilter = {
  every?: InputMaybe<CouponHistoryWhereInput>
  none?: InputMaybe<CouponHistoryWhereInput>
  some?: InputMaybe<CouponHistoryWhereInput>
}

export type CouponHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CouponHistoryOrderByWithRelationInput = {
  action?: InputMaybe<SortOrder>
  coupon?: InputMaybe<CouponOrderByWithRelationInput>
  couponId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  performedBy?: InputMaybe<SortOrder>
  timestamp?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum CouponHistoryScalarFieldEnum {
  Action = 'action',
  CouponId = 'couponId',
  Id = 'id',
  PerformedBy = 'performedBy',
  Timestamp = 'timestamp',
}

export type CouponHistoryWhereInput = {
  AND?: InputMaybe<Array<CouponHistoryWhereInput>>
  NOT?: InputMaybe<Array<CouponHistoryWhereInput>>
  OR?: InputMaybe<Array<CouponHistoryWhereInput>>
  action?: InputMaybe<EnumCouponActionFilter>
  coupon?: InputMaybe<CouponRelationFilter>
  couponId?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  performedBy?: InputMaybe<StringFilter>
  timestamp?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type CouponHistoryWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type CouponListRelationFilter = {
  every?: InputMaybe<CouponWhereInput>
  none?: InputMaybe<CouponWhereInput>
  some?: InputMaybe<CouponWhereInput>
}

export type CouponOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CouponOrderByWithRelationInput = {
  CouponHistory?: InputMaybe<CouponHistoryOrderByRelationAggregateInput>
  code?: InputMaybe<SortOrder>
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  customerId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  discount?: InputMaybe<SortOrder>
  expiryDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CouponRelationFilter = {
  is?: InputMaybe<CouponWhereInput>
  isNot?: InputMaybe<CouponWhereInput>
}

export enum CouponScalarFieldEnum {
  Code = 'code',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  Description = 'description',
  Discount = 'discount',
  ExpiryDate = 'expiryDate',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum CouponStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Redeemed = 'REDEEMED',
  Revoked = 'REVOKED',
}

export type CouponWhereInput = {
  AND?: InputMaybe<Array<CouponWhereInput>>
  CouponHistory?: InputMaybe<CouponHistoryListRelationFilter>
  NOT?: InputMaybe<Array<CouponWhereInput>>
  OR?: InputMaybe<Array<CouponWhereInput>>
  code?: InputMaybe<StringFilter>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  customerId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  discount?: InputMaybe<IntFilter>
  expiryDate?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  reviews?: InputMaybe<ReviewListRelationFilter>
  status?: InputMaybe<EnumCouponStatusFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CouponWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type CreateAdminInput = {
  userId: Scalars['String']['input']
}

export type CreateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  managerId?: InputMaybe<Scalars['String']['input']>
  managerName?: InputMaybe<Scalars['String']['input']>
}

export type CreateCouponHistoryInput = {
  action: CouponAction
  companyId: Scalars['String']['input']
  couponCode: Scalars['String']['input']
  couponId: Scalars['String']['input']
  discount: Scalars['Float']['input']
  expiryDate: Scalars['String']['input']
  performedBy: Scalars['String']['input']
}

export type CreateCouponInput = {
  code: Scalars['String']['input']
  companyId: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  discount: Scalars['Float']['input']
  expiryDate: Scalars['DateTime']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  managerName?: InputMaybe<Scalars['String']['input']>
  status: CouponStatus
}

export type CreateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  userId: Scalars['String']['input']
}

export type CreateExpiredCouponInput = {
  code: Scalars['String']['input']
  companyId: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  discount: Scalars['Float']['input']
  expiryDate: Scalars['DateTime']['input']
  managerId: Scalars['String']['input']
}

export type CreateManagerInput = {
  companyId?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  userId: Scalars['String']['input']
}

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  couponId: Scalars['String']['input']
  customerId: Scalars['String']['input']
  flagged: Scalars['Boolean']['input']
  rating: Scalars['Float']['input']
}

export type Customer = {
  __typename?: 'Customer'
  coupons: Array<Coupon>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
  userId: Scalars['String']['output']
}

export type CustomerOrderByWithRelationInput = {
  coupons?: InputMaybe<CouponOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>
  isNot?: InputMaybe<CustomerWhereInput>
}

export enum CustomerScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>
  NOT?: InputMaybe<Array<CustomerWhereInput>>
  OR?: InputMaybe<Array<CustomerWhereInput>>
  coupons?: InputMaybe<CouponListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  reviews?: InputMaybe<ReviewListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type CustomerWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumCouponActionFilter = {
  equals?: InputMaybe<CouponAction>
  in?: InputMaybe<Array<CouponAction>>
  not?: InputMaybe<CouponAction>
  notIn?: InputMaybe<Array<CouponAction>>
}

export type EnumCouponStatusFilter = {
  equals?: InputMaybe<CouponStatus>
  in?: InputMaybe<Array<CouponStatus>>
  not?: InputMaybe<CouponStatus>
  notIn?: InputMaybe<Array<CouponStatus>>
}

export type ExpiredCoupon = {
  __typename?: 'ExpiredCoupon'
  archivedAt: Scalars['DateTime']['output']
  code: Scalars['String']['output']
  companyId: Scalars['String']['output']
  description?: Maybe<Scalars['String']['output']>
  discount: Scalars['Float']['output']
  expiryDate: Scalars['DateTime']['output']
  id: Scalars['String']['output']
}

export type ExpiredCouponOrderByWithRelationInput = {
  archivedAt?: InputMaybe<SortOrder>
  code?: InputMaybe<SortOrder>
  companyId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  discount?: InputMaybe<SortOrder>
  expiryDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export enum ExpiredCouponScalarFieldEnum {
  ArchivedAt = 'archivedAt',
  Code = 'code',
  CompanyId = 'companyId',
  Description = 'description',
  Discount = 'discount',
  ExpiryDate = 'expiryDate',
  Id = 'id',
}

export type ExpiredCouponWhereInput = {
  AND?: InputMaybe<Array<ExpiredCouponWhereInput>>
  NOT?: InputMaybe<Array<ExpiredCouponWhereInput>>
  OR?: InputMaybe<Array<ExpiredCouponWhereInput>>
  archivedAt?: InputMaybe<DateTimeFilter>
  code?: InputMaybe<StringFilter>
  companyId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  discount?: InputMaybe<IntFilter>
  expiryDate?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
}

export type ExpiredCouponWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  token: Scalars['String']['output']
  user: User
}

export type Manager = {
  __typename?: 'Manager'
  company?: Maybe<Company>
  companyId?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['String']['output']
}

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>
  none?: InputMaybe<ManagerWhereInput>
  some?: InputMaybe<ManagerWhereInput>
}

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ManagerOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  userId?: InputMaybe<SortOrder>
}

export type ManagerRelationFilter = {
  is?: InputMaybe<ManagerWhereInput>
  isNot?: InputMaybe<ManagerWhereInput>
}

export enum ManagerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  company?: InputMaybe<CompanyRelationFilter>
  companyId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
  userId?: InputMaybe<StringFilter>
}

export type ManagerWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  createCompany: Company
  createCoupon: Coupon
  createCouponHistory: CouponHistory
  createCustomer: Customer
  createExpiredCoupon: ExpiredCoupon
  createManager: Manager
  createReview: Review
  createUserWithCredentials: User
  login: LoginOutput
  registerWithProvider: User
  removeAdmin: Admin
  removeCompany: Company
  removeCoupon: Coupon
  removeCouponHistory: CouponHistory
  removeCustomer: Customer
  removeExpiredCoupon: ExpiredCoupon
  removeManager: Manager
  removeReview: Review
  removeUser: User
  updateAdmin: Admin
  updateCompany: Company
  updateCoupon: Coupon
  updateCouponHistory: CouponHistory
  updateCustomer: Customer
  updateExpiredCoupon: ExpiredCoupon
  updateManager: Manager
  updateReview: Review
  updateUser: User
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput
}

export type MutationCreateCouponArgs = {
  createCouponInput: CreateCouponInput
}

export type MutationCreateCouponHistoryArgs = {
  createCouponHistoryInput: CreateCouponHistoryInput
}

export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput
}

export type MutationCreateExpiredCouponArgs = {
  createExpiredCouponInput: CreateExpiredCouponInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput
}

export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type MutationRemoveCouponArgs = {
  where: CouponWhereUniqueInput
}

export type MutationRemoveCouponHistoryArgs = {
  where: CouponHistoryWhereUniqueInput
}

export type MutationRemoveCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type MutationRemoveExpiredCouponArgs = {
  where: ExpiredCouponWhereUniqueInput
}

export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput
}

export type MutationUpdateCouponArgs = {
  updateCouponInput: UpdateCouponInput
}

export type MutationUpdateCouponHistoryArgs = {
  updateCouponHistoryInput: UpdateCouponHistoryInput
}

export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput
}

export type MutationUpdateExpiredCouponArgs = {
  updateExpiredCouponInput: UpdateExpiredCouponInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  companies: Array<Company>
  company: Company
  coupon: Coupon
  couponHistories: Array<CouponHistory>
  couponHistory: CouponHistory
  coupons: Array<Coupon>
  customer: Customer
  customers: Array<Customer>
  expiredCoupon: ExpiredCoupon
  expiredCoupons: Array<ExpiredCoupon>
  getAuthProvider?: Maybe<AuthProvider>
  manager: Manager
  managers: Array<Manager>
  myCompany: Company
  review: Review
  reviews: Array<Review>
  user: User
  users: Array<User>
  whoami: User
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<CompanyWhereInput>
}

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type QueryCouponArgs = {
  where: CouponWhereUniqueInput
}

export type QueryCouponHistoriesArgs = {
  cursor?: InputMaybe<CouponHistoryWhereUniqueInput>
  distinct?: InputMaybe<Array<CouponHistoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CouponHistoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<CouponHistoryWhereInput>
}

export type QueryCouponHistoryArgs = {
  where: CouponHistoryWhereUniqueInput
}

export type QueryCouponsArgs = {
  cursor?: InputMaybe<CouponWhereUniqueInput>
  distinct?: InputMaybe<Array<CouponScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CouponOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<CouponWhereInput>
}

export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<CustomerWhereInput>
}

export type QueryExpiredCouponArgs = {
  where: ExpiredCouponWhereUniqueInput
}

export type QueryExpiredCouponsArgs = {
  cursor?: InputMaybe<ExpiredCouponWhereUniqueInput>
  distinct?: InputMaybe<Array<ExpiredCouponScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ExpiredCouponOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<ExpiredCouponWhereInput>
}

export type QueryGetAuthProviderArgs = {
  id: Scalars['String']['input']
}

export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<ManagerWhereInput>
}

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<ReviewWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
  where?: InputMaybe<UserWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  id: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type: AuthProviderType
}

export type Review = {
  __typename?: 'Review'
  comment?: Maybe<Scalars['String']['output']>
  couponId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  customerId: Scalars['String']['output']
  flagged: Scalars['Boolean']['output']
  id: Scalars['String']['output']
  rating: Scalars['Float']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>
  none?: InputMaybe<ReviewWhereInput>
  some?: InputMaybe<ReviewWhereInput>
}

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>
  coupon?: InputMaybe<CouponOrderByWithRelationInput>
  couponId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  customer?: InputMaybe<CustomerOrderByWithRelationInput>
  customerId?: InputMaybe<SortOrder>
  flagged?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  rating?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ReviewScalarFieldEnum {
  Comment = 'comment',
  CouponId = 'couponId',
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  Flagged = 'flagged',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt',
}

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>
  NOT?: InputMaybe<Array<ReviewWhereInput>>
  OR?: InputMaybe<Array<ReviewWhereInput>>
  comment?: InputMaybe<StringFilter>
  coupon?: InputMaybe<CouponRelationFilter>
  couponId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customer?: InputMaybe<CustomerRelationFilter>
  customerId?: InputMaybe<StringFilter>
  flagged?: InputMaybe<BoolFilter>
  id?: InputMaybe<StringFilter>
  rating?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ReviewWhereUniqueInput = {
  id: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAdminInput = {
  id: Scalars['String']['input']
  userId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  managerName?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCouponHistoryInput = {
  action?: InputMaybe<CouponAction>
  companyId?: InputMaybe<Scalars['String']['input']>
  couponCode?: InputMaybe<Scalars['String']['input']>
  couponId?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Float']['input']>
  expiryDate?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  performedBy?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCouponInput = {
  code?: InputMaybe<Scalars['String']['input']>
  companyId?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Float']['input']>
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['String']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  managerName?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<CouponStatus>
}

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  userId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateExpiredCouponInput = {
  code?: InputMaybe<Scalars['String']['input']>
  companyId?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Float']['input']>
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['String']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateManagerInput = {
  companyId?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  userId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  couponId?: InputMaybe<Scalars['String']['input']>
  customerId?: InputMaybe<Scalars['String']['input']>
  flagged?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  rating?: InputMaybe<Scalars['Float']['input']>
}

export type UpdateUserInput = {
  id: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  createdAt: Scalars['DateTime']['output']
  customer?: Maybe<Customer>
  id: Scalars['String']['output']
  image?: Maybe<Scalars['String']['output']>
  manager?: Maybe<Manager>
  name?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  CouponHistory?: InputMaybe<CouponHistoryOrderByRelationAggregateInput>
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>
  Manager?: InputMaybe<ManagerOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  CouponHistory?: InputMaybe<CouponHistoryListRelationFilter>
  Customer?: InputMaybe<CustomerRelationFilter>
  Manager?: InputMaybe<ManagerRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  id: Scalars['String']['input']
}

export type CreateUserWithCredentialsMutationVariables = Exact<{
  createUserWithCredentialsInput: RegisterWithCredentialsInput
}>

export type CreateUserWithCredentialsMutation = {
  __typename?: 'Mutation'
  createUserWithCredentials: {
    __typename?: 'User'
    createdAt: any
    id: string
    image?: string | null
    name?: string | null
    updatedAt: any
  }
}

export type RegisterWithProviderMutationVariables = Exact<{
  registerWithProviderInput: RegisterWithProviderInput
}>

export type RegisterWithProviderMutation = {
  __typename?: 'Mutation'
  registerWithProvider: {
    __typename?: 'User'
    createdAt: any
    id: string
    image?: string | null
    name?: string | null
    updatedAt: any
  }
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    token: string
    user: {
      __typename?: 'User'
      id: string
      image?: string | null
      name?: string | null
    }
  }
}

export type GetAuthProviderQueryVariables = Exact<{
  getAuthProviderId: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    id: string
    type: AuthProviderType
  } | null
}

export type CompaniesQueryVariables = Exact<{
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum> | CompanyScalarFieldEnum>
  orderBy?: InputMaybe<
    Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput
  >
  where?: InputMaybe<CompanyWhereInput>
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  skip?: InputMaybe<Scalars['Float']['input']>
  take?: InputMaybe<Scalars['Float']['input']>
}>

export type CompaniesQuery = {
  __typename?: 'Query'
  companies: Array<{
    __typename?: 'Company'
    createdAt: any
    description?: string | null
    displayName?: string | null
    id: string
    updatedAt: any
    coupons: Array<{
      __typename?: 'Coupon'
      code: string
      description?: string | null
      discount: number
      expiryDate: any
      id: string
      status: CouponStatus
    }>
    managers: Array<{ __typename?: 'Manager'; id: string; userId: string }>
  }>
}

export type CouponsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<CouponScalarFieldEnum> | CouponScalarFieldEnum>
  where?: InputMaybe<CouponWhereInput>
  orderBy?: InputMaybe<
    Array<CouponOrderByWithRelationInput> | CouponOrderByWithRelationInput
  >
  cursor?: InputMaybe<CouponWhereUniqueInput>
  take?: InputMaybe<Scalars['Float']['input']>
  skip?: InputMaybe<Scalars['Float']['input']>
}>

export type CouponsQuery = {
  __typename?: 'Query'
  coupons: Array<{
    __typename?: 'Coupon'
    id: string
    code: string
    description?: string | null
    discount: number
    expiryDate: any
    status: CouponStatus
    companyId: string
    createdAt: any
    updatedAt: any
    company?: {
      __typename?: 'Company'
      displayName?: string | null
      description?: string | null
      id: string
    } | null
  }>
}

export type CouponQueryVariables = Exact<{
  where: CouponWhereUniqueInput
}>

export type CouponQuery = {
  __typename?: 'Query'
  coupon: {
    __typename?: 'Coupon'
    code: string
    companyId: string
    description?: string | null
    discount: number
    expiryDate: any
    id: string
    status: CouponStatus
    company?: {
      __typename?: 'Company'
      description?: string | null
      displayName?: string | null
    } | null
  }
}

export type CompanyQueryVariables = Exact<{
  where: CompanyWhereUniqueInput
}>

export type CompanyQuery = {
  __typename?: 'Query'
  company: {
    __typename?: 'Company'
    description?: string | null
    displayName?: string | null
    id: string
    coupons: Array<{
      __typename?: 'Coupon'
      code: string
      description?: string | null
      discount: number
      expiryDate: any
      id: string
      status: CouponStatus
    }>
    managers: Array<{ __typename?: 'Manager'; displayName?: string | null }>
  }
}

export const namedOperations = {
  Query: {
    GetAuthProvider: 'GetAuthProvider',
    Companies: 'Companies',
    Coupons: 'Coupons',
    Coupon: 'Coupon',
    Company: 'Company',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    registerWithProvider: 'registerWithProvider',
    login: 'login',
  },
}

export const CreateUserWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUserWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'createUserWithCredentialsInput',
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithCredentialsMutation,
  CreateUserWithCredentialsMutationVariables
>
export const RegisterWithProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'registerWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithProviderMutation,
  RegisterWithProviderMutationVariables
>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'loginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'loginInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const GetAuthProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'getAuthProviderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getAuthProviderId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
export const CompaniesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Companies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CompanyScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'CompanyOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coupons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'expiryDate' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'managers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompaniesQuery, CompaniesQueryVariables>
export const CouponsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Coupons' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CouponScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CouponWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CouponOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CouponWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coupons' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiryDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'company' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CouponsQuery, CouponsQueryVariables>
export const CouponDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Coupon' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CouponWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'coupon' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'company' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'companyId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'discount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiryDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CouponQuery, CouponQueryVariables>
export const CompanyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Company' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CompanyWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'coupons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'discount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'expiryDate' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'managers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayName' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompanyQuery, CompanyQueryVariables>
