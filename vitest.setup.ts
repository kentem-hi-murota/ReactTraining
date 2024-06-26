import '@testing-library/jest-dom';
import { beforeAll, afterAll, beforeEach } from 'vitest';
import { server } from './src/test/mocks/node';

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
