import styles from '../styles/Home.module.css'
import Link from 'next/link'

const About = () => {
    return ( 
        <div>
            <div className={styles.container}>
            <h1>About</h1>
            <p>Stock-X is a capstone project which is mainly focused on Fintech. The main objective of this project is to analyse any kind of stock market data (from any company and market) and then provide prediction and suggestions to stockholders to invest in a specfic company</p>
            <p>The prediction is made using a CNN-LSTM Neural Network model, designed to obtain features from the data and then obtain the features to train on them.</p>
            <Link href="/">
                <a className={styles.btn}>Try it</a>
            </Link>
            </div>
            <h1 className={styles.title}>Members</h1>
            <p className={styles.card}><p>Aaditya A</p>             2019506001</p>
            <p className={styles.card}><p>Rajapriya R</p>           2019506071</p> 
            <p className={styles.card}><p>Vineetha R S</p>          2019506115</p> 
            <p className={styles.card}><p>Anurag Bagde</p>          2019506120</p>   
        </div>
        

     );

}
 
export default About;