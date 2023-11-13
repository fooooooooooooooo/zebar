import { listen, Event } from '@tauri-apps/api/event';

import { createLogger } from '../utils';

const logger = createLogger('desktop-events');

export interface ProviderEmitEvent<T = unknown> {
  optionsHash: string;
  variables: T;
}

/**
 * Listen for provider data.
 */
export function onProviderEmit<T = unknown>(
  configHash: string,
  callback: (payload: T) => void,
) {
  logger.debug(`Listening to provider with config: ${configHash}.`);

  return listen('provider-emit', (event: Event<ProviderEmitEvent<T>>) => {
    const { payload } = event;
    console.log('provider emit', event);
    if (payload.optionsHash === configHash) {
      callback(payload.variables as T);
    }
  });
}