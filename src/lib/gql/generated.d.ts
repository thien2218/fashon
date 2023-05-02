import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

/** columns and relationships of "books" */
export type Books = {
  __typename?: 'books';
  added_at: Scalars['date'];
  allow_borrow: Scalars['Boolean'];
  authors: Scalars['jsonb'];
  avg_rating: Scalars['Float'];
  cover_url: Scalars['String'];
  description: Scalars['String'];
  genre: Scalars['String'];
  id: Scalars['uuid'];
  language: Scalars['String'];
  page_count: Scalars['smallint'];
  preview_link?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  published_year: Scalars['smallint'];
  publisher: Scalars['String'];
  quantity: Scalars['smallint'];
  review_count: Scalars['smallint'];
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

/** aggregate avg on columns */
export type Books_Avg_Fields = {
  __typename?: 'books_avg_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: InputMaybe<Array<Books_Bool_Exp>>;
  _not?: InputMaybe<Books_Bool_Exp>;
  _or?: InputMaybe<Array<Books_Bool_Exp>>;
  added_at?: InputMaybe<Date_Comparison_Exp>;
  allow_borrow?: InputMaybe<Boolean_Comparison_Exp>;
  authors?: InputMaybe<Jsonb_Comparison_Exp>;
  avg_rating?: InputMaybe<Float_Comparison_Exp>;
  cover_url?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  language?: InputMaybe<String_Comparison_Exp>;
  page_count?: InputMaybe<Smallint_Comparison_Exp>;
  preview_link?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float_Comparison_Exp>;
  published_year?: InputMaybe<Smallint_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  quantity?: InputMaybe<Smallint_Comparison_Exp>;
  review_count?: InputMaybe<Smallint_Comparison_Exp>;
  reviews?: InputMaybe<Reviews_Bool_Exp>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Bool_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Books_Max_Fields = {
  __typename?: 'books_max_fields';
  added_at?: Maybe<Scalars['date']>;
  avg_rating?: Maybe<Scalars['Float']>;
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
  review_count?: Maybe<Scalars['smallint']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Books_Min_Fields = {
  __typename?: 'books_min_fields';
  added_at?: Maybe<Scalars['date']>;
  avg_rating?: Maybe<Scalars['Float']>;
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
  review_count?: Maybe<Scalars['smallint']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "books". */
export type Books_Order_By = {
  added_at?: InputMaybe<Order_By>;
  allow_borrow?: InputMaybe<Order_By>;
  authors?: InputMaybe<Order_By>;
  avg_rating?: InputMaybe<Order_By>;
  cover_url?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language?: InputMaybe<Order_By>;
  page_count?: InputMaybe<Order_By>;
  preview_link?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  published_year?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  review_count?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
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
  AvgRating = 'avg_rating',
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
  ReviewCount = 'review_count',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Books_Stddev_Fields = {
  __typename?: 'books_stddev_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Books_Stddev_Pop_Fields = {
  __typename?: 'books_stddev_pop_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Books_Stddev_Samp_Fields = {
  __typename?: 'books_stddev_samp_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
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
  avg_rating?: InputMaybe<Scalars['Float']>;
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
  review_count?: InputMaybe<Scalars['smallint']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Books_Sum_Fields = {
  __typename?: 'books_sum_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['smallint']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['smallint']>;
  quantity?: Maybe<Scalars['smallint']>;
  review_count?: Maybe<Scalars['smallint']>;
};

/** aggregate var_pop on columns */
export type Books_Var_Pop_Fields = {
  __typename?: 'books_var_pop_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Books_Var_Samp_Fields = {
  __typename?: 'books_var_samp_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Books_Variance_Fields = {
  __typename?: 'books_variance_fields';
  avg_rating?: Maybe<Scalars['Float']>;
  page_count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  published_year?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  review_count?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table: "readers" */
  readers: Array<Readers>;
  /** fetch data from the table: "readers" using primary key columns */
  readers_by_pk?: Maybe<Readers>;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
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


export type Query_RootReadersArgs = {
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
  id: Scalars['uuid'];
  reputation: Scalars['Int'];
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregate relationship */
  reviews_aggregate: Reviews_Aggregate;
  username: Scalars['String'];
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

/** Boolean expression to filter rows from the table "readers". All fields are combined with a logical 'AND'. */
export type Readers_Bool_Exp = {
  _and?: InputMaybe<Array<Readers_Bool_Exp>>;
  _not?: InputMaybe<Readers_Bool_Exp>;
  _or?: InputMaybe<Array<Readers_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reputation?: InputMaybe<Int_Comparison_Exp>;
  reviews?: InputMaybe<Reviews_Bool_Exp>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "readers". */
export type Readers_Order_By = {
  id?: InputMaybe<Order_By>;
  reputation?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Reviews_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "readers" */
export enum Readers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Reputation = 'reputation',
  /** column name */
  Username = 'username'
}

/** Streaming cursor of the table "readers" */
export type Readers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Readers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Readers_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  reputation?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
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
  rating: Scalars['Float'];
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
  rating?: InputMaybe<Float_Comparison_Exp>;
  reader?: InputMaybe<Readers_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'reviews_max_fields';
  book_id?: Maybe<Scalars['uuid']>;
  dislike_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  like_count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
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
  rating?: Maybe<Scalars['Float']>;
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
  rating?: InputMaybe<Scalars['Float']>;
  text?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: 'reviews_sum_fields';
  dislike_count?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  dislike_count?: InputMaybe<Order_By>;
  like_count?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table in a streaming manner: "books" */
  books_stream: Array<Books>;
  /** fetch data from the table: "readers" */
  readers: Array<Readers>;
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


export type Subscription_RootReadersArgs = {
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

export type GetBooksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQueryQuery = { __typename?: 'query_root', books: Array<{ __typename?: 'books', id: any, genre: string, language: string, title: string, subtitle?: string | null, price: number, cover_url: string }> };


export const GetBooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooksQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"cover_url"}}]}}]}}]} as unknown as DocumentNode<GetBooksQueryQuery, GetBooksQueryQueryVariables>;