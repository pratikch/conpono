/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateStoreInput = {
  id?: string | null;
  name: string;
  contactName: string;
  address: string;
  address2?: string | null;
  city: string;
  state: string;
  postalCode?: number | null;
  status: string;
  curbCapacity?: number | null;
  deliveryCapacity?: number | null;
  shipPreferance?: string | null;
  phone?: string | null;
  email?: string | null;
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  postalCode?: ModelIntInput | null;
  status?: ModelStringInput | null;
  curbCapacity?: ModelIntInput | null;
  deliveryCapacity?: ModelIntInput | null;
  shipPreferance?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelStoreConditionInput | null> | null;
  or?: Array<ModelStoreConditionInput | null> | null;
  not?: ModelStoreConditionInput | null;
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

export type UpdateStoreInput = {
  id: string;
  name?: string | null;
  contactName?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: number | null;
  status?: string | null;
  curbCapacity?: number | null;
  deliveryCapacity?: number | null;
  shipPreferance?: string | null;
  phone?: string | null;
  email?: string | null;
};

export type DeleteStoreInput = {
  id?: string | null;
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  contactName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  address2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  postalCode?: ModelIntInput | null;
  status?: ModelStringInput | null;
  curbCapacity?: ModelIntInput | null;
  deliveryCapacity?: ModelIntInput | null;
  shipPreferance?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelStoreFilterInput | null> | null;
  or?: Array<ModelStoreFilterInput | null> | null;
  not?: ModelStoreFilterInput | null;
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

export type CreateStoreMutation = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type UpdateStoreMutation = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type DeleteStoreMutation = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type GetStoreQuery = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type ListStoresQuery = {
  __typename: "ModelStoreConnection";
  items: Array<{
    __typename: "Store";
    id: string;
    name: string;
    contactName: string;
    address: string;
    address2: string | null;
    city: string;
    state: string;
    postalCode: number | null;
    status: string;
    curbCapacity: number | null;
    deliveryCapacity: number | null;
    shipPreferance: string | null;
    phone: string | null;
    email: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateStoreSubscription = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type OnUpdateStoreSubscription = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

export type OnDeleteStoreSubscription = {
  __typename: "Store";
  id: string;
  name: string;
  contactName: string;
  address: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: number | null;
  status: string;
  curbCapacity: number | null;
  deliveryCapacity: number | null;
  shipPreferance: string | null;
  phone: string | null;
  email: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStore(
    input: CreateStoreInput,
    condition?: ModelStoreConditionInput
  ): Promise<CreateStoreMutation> {
    const statement = `mutation CreateStore($input: CreateStoreInput!, $condition: ModelStoreConditionInput) {
        createStore(input: $input, condition: $condition) {
          __typename
          id
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
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
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
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
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
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
  async GetStore(id: string): Promise<GetStoreQuery> {
    const statement = `query GetStore($id: ID!) {
        getStore(id: $id) {
          __typename
          id
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStoreQuery>response.data.getStore;
  }
  async ListStores(
    filter?: ModelStoreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStoresQuery> {
    const statement = `query ListStores($filter: ModelStoreFilterInput, $limit: Int, $nextToken: String) {
        listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            contactName
            address
            address2
            city
            state
            postalCode
            status
            curbCapacity
            deliveryCapacity
            shipPreferance
            phone
            email
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
    return <ListStoresQuery>response.data.listStores;
  }
  OnCreateStoreListener: Observable<OnCreateStoreSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStore {
        onCreateStore {
          __typename
          id
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
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
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
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
          name
          contactName
          address
          address2
          city
          state
          postalCode
          status
          curbCapacity
          deliveryCapacity
          shipPreferance
          phone
          email
        }
      }`
    )
  ) as Observable<OnDeleteStoreSubscription>;
}
