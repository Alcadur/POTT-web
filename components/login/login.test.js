import Login from 'pott/components/login/login';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { renderWithProviders } from 'pott/utils/test-util';
import { selectUser } from 'pott/store/loginSlice';
import { makeStore } from 'pott/store/store';


fetchMock.enableMocks();

describe('Login component', function () {

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('should login user', async function () {
        const store = makeStore();
        renderWithProviders(<Login/>, { store });
        const expectedUser = { name: 'Janek' };

        fetchMock.mockResponseOnce(JSON.stringify({ user: expectedUser }));

        const loginField = screen.getByTestId('login-form-login');
        const passwordField = screen.getByTestId('login-form-password');
        const submitButton = screen.getByTestId('login-submit-button');

        let user = userEvent.setup();
        await user.type(loginField, 'new@user.com');
        await user.type(passwordField, 'HelloPott!');
        await user.click(submitButton);

        expect(selectUser(store.getState())).toEqual(expectedUser);
    });
});