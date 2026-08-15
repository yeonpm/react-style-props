import React from 'react';
import {Wrapper, Txt} from '@yeonpm/react';
import {CommonizeShell, CommonizeDrawer} from '@yeonpm/docs-template';
import {FaBookOpen, FaCode, FaCubes, FaDownload, FaRocket, FaSliders} from 'react-icons/fa6';
import {FaNpm} from 'react-icons/fa6';
import {resolveProps, x, toPixel} from '../../src';
import type {Locale} from './docs-ui';
import {SectionTitle, CodeBlock, ViewCodeCard, InfoPanel, BulletList, HeaderActions} from './docs-ui';
import './docs.css';

const INSTALL = `npm install react-style-props`;
const PEERS = `npm install react react-dom @emotion/react @emotion/styled`;
const QUICKSTART = `import styled from "@emotion/styled";
import { resolveProps } from "react-style-props";
import type { DefaultConfigType } from "react-style-props";

export default function Box({ children, ...props }: DefaultConfigType & { children?: React.ReactNode }) {
  const { styleString, otherProps } = resolveProps(props);
  return (
    <$Box css={styleString} {...otherProps}>
      {children}
    </$Box>
  );
}

const $Box = styled("div")<{ css?: string }>\`
  \${({ css }) => css}
\`;`;

const USAGE = `<Box ac fullV>
  <Txt fs={14} fw={700} mr0mlAuto mouseCss>
    Hello
  </Txt>
</Box>`;

const X_CODE = `import { x } from "react-style-props";

const css = x\`
  color: red;
  &:hover { opacity: 0.8; }
\`;`;

const PIXEL_CODE = `toPixel(16);   // "16px"
toPixel("2rem"); // "2rem"`;

const copy = {
  ko: {
    brandTitle: 'react-style-props',
    brandSubtitle: 'Docs',
    overviewTitle: 'Overview',
    overviewDesc: '컴포넌트 prop으로 CSS를 조립합니다. Wrapper/Txt가 이 라이브러리 위에 만들어져 있습니다.',
    overviewCard: '핵심 API',
    bullets: [
      'resolveProps(props) — 스타일 prop → CSS 문자열 + 나머지 DOM prop',
      'x`...` — CSS 템플릿 리터럴',
      'toPixel(value) — number면 px 접미사',
      'DefaultConfigType — 지원 prop 타입',
    ],
    installTitle: 'Install',
    installDesc: '스타일 엔진은 Emotion을 쓰는 쪽이 일반적입니다.',
    peersTitle: 'Typical peers',
    quickTitle: 'Quick start',
    quickDesc: '커스텀 컴포넌트에 resolveProps를 붙이는 패턴입니다.',
    apiTitle: 'API',
    apiDesc: '세 가지 함수가 전부입니다.',
    propsTitle: 'Style props',
    propsDesc: '자주 쓰는 boolean / shorthand 입니다. 전체 목록은 DefaultConfigType을 보세요.',
    demoTitle: 'Live demo',
    demoDesc: '@yeonpm/react Wrapper가 이 prop들을 실제로 적용합니다.',
    viewCode: '코드 보기',
    sourceCode: '예제 소스',
    github: 'GitHub',
  },
  en: {
    brandTitle: 'react-style-props',
    brandSubtitle: 'Docs',
    overviewTitle: 'Overview',
    overviewDesc: 'Build CSS from component props. Wrapper and Txt sit on top of this library.',
    overviewCard: 'Core API',
    bullets: [
      'resolveProps(props) — style props → CSS string + leftover DOM props',
      'x`...` — CSS template literal',
      'toPixel(value) — append px when the value is a number',
      'DefaultConfigType — supported prop types',
    ],
    installTitle: 'Install',
    installDesc: 'Most apps pair it with Emotion.',
    peersTitle: 'Typical peers',
    quickTitle: 'Quick start',
    quickDesc: 'The pattern for wiring resolveProps into your own component.',
    apiTitle: 'API',
    apiDesc: 'Three functions cover the library.',
    propsTitle: 'Style props',
    propsDesc: 'Common booleans and shorthands. See DefaultConfigType for the full list.',
    demoTitle: 'Live demo',
    demoDesc: '@yeonpm/react Wrapper applies these props for real.',
    viewCode: 'View code',
    sourceCode: 'Example source',
    github: 'GitHub',
  },
} as const;

