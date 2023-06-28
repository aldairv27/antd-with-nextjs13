import { useTranslations } from 'next-intl';

import FormComponent from '@/components/FormComponent';

export default function Page() {
  const t = useTranslations('site');

  return (
    <section style={{padding: '40px 24px'}}>
      <h1 style={{fontFamily: 'sans-serif', textAlign: 'center', fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: '800', letterSpacing: '-0.05em'}}>
        {t('desc')}
      </h1> 
      <FormComponent />
    </section>
  );
}
