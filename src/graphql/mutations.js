/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchCreateScriptureReferences = /* GraphQL */ `
  mutation BatchCreateScriptureReferences(
    $references: [CreateScriptureReferenceInput!]!
  ) {
    batchCreateScriptureReferences(references: $references) {
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
export const createScriptureReference = /* GraphQL */ `
  mutation CreateScriptureReference(
    $input: CreateScriptureReferenceInput!
    $condition: ModelScriptureReferenceConditionInput
  ) {
    createScriptureReference(input: $input, condition: $condition) {
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
export const updateScriptureReference = /* GraphQL */ `
  mutation UpdateScriptureReference(
    $input: UpdateScriptureReferenceInput!
    $condition: ModelScriptureReferenceConditionInput
  ) {
    updateScriptureReference(input: $input, condition: $condition) {
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
export const deleteScriptureReference = /* GraphQL */ `
  mutation DeleteScriptureReference(
    $input: DeleteScriptureReferenceInput!
    $condition: ModelScriptureReferenceConditionInput
  ) {
    deleteScriptureReference(input: $input, condition: $condition) {
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
