import {render, screen}  from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact component test cases', () => {
test('should render Contact component', () => { 
    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    
});

test('should render button inside contact component', () => { 
    render(<Contact />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    
});

test('should check the placeholder name and email inside contact component', () => { 
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText('Enter your name');
    const emailInput = screen.getByPlaceholderText('Enter your email');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    
});

test('should check three input fields inside contact component', () => {
    render(<Contact />);

    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields).toHaveLength(3);
});
});