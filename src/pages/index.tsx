import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Petrolina',
            slug: 'petrolina',
            location: {
              latitude: -9.38,
              longitude: -40.5
            }
          }
        ]}
      />
    </>
  )
}
