Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or
  `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully
support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will
transpile & bundle automatically. `<link>` tags can point to stylesheets and
Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";
import { createRoot } from "react-dom/client";

// import .css files directly and it works
import './index.css';

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in
`node_modules/bun-types/docs/**.mdx`.

## Bu depoya özel: bozulmaması gereken değişmezler

Demonun tamamı iki kurala dayanıyor. Refactor sırasında ikisinden biri kırılırsa
demo sessizce yanlış cevap vermeye başlar (test edilir: `src/ctcp.test.ts`).

**K1 — `resolve` asla nokta dönmez.** Her `ResolvedContainer` bir `Interval` +
`Certainty` taşır. `formula` süresi olan her kutucuk zorunlu bir `envelope`
bildirir; yakıt bitince çözücü formülü bırakıp oraya düşer ve damga
`budget-truncated` olur. Aralığı noktaya indiren, envelope'u opsiyonel yapan veya
kesinlik damgasını düşüren bir değişiklik yapma.

**K2 — her dal tanımlıdır.** `onMiss` üç değer alır: `wait` · `alternative` ·
`cancel`. Çözümleme `undefined` dönemez; her kutucuk `resolved | cancelled |
skipped` ile sonuçlanır. Alternatif etkinleşince bağımlılıklar `rewire` ile
yeniden bağlanır — bu yolu kaldırma.

Diğer notlar:

- Özyineleme serbest, sonlanma garantisi **yakıt bütçesinden** gelir
  (`src/minilang.ts`). `MAX_DEPTH` ve `Fuel` birlikte çalışır; birini kaldırmak
  diğerini yetersiz bırakır.
- Kaskad dakika uzayında (gece yarısından beri), birim cebri mutlak ms'de çalışır.
  Bu ayrım bilinçli: monoton çekirdek vs. sunum takvimi. Karıştırma.
- Federe uçlar takvim **içeriği** göndermez. `freebusy` yalnızca yüklem cevabı
  döner; ızgara yuvarlaması, önbellek ve sorgu bütçesi üçü birlikte parmak izi
  savunmasıdır, biri çıkarsa diğerleri yetmez.
- Yetenek jetonu hem gizliliği hem teklif spam'ini kesen tek primitif. Jetonsuz
  istek `401` dönmeli.
- Düğüm mantığının tamamı `src/core.ts`'te ve taşımadan bağımsız.
  `src/node.ts` yalnızca Bun.serve sarmalayıcısı; `src/ui/sim.ts` aynı çekirdeği
  tarayıcıda sayfa içi çağrıyla çalıştırır (GitHub Pages bunu yayınlar).
  Protokol davranışını değiştiren bir düzenleme iki taşıyıcıda birden test
  edilmeli.
