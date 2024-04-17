'use client'
import { useTranslations } from 'next-intl';

import FormComponent from '@/components/FormComponent';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { paddingRowSearch } from '@/styles/CommonStyle';
import { Row } from 'antd';

export default function DashBoardPage() {
  // #region variables
    const t = useTranslations('site');
    const { textoPrueba } = useAppSelector((state: RootState) => state.theme);
  // #endregion
  

  return (
    <>
      <Row
        style={paddingRowSearch}
        justify={'end'}
      >
        {textoPrueba}
      </Row>
    </>
    // <section style={{padding: '40px 24px'}}>
    //   <h1 style={{fontFamily: 'sans-serif', textAlign: 'center', fontSize: '2.25rem', lineHeight: '2.5rem', fontWeight: '800', letterSpacing: '-0.05em'}}>
    //     {'hola '+ textoPrueba}
    //   </h1> 
    //   <FormComponent />
    // </section>
  );
}
