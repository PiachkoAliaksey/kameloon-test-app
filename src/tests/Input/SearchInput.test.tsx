import { it, expect, describe } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from "react-router-dom";

describe('Input', () => {
    it('should render default input field empty', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');
        const counterBlock = screen.findByRole('cell');
        const listItems = screen.findAllByRole('listitem');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('');

        expect((await listItems));
        expect((await counterBlock).textContent).toBe('7 tests');
    });

    it('allows user to type in the input field', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');

        act(() => {
            fireEvent.change(inputElement, { target: { value: 'Sale' } });
        });

        expect(inputElement.value).toBe('Sale');
    });

    it('should filter list item when user type text', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');



        act(() => {
            fireEvent.change(inputElement, { target: { value: 'Sale' } });
        });

        const listItems = screen.findAllByRole('listitem');
        const counterBlock = screen.findByRole('cell');

        expect((await listItems).length).toBe(2);
        expect((await counterBlock).textContent).toBe('2 tests');

    });

    it('should show empty list', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const inputElement: HTMLInputElement = screen.getByRole('searchbox');


        act(() => {
            fireEvent.change(inputElement, { target: { value: 'xxxxxx' } });
        });

        const textNotFound = screen.findByText(/Your search did not match any results./i);

        expect(await textNotFound).toBeInTheDocument();
    });
})