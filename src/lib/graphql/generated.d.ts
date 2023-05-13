import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  jsonb: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user: Scalars['Boolean'];
  is_super_admin?: Maybe<Scalars['Boolean']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_sso_user?: InputMaybe<Boolean_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "confirmation_token" */
  ConfirmationTokenIdx = 'confirmation_token_idx',
  /** unique or primary key constraint on columns "email_change_token_current" */
  EmailChangeTokenCurrentIdx = 'email_change_token_current_idx',
  /** unique or primary key constraint on columns "email_change_token_new" */
  EmailChangeTokenNewIdx = 'email_change_token_new_idx',
  /** unique or primary key constraint on columns "reauthentication_token" */
  ReauthenticationTokenIdx = 'reauthentication_token_idx',
  /** unique or primary key constraint on columns "recovery_token" */
  RecoveryTokenIdx = 'recovery_token_idx',
  /** unique or primary key constraint on columns "email" */
  UsersEmailPartialKey = 'users_email_partial_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']>;
  reauthentication_token?: InputMaybe<Scalars['String']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']>;
  banned_until?: Maybe<Scalars['timestamptz']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']>;
  reauthentication_token?: Maybe<Scalars['String']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_sso_user?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']>;
  reauthentication_token?: InputMaybe<Scalars['String']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
  aud?: InputMaybe<Scalars['String']>;
  banned_until?: InputMaybe<Scalars['timestamptz']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']>;
  reauthentication_token?: InputMaybe<Scalars['String']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "books" */
