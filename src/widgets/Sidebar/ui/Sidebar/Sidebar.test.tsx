import { screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import
{ renderWithTranslation }
  from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar render', () => {
  test('test', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
