import { fireEvent, render, screen } from '@testing-library/react';
import FightSection from '../FightSection/FightSection';

test('renders microscopy in FightSection', () => {
  let lionSize = 3;
  let tigerSize = 3;
  const { rerender } = render(<FightSection
    lionSize={lionSize}
    tigerSize={tigerSize}
    setLionSize={() => {
      lionSize = (lionSize + 0.25);
    }}
    setTigerSize={() => {
      tigerSize = (tigerSize + 0.25);
    }} />);

  const antEl = screen.getByText(/🐜/i);
  const flyEl = screen.getByText(/🪰/i);
  expect(antEl && flyEl).toBeInTheDocument(), 'test proves that antEl and flyEl have correct emoji textContent';

  const incrementButtons = screen.getAllByText(/➕/i);

  {
    incrementButtons.map((button) => fireEvent.click(button));
  }

  expect(lionSize && tigerSize).toBe(3.25), 'test proves that state is updated for lionSize and tigerSize onClick of incrementButtons';

  rerender(<FightSection
    lionSize={lionSize}
    tigerSize={tigerSize}
    setLionSize={() => {
      lionSize = (lionSize - 0.25);
    }}
    setTigerSize={() => {
      tigerSize = (tigerSize - 0.25);
    }} />);

  const decrementButtons = screen.getAllByText(/➖/i);
  {
    decrementButtons.map((button) => 
      fireEvent.click(button)
    );
  }
  expect(lionSize && tigerSize).toBe(3), 'test proves that state is updated for lionSize and tigerSize onClick of decrementButtons';
  {
    decrementButtons.map((button) => 
      fireEvent.click(button)
    );
  }
  expect(lionSize && tigerSize).toBe(2.75), 'this test proves that the value of lionSize and tigerSize is decremented by 0.25 each onClick of decrementButton.';
});
