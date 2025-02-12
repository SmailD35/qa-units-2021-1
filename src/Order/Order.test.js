jest.mock('../utils/getDate');

import React from 'react'
import {shallow, configure} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Order from './Order';
import {getDate} from "../utils/getDate";
Enzyme.configure({ adapter: new Adapter() })


describe('Order.js', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('snapshot test', () => {
    getDate.mockReturnValue('13 марта, ср, 2019 год');

    const order = {
      date: 1552585550000,
      shop: 'Lamodник.ru',
      items: [
        'Жакет - BOREAL5',
        'Miss Gabby Костюм',
        'Ostin перчатки мужские',
        'Zara худи роз.',
      ]
    };

    const output = shallow(
        <Order
            order={order}
        />
    );

    expect(shallowToJson(output)).toMatchSnapshot();
  })

  it('order without items', () => {
    getDate.mockReturnValue('14 марта, чт, 2019 год');

    const order = {
      date: 1552585550000,
      shop: 'Эльдоградо'
    };

    shallow(
        <Order
            order={order}
        />
    );

    expect(getDate).toBeCalledTimes(1);
  });

  it('order with items', () => {
    getDate.mockReturnValue('13 марта, ср, 2019 год');

    const order = {
      date: 1552585550000,
      shop: 'Lamodник.ru',
      items: [
        'Жакет - BOREAL5',
        'Miss Gabby Костюм',
        'Ostin перчатки мужские',
        'Zara худи роз.',
      ]
    };

    shallow(
        <Order
            order={order}
        />
    );
    expect(getDate).toBeCalledTimes(1);
  });

  it('order without date and shop', () => {
    const order = {
      items: [
        'Жакет - BOREAL5',
        'Miss Gabby Костюм',
        'Ostin перчатки мужские',
        'Zara худи роз.',
      ]
    };

    const output = shallow(
        <Order
            order={order}
        />
    );
    expect(output).toEqual({});
    expect(getDate).toBeCalledTimes(0);
  });

  it('order is undefined', () => {
    const output = shallow(
        <Order/>
    );
    expect(output).toEqual({});
    expect(getDate).toBeCalledTimes(0);
  });
});
