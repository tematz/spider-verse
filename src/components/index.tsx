import { IHeroData } from '@/interfaces/heroes'

interface Iprops {
  heroes: IHeroData[]
}

export default function HeroesList({ heroes }: Iprops) {
  return (
    <>
      <h1>Heroes List</h1>
    </>
  )
}
