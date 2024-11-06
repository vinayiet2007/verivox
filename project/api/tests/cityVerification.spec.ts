import {test,expect} from '@playwright/test';  

test.describe('Address Tests', () => {
    const BASE_URL = 'https://service.verivox.de/geo/latest/cities/';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
    test('Verify multiple cities displayed with postal code 77716', async ({ request }) => {
        const expectedData = [
            { Name: 'Fischerbach' },
            { Name: 'Haslach' },
            { Name: 'Hofstetten' }
        ];
        const response = await request.get(`${BASE_URL}/77716`);
        const noOfCities = Object.keys(await response.json()).length;
        const responseBody = await response.json();
        expect(await response.status()).toBe(200);
        expect(noOfCities).toBeGreaterThan(2);
        expect(responseBody).toEqual(expectedData);
        for (let i = 0; i < expectedData.length; i++) {
          expect(responseBody[i].Name).toBe(expectedData[i].Name);
        }
    });

    test('Verify at least one city with postal code 10409', async ({ request }) => {
      const expectedData = [
          { Name: 'Berlin' }
        ];
      const response = await request.get(`${BASE_URL}/10409`);
      const noOfCities = Object.keys(await response.json()).length;
      const responseBody = await response.json();
      expect(response.status()).toBe(200);
      expect(noOfCities).toBeGreaterThanOrEqual(1);
      expect(responseBody).toEqual(expectedData);
      for (let i = 0; i < expectedData.length; i++) {
        expect(responseBody[i].Name).toBe(expectedData[i].Name);
      }
  });
});