/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCustomerInput = {
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: number | null;
  email: string;
  phone?: string | null;
  shippingPreference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCustomerConditionInput = {
  customerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipCode?: ModelIntInput | null;
  phone?: ModelStringInput | null;
  shippingPreference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCustomerConditionInput | null> | null;
  or?: Array<ModelCustomerConditionInput | null> | null;
  not?: ModelCustomerConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum OrderStatus {
  DELIVERED = "DELIVERED",
  IN_TRANSIT = "IN_TRANSIT",
  PENDING = "PENDING",
  UNKNOWN = "UNKNOWN",
  STORE_ASSIGNED = "STORE_ASSIGNED",
  LOCKED = "LOCKED",
  NEW = "NEW"
}

export type UpdateCustomerInput = {
  id: string;
  customerId?: string | null;
  name?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: number | null;
  email: string;
  phone?: string | null;
  shippingPreference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCustomerInput = {
  id: string;
  email: string;
};

export type CreateStoreInput = {
  id?: string | null;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: number | null;
  status?: string | null;
  email: string;
  phone?: string | null;
  curbCapacity?: number | null;
  deliveryCapacity?: number | null;
  shippingPreference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipCode?: ModelIntInput | null;
  status?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  curbCapacity?: ModelIntInput | null;
  deliveryCapacity?: ModelIntInput | null;
  shippingPreference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStoreConditionInput | null> | null;
  or?: Array<ModelStoreConditionInput | null> | null;
  not?: ModelStoreConditionInput | null;
};

export type UpdateStoreInput = {
  id: string;
  storeId: string;
  name?: string | null;
  contactName?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: number | null;
  status?: string | null;
  email: string;
  phone?: string | null;
  curbCapacity?: number | null;
  deliveryCapacity?: number | null;
  shippingPreference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteStoreInput = {
  storeId: string;
  email: string;
};

export type CreateOrderInput = {
  id?: string | null;
  orderId: string;
  items: Array<OrderItemInput | null>;
  brandSubstitution?: boolean | null;
  status: OrderStatus;
  createdAt?: string | null;
  updatedAt?: string | null;
  orderCustomerId?: string | null;
  orderStoreId?: string | null;
};

export type OrderItemInput = {
  itemId: string;
  name: string;
  unit: string;
  size?: string | null;
  weight?: number | null;
  quantity?: number | null;
};

export type ModelOrderConditionInput = {
  brandSubstitution?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateOrderInput = {
  id: string;
  orderId: string;
  items?: Array<OrderItemInput | null> | null;
  brandSubstitution?: boolean | null;
  status: OrderStatus;
  createdAt?: string | null;
  updatedAt?: string | null;
  orderCustomerId?: string | null;
  orderStoreId?: string | null;
};

export type DeleteOrderInput = {
  orderId: string;
  status: OrderStatus;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null;
  customerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipCode?: ModelIntInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  shippingPreference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null;
  storeId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipCode?: ModelIntInput | null;
  status?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  curbCapacity?: ModelIntInput | null;
  deliveryCapacity?: ModelIntInput | null;
  shippingPreference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelStoreFilterInput | null> | null;
  or?: Array<ModelStoreFilterInput | null> | null;
  not?: ModelStoreFilterInput | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  orderId?: ModelIDInput | null;
  brandSubstitution?: ModelBooleanInput | null;
  status?: ModelOrderStatusInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null;
  ne?: OrderStatus | null;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type CreateStoreMutation = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UpdateStoreMutation = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type DeleteStoreMutation = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetStoreQuery = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ListStoresQuery = {
  __typename: "ModelStoreConnection";
  items: Array<{
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    orderId: string;
    customer: {
      __typename: "Customer";
      id: string;
      customerId: string;
      name: string;
      address: string;
      address2: string | null;
      city: string | null;
      state: string | null;
      zipCode: number | null;
      email: string;
      phone: string | null;
      shippingPreference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null>;
    store: {
      __typename: "Store";
      id: string;
      storeId: string;
      name: string;
      contactName: string;
      address: string;
      address2: string | null;
      city: string | null;
      state: string | null;
      zipCode: number | null;
      status: string | null;
      email: string;
      phone: string | null;
      curbCapacity: number | null;
      deliveryCapacity: number | null;
      shippingPreference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type StoresByNameQuery = {
  __typename: "ModelStoreConnection";
  items: Array<{
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OrdersByStatusAndCreatedAtQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    orderId: string;
    customer: {
      __typename: "Customer";
      id: string;
      customerId: string;
      name: string;
      address: string;
      address2: string | null;
      city: string | null;
      state: string | null;
      zipCode: number | null;
      email: string;
      phone: string | null;
      shippingPreference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null>;
    store: {
      __typename: "Store";
      id: string;
      storeId: string;
      name: string;
      contactName: string;
      address: string;
      address2: string | null;
      city: string | null;
      state: string | null;
      zipCode: number | null;
      status: string | null;
      email: string;
      phone: string | null;
      curbCapacity: number | null;
      deliveryCapacity: number | null;
      shippingPreference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerId: string;
  name: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  email: string;
  phone: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnCreateStoreSubscription = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnUpdateStoreSubscription = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnDeleteStoreSubscription = {
  __typename: "Store";
  id: string;
  storeId: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: number | null;
  status: string | null;
  email: string;
  phone: string | null;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shippingPreference: string | null;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  orderId: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerId: string;
    name: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    email: string;
    phone: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    shippingPreference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
  } | null>;
  store: {
    __typename: "Store";
    id: string;
    storeId: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string | null;
    state: string | null;
    zipCode: number | null;
    status: string | null;
    email: string;
    phone: string | null;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shippingPreference: string | null;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string | null;
  updatedAt: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCustomer(
    input: CreateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!, $condition: ModelCustomerConditionInput) {
        createCustomer(input: $input, condition: $condition) {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!, $condition: ModelCustomerConditionInput) {
        updateCustomer(input: $input, condition: $condition) {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput,
    condition?: ModelCustomerConditionInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!, $condition: ModelCustomerConditionInput) {
        deleteCustomer(input: $input, condition: $condition) {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateStore(
    input: CreateStoreInput,
    condition?: ModelStoreConditionInput
  ): Promise<CreateStoreMutation> {
    const statement = `mutation CreateStore($input: CreateStoreInput!, $condition: ModelStoreConditionInput) {
        createStore(input: $input, condition: $condition) {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStoreMutation>response.data.createStore;
  }
  async UpdateStore(
    input: UpdateStoreInput,
    condition?: ModelStoreConditionInput
  ): Promise<UpdateStoreMutation> {
    const statement = `mutation UpdateStore($input: UpdateStoreInput!, $condition: ModelStoreConditionInput) {
        updateStore(input: $input, condition: $condition) {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStoreMutation>response.data.updateStore;
  }
  async DeleteStore(
    input: DeleteStoreInput,
    condition?: ModelStoreConditionInput
  ): Promise<DeleteStoreMutation> {
    const statement = `mutation DeleteStore($input: DeleteStoreInput!, $condition: ModelStoreConditionInput) {
        deleteStore(input: $input, condition: $condition) {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStoreMutation>response.data.deleteStore;
  }
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(
    input: UpdateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
        updateOrder(input: $input, condition: $condition) {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(
    input: DeleteOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!, $condition: ModelOrderConditionInput) {
        deleteOrder(input: $input, condition: $condition) {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async GetCustomer(id: string, email: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!, $email: String!) {
        getCustomer(id: $id, email: $email) {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      email
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    id?: string,
    email?: ModelStringKeyConditionInput,
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($id: ID, $email: ModelStringKeyConditionInput, $filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCustomers(id: $id, email: $email, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async GetStore(storeId: string, email: string): Promise<GetStoreQuery> {
    const statement = `query GetStore($storeId: ID!, $email: String!) {
        getStore(storeId: $storeId, email: $email) {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      storeId,
      email
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStoreQuery>response.data.getStore;
  }
  async ListStores(
    storeId?: string,
    email?: ModelStringKeyConditionInput,
    filter?: ModelStoreFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListStoresQuery> {
    const statement = `query ListStores($storeId: ID, $email: ModelStringKeyConditionInput, $filter: ModelStoreFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listStores(storeId: $storeId, email: $email, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (storeId) {
      gqlAPIServiceArguments.storeId = storeId;
    }
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStoresQuery>response.data.listStores;
  }
  async GetOrder(orderId: string, status: OrderStatus): Promise<GetOrderQuery> {
    const statement = `query GetOrder($orderId: ID!, $status: OrderStatus!) {
        getOrder(orderId: $orderId, status: $status) {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      orderId,
      status
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    orderId?: string,
    status?: ModelStringKeyConditionInput,
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($orderId: ID, $status: ModelStringKeyConditionInput, $filter: ModelOrderFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listOrders(orderId: $orderId, status: $status, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            orderId
            customer {
              __typename
              id
              customerId
              name
              address
              address2
              city
              state
              zipCode
              email
              phone
              shippingPreference
              createdAt
              updatedAt
            }
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            store {
              __typename
              id
              storeId
              name
              contactName
              address
              address2
              city
              state
              zipCode
              status
              email
              phone
              curbCapacity
              deliveryCapacity
              shippingPreference
              createdAt
              updatedAt
            }
            brandSubstitution
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (orderId) {
      gqlAPIServiceArguments.orderId = orderId;
    }
    if (status) {
      gqlAPIServiceArguments.status = status;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersQuery>response.data.listOrders;
  }
  async StoresByName(
    name?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStoreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StoresByNameQuery> {
    const statement = `query StoresByName($name: String, $sortDirection: ModelSortDirection, $filter: ModelStoreFilterInput, $limit: Int, $nextToken: String) {
        storesByName(name: $name, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (name) {
      gqlAPIServiceArguments.name = name;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <StoresByNameQuery>response.data.storesByName;
  }
  async OrdersByStatusAndCreatedAt(
    status?: OrderStatus,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<OrdersByStatusAndCreatedAtQuery> {
    const statement = `query OrdersByStatusAndCreatedAt($status: OrderStatus, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        ordersByStatusAndCreatedAt(status: $status, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            orderId
            customer {
              __typename
              id
              customerId
              name
              address
              address2
              city
              state
              zipCode
              email
              phone
              shippingPreference
              createdAt
              updatedAt
            }
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            store {
              __typename
              id
              storeId
              name
              contactName
              address
              address2
              city
              state
              zipCode
              status
              email
              phone
              curbCapacity
              deliveryCapacity
              shippingPreference
              createdAt
              updatedAt
            }
            brandSubstitution
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (status) {
      gqlAPIServiceArguments.status = status;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <OrdersByStatusAndCreatedAtQuery>(
      response.data.ordersByStatusAndCreatedAt
    );
  }
  OnCreateCustomerListener: Observable<
    OnCreateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCustomerSubscription>;

  OnUpdateCustomerListener: Observable<
    OnUpdateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCustomerSubscription>;

  OnDeleteCustomerListener: Observable<
    OnDeleteCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          id
          customerId
          name
          address
          address2
          city
          state
          zipCode
          email
          phone
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          shippingPreference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCustomerSubscription>;

  OnCreateStoreListener: Observable<OnCreateStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStore {
        onCreateStore {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateStoreSubscription>;

  OnUpdateStoreListener: Observable<OnUpdateStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStore {
        onUpdateStore {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateStoreSubscription>;

  OnDeleteStoreListener: Observable<OnDeleteStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStore {
        onDeleteStore {
          __typename
          id
          storeId
          name
          contactName
          address
          address2
          city
          state
          zipCode
          status
          email
          phone
          curbCapacity
          deliveryCapacity
          shippingPreference
          orders {
            __typename
            items {
              __typename
              id
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteStoreSubscription>;

  OnCreateOrderListener: Observable<OnCreateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderSubscription>;

  OnUpdateOrderListener: Observable<OnUpdateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrder {
        onUpdateOrder {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderSubscription>;

  OnDeleteOrderListener: Observable<OnDeleteOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrder {
        onDeleteOrder {
          __typename
          id
          orderId
          customer {
            __typename
            id
            customerId
            name
            address
            address2
            city
            state
            zipCode
            email
            phone
            orders {
              __typename
              nextToken
            }
            shippingPreference
            createdAt
            updatedAt
          }
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
          }
          store {
            __typename
            id
            storeId
            name
            contactName
            address
            address2
            city
            state
            zipCode
            status
            email
            phone
            curbCapacity
            deliveryCapacity
            shippingPreference
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          brandSubstitution
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderSubscription>;
}
