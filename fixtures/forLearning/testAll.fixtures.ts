// fixtures/test-fixtures.ts
import { test as base } from '@playwright/test';
import { test as authFixture } from './auth.fixture';
import { test as dbFixture } from './db.fixture';
import {test as featureFlagFixture} from './featureFlags.fixture';
import {test as proxyFixture} from './proxy.fixture'

export const test = base
  .extend(authFixture)
  .extend(dbFixture)
  .extend(featureFlagFixture)
  .extend(proxyFixture);

export const expect = test.expect;