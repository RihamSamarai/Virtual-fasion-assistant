import { render ,screen } from "@testing-library/react";
import { act } from "react";
import ExternalDataFetcher from "@ExternalDataFetcher" ;





global.fetch = jest.fn();

// Test 1: Check if component renders loading state

describe('ExternalDataFetcher', () => {
    it('displays loading message while fetching data', () => {
      render(<ExternalDataFetcher />);
      const loadingMessage = screen.getByText(/Loading.../i);
      expect(loadingMessage).toBeInTheDocument();
    });


//Test 2: Check if an error message is displayed when the download fails

    it('displays an error message when fetch fails', async () => {
        fetch.mockResolvedValueOnce({
        ok: false,
        statusText: 'Network Error',
    });

    render (<ExternalDataFetcher />);

    expect(errorMessage).toBeInTheDocument();
});


// Test 3: Verify that the data is displayed correctly after a successful fetch
it('displays "No data available" when there are no products', async () => {
    fetch.mockResolvedValueOnce({
    ok: true,
    json: () => 
        Promise.resolve({
            products: [
            ]
        
}),
});


render(<ExternalDataFetcher />);

await act (async () => {
    await Promise.resolve();
  });

});




});