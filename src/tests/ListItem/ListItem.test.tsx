import { it, expect, describe } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from "react-router-dom";

describe('ListItem', () => {

    it('should render by default 7 items', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );


        const listItems = screen.findAllByRole('listitem');

        expect((await listItems).length).toBe(7);
    });

    it('should sort items by name DESC', async () => {
        const { findByTestId, findAllByRole } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        expect(await findByTestId('Name')).toBeInTheDocument()


        await act(async () => {
            fireEvent.click(await findByTestId('Name'));
        });


        expect((await findAllByRole('listitem'))[0].children[1].textContent).toBe('Spring promotion')
    });

    it('should switch on item page Finalize when user click on button item', async () => {
        const { findByTestId, findAllByRole,findByRole,findByText } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        expect( await findAllByRole('listitem'))
        
        await act(async () => {
            await findAllByRole('listitem');
            fireEvent.click(await findByTestId('btn-2'));
        });


        expect((await findByText(/Finalize/i))).toBeInTheDocument()
    });

    it('should switch on item page Results when user click on button item', async () => {
        const { findByTestId, findAllByRole,findByText } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        expect( await findAllByRole('listitem'))

        await act(async () => {
            fireEvent.click(await findByTestId('btn-3'));
        });


        expect((await findByText(/Results/i))).toBeInTheDocument()
    });
})