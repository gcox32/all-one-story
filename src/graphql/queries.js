/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchScriptureReferences = /* GraphQL */ `
  query SearchScriptureReferences($query: String!, $limit: Int) {
    searchScriptureReferences(query: $query, limit: $limit) {
      id
      book
      chapter
      verse
      reference
      referenceType
      searchCount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getScriptureReference = /* GraphQL */ `
  query GetScriptureReference($id: ID!) {
    getScriptureReference(id: $id) {
      id
      book
      chapter
      verse
      reference
      referenceType
      searchCount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listScriptureReferences = /* GraphQL */ `
  query ListScriptureReferences(
    $filter: ModelScriptureReferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScriptureReferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book
        chapter
        verse
        reference
        referenceType
        searchCount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const scriptureReferenceByReference = /* GraphQL */ `
  query ScriptureReferenceByReference(
    $reference: String!
    $sortDirection: ModelSortDirection
    $filter: ModelScriptureReferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scriptureReferenceByReference(
      reference: $reference
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book
        chapter
        verse
        reference
        referenceType
        searchCount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