export type Books = {
  __typename?: 'books';
  added_at: Scalars['date'];
  allow_borrow: Scalars['Boolean'];
  authors: Scalars['jsonb'];
  /** An array relationship */
  borroweds: Array<Borrowed>;
  /** An aggregate relationship */
  borroweds_aggregate: Borrowed_Aggregate;
  cover_url: Scalars['String'];
  description: Scalars['String'];
  genre: Scalars['String'];
  id: Scalars['uuid'];
  language: Scalars['String'];
  /** An array relationship */
  markeds: Array<Marked>;
  /** An aggregate relationship */
  markeds_aggregate: Marked_Aggregate;
  page_count: Scalars['smallint'];
  preview_link?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  published_year: Scalars['smallint'];
  publisher: Scalars['String'];
  quantity: Scalars['smallint'];
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** columns and relationships of "books" */
export type BooksAuthorsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "books" */
export type BooksBorrowedsArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksBorroweds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksMarkedsArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksMarkeds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "books" */
export type BooksReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** aggregated selection of "books" */
export type Books_Aggregate = {
  __typename?: 'books_aggregate';
  aggregate?: Maybe<Books_Aggregate_Fields>;
  nodes: Array<Books>;
};

/** aggregate fields of "books" */
export type Books_Aggregate_Fields = {
  __typename?: 'books_aggregate_fields';
  avg?: Maybe<Books_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Books_Max_Fields>;
  min?: Maybe<Books_Min_Fields>;
  stddev?: Maybe<Books_Stddev_Fields>;
  stddev_pop?: Maybe<Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Books_Stddev_Samp_Fields>;
  sum?: Maybe<Books_Sum_Fields>;
  var_pop?: Maybe<Books_Var_Pop_Fields>;
  var_samp?: Maybe<Books_Var_Samp_Fields>;
  variance?: Maybe<Books_Variance_Fields>;
};


/** aggregate fields of "books" */
export type Books_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Books_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Books_Append_Input = {
  authors?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Books_Avg_Fields = {
  __typename?: 'books_avg_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: InputMaybe<Array<Books_Bool_Exp>>;
  _not?: InputMaybe<Books_Bool_Exp>;
  _or?: InputMaybe<Array<Books_Bool_Exp>>;
  added_at?: InputMaybe<Date_Comparison_Exp>;
  allow_borrow?: InputMaybe<Boolean_Comparison_Exp>;
  authors?: InputMaybe<Jsonb_Comparison_Exp>;
  borroweds?: InputMaybe<Borrowed_Bool_Exp>;
  borroweds_aggregate?: InputMaybe<Borrowed_Aggregate_Bool_Exp>;
  cover_url?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  markeds?: InputMaybe<Marked_Bool_Exp>;
  markeds_aggregate?: InputMaybe<Marked_Aggregate_Bool_Exp>;
  page_count?: InputMaybe<Smallint_Comparison_Exp>;
  preview_link?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float_Comparison_Exp>;
  published_year?: InputMaybe<Smallint_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Smallint_Comparison_Exp>;
  reviews?: InputMaybe<Reviews_Bool_Exp>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Bool_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "books" */
export enum Books_Constraint {
  /** unique or primary key constraint on columns "id" */
  BooksPkey = 'books_pkey',
  /** unique or primary key constraint on columns "title" */
  BooksTitleKey = 'books_title_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Books_Delete_At_Path_Input = {
  authors?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Books_Delete_Elem_Input = {
  authors?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Books_Delete_Key_Input = {
  authors?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "books" */
export type Books_Inc_Input = {
  page_count?: InputMaybe<Scalars['smallint']>;
  price?: InputMaybe<Scalars['Float']>;
  published_year?: InputMaybe<Scalars['smallint']>;
  quantity?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "books" */
export type Books_Insert_Input = {
  added_at?: InputMaybe<Scalars['date']>;
  allow_borrow?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['jsonb']>;
  borroweds?: InputMaybe<Borrowed_Arr_Rel_Insert_Input>;
  cover_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  language?: InputMaybe<Scalars['String']>;
  markeds?: InputMaybe<Marked_Arr_Rel_Insert_Input>;
  page_count?: InputMaybe<Scalars['smallint']>;
  preview_link?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  published_year?: InputMaybe<Scalars['smallint']>;
  publisher?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  reviews?: InputMaybe<Reviews_Arr_Rel_Insert_Input>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Books_Max_Fields = {
  __typename?: 'books_max_fields';
  added_at?: Maybe<Scalars['date']>;
  cover_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  page_count?: Maybe<Scalars['smallint']>;
  preview_link?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['smallint']>;
  publisher?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['smallint']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Books_Min_Fields = {
  __typename?: 'books_min_fields';
  added_at?: Maybe<Scalars['date']>;
  cover_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Scalars['String']>;
  page_count?: Maybe<Scalars['smallint']>;
  preview_link?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['smallint']>;
  publisher?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['smallint']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "books" */
export type Books_Mutation_Response = {
  __typename?: 'books_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Books>;
};

/** input type for inserting object relation for remote table "books" */
export type Books_Obj_Rel_Insert_Input = {
  data: Books_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Books_On_Conflict>;
};

/** on_conflict condition type for table "books" */
export type Books_On_Conflict = {
  constraint: Books_Constraint;
  update_columns?: Array<Books_Update_Column>;
  where?: InputMaybe<Books_Bool_Exp>;
};

/** Ordering options when selecting data from "books". */
export type Books_Order_By = {
  added_at?: InputMaybe<Order_By>;
  allow_borrow?: InputMaybe<Order_By>;
  authors?: InputMaybe<Order_By>;
  borroweds_aggregate?: InputMaybe<Borrowed_Aggregate_Order_By>;
  cover_url?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  markeds_aggregate?: InputMaybe<Marked_Aggregate_Order_By>;
  page_count?: InputMaybe<Order_By>;
  preview_link?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  published_year?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: books */
export type Books_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Books_Prepend_Input = {
  authors?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "books" */
export enum Books_Select_Column {
  /** column name */
  AddedAt = 'added_at',
  /** column name */
  AllowBorrow = 'allow_borrow',
  /** column name */
  Authors = 'authors',
  /** column name */
  CoverUrl = 'cover_url',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  PageCount = 'page_count',
  /** column name */
  PreviewLink = 'preview_link',
  /** column name */
  Price = 'price',
  /** column name */
  PublishedYear = 'published_year',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "books" */
export type Books_Set_Input = {
  added_at?: InputMaybe<Scalars['date']>;
  allow_borrow?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['jsonb']>;
  cover_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  language?: InputMaybe<Scalars['String']>;
  page_count?: InputMaybe<Scalars['smallint']>;
  preview_link?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  published_year?: InputMaybe<Scalars['smallint']>;
  publisher?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Books_Stddev_Fields = {
  __typename?: 'books_stddev_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Books_Stddev_Pop_Fields = {
  __typename?: 'books_stddev_pop_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Books_Stddev_Samp_Fields = {
  __typename?: 'books_stddev_samp_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "books" */
export type Books_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Books_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Books_Stream_Cursor_Value_Input = {
  added_at?: InputMaybe<Scalars['date']>;
  allow_borrow?: InputMaybe<Scalars['Boolean']>;
  authors?: InputMaybe<Scalars['jsonb']>;
  cover_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  language?: InputMaybe<Scalars['String']>;
  page_count?: InputMaybe<Scalars['smallint']>;
  preview_link?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  published_year?: InputMaybe<Scalars['smallint']>;
  publisher?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Books_Sum_Fields = {
  __typename?: 'books_sum_fields';
  page_count?: Maybe<Scalars['smallint']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
};

/** update columns of table "books" */
export enum Books_Update_Column {
  /** column name */
  AddedAt = 'added_at',
  /** column name */
  AllowBorrow = 'allow_borrow',
  /** column name */
  Authors = 'authors',
  /** column name */
  CoverUrl = 'cover_url',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Language = 'language',
  /** column name */
  PageCount = 'page_count',
  /** column name */
  PreviewLink = 'preview_link',
  /** column name */
  Price = 'price',
  /** column name */
  PublishedYear = 'published_year',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

export type Books_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Books_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Books_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Books_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Books_Set_Input>;
  /** filter the rows which have to be updated */
  where: Books_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Books_Var_Pop_Fields = {
  __typename?: 'books_var_pop_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Books_Var_Samp_Fields = {
  __typename?: 'books_var_samp_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Books_Variance_Fields = {
  __typename?: 'books_variance_fields';
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "borrowed" */
export type Borrowed = {
  __typename?: 'borrowed';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid'];
  borrow_time: Scalars['smallint'];
  expandable_time: Scalars['smallint'];
  is_returned: Scalars['Boolean'];
  last_borrow_date: Scalars['timestamptz'];
  /** An object relationship */
  reader: Readers;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "borrowed" */
export type Borrowed_Aggregate = {
  __typename?: 'borrowed_aggregate';
  aggregate?: Maybe<Borrowed_Aggregate_Fields>;
  nodes: Array<Borrowed>;
};

export type Borrowed_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Borrowed_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Borrowed_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Borrowed_Aggregate_Bool_Exp_Count>;
};

export type Borrowed_Aggregate_Bool_Exp_Bool_And = {
  arguments: Borrowed_Select_Column_Borrowed_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Borrowed_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Borrowed_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Borrowed_Select_Column_Borrowed_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Borrowed_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Borrowed_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Borrowed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Borrowed_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "borrowed" */
export type Borrowed_Aggregate_Fields = {
  __typename?: 'borrowed_aggregate_fields';
  avg?: Maybe<Borrowed_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Borrowed_Max_Fields>;
  min?: Maybe<Borrowed_Min_Fields>;
  stddev?: Maybe<Borrowed_Stddev_Fields>;
  stddev_pop?: Maybe<Borrowed_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Borrowed_Stddev_Samp_Fields>;
  sum?: Maybe<Borrowed_Sum_Fields>;
  var_pop?: Maybe<Borrowed_Var_Pop_Fields>;
  var_samp?: Maybe<Borrowed_Var_Samp_Fields>;
  variance?: Maybe<Borrowed_Variance_Fields>;
};


/** aggregate fields of "borrowed" */
export type Borrowed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Borrowed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "borrowed" */
export type Borrowed_Aggregate_Order_By = {
  avg?: InputMaybe<Borrowed_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Borrowed_Max_Order_By>;
  min?: InputMaybe<Borrowed_Min_Order_By>;
  stddev?: InputMaybe<Borrowed_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Borrowed_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Borrowed_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Borrowed_Sum_Order_By>;
  var_pop?: InputMaybe<Borrowed_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Borrowed_Var_Samp_Order_By>;
  variance?: InputMaybe<Borrowed_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "borrowed" */
export type Borrowed_Arr_Rel_Insert_Input = {
  data: Array<Borrowed_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Borrowed_On_Conflict>;
};

/** aggregate avg on columns */
export type Borrowed_Avg_Fields = {
  __typename?: 'borrowed_avg_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "borrowed" */
export type Borrowed_Avg_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "borrowed". All fields are combined with a logical 'AND'. */
export type Borrowed_Bool_Exp = {
  _and?: InputMaybe<Array<Borrowed_Bool_Exp>>;
  _not?: InputMaybe<Borrowed_Bool_Exp>;
  _or?: InputMaybe<Array<Borrowed_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  borrow_time?: InputMaybe<Smallint_Comparison_Exp>;
  expandable_time?: InputMaybe<Smallint_Comparison_Exp>;
  is_returned?: InputMaybe<Boolean_Comparison_Exp>;
  last_borrow_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  reader?: InputMaybe<Readers_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "borrowed" */
export enum Borrowed_Constraint {
  /** unique or primary key constraint on columns "book_id", "user_id" */
  BorrowPkey = 'borrow_pkey'
}

/** input type for incrementing numeric columns in table "borrowed" */
export type Borrowed_Inc_Input = {
  borrow_time?: InputMaybe<Scalars['smallint']>;
  expandable_time?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "borrowed" */
export type Borrowed_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']>;
  borrow_time?: InputMaybe<Scalars['smallint']>;
  expandable_time?: InputMaybe<Scalars['smallint']>;
  is_returned?: InputMaybe<Scalars['Boolean']>;
  last_borrow_date?: InputMaybe<Scalars['timestamptz']>;
  reader?: InputMaybe<Readers_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Borrowed_Max_Fields = {
  __typename?: 'borrowed_max_fields';
  book_id?: Maybe<Scalars['uuid']>;
  borrow_time?: Maybe<Scalars['smallint']>;
  expandable_time?: Maybe<Scalars['smallint']>;
  last_borrow_date?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "borrowed" */
export type Borrowed_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
  last_borrow_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Borrowed_Min_Fields = {
  __typename?: 'borrowed_min_fields';
  book_id?: Maybe<Scalars['uuid']>;
  borrow_time?: Maybe<Scalars['smallint']>;
  expandable_time?: Maybe<Scalars['smallint']>;
  last_borrow_date?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "borrowed" */
export type Borrowed_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
  last_borrow_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "borrowed" */
export type Borrowed_Mutation_Response = {
  __typename?: 'borrowed_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Borrowed>;
};

/** on_conflict condition type for table "borrowed" */
export type Borrowed_On_Conflict = {
  constraint: Borrowed_Constraint;
  update_columns?: Array<Borrowed_Update_Column>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};

/** Ordering options when selecting data from "borrowed". */
export type Borrowed_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
  is_returned?: InputMaybe<Order_By>;
  last_borrow_date?: InputMaybe<Order_By>;
  reader?: InputMaybe<Readers_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: borrowed */
export type Borrowed_Pk_Columns_Input = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "borrowed" */
export enum Borrowed_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  BorrowTime = 'borrow_time',
  /** column name */
  ExpandableTime = 'expandable_time',
  /** column name */
  IsReturned = 'is_returned',
  /** column name */
  LastBorrowDate = 'last_borrow_date',
  /** column name */
  UserId = 'user_id'
}

/** select "borrowed_aggregate_bool_exp_bool_and_arguments_columns" columns of table "borrowed" */
export enum Borrowed_Select_Column_Borrowed_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsReturned = 'is_returned'
}

/** select "borrowed_aggregate_bool_exp_bool_or_arguments_columns" columns of table "borrowed" */
export enum Borrowed_Select_Column_Borrowed_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsReturned = 'is_returned'
}

/** input type for updating data in table "borrowed" */
export type Borrowed_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  borrow_time?: InputMaybe<Scalars['smallint']>;
  expandable_time?: InputMaybe<Scalars['smallint']>;
  is_returned?: InputMaybe<Scalars['Boolean']>;
  last_borrow_date?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Borrowed_Stddev_Fields = {
  __typename?: 'borrowed_stddev_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "borrowed" */
export type Borrowed_Stddev_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Borrowed_Stddev_Pop_Fields = {
  __typename?: 'borrowed_stddev_pop_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "borrowed" */
export type Borrowed_Stddev_Pop_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Borrowed_Stddev_Samp_Fields = {
  __typename?: 'borrowed_stddev_samp_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "borrowed" */
export type Borrowed_Stddev_Samp_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "borrowed" */
export type Borrowed_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Borrowed_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Borrowed_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  borrow_time?: InputMaybe<Scalars['smallint']>;
  expandable_time?: InputMaybe<Scalars['smallint']>;
  is_returned?: InputMaybe<Scalars['Boolean']>;
  last_borrow_date?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Borrowed_Sum_Fields = {
  __typename?: 'borrowed_sum_fields';
  borrow_time?: Maybe<Scalars['smallint']>;
  expandable_time?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "borrowed" */
export type Borrowed_Sum_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** update columns of table "borrowed" */
export enum Borrowed_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  BorrowTime = 'borrow_time',
  /** column name */
  ExpandableTime = 'expandable_time',
  /** column name */
  IsReturned = 'is_returned',
  /** column name */
  LastBorrowDate = 'last_borrow_date',
  /** column name */
  UserId = 'user_id'
}

export type Borrowed_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Borrowed_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Borrowed_Set_Input>;
  /** filter the rows which have to be updated */
  where: Borrowed_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Borrowed_Var_Pop_Fields = {
  __typename?: 'borrowed_var_pop_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "borrowed" */
export type Borrowed_Var_Pop_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Borrowed_Var_Samp_Fields = {
  __typename?: 'borrowed_var_samp_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "borrowed" */
export type Borrowed_Var_Samp_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Borrowed_Variance_Fields = {
  __typename?: 'borrowed_variance_fields';
  borrow_time?: Maybe<Scalars['Float']>;
  expandable_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "borrowed" */
export type Borrowed_Variance_Order_By = {
  borrow_time?: InputMaybe<Order_By>;
  expandable_time?: InputMaybe<Order_By>;
};

/** columns and relationships of "cart_items" */
export type Cart_Items = {
  __typename?: 'cart_items';
  /** An object relationship */
  cart_items_reader: Readers;
  discount: Scalars['smallint'];
  object_id: Scalars['uuid'];
  object_type: Scalars['String'];
  quantity: Scalars['smallint'];
  total_price: Scalars['Float'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "cart_items" */
export type Cart_Items_Aggregate = {
  __typename?: 'cart_items_aggregate';
  aggregate?: Maybe<Cart_Items_Aggregate_Fields>;
  nodes: Array<Cart_Items>;
};

/** aggregate fields of "cart_items" */
export type Cart_Items_Aggregate_Fields = {
  __typename?: 'cart_items_aggregate_fields';
  avg?: Maybe<Cart_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cart_Items_Max_Fields>;
  min?: Maybe<Cart_Items_Min_Fields>;
  stddev?: Maybe<Cart_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Cart_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cart_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Cart_Items_Sum_Fields>;
  var_pop?: Maybe<Cart_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Cart_Items_Var_Samp_Fields>;
  variance?: Maybe<Cart_Items_Variance_Fields>;
};


/** aggregate fields of "cart_items" */
export type Cart_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cart_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cart_Items_Avg_Fields = {
  __typename?: 'cart_items_avg_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cart_items". All fields are combined with a logical 'AND'. */
export type Cart_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Cart_Items_Bool_Exp>>;
  _not?: InputMaybe<Cart_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Cart_Items_Bool_Exp>>;
  cart_items_reader?: InputMaybe<Readers_Bool_Exp>;
  discount?: InputMaybe<Smallint_Comparison_Exp>;
  object_id?: InputMaybe<Uuid_Comparison_Exp>;
  object_type?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Smallint_Comparison_Exp>;
  total_price?: InputMaybe<Float_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart_items" */
export enum Cart_Items_Constraint {
  /** unique or primary key constraint on columns "user_id", "object_id" */
  CartPkey = 'cart_pkey'
}

/** input type for incrementing numeric columns in table "cart_items" */
export type Cart_Items_Inc_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  total_price?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "cart_items" */
export type Cart_Items_Insert_Input = {
  cart_items_reader?: InputMaybe<Readers_Obj_Rel_Insert_Input>;
  discount?: InputMaybe<Scalars['smallint']>;
  object_id?: InputMaybe<Scalars['uuid']>;
  object_type?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  total_price?: InputMaybe<Scalars['Float']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cart_Items_Max_Fields = {
  __typename?: 'cart_items_max_fields';
  discount?: Maybe<Scalars['smallint']>;
  object_id?: Maybe<Scalars['uuid']>;
  object_type?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['smallint']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Cart_Items_Min_Fields = {
  __typename?: 'cart_items_min_fields';
  discount?: Maybe<Scalars['smallint']>;
  object_id?: Maybe<Scalars['uuid']>;
  object_type?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['smallint']>;
  total_price?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "cart_items" */
export type Cart_Items_Mutation_Response = {
  __typename?: 'cart_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cart_Items>;
};

/** on_conflict condition type for table "cart_items" */
export type Cart_Items_On_Conflict = {
  constraint: Cart_Items_Constraint;
  update_columns?: Array<Cart_Items_Update_Column>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "cart_items". */
export type Cart_Items_Order_By = {
  cart_items_reader?: InputMaybe<Readers_Order_By>;
  discount?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  total_price?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cart_items */
export type Cart_Items_Pk_Columns_Input = {
  object_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "cart_items" */
export enum Cart_Items_Select_Column {
  /** column name */
  Discount = 'discount',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "cart_items" */
export type Cart_Items_Set_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  object_id?: InputMaybe<Scalars['uuid']>;
  object_type?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  total_price?: InputMaybe<Scalars['Float']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Cart_Items_Stddev_Fields = {
  __typename?: 'cart_items_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cart_Items_Stddev_Pop_Fields = {
  __typename?: 'cart_items_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cart_Items_Stddev_Samp_Fields = {
  __typename?: 'cart_items_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "cart_items" */
export type Cart_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cart_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cart_Items_Stream_Cursor_Value_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  object_id?: InputMaybe<Scalars['uuid']>;
  object_type?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['smallint']>;
  total_price?: InputMaybe<Scalars['Float']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Cart_Items_Sum_Fields = {
  __typename?: 'cart_items_sum_fields';
  discount?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** update columns of table "cart_items" */
export enum Cart_Items_Update_Column {
  /** column name */
  Discount = 'discount',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ObjectType = 'object_type',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  UserId = 'user_id'
}

export type Cart_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cart_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cart_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cart_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cart_Items_Var_Pop_Fields = {
  __typename?: 'cart_items_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cart_Items_Var_Samp_Fields = {
  __typename?: 'cart_items_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cart_Items_Variance_Fields = {
  __typename?: 'cart_items_variance_fields';
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total_price?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "marked" */
export type Marked = {
  __typename?: 'marked';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid'];
  label: Scalars['String'];
  mark_date: Scalars['date'];
  /** An object relationship */
  reader: Readers;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "marked" */
export type Marked_Aggregate = {
  __typename?: 'marked_aggregate';
  aggregate?: Maybe<Marked_Aggregate_Fields>;
  nodes: Array<Marked>;
};

export type Marked_Aggregate_Bool_Exp = {
  count?: InputMaybe<Marked_Aggregate_Bool_Exp_Count>;
};

export type Marked_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marked_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Marked_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "marked" */
export type Marked_Aggregate_Fields = {
  __typename?: 'marked_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Marked_Max_Fields>;
  min?: Maybe<Marked_Min_Fields>;
};


/** aggregate fields of "marked" */
export type Marked_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marked_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "marked" */
export type Marked_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marked_Max_Order_By>;
  min?: InputMaybe<Marked_Min_Order_By>;
};

/** input type for inserting array relation for remote table "marked" */
export type Marked_Arr_Rel_Insert_Input = {
  data: Array<Marked_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Marked_On_Conflict>;
};

/** Boolean expression to filter rows from the table "marked". All fields are combined with a logical 'AND'. */
export type Marked_Bool_Exp = {
  _and?: InputMaybe<Array<Marked_Bool_Exp>>;
  _not?: InputMaybe<Marked_Bool_Exp>;
  _or?: InputMaybe<Array<Marked_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  mark_date?: InputMaybe<Date_Comparison_Exp>;
  reader?: InputMaybe<Readers_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "marked" */
export enum Marked_Constraint {
  /** unique or primary key constraint on columns "book_id", "user_id" */
  MarkedPkey = 'marked_pkey'
}

/** input type for inserting data into table "marked" */
export type Marked_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  mark_date?: InputMaybe<Scalars['date']>;
  reader?: InputMaybe<Readers_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Marked_Max_Fields = {
  __typename?: 'marked_max_fields';
  book_id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  mark_date?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "marked" */
export type Marked_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  mark_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marked_Min_Fields = {
  __typename?: 'marked_min_fields';
  book_id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  mark_date?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "marked" */
export type Marked_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  mark_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "marked" */
export type Marked_Mutation_Response = {
  __typename?: 'marked_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Marked>;
};

/** on_conflict condition type for table "marked" */
export type Marked_On_Conflict = {
  constraint: Marked_Constraint;
  update_columns?: Array<Marked_Update_Column>;
  where?: InputMaybe<Marked_Bool_Exp>;
};

/** Ordering options when selecting data from "marked". */
export type Marked_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  mark_date?: InputMaybe<Order_By>;
  reader?: InputMaybe<Readers_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: marked */
export type Marked_Pk_Columns_Input = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "marked" */
export enum Marked_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Label = 'label',
  /** column name */
  MarkDate = 'mark_date',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "marked" */
export type Marked_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  mark_date?: InputMaybe<Scalars['date']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "marked" */
export type Marked_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marked_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marked_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  label?: InputMaybe<Scalars['String']>;
  mark_date?: InputMaybe<Scalars['date']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "marked" */
export enum Marked_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  Label = 'label',
  /** column name */
  MarkDate = 'mark_date',
  /** column name */
  UserId = 'user_id'
}

export type Marked_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Marked_Set_Input>;
  /** filter the rows which have to be updated */
  where: Marked_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "books" */
  delete_books?: Maybe<Books_Mutation_Response>;
  /** delete single row from the table: "books" */
  delete_books_by_pk?: Maybe<Books>;
  /** delete data from the table: "borrowed" */
  delete_borrowed?: Maybe<Borrowed_Mutation_Response>;
  /** delete single row from the table: "borrowed" */
  delete_borrowed_by_pk?: Maybe<Borrowed>;
  /** delete data from the table: "cart_items" */
  delete_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** delete single row from the table: "cart_items" */
  delete_cart_items_by_pk?: Maybe<Cart_Items>;
  /** delete data from the table: "marked" */
  delete_marked?: Maybe<Marked_Mutation_Response>;
  /** delete single row from the table: "marked" */
  delete_marked_by_pk?: Maybe<Marked>;
  /** delete data from the table: "readers" */
  delete_readers?: Maybe<Readers_Mutation_Response>;
  /** delete single row from the table: "readers" */
  delete_readers_by_pk?: Maybe<Readers>;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete single row from the table: "reviews" */
  delete_reviews_by_pk?: Maybe<Reviews>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "books" */
  insert_books?: Maybe<Books_Mutation_Response>;
  /** insert a single row into the table: "books" */
  insert_books_one?: Maybe<Books>;
  /** insert data into the table: "borrowed" */
  insert_borrowed?: Maybe<Borrowed_Mutation_Response>;
  /** insert a single row into the table: "borrowed" */
  insert_borrowed_one?: Maybe<Borrowed>;
  /** insert data into the table: "cart_items" */
  insert_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** insert a single row into the table: "cart_items" */
  insert_cart_items_one?: Maybe<Cart_Items>;
  /** insert data into the table: "marked" */
  insert_marked?: Maybe<Marked_Mutation_Response>;
  /** insert a single row into the table: "marked" */
  insert_marked_one?: Maybe<Marked>;
  /** insert data into the table: "readers" */
  insert_readers?: Maybe<Readers_Mutation_Response>;
  /** insert a single row into the table: "readers" */
  insert_readers_one?: Maybe<Readers>;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert a single row into the table: "reviews" */
  insert_reviews_one?: Maybe<Reviews>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update multiples rows of table: "auth.users" */
  update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
  /** update data of the table: "books" */
  update_books?: Maybe<Books_Mutation_Response>;
  /** update single row of the table: "books" */
  update_books_by_pk?: Maybe<Books>;
  /** update multiples rows of table: "books" */
  update_books_many?: Maybe<Array<Maybe<Books_Mutation_Response>>>;
  /** update data of the table: "borrowed" */
  update_borrowed?: Maybe<Borrowed_Mutation_Response>;
  /** update single row of the table: "borrowed" */
  update_borrowed_by_pk?: Maybe<Borrowed>;
  /** update multiples rows of table: "borrowed" */
  update_borrowed_many?: Maybe<Array<Maybe<Borrowed_Mutation_Response>>>;
  /** update data of the table: "cart_items" */
  update_cart_items?: Maybe<Cart_Items_Mutation_Response>;
  /** update single row of the table: "cart_items" */
  update_cart_items_by_pk?: Maybe<Cart_Items>;
  /** update multiples rows of table: "cart_items" */
  update_cart_items_many?: Maybe<Array<Maybe<Cart_Items_Mutation_Response>>>;
  /** update data of the table: "marked" */
  update_marked?: Maybe<Marked_Mutation_Response>;
  /** update single row of the table: "marked" */
  update_marked_by_pk?: Maybe<Marked>;
  /** update multiples rows of table: "marked" */
  update_marked_many?: Maybe<Array<Maybe<Marked_Mutation_Response>>>;
  /** update data of the table: "readers" */
  update_readers?: Maybe<Readers_Mutation_Response>;
  /** update single row of the table: "readers" */
  update_readers_by_pk?: Maybe<Readers>;
  /** update multiples rows of table: "readers" */
  update_readers_many?: Maybe<Array<Maybe<Readers_Mutation_Response>>>;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update single row of the table: "reviews" */
  update_reviews_by_pk?: Maybe<Reviews>;
  /** update multiples rows of table: "reviews" */
  update_reviews_many?: Maybe<Array<Maybe<Reviews_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BooksArgs = {
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Books_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BorrowedArgs = {
  where: Borrowed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Borrowed_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cart_ItemsArgs = {
  where: Cart_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_Items_By_PkArgs = {
  object_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MarkedArgs = {
  where: Marked_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Marked_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReadersArgs = {
  where: Readers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Readers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BooksArgs = {
  objects: Array<Books_Insert_Input>;
  on_conflict?: InputMaybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Books_OneArgs = {
  object: Books_Insert_Input;
  on_conflict?: InputMaybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BorrowedArgs = {
  objects: Array<Borrowed_Insert_Input>;
  on_conflict?: InputMaybe<Borrowed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Borrowed_OneArgs = {
  object: Borrowed_Insert_Input;
  on_conflict?: InputMaybe<Borrowed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_ItemsArgs = {
  objects: Array<Cart_Items_Insert_Input>;
  on_conflict?: InputMaybe<Cart_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_Items_OneArgs = {
  object: Cart_Items_Insert_Input;
  on_conflict?: InputMaybe<Cart_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MarkedArgs = {
  objects: Array<Marked_Insert_Input>;
  on_conflict?: InputMaybe<Marked_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Marked_OneArgs = {
  object: Marked_Insert_Input;
  on_conflict?: InputMaybe<Marked_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReadersArgs = {
  objects: Array<Readers_Insert_Input>;
  on_conflict?: InputMaybe<Readers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Readers_OneArgs = {
  object: Readers_Insert_Input;
  on_conflict?: InputMaybe<Readers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input;
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
  updates: Array<Auth_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BooksArgs = {
  _append?: InputMaybe<Books_Append_Input>;
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  _inc?: InputMaybe<Books_Inc_Input>;
  _prepend?: InputMaybe<Books_Prepend_Input>;
  _set?: InputMaybe<Books_Set_Input>;
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Books_By_PkArgs = {
  _append?: InputMaybe<Books_Append_Input>;
  _delete_at_path?: InputMaybe<Books_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Books_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Books_Delete_Key_Input>;
  _inc?: InputMaybe<Books_Inc_Input>;
  _prepend?: InputMaybe<Books_Prepend_Input>;
  _set?: InputMaybe<Books_Set_Input>;
  pk_columns: Books_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Books_ManyArgs = {
  updates: Array<Books_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BorrowedArgs = {
  _inc?: InputMaybe<Borrowed_Inc_Input>;
  _set?: InputMaybe<Borrowed_Set_Input>;
  where: Borrowed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Borrowed_By_PkArgs = {
  _inc?: InputMaybe<Borrowed_Inc_Input>;
  _set?: InputMaybe<Borrowed_Set_Input>;
  pk_columns: Borrowed_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Borrowed_ManyArgs = {
  updates: Array<Borrowed_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_ItemsArgs = {
  _inc?: InputMaybe<Cart_Items_Inc_Input>;
  _set?: InputMaybe<Cart_Items_Set_Input>;
  where: Cart_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_Items_By_PkArgs = {
  _inc?: InputMaybe<Cart_Items_Inc_Input>;
  _set?: InputMaybe<Cart_Items_Set_Input>;
  pk_columns: Cart_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_Items_ManyArgs = {
  updates: Array<Cart_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MarkedArgs = {
  _set?: InputMaybe<Marked_Set_Input>;
  where: Marked_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Marked_By_PkArgs = {
  _set?: InputMaybe<Marked_Set_Input>;
  pk_columns: Marked_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Marked_ManyArgs = {
  updates: Array<Marked_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReadersArgs = {
  _append?: InputMaybe<Readers_Append_Input>;
  _delete_at_path?: InputMaybe<Readers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Readers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Readers_Delete_Key_Input>;
  _inc?: InputMaybe<Readers_Inc_Input>;
  _prepend?: InputMaybe<Readers_Prepend_Input>;
  _set?: InputMaybe<Readers_Set_Input>;
  where: Readers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Readers_By_PkArgs = {
  _append?: InputMaybe<Readers_Append_Input>;
  _delete_at_path?: InputMaybe<Readers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Readers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Readers_Delete_Key_Input>;
  _inc?: InputMaybe<Readers_Inc_Input>;
  _prepend?: InputMaybe<Readers_Prepend_Input>;
  _set?: InputMaybe<Readers_Set_Input>;
  pk_columns: Readers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Readers_ManyArgs = {
  updates: Array<Readers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>;
  _set?: InputMaybe<Reviews_Set_Input>;
  pk_columns: Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_ManyArgs = {
  updates: Array<Reviews_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table: "borrowed" */
  borrowed: Array<Borrowed>;
  /** fetch aggregated fields from the table: "borrowed" */
  borrowed_aggregate: Borrowed_Aggregate;
  /** fetch data from the table: "borrowed" using primary key columns */
  borrowed_by_pk?: Maybe<Borrowed>;
  /** fetch data from the table: "cart_items" */
  cart_items: Array<Cart_Items>;
  /** fetch aggregated fields from the table: "cart_items" */
  cart_items_aggregate: Cart_Items_Aggregate;
  /** fetch data from the table: "cart_items" using primary key columns */
  cart_items_by_pk?: Maybe<Cart_Items>;
  /** fetch data from the table: "marked" */
  marked: Array<Marked>;
  /** fetch aggregated fields from the table: "marked" */
  marked_aggregate: Marked_Aggregate;
  /** fetch data from the table: "marked" using primary key columns */
  marked_by_pk?: Maybe<Marked>;
  /** fetch data from the table: "readers" */
  readers: Array<Readers>;
  /** fetch aggregated fields from the table: "readers" */
  readers_aggregate: Readers_Aggregate;
  /** fetch data from the table: "readers" using primary key columns */
  readers_by_pk?: Maybe<Readers>;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Query_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Query_RootBooks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBorrowedArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


export type Query_RootBorrowed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


export type Query_RootBorrowed_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootCart_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Cart_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cart_Items_Order_By>>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};


export type Query_RootCart_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cart_Items_Order_By>>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};


export type Query_RootCart_Items_By_PkArgs = {
  object_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootMarkedArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


export type Query_RootMarked_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


export type Query_RootMarked_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootReadersArgs = {
  distinct_on?: InputMaybe<Array<Readers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Readers_Order_By>>;
  where?: InputMaybe<Readers_Bool_Exp>;
};


export type Query_RootReaders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Readers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Readers_Order_By>>;
  where?: InputMaybe<Readers_Bool_Exp>;
};


export type Query_RootReaders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Query_RootReviews_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** columns and relationships of "readers" */
export type Readers = {
  __typename?: 'readers';
  annual_goal: Scalars['smallint'];
  /** An array relationship */
  borroweds: Array<Borrowed>;
  /** An aggregate relationship */
  borroweds_aggregate: Borrowed_Aggregate;
  favourite_genres: Scalars['jsonb'];
  id: Scalars['uuid'];
  is_vip_member: Scalars['Boolean'];
  /** An array relationship */
  markeds: Array<Marked>;
  /** An aggregate relationship */
  markeds_aggregate: Marked_Aggregate;
  photo_url?: Maybe<Scalars['String']>;
  points: Scalars['smallint'];
  reputation: Scalars['Int'];
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  username: Scalars['String'];
};


/** columns and relationships of "readers" */
export type ReadersBorrowedsArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


/** columns and relationships of "readers" */
export type ReadersBorroweds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


/** columns and relationships of "readers" */
export type ReadersFavourite_GenresArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "readers" */
export type ReadersMarkedsArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


/** columns and relationships of "readers" */
export type ReadersMarkeds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


/** columns and relationships of "readers" */
export type ReadersReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "readers" */
export type ReadersReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** aggregated selection of "readers" */
export type Readers_Aggregate = {
  __typename?: 'readers_aggregate';
  aggregate?: Maybe<Readers_Aggregate_Fields>;
  nodes: Array<Readers>;
};

/** aggregate fields of "readers" */
export type Readers_Aggregate_Fields = {
  __typename?: 'readers_aggregate_fields';
  avg?: Maybe<Readers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Readers_Max_Fields>;
  min?: Maybe<Readers_Min_Fields>;
  stddev?: Maybe<Readers_Stddev_Fields>;
  stddev_pop?: Maybe<Readers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Readers_Stddev_Samp_Fields>;
  sum?: Maybe<Readers_Sum_Fields>;
  var_pop?: Maybe<Readers_Var_Pop_Fields>;
  var_samp?: Maybe<Readers_Var_Samp_Fields>;
  variance?: Maybe<Readers_Variance_Fields>;
};


/** aggregate fields of "readers" */
export type Readers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Readers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Readers_Append_Input = {
  favourite_genres?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Readers_Avg_Fields = {
  __typename?: 'readers_avg_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "readers". All fields are combined with a logical 'AND'. */
export type Readers_Bool_Exp = {
  _and?: InputMaybe<Array<Readers_Bool_Exp>>;
  _not?: InputMaybe<Readers_Bool_Exp>;
  _or?: InputMaybe<Array<Readers_Bool_Exp>>;
  annual_goal?: InputMaybe<Smallint_Comparison_Exp>;
  borroweds?: InputMaybe<Borrowed_Bool_Exp>;
  borroweds_aggregate?: InputMaybe<Borrowed_Aggregate_Bool_Exp>;
  favourite_genres?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_vip_member?: InputMaybe<Boolean_Comparison_Exp>;
  markeds?: InputMaybe<Marked_Bool_Exp>;
  markeds_aggregate?: InputMaybe<Marked_Aggregate_Bool_Exp>;
  photo_url?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Smallint_Comparison_Exp>;
  reputation?: InputMaybe<Int_Comparison_Exp>;
  reviews?: InputMaybe<Reviews_Bool_Exp>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "readers" */
export enum Readers_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "username" */
  UsersUsernameKey = 'users_username_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Readers_Delete_At_Path_Input = {
  favourite_genres?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Readers_Delete_Elem_Input = {
  favourite_genres?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Readers_Delete_Key_Input = {
  favourite_genres?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "readers" */
export type Readers_Inc_Input = {
  annual_goal?: InputMaybe<Scalars['smallint']>;
  points?: InputMaybe<Scalars['smallint']>;
  reputation?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "readers" */
export type Readers_Insert_Input = {
  annual_goal?: InputMaybe<Scalars['smallint']>;
  borroweds?: InputMaybe<Borrowed_Arr_Rel_Insert_Input>;
  favourite_genres?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_vip_member?: InputMaybe<Scalars['Boolean']>;
  markeds?: InputMaybe<Marked_Arr_Rel_Insert_Input>;
  photo_url?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['smallint']>;
  reputation?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<Reviews_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Readers_Max_Fields = {
  __typename?: 'readers_max_fields';
  annual_goal?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['smallint']>;
  reputation?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Readers_Min_Fields = {
  __typename?: 'readers_min_fields';
  annual_goal?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['uuid']>;
  photo_url?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['smallint']>;
  reputation?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "readers" */
export type Readers_Mutation_Response = {
  __typename?: 'readers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Readers>;
};

/** input type for inserting object relation for remote table "readers" */
export type Readers_Obj_Rel_Insert_Input = {
  data: Readers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Readers_On_Conflict>;
};

/** on_conflict condition type for table "readers" */
export type Readers_On_Conflict = {
  constraint: Readers_Constraint;
  update_columns?: Array<Readers_Update_Column>;
  where?: InputMaybe<Readers_Bool_Exp>;
};

/** Ordering options when selecting data from "readers". */
export type Readers_Order_By = {
  annual_goal?: InputMaybe<Order_By>;
  borroweds_aggregate?: InputMaybe<Borrowed_Aggregate_Order_By>;
  favourite_genres?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_vip_member?: InputMaybe<Order_By>;
  markeds_aggregate?: InputMaybe<Marked_Aggregate_Order_By>;
  photo_url?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  reputation?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: readers */
export type Readers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Readers_Prepend_Input = {
  favourite_genres?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "readers" */
export enum Readers_Select_Column {
  /** column name */
  AnnualGoal = 'annual_goal',
  /** column name */
  FavouriteGenres = 'favourite_genres',
  /** column name */
  Id = 'id',
  /** column name */
  IsVipMember = 'is_vip_member',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  Points = 'points',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "readers" */
export type Readers_Set_Input = {
  annual_goal?: InputMaybe<Scalars['smallint']>;
  favourite_genres?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_vip_member?: InputMaybe<Scalars['Boolean']>;
  photo_url?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['smallint']>;
  reputation?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Readers_Stddev_Fields = {
  __typename?: 'readers_stddev_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Readers_Stddev_Pop_Fields = {
  __typename?: 'readers_stddev_pop_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Readers_Stddev_Samp_Fields = {
  __typename?: 'readers_stddev_samp_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "readers" */
export type Readers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Readers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Readers_Stream_Cursor_Value_Input = {
  annual_goal?: InputMaybe<Scalars['smallint']>;
  favourite_genres?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_vip_member?: InputMaybe<Scalars['Boolean']>;
  photo_url?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['smallint']>;
  reputation?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Readers_Sum_Fields = {
  __typename?: 'readers_sum_fields';
  annual_goal?: Maybe<Scalars['smallint']>;
  points?: Maybe<Scalars['smallint']>;
  reputation?: Maybe<Scalars['Int']>;
};

/** update columns of table "readers" */
export enum Readers_Update_Column {
  /** column name */
  AnnualGoal = 'annual_goal',
  /** column name */
  FavouriteGenres = 'favourite_genres',
  /** column name */
  Id = 'id',
  /** column name */
  IsVipMember = 'is_vip_member',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  Points = 'points',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Username = 'username'
}

export type Readers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Readers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Readers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Readers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Readers_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Readers_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Readers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Readers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Readers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Readers_Var_Pop_Fields = {
  __typename?: 'readers_var_pop_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Readers_Var_Samp_Fields = {
  __typename?: 'readers_var_samp_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Readers_Variance_Fields = {
  __typename?: 'readers_variance_fields';
  annual_goal?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  reputation?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "reviews" */
export type Reviews = {
  __typename?: 'reviews';
  /** An object relationship */
  book: Books;
  book_id: Scalars['uuid'];
  dislike_count: Scalars['Int'];
  id: Scalars['uuid'];
  like_count: Scalars['Int'];
  rating: Scalars['smallint'];
  /** An object relationship */
  reader: Readers;
  text?: Maybe<Scalars['String']>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: 'reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

export type Reviews_Aggregate_Bool_Exp = {
  count?: InputMaybe<Reviews_Aggregate_Bool_Exp_Count>;
};

export type Reviews_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Reviews_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: 'reviews_aggregate_fields';
  avg?: Maybe<Reviews_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};


/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reviews_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  avg?: InputMaybe<Reviews_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Reviews_Max_Order_By>;
  min?: InputMaybe<Reviews_Min_Order_By>;
  stddev?: InputMaybe<Reviews_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Reviews_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Reviews_Sum_Order_By>;
  var_pop?: InputMaybe<Reviews_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Reviews_Var_Samp_Order_By>;
  variance?: InputMaybe<Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: 'reviews_avg_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reviews" */
export type Reviews_Avg_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: InputMaybe<Array<Reviews_Bool_Exp>>;
  _not?: InputMaybe<Reviews_Bool_Exp>;
  _or?: InputMaybe<Array<Reviews_Bool_Exp>>;
  book?: InputMaybe<Books_Bool_Exp>;
  book_id?: InputMaybe<Uuid_Comparison_Exp>;
  dislike_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  like_count?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Smallint_Comparison_Exp>;
  reader?: InputMaybe<Readers_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReviewIdKey = 'review_id_key',
  /** unique or primary key constraint on columns "book_id", "user_id" */
  ReviewPkey = 'review_pkey'
}

/** input type for incrementing numeric columns in table "reviews" */
export type Reviews_Inc_Input = {
  dislike_count?: InputMaybe<Scalars['Int']>;
  like_count?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  book?: InputMaybe<Books_Obj_Rel_Insert_Input>;
  book_id?: InputMaybe<Scalars['uuid']>;
  dislike_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  like_count?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['smallint']>;
  reader?: InputMaybe<Readers_Obj_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'reviews_max_fields';
  book_id?: Maybe<Scalars['uuid']>;
  dislike_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  like_count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  book_id?: InputMaybe<Order_By>;
  dislike_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: 'reviews_min_fields';
  book_id?: Maybe<Scalars['uuid']>;
  dislike_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  like_count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  book_id?: InputMaybe<Order_By>;
  dislike_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: 'reviews_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Reviews>;
};

/** on_conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns?: Array<Reviews_Update_Column>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** Ordering options when selecting data from "reviews". */
export type Reviews_Order_By = {
  book?: InputMaybe<Books_Order_By>;
  book_id?: InputMaybe<Order_By>;
  dislike_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reader?: InputMaybe<Readers_Order_By>;
  text?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reviews */
export type Reviews_Pk_Columns_Input = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  DislikeCount = 'dislike_count',
  /** column name */
  Id = 'id',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Rating = 'rating',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  dislike_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  like_count?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['smallint']>;
  text?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: 'reviews_stddev_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reviews" */
export type Reviews_Stddev_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: 'reviews_stddev_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reviews" */
export type Reviews_Stddev_Pop_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: 'reviews_stddev_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reviews" */
export type Reviews_Stddev_Samp_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "reviews" */
export type Reviews_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reviews_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reviews_Stream_Cursor_Value_Input = {
  book_id?: InputMaybe<Scalars['uuid']>;
  dislike_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  like_count?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['smallint']>;
  text?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: 'reviews_sum_fields';
  dislike_count?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  BookId = 'book_id',
  /** column name */
  DislikeCount = 'dislike_count',
  /** column name */
  Id = 'id',
  /** column name */
  LikeCount = 'like_count',
  /** column name */
  Rating = 'rating',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

export type Reviews_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reviews_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reviews_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reviews_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: 'reviews_var_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reviews" */
export type Reviews_Var_Pop_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: 'reviews_var_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reviews" */
export type Reviews_Var_Samp_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: 'reviews_variance_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reviews" */
export type Reviews_Variance_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  auth_users_stream: Array<Auth_Users>;
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table in a streaming manner: "books" */
  books_stream: Array<Books>;
  /** fetch data from the table: "borrowed" */
  borrowed: Array<Borrowed>;
  /** fetch aggregated fields from the table: "borrowed" */
  borrowed_aggregate: Borrowed_Aggregate;
  /** fetch data from the table: "borrowed" using primary key columns */
  borrowed_by_pk?: Maybe<Borrowed>;
  /** fetch data from the table in a streaming manner: "borrowed" */
  borrowed_stream: Array<Borrowed>;
  /** fetch data from the table: "cart_items" */
  cart_items: Array<Cart_Items>;
  /** fetch aggregated fields from the table: "cart_items" */
  cart_items_aggregate: Cart_Items_Aggregate;
  /** fetch data from the table: "cart_items" using primary key columns */
  cart_items_by_pk?: Maybe<Cart_Items>;
  /** fetch data from the table in a streaming manner: "cart_items" */
  cart_items_stream: Array<Cart_Items>;
  /** fetch data from the table: "marked" */
  marked: Array<Marked>;
  /** fetch aggregated fields from the table: "marked" */
  marked_aggregate: Marked_Aggregate;
  /** fetch data from the table: "marked" using primary key columns */
  marked_by_pk?: Maybe<Marked>;
  /** fetch data from the table in a streaming manner: "marked" */
  marked_stream: Array<Marked>;
  /** fetch data from the table: "readers" */
  readers: Array<Readers>;
  /** fetch aggregated fields from the table: "readers" */
  readers_aggregate: Readers_Aggregate;
  /** fetch data from the table: "readers" using primary key columns */
  readers_by_pk?: Maybe<Readers>;
  /** fetch data from the table in a streaming manner: "readers" */
  readers_stream: Array<Readers>;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table in a streaming manner: "reviews" */
  reviews_stream: Array<Reviews>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Users_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootBooksArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Books_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Books_Order_By>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBooks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBooks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Books_Stream_Cursor_Input>>;
  where?: InputMaybe<Books_Bool_Exp>;
};


export type Subscription_RootBorrowedArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


export type Subscription_RootBorrowed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Borrowed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Borrowed_Order_By>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


export type Subscription_RootBorrowed_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootBorrowed_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Borrowed_Stream_Cursor_Input>>;
  where?: InputMaybe<Borrowed_Bool_Exp>;
};


export type Subscription_RootCart_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Cart_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cart_Items_Order_By>>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};


export type Subscription_RootCart_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cart_Items_Order_By>>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};


export type Subscription_RootCart_Items_By_PkArgs = {
  object_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootCart_Items_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cart_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Cart_Items_Bool_Exp>;
};


export type Subscription_RootMarkedArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


export type Subscription_RootMarked_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marked_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marked_Order_By>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


export type Subscription_RootMarked_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootMarked_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Marked_Stream_Cursor_Input>>;
  where?: InputMaybe<Marked_Bool_Exp>;
};


export type Subscription_RootReadersArgs = {
  distinct_on?: InputMaybe<Array<Readers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Readers_Order_By>>;
  where?: InputMaybe<Readers_Bool_Exp>;
};


export type Subscription_RootReaders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Readers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Readers_Order_By>>;
  where?: InputMaybe<Readers_Bool_Exp>;
};


export type Subscription_RootReaders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReaders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Readers_Stream_Cursor_Input>>;
  where?: InputMaybe<Readers_Bool_Exp>;
};


export type Subscription_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Reviews_Order_By>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};


export type Subscription_RootReviews_By_PkArgs = {
  book_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootReviews_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Reviews_Stream_Cursor_Input>>;
  where?: InputMaybe<Reviews_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetBookQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetBookQuery = { __typename?: 'query_root', books_by_pk?: { __typename?: 'books', id: any, allow_borrow: boolean, authors: any, cover_url: string, description: string, genre: string, language: string, page_count: any, preview_link?: string | null, price: number, published_year: any, publisher: string, quantity: any, subtitle?: string | null, title: string, reviews: Array<{ __typename?: 'reviews', dislike_count: number, id: any, like_count: number, rating: any, text?: string | null, reader: { __typename?: 'readers', id: any, username: string, photo_url?: string | null } }>, reviews_aggregate: { __typename?: 'reviews_aggregate', aggregate?: { __typename?: 'reviews_aggregate_fields', count: number, avg?: { __typename?: 'reviews_avg_fields', rating?: number | null } | null } | null } } | null };

export type GetBooksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetBooksQuery = { __typename?: 'query_root', books: Array<{ __typename?: 'books', id: any, title: string, price: number, quantity: any, authors: any, allow_borrow: boolean, cover_url: string, reviews_aggregate: { __typename?: 'reviews_aggregate', aggregate?: { __typename?: 'reviews_aggregate_fields', count: number, avg?: { __typename?: 'reviews_avg_fields', rating?: number | null } | null } | null } }> };

export type GetReaderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetReaderQuery = { __typename?: 'query_root', readers_by_pk?: { __typename?: 'readers', id: any, username: string, annual_goal: any, is_vip_member: boolean, points: any, favourite_genres: any, markeds: Array<{ __typename?: 'marked', book: { __typename?: 'books', authors: any, cover_url: string, id: any, subtitle?: string | null, title: string } }>, reviews: Array<{ __typename?: 'reviews', id: any, dislike_count: number, like_count: number, rating: any, text?: string | null, book: { __typename?: 'books', cover_url: string, title: string, id: any } }> } | null };

export type GetReadersQueryVariables = Exact<{
  genres?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetReadersQuery = { __typename?: 'query_root', readers: Array<{ __typename?: 'readers', id: any, username: string, photo_url?: string | null, reviews_aggregate: { __typename?: 'reviews_aggregate', aggregate?: { __typename?: 'reviews_aggregate_fields', count: number } | null } }> };


export const GetBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"allow_borrow"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"cover_url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"page_count"}},{"kind":"Field","name":{"kind":"Name","value":"preview_link"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"published_year"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dislike_count"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"like_count"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"reader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"photo_url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"avg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBookQuery, GetBookQueryVariables>;
export const GetBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"allow_borrow"}},{"kind":"Field","name":{"kind":"Name","value":"cover_url"}},{"kind":"Field","name":{"kind":"Name","value":"reviews_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"avg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;
export const GetReaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"readers_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"annual_goal"}},{"kind":"Field","name":{"kind":"Name","value":"is_vip_member"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"favourite_genres"}},{"kind":"Field","name":{"kind":"Name","value":"markeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"cover_url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dislike_count"}},{"kind":"Field","name":{"kind":"Name","value":"like_count"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cover_url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReaderQuery, GetReaderQueryVariables>;
export const GetReadersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReaders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"genres"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"readers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"reputation"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"favourite_genres"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_has_keys_any"},"value":{"kind":"Variable","name":{"kind":"Name","value":"genres"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"photo_url"}},{"kind":"Field","name":{"kind":"Name","value":"reviews_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReadersQuery, GetReadersQueryVariables>;