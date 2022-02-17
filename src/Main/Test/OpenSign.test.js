import { fireEvent, render, screen } from '@testing-library/react';
import OpenSign from '../OpenSign/OpenSign';

test('renders component OpenSign', () => {
  render(<OpenSign
    isOpen={false}
    setIsOpen={() => true} />);

  const linkElement = screen.getByText(/the zoo is/i);
  expect(linkElement).toBeInTheDocument();

  const theZooIs = screen.getByText(/🌜/i);
  // console.log('----thezoois', theZooIs);
  expect(theZooIs).toBeInTheDocument(), 'test proves that there will be a p tag with moon emoji textContent when isOpen is false.';

  const isOpenButton = screen.getByText(/open the zoo/i);
  expect(isOpenButton).toBeInTheDocument(), 'this test proves there will be a button with open the zoo textContent when isOpen is false.';
  // console.log('---isopenbutton', isOpenButton);
});
