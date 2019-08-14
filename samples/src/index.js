// import { lib01, lib02 } from './lib';
// import lib02 from './lib';
import { lib01 } from './components';
import main from './pages';

// Below for testing circular import, that caused undefined issue.
console.log(lib01.toString());
main();
