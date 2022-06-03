/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { act } from '@testing-library/react-native';

//TODO: move to auth component
import {render, waitFor, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers()

it('renders correctly', () => {
  renderer.create(<App />);
});



//TODO: move to auth component
test('if the user is not logged in, then the Login button should show', async () => {   
  const {queryByText} = render(<App />);
  const loginButtonText = 'Phone Number Sign In';  

  await waitFor(() => expect(queryByText(loginButtonText)).toBeTruthy())
});

test('when the user sends the wrong confirmation code, then the confirmation box should still appear', async () => {   
  const {getByText, getByPlaceholderText} = render(<App />);
  const loginButtonText = 'Phone Number Sign In';

  await act(async () => {
    fireEvent.press(getByText(loginButtonText));
    await waitFor(() => fireEvent.changeText(getByPlaceholderText('confirmation code'), '654321'));
    fireEvent.press(getByText('Confirm Code'));
  });

  await waitFor(() => expect(getByPlaceholderText('confirmation code')).not.toBeNull());
});
