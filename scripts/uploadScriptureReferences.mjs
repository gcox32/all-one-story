import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createScriptureReference } from '../src/graphql/mutations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = JSON.parse(await readFile(new URL('../src/amplifyconfiguration.json', import.meta.url)));
const scriptureReferences = JSON.parse(await readFile(join(__dirname, 'data', 'scriptureReferences.json')));

Amplify.configure(config);

const client = generateClient();

function inferReferenceType(reference) {
  if ('verse' in reference) return 'VERSE';
  if ('chapter' in reference) return 'CHAPTER';
  return 'BOOK';
}

function prepareReference(reference) {
  return {
    ...reference,
    referenceType: inferReferenceType(reference),
    searchCount: 0
  };
}

async function createSingleReference(reference) {
  try {
    const result = await client.graphql({
      query: createScriptureReference,
      variables: { input: reference }
    });
    return result.data.createScriptureReference;
  } catch (error) {
    console.error('Error creating reference:', reference.reference, error);
    return null;
  }
}

async function uploadReferences() {
  const totalReferences = scriptureReferences.length;
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < totalReferences; i++) {
    const reference = prepareReference(scriptureReferences[i]);
    const result = await createSingleReference(reference);
    
    if (result) {
      successCount++;
    } else {
      failureCount++;
    }

    if ((i + 1) % 100 === 0 || i === totalReferences - 1) {
      console.log(`Progress: ${i + 1}/${totalReferences} | Successes: ${successCount} | Failures: ${failureCount}`);
    }
  }

  console.log(`Upload complete. Total successes: ${successCount}, Total failures: ${failureCount}`);
}

uploadReferences().then(() => console.log('Script execution complete'));