describe('NewFeatureComponent', () => {
  it('should render the feature component', () => {
    const { getByText } = render(<NewFeatureComponent />);
    expect(getByText('New Feature')).toBeInTheDocument();
  
