export function storeValue(key, value) {
  chrome.storage.sync.set({ [key]: value });
}
