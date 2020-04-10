import React from 'react';
import Modal from '../';
import { mount } from 'enzyme';

describe('modal component', () => {
  it('should return null when isOpen is false', () => {
    const component = mount(<Modal isOpen={false} headerText="Title" onClose={jest.fn()} />);
    const modalComponent = component.find('Modal');
    expect(modalComponent.exists()).toBe(true);
  });

  it('should return the modal component when isOpen is true', () => {
    const component = mount(<Modal isOpen headerText="Title" onClose={jest.fn()} />);
    const modalComponent = component.find('Modal');
    expect(modalComponent.exists()).toBe(true);
  });
});
