
// This will cause undefined, because `export statement`` written in ./index.js with lib01.js together.
// import { lib02 as lib02test } from './';
import { lib02 as lib02test } from './';

// Below can avoid undefined issue caused by above: import from absolute path
// import lib02 from './lib02';

// Test#1: import from absolute path!
// console.log('[lib01][run]', lib02);

// Test#2: import from export's index.js!
console.log('[lib01][run]', lib02test);

export const lib01 = () => '<lib01>';
export default lib01;
