import React from 'react'
import {sortByItemCount, sortOrders} from './sortOrders';
import {sortByDate} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are undefined', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders have no items', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first order items count is greater then the second ones', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('second order items count is greater then the first ones', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are undefined', () => {
		const result = sortByDate(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders have no date', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('same orders date', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first order date is greater then the second ones', () => {
		const order1 = {
			date: 1552585550000,
		};

		const order2 = {
			date: 1552481120000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('second order date is greater then the first ones', () => {
		const order1 = {
			date: 1552481120000,
		};

		const order2 = {
			date: 1552585550000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null, sortByItemCount);
		expect(result).toEqual(undefined);
	});

	it('sortFunction is not a function', () => {
		const orders = [
			{
				id: 124,
				date: 1552481120000,
				shop: 'Lamodник.ru',
				items: [
					'Жакет - BOREAL5',
					'Miss Gabby Костюм',
					'Ostin перчатки мужские',
					'Zara худи роз.',
				]
			},
			{
				id: 126,
				date: 1552585550000,
				shop: 'Эльдоградо',
				items: [
					'Ноутбук Apple MacBook Air 13.3" (MQD32RU/A)',
					'Игровая приставка Sony PlayStation 4 Pro 1TB Black (CUH-7208B)',
				]
			},
		]
		const result = sortOrders(orders, 1);
		expect(result).toEqual(undefined);
	});
});
