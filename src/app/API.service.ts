/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCustomerInput = {
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
  createdAt: string;
  updatedAt: string;
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
  email: string;
};

export type CreateStoreInput = {
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
  createdAt: string;
  updatedAt: string;
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
  orderId: string;
  brandSubstitution?: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  orderCustomerId?: string | null;
  orderStoreId?: string | null;
};

export type ModelOrderConditionInput = {
  brandSubstitution?: ModelBooleanInput | null;
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
  orderId: string;
  brandSubstitution?: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string | null;
  orderCustomerId?: string | null;
  orderStoreId?: string | null;
};

export type DeleteOrderInput = {
  orderId: string;
  status: OrderStatus;
  createdAt: string;
};

export type CreateOrderItemInput = {
  itemId: string;
  name: string;
  unit: string;
  size?: string | null;
  weight?: number | null;
  quantity?: number | null;
  orderItemOrderId?: string | null;
};

export type ModelOrderItemConditionInput = {
  itemId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  size?: ModelStringInput | null;
  weight?: ModelIntInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelOrderItemConditionInput | null> | null;
  or?: Array<ModelOrderItemConditionInput | null> | null;
  not?: ModelOrderItemConditionInput | null;
};

export type UpdateOrderItemInput = {
  itemId?: string | null;
  name?: string | null;
  unit?: string | null;
  size?: string | null;
  weight?: number | null;
  quantity?: number | null;
  orderItemOrderId?: string | null;
};

export type DeleteOrderItemInput = {
  id?: string | null;
};

