describe('NewFeatureComponent', () => {
  it('should render the feature component', () => {
    const { getByText } = render(<NewFeatureComponent />);
    expect(getByText('New Feature')).toBeInTheDocument();
  });

  it('should toggle feature state on button click', () => {
    const { getByText, getByRole } = render(<NewFeatureComponent />);
    const button = getByRole('button', { name: /enable feature/i });
    
    fireEvent.click(button);
    expect(getByText('Feature is now active!')).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(queryByText('Feature is now active!')).not.toBeInTheDocument();
  });

  it('should display correct button text based on state', () => {
    const { getByRole, rerender } = render(<NewFeatureComponent />);
    expect(getByRole('button')).toHaveTextContent('Enable Feature');
  });
});
