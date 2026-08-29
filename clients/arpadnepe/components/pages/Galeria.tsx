import { galeria, galeriaKategoriak } from '@/content';
import type { VariantConfig } from '@/variants/config';
import { GaleriaRacs } from '../GaleriaRacs';
import { PageHeader, Section } from '../ui';

export function GaleriaPage(_props: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Galéria"
        cim="Képek a foglalkozásokról és a rendezvényekről"
        lead={`${galeria.length} fotó az egyesület saját képeiből: íjászat, vívás és fegyverdobás, kézművesség, a jurták és kiállításaink, rendezvények, társasjáték és a közösségi élet.`}
      />
      <Section>
        <GaleriaRacs kepek={galeria} kategoriak={galeriaKategoriak} />
      </Section>
    </>
  );
}
