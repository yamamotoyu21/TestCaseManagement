// import React from 'react';
// import { ChakraProvider, Box, Text } from '@chakra-ui/react';
// import TestCaseList from './components/TestCaseList';

// function App() {
//   console.log('App component rendering');
//   return (
//     <ChakraProvider>
//       <Box>
//         <Text>App Component</Text>
//         {TestCaseList ? (
//           <TestCaseList />
//         ) : (
//           <Text>TestCaseList component is not available</Text>
//         )}
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   console.log('Minimal App rendering');
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function App() {
  console.log('App rendering');
  return (
    <Box>
      <Text>こんにちは</Text>
    </Box>
  );
}

export default App;