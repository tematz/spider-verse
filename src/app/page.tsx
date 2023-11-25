import styles from './page.module.scss'

import HeroesList from '@/components'
import { IHeroData } from '@/interfaces/heroes'

async function getHeroesData(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`)

  if (!res.ok) {
    throw new Error('Failed to fetch heroes')
  }

  return res.json()
}

export default async function Home() {
  const heroes = await getHeroesData()

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  )
}