export type ModelCustomerFilterInput = {
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

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStoreFilterInput = {
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

export type ModelOrderPrimaryCompositeKeyConditionInput = {
  eq?: ModelOrderPrimaryCompositeKeyInput | null;
  le?: ModelOrderPrimaryCompositeKeyInput | null;
  lt?: ModelOrderPrimaryCompositeKeyInput | null;
  ge?: ModelOrderPrimaryCompositeKeyInput | null;
  gt?: ModelOrderPrimaryCompositeKeyInput | null;
  between?: Array<ModelOrderPrimaryCompositeKeyInput | null> | null;
  beginsWith?: ModelOrderPrimaryCompositeKeyInput | null;
};

export type ModelOrderPrimaryCompositeKeyInput = {
  status?: OrderStatus | null;
  createdAt?: string | null;
};

export type ModelOrderFilterInput = {
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

export type ModelOrderItemFilterInput = {
  itemId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  size?: ModelStringInput | null;
  weight?: ModelIntInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelOrderItemFilterInput | null> | null;
  or?: Array<ModelOrderItemFilterInput | null> | null;
  not?: ModelOrderItemFilterInput | null;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStoreMutation = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStoreMutation = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStoreMutation = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderMutation = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderItemMutation = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateOrderItemMutation = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteOrderItemMutation = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetStoreQuery = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStoresQuery = {
  __typename: "ModelStoreConnection";
  items: Array<{
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderItemQuery = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListOrderItemsQuery = {
  __typename: "ModelOrderItemConnection";
  items: Array<{
    __typename: "OrderItem";
    itemId: string;
    name: string;
    unit: string;
    size: string | null;
    weight: number | null;
    quantity: number | null;
    order: {
      __typename: "Order";
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OrdersByStatusAndCreatedAtQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shippingPreference: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStoreSubscription = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStoreSubscription = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStoreSubscription = {
  __typename: "Store";
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
      orderId: string;
      brandSubstitution: boolean | null;
      status: OrderStatus;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  orderId: string;
  customer: {
    __typename: "Customer";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  items: {
    __typename: "ModelOrderItemConnection";
    items: Array<{
      __typename: "OrderItem";
      itemId: string;
      name: string;
      unit: string;
      size: string | null;
      weight: number | null;
      quantity: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  store: {
    __typename: "Store";
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
    createdAt: string;
    updatedAt: string;
  } | null;
  brandSubstitution: boolean | null;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderItemSubscription = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateOrderItemSubscription = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteOrderItemSubscription = {
  __typename: "OrderItem";
  itemId: string;
  name: string;
  unit: string;
  size: string | null;
  weight: number | null;
  quantity: number | null;
  order: {
    __typename: "Order";
    orderId: string;
    customer: {
      __typename: "Customer";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    items: {
      __typename: "ModelOrderItemConnection";
      nextToken: string | null;
    } | null;
    store: {
      __typename: "Store";
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
      createdAt: string;
      updatedAt: string;
    } | null;
    brandSubstitution: boolean | null;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
  } | null;
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
  async CreateOrderItem(
    input: CreateOrderItemInput,
    condition?: ModelOrderItemConditionInput
  ): Promise<CreateOrderItemMutation> {
    const statement = `mutation CreateOrderItem($input: CreateOrderItemInput!, $condition: ModelOrderItemConditionInput) {
        createOrderItem(input: $input, condition: $condition) {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
    return <CreateOrderItemMutation>response.data.createOrderItem;
  }
  async UpdateOrderItem(
    input: UpdateOrderItemInput,
    condition?: ModelOrderItemConditionInput
  ): Promise<UpdateOrderItemMutation> {
    const statement = `mutation UpdateOrderItem($input: UpdateOrderItemInput!, $condition: ModelOrderItemConditionInput) {
        updateOrderItem(input: $input, condition: $condition) {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
    return <UpdateOrderItemMutation>response.data.updateOrderItem;
  }
  async DeleteOrderItem(
    input: DeleteOrderItemInput,
    condition?: ModelOrderItemConditionInput
  ): Promise<DeleteOrderItemMutation> {
    const statement = `mutation DeleteOrderItem($input: DeleteOrderItemInput!, $condition: ModelOrderItemConditionInput) {
        deleteOrderItem(input: $input, condition: $condition) {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
    return <DeleteOrderItemMutation>response.data.deleteOrderItem;
  }
  async GetCustomer(email: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($email: String!) {
        getCustomer(email: $email) {
          __typename
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
      email
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    email?: string,
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($email: String, $filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCustomers(email: $email, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
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
  async GetOrder(
    orderId: string,
    status: OrderStatus,
    createdAt: string
  ): Promise<GetOrderQuery> {
    const statement = `query GetOrder($orderId: ID!, $status: OrderStatus!, $createdAt: AWSDateTime!) {
        getOrder(orderId: $orderId, status: $status, createdAt: $createdAt) {
          __typename
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
      status,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    orderId?: string,
    statusCreatedAt?: ModelOrderPrimaryCompositeKeyConditionInput,
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($orderId: ID, $statusCreatedAt: ModelOrderPrimaryCompositeKeyConditionInput, $filter: ModelOrderFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listOrders(orderId: $orderId, statusCreatedAt: $statusCreatedAt, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
    if (statusCreatedAt) {
      gqlAPIServiceArguments.statusCreatedAt = statusCreatedAt;
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
  async GetOrderItem(id: string): Promise<GetOrderItemQuery> {
    const statement = `query GetOrderItem($id: ID!) {
        getOrderItem(id: $id) {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderItemQuery>response.data.getOrderItem;
  }
  async ListOrderItems(
    filter?: ModelOrderItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrderItemsQuery> {
    const statement = `query ListOrderItems($filter: ModelOrderItemFilterInput, $limit: Int, $nextToken: String) {
        listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            itemId
            name
            unit
            size
            weight
            quantity
            order {
              __typename
              orderId
              brandSubstitution
              status
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
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
    return <ListOrderItemsQuery>response.data.listOrderItems;
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
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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
          orderId
          customer {
            __typename
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
            items {
              __typename
              itemId
              name
              unit
              size
              weight
              quantity
            }
            nextToken
          }
          store {
            __typename
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

  OnCreateOrderItemListener: Observable<
    OnCreateOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrderItem {
        onCreateOrderItem {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
        }
      }`
    )
  ) as Observable<OnCreateOrderItemSubscription>;

  OnUpdateOrderItemListener: Observable<
    OnUpdateOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrderItem {
        onUpdateOrderItem {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
        }
      }`
    )
  ) as Observable<OnUpdateOrderItemSubscription>;

  OnDeleteOrderItemListener: Observable<
    OnDeleteOrderItemSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrderItem {
        onDeleteOrderItem {
          __typename
          itemId
          name
          unit
          size
          weight
          quantity
          order {
            __typename
            orderId
            customer {
              __typename
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
              nextToken
            }
            store {
              __typename
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
        }
      }`
    )
  ) as Observable<OnDeleteOrderItemSubscription>;
}
