const KEY = "age_verified";

let _verified: boolean | null = null;
const _listeners = new Set<() => void>();

function _read(): boolean {
  if (_verified !== null) return _verified;
  if (typeof window === "undefined") return false;
  _verified = window.localStorage.getItem(KEY) === "1";
  return _verified;
}

export function subscribe(onStoreChange: () => void): () => void {
  _listeners.add(onStoreChange);
  return () => { _listeners.delete(onStoreChange); };
}

export function getSnapshot(): boolean { return _read(); }
export function getServerSnapshot(): boolean { return false; }

export function confirmAge(): void {
  _verified = true;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, "1");
  }
  _listeners.forEach(cb => cb());
}
