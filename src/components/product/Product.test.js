import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Product from './Product';

describe('Product Item', () => {
  const productPerUnit = {
    name: 'Beans',
    price: 0.5,
    isPricePerUnit: true,
    isPricePerKg: false
  };

  it('Snapshot', () => {
    const component = renderer.create(
      <Product
        name={ productPerUnit.name }
        price={ productPerUnit.price }
        isPerUnit={ productPerUnit.isPricePerUnit }
        isPerKg={ productPerUnit.isPricePerKg }
        addProduct={ jest.fn() }
        removeProduct={ jest.fn() }
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('When interacting with the product item, the component', () => {
    let handleOnAdd;
    let handleOnRemove;

    beforeEach(() => {
      handleOnAdd = jest.fn();
      handleOnRemove = jest.fn();
    });

    it('should increment itself to the shopping cart', () => {
      const { getByText } = render (
        <Product
          name={ productPerUnit.name }
          price={ productPerUnit.price }
          isPerUnit={ productPerUnit.isPricePerUnit }
          isPerKg={ productPerUnit.isPricePerKg }
          addProduct={ handleOnAdd }
          removeProduct={ handleOnRemove }
        />
      );
      fireEvent.click(getByText('+'));
      expect(handleOnAdd).toHaveBeenCalledWith('Beans');
    });

    it('should decrement itself to the shopping cart', () => {
      const { getByText } = render (
        <Product
          name={ productPerUnit.name }
          price={ productPerUnit.price }
          isPerUnit={ productPerUnit.isPricePerUnit }
          isPerKg={ productPerUnit.isPricePerKg }
          addProduct={ handleOnAdd }
          removeProduct={ handleOnRemove }
        />
      );
      fireEvent.click(getByText('-'));
      expect(handleOnRemove).toHaveBeenCalledWith('Beans');
    });
  });

});