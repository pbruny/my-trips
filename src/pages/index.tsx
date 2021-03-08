import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
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
  )
}
