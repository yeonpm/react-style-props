import React from 'react';
import {Wrapper} from '@yeonpm/react';
import {CardWrapper, useCommonizeDrawerStore} from '@yeonpm/docs-template';
import {FaCode, FaLink, FaNpm} from 'react-icons/fa6';

export type Locale = 'ko' | 'en';

export function SectionTitle({id, title, description}: {id: string; title: string; description: string}) {
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    void navigator.clipboard.writeText(url);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <header className="docs-section-header" id={id}>
      <div className="docs-section-title-row">
        <h2 className="docs-section-title">{title}</h2>
        <button
          type="button"
          className="docs-copy-link"
          onClick={handleCopyLink}
          aria-label="Copy section link"
          title="Copy section link"
        >
          <FaLink size={14} />
        </button>
      </div>
      <p className="docs-section-desc">{description}</p>
    </header>
  );
}

export function CodeBlock({code}: {code: string}) {
  return <pre className="docs-code-block">{code}</pre>;
}

export function ViewCodeCard({code, title, label, subtitle}: {code: string; title: string; label: string; subtitle: string}) {
  const {open} = useCommonizeDrawerStore();
  return (
    <CardWrapper
      hoverable
      padding={12}
      className="docs-view-code-card"
      onClick={() =>
        open({
          panelTitle: title,
          subtitle,
          body: <CodeBlock code={code} />,
        })
      }
    >
      <Wrapper flex ac gap={8}>
        <FaCode size={14} color="#64748b" />
        <span style={{fontSize: 14, color: '#64748b'}}>{label}</span>
      </Wrapper>
    </CardWrapper>
  );
}

export function InfoPanel({title, description, children}: {title?: string; description?: string; children?: React.ReactNode}) {
  return (
    <div className="docs-panel">
      {title ? <h3 className="docs-panel-title">{title}</h3> : null}
      {description ? <p className="docs-panel-desc">{description}</p> : null}
      {children}
    </div>
  );
}

export function BulletList({items}: {items: string[]}) {
  return (
    <ul className="docs-bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function HeaderActions({
  npmHref,
  locale,
  setLocale,
}: {
  npmHref: string;
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="docs-header-actions">
      <a href={npmHref} target="_blank" rel="noopener noreferrer" className="docs-header-npm" aria-label="View package on npm">
        <FaNpm size={16} />
        <span className="docs-header-npm-label">npm</span>
      </a>
      <div className="docs-lang-toggle" role="group" aria-label="Language">
        <button type="button" className={`docs-lang-btn${locale === 'ko' ? ' is-active' : ''}`} onClick={() => setLocale('ko')} aria-pressed={locale === 'ko'}>
          KO
        </button>
        <button type="button" className={`docs-lang-btn${locale === 'en' ? ' is-active' : ''}`} onClick={() => setLocale('en')} aria-pressed={locale === 'en'}>
          EN
        </button>
      </div>
    </div>
  );
}
