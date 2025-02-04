import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src='/images/ignite_simbol.png' alt='Logo Ignite'></img>
        </header>
    )
}