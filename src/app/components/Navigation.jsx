import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/post'
}]

export function Navigation ({ children }) {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        {links.map(({ label, route }) => (
          <li key={route}> <Link href={route}>{label}</Link> </li>
        ))}
      </ul>
    </header>
  )
}
