import { test, expect } from '@playwright/test';

test('GET products should return product list', async ({ request }) => {

    const response = await request.get('https://dummyjson.com/products');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.products).toBeDefined();
    expect(body.products.length).toBeGreaterThan(0);

});

test('GET non-existing product should return 404', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products/999999');

  expect(response.status()).toBe(404);

});

test('POST product should create a new product', async ({ request }) => {

  const response = await request.post('https://dummyjson.com/products/add', {
    data: {
      title: 'QA Automation Test Product',
      price: 99.99
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('QA Automation Test Product');
  expect(body.price).toBe(99.99);
  expect(body.id).toBeDefined();

});

test('PUT product should update product data', async ({ request }) => {

  const response = await request.put('https://dummyjson.com/products/1', {
    data: {
      title: 'Updated QA Product'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.title).toBe('Updated QA Product');

});

test('DELETE product should delete product successfully', async ({ request }) => {

  const response = await request.delete('https://dummyjson.com/products/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.isDeleted).toBe(true);
  expect(body.deletedOn).toBeDefined();

});
