/**
 * A harom szinsema layoutjat es kezdolapjat generalja.
 * Minden sema UGYANAZT a Landing komponenst rendereli, csak mas scope-osztallyal.
 * Futtatas: node scripts/gen-schemes.mjs
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const semak = [
  { key: 'a', scope: 'sema-pergamen', nev: 'Pergamen' },
  { key: 'b', scope: 'sema-indigo', nev: 'Indigo' },
  { key: 'c', scope: 'sema-poszto', nev: 'Poszto' },
];

for (const s of semak) {
  const layout = `import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { variants } from '@/variants/config';
import { betuValtozok } from '@/variants/fonts';

/** ${s.nev} szinsema. A szerkezet es a tipografia mindharom semaban azonos. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={\`\${betuValtozok} ${s.scope} flex min-h-screen flex-col bg-paper text-ink\`}
    >
      <a href="#tartalom" className="skip-link">
        SKIPLINK
      </a>
      <Nav v={variants.${s.key}} />
      <main id="tartalom" className="flex-1">
        {children}
      </main>
      <Footer v={variants.${s.key}} />
    </div>
  );
}
`;
  writeFileSync(join(process.cwd(), 'app', s.key, 'layout.tsx'), layout, 'utf8');

  const page = `import type { Metadata } from 'next';
import { Landing } from '@/components/pages/Landing';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'TITLE',
  description: 'DESC',
};

export default function Page() {
  return <Landing v={variants.${s.key}} />;
}
`;
  writeFileSync(join(process.cwd(), 'app', s.key, 'page.tsx'), page, 'utf8');
}
console.log(semak.length + ' sema layout + kezdolap generalva.');
