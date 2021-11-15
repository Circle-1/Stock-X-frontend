import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function About() {
    return (
      <div >
        <div className={styles.container}>
            <h1 class="text-3xl">About</h1>
            <p>Stock-X is a capstone project which is mainly focused on Fintech. The main objective of this project is to analyse any kind of stock market data (from any company and market) and then provide prediction and suggestions to stockholders to invest in a specfic company</p>
            <p>The prediction is made using a CNN-LSTM Neural Network model, designed to obtain features from the data and then obtain the features to train on them.
              <br/>NOTE: The project is still on progress!
            </p>
            <Link href="/">
                <a className={styles.btn}>Try it</a>
            </Link>
            </div>
            <h1 className={styles.title}>Members</h1>
            <div class="grid grid-cols-2 gap-4 p-16">
              <a href="https://github.com/alphaX86" class="block p-6 bg-white hover:bg-blue-400 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Aadhitya A</h5>
                <p class="font-normal text-gray-700">2019506001</p>
              </a>
              <a href="https://github.com/RajapriyaRaju" class="block p-6 bg-white hover:bg-blue-400 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Rajapriya R</h5>
                <p class="font-normal text-gray-700">2019506071</p>
              </a>
              <a href="https://github.com/vrs16" class="block p-6 bg-white hover:bg-blue-400 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Vineetha R S</h5>
                <p class="font-normal text-gray-700">2019506115</p>
              </a>
              <a href="https://github.com/Yellowflash1412" class="block p-6 bg-white hover:bg-blue-400 shadow-md border border-gray-200 rounded-lg max-w-sm">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Anurag Bagde</h5>
                <p class="font-normal text-gray-700">2019506120</p>
              </a>
            </div>  
  </div> 
  
  )
  }