export default function StylePropsDocs({locale, setLocale}: {locale: Locale; setLocale: (l: Locale) => void}) {
  const t = copy[locale];
  const sample = resolveProps({p: 16, bg: '#eff6ff', round8: true, flex: true, ac: true, gap: 8});

  const navItems = [
    {key: 'overview', label: t.overviewTitle, icon: <FaBookOpen size={14} />, target: {type: 'hash' as const, id: 'overview'}},
    {key: 'install', label: t.installTitle, icon: <FaDownload size={14} />, target: {type: 'hash' as const, id: 'install'}},
    {key: 'quickstart', label: t.quickTitle, icon: <FaRocket size={14} />, target: {type: 'hash' as const, id: 'quickstart'}},
    {key: 'api', label: t.apiTitle, icon: <FaSliders size={14} />, target: {type: 'hash' as const, id: 'api'}},
    {key: 'props', label: t.propsTitle, icon: <FaCubes size={14} />, target: {type: 'hash' as const, id: 'props'}},
    {key: 'demo', label: t.demoTitle, icon: <FaCode size={14} />, target: {type: 'hash' as const, id: 'demo'}},
    {key: 'github', label: t.github, icon: <FaNpm size={14} />, target: {type: 'external' as const, href: 'https://github.com/yeonpm/react-style-props'}},
  ];

  return (
    <CommonizeShell
      brand={{title: t.brandTitle, subtitle: t.brandSubtitle}}
      navItems={navItems}
      headerRightSlot={<HeaderActions npmHref="https://www.npmjs.com/package/react-style-props" locale={locale} setLocale={setLocale} />}
    >
      <Wrapper column gap={48} style={{maxWidth: 960, width: '100%', boxSizing: 'border-box'}}>
        <section className="docs-section">
          <SectionTitle id="overview" title={t.overviewTitle} description={t.overviewDesc} />
          <InfoPanel title={t.overviewCard}>
            <BulletList items={[...t.bullets]} />
          </InfoPanel>
        </section>

        <section className="docs-section">
          <SectionTitle id="install" title={t.installTitle} description={t.installDesc} />
          <div className="docs-stack">
            <CodeBlock code={INSTALL} />
            <InfoPanel title={t.peersTitle}>
              <CodeBlock code={PEERS} />
            </InfoPanel>
          </div>
        </section>

        <section className="docs-section">
          <SectionTitle id="quickstart" title={t.quickTitle} description={t.quickDesc} />
          <InfoPanel>
            <CodeBlock code={QUICKSTART} />
          </InfoPanel>
          <div style={{marginTop: 12}}>
            <ViewCodeCard code={USAGE} title="Usage" label={t.viewCode} subtitle={t.sourceCode} />
          </div>
        </section>

        <section className="docs-section">
          <SectionTitle id="api" title={t.apiTitle} description={t.apiDesc} />
          <div className="docs-item-list">
            <div className="docs-item">
              <strong className="docs-item-name">resolveProps(props, additionalConfig?)</strong>
              <p className="docs-item-desc">{`{ styleString, otherProps }`}</p>
              <p className="docs-item-desc" style={{marginTop: 8, fontFamily: 'ui-monospace, monospace', fontSize: 12}}>
                {sample.styleString}
              </p>
            </div>
            <div className="docs-item">
              <strong className="docs-item-name">x`css`</strong>
              <p className="docs-item-desc">Template tag that concatenates CSS strings.</p>
              <div style={{marginTop: 10}}>
                <ViewCodeCard code={X_CODE} title="x" label={t.viewCode} subtitle={t.sourceCode} />
              </div>
            </div>
            <div className="docs-item">
              <strong className="docs-item-name">toPixel(value)</strong>
              <p className="docs-item-desc">
                {toPixel(16)} · {toPixel('2rem')}
              </p>
              <div style={{marginTop: 10}}>
                <ViewCodeCard code={PIXEL_CODE} title="toPixel" label={t.viewCode} subtitle={t.sourceCode} />
              </div>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <SectionTitle id="props" title={t.propsTitle} description={t.propsDesc} />
          <div className="docs-feature-grid">
            {[
              {title: 'Layout', description: 'flex, jc, ac, between, column, row, gap, flex1'},
              {title: 'Size', description: 'w, h, size, fullP, fullV, maxWidth, minHeight'},
              {title: 'Space', description: 'm, mx, my, mt… and p, px, py, pt…'},
              {title: 'Text', description: 'fs, fw, textCenter, ellipsis, heading34B, text16R'},
              {title: 'Color', description: 'bg, color, white, red'},
              {title: 'Border', description: 'round3–round8, border, borderRadius'},
              {title: 'Position', description: 'absolute, fixed, relative, sticky, top/left/right/bottom'},
              {title: 'Mouse', description: 'pointer, mouseCss, cursor'},
            ].map((item) => (
              <div key={item.title} className="docs-item">
                <strong className="docs-item-name">{item.title}</strong>
                <p className="docs-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="docs-section">
          <SectionTitle id="demo" title={t.demoTitle} description={t.demoDesc} />
          <div className="docs-demo">
            <Wrapper flex between ac p={16} bg="#eff6ff" round8 mouseCss pointer>
              <Txt text16B>flex + between + p + round8</Txt>
              <Txt text14R color="#3b82f6" mr0mlAuto>
                mr0mlAuto
              </Txt>
            </Wrapper>
          </div>
        </section>
      </Wrapper>
      <CommonizeDrawer />
    </CommonizeShell>
  );
}
