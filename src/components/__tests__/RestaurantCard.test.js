import {render, screen}  from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import mockData from '../mocks/cardMock.json';
import '@testing-library/jest-dom';

describe('RestaurantCard component test cases', () => {
test('should render RestaurantCard component with props data', () => { 
    render(<RestaurantCard restObj={mockData} />);

    const restaurantName = screen.getByText('Theobroma');

    expect(restaurantName).toBeInTheDocument();
});
});

