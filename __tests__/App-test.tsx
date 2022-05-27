/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

//TODO: move to auth component
import {render, waitFor} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers()

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('@react-native-firebase/auth', () => ({
  __esModule: true, // this property makes it work
  default: () => ({
      onAuthStateChanged: jest.fn()
  })
}));

//TODO: move to auth component
test('if the user is not logged in, then the Login button should show', async () => {  
  const {queryByText} = render(<App />);
  const loginButtonText = 'Phone Number Sign In';  

  await waitFor(() => expect(queryByText(loginButtonText)).toBeTruthy())
});
