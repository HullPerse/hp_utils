export interface LruCacheStats {
  capacity: number;
  size: number;
  hits: number;
  misses: number;
  evictions: number;
}

export interface LruCache<K, V> {
  get: (key: K) => V | undefined;
  peek: (key: K) => V | undefined;
  set: (key: K, value: V) => void;
  has: (key: K) => boolean;
  delete: (key: K) => boolean;
  clear: () => void;
  stats: () => LruCacheStats;
}
