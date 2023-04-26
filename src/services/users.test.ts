import { getUsers, addUser, deleteUser, editUser } from './users';

describe('getUsers', () => {
  test('returns data or error', async () => {
    const { data, error } = await getUsers();
    expect(data || error).toBeDefined();
  });

  test('returned data is an array', async () => {
    const { data } = await getUsers();
    expect(Array.isArray(data)).toBe(true);
  });



});
