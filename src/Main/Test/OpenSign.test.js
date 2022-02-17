import { fireEvent, render, screen } from '@testing-library/react';
import OpenSign from '../OpenSign/OpenSign';

test('renders component OpenSign', async () => {
  let isOpen = false;
  const { rerender } = render(<OpenSign
    isOpen={isOpen}
    setIsOpen={() => {isOpen = !isOpen;}} />);

  const linkElement = screen.getByText(/the zoo is/i);
  expect(linkElement).toBeInTheDocument();

  const theZooIsClosed = screen.getByText(/🌜/i);
  expect(theZooIsClosed).toBeInTheDocument(), 'test proves that there will be a p tag with moon emoji textContent when isOpen is false.';

  const isOpenButton = screen.getByText(/open the zoo/i);
  expect(isOpenButton).toBeInTheDocument(), 'this test proves there will be a button with open the zoo textContent when isOpen is false.';

  fireEvent.click(isOpenButton);

  rerender(<OpenSign
    isOpen={isOpen}
    setIsOpen={() => {isOpen = !isOpen;}} />);
  const theZooIsOpen = await screen.findByText(/🌞/i);
  expect(theZooIsOpen).toBeInTheDocument(), 'this test proves that isOpenButton onClick updates state for isOpen, on rerender, theZooIsOpen contains sun emoji textContent.';
});
