import React from 'react';
import { render, screen } from '@testing-library/react-native';
import TextDetail from './TextDetail';

const firstName = 'Tom';
const testLabel = 'test label';

describe('TextDetail', () => {
  it('should render correctly if props provided', () => {
    const component = render(<TextDetail label={testLabel} text={firstName} />);

    expect(component).toBeTruthy();
  });

  it('should render with text and label if provided', () => {
    render(<TextDetail label={testLabel} text={firstName} />);

    expect(screen.getByText(firstName)).toBeTruthy();
    expect(screen.getByText(testLabel)).toBeTruthy();
  });
});
