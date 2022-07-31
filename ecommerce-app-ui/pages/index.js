import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/elements/Button'
import { Header } from '../components/navigation/Header'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <div className={styles.container}>
     <Header />
     <Banner />
    </div>
  )
}