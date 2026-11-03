# hp_utils

Reusable TypeScript utilities and React hooks. Single package, subpath imports.

```
bun add @hullperse/hp_utils
```

```ts
import { attempt, attemptRetry } from "@hullperse/hp_utils/attempt";
import { createSignalStore } from "@hullperse/hp_utils/signal";
```

Tree-shaking: `sideEffects: false`. Import only the subpaths you use.

## Modules

### attempt

Result-tuple style error handling.

Exports: `toError`, `attempt`, `attemptSync`, `attemptAll`, `withFallback`, `attemptAs`, `attemptAsSync`, `attemptRetry`, `reportBackgroundError`.

```ts
import { attempt } from "@hullperse/hp_utils/attempt";

const [data, error] = await attempt(fetch("/api").then((r) => r.json()));
if (error) console.error(error);
```

### result

Result monad, retry, timeout, resource management, concurrency-limited map.

Exports: `ok`, `err`, `map`, `mapError`, `andThen`, `unwrapOr`, `tap`, `retry`, `withTimeout`, `withResource`, `attemptAllLimit`, `attemptResult`, `attemptResultSync`.

```ts
import { ok, unwrapOr } from "@hullperse/hp_utils/result";

const result = ok(42);
const value = unwrapOr(result, 0); // 42
```

### shared

Foundation helpers: `MAX_TIMEOUT_MS`, `normalizeWait`, `normalizeMaxWait`, `resolveEnabled`, `createSimpleCell`, `scheduleTask`, `sleep`.

```ts
import { scheduleTask } from "@hullperse/hp_utils/shared";

const task = scheduleTask("timeout", 1000, () => console.log("done"));
task.cancel();
```

### signal

Atomic signal store with cells, derived values, batching.

Exports: `createSignalStore`.

```ts
import { createSignalStore } from "@hullperse/hp_utils/signal";

const store = createSignalStore();
const count = store.cell(0);
const doubled = store.derive([count], ([v]) => (v as number) * 2);
count.set(5);
console.log(doubled.get()); // 10
```

### debounce

Debouncer class and `debounce` helper.

```ts
import { debounce } from "@hullperse/hp_utils/debounce";

const search = debounce((q: string) => fetchResults(q), { wait: 300 });
search("hello");
```

### throttle

Throttler class and `throttle` helper.

```ts
import { throttle } from "@hullperse/hp_utils/throttle";

const onScroll = throttle(() => update(), { wait: 100 });
window.addEventListener("scroll", onScroll);
```

### lruCache

LRU cache with stats and inflight fetch deduplication.

Exports: `createLruCache`, `inflightFetch`.

```ts
import { createLruCache } from "@hullperse/hp_utils/lruCache";

const cache = createLruCache<string, number>(100);
cache.set("a", 1);
```

### interval

Interval and animation loop helpers.

Exports: `createInterval`, `createAnimationLoop`.

```ts
import { createAnimationLoop } from "@hullperse/hp_utils/interval";

const loop = createAnimationLoop((now) => {
  render(now);
  if (done) loop.cancel();
});
```

### array

`uniqueById`, `moveItem`.

### math

`clamp`.

### bytes

`formatBytes`, `formatRate`.

### type

`assertNever`.

### text

`flattenMarkup`.

### fatalClassify

`isChunkError`, `isResizeObserverLoopError`, `toFatalInfo`, `shouldEscalateGlobal`, `noteGlobalError`, `resetGlobalErrors`, plus constants.

### normalize

`foldDiacritics`, `normalizeSearchText`.

### roman

`isRomanNumeral`.

### searchKeyboard

`keyboardWordDistance` (default export not; named).

### highlight

`normalizeText`, `findSubsequenceRanges`, `mergeRanges`, `splitByRanges`.

### symspell

`SymSpell` class, `buildSymSpellFromTitles`, `normalizedSpellWords`. Methods: `addWord`, `addWords`, `addNormalizedWord`, `has`, `correct`, `correctMany`, `suggest`, `suggestMany`, `size`.

### media

Filename parser for anime/media files.

Exports: `tokenizeMediaName`, `normalizeMediaDashes`, `stripMediaExtension`, `classifyMediaTokens`, `collectFields`, `canonicalLang`, `canonicalService`, `classifyTokenValue`, `extractSeason`, `extractTvSeason`, `extractPart`, `extractEpisode`, `extractPart` (see module), `isCountPair`, `resolveMediaFile`, `parseMediaFile`, `parseMediaPath`, `fileNameFromPath`, `mediaFileExtension`, `isTrackFileName`, `isVideoFileName`, `clearMediaParseCache`, `clearResolveCache`, plus `resolveVideo`, `absorbStrings`, `splitSidecarStem`, `parseSidecarSuffix`, `resolveSegments`.

```ts
import { parseMediaPath } from "@hullperse/hp_utils/media/parse";

const parsed = parseMediaPath("D:/Anime/Show/S01E03.mkv");
console.log(parsed.title, parsed.season, parsed.episode.number);
```

### sidecar

`splitSidecarStem`, `parseSidecarSuffix`.

### segments

`resolveSegments`.

### tokens

Media token dictionaries and regexes from `tokens.config`.

### tweenedValue

`useTweenedValue` React hook.

### resize

`useWindowResize` React hook (window resize with handles).

### cursor

`lockCursor`, `initCursors`.

## Development

```
bun install
bun run typecheck
bun run build
bun run test
```

License: none specified.