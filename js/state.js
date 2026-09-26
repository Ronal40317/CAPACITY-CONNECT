// Shared state module
export const APP_KEY = "capacity_connect_sih26075_state_v2";
export function loadState(defaultState={}) { try { return {...defaultState, ...JSON.parse(localStorage.getItem(APP_KEY)||"{}")} } catch { return {...defaultState}; } }
export function saveState(state) { localStorage.setItem(APP_KEY, JSON.stringify(state)); }
