import styles from './App.module.scss'
import Dog from './assets/Vito.png'
import Box from './assets/box.png'
import Item1 from './assets/item1.png'
import Item2 from './assets/item2.png'
import Item3 from './assets/item3.png'
import Item4 from './assets/item4.png'
import Item5 from './assets/item5.png'
import Item6 from './assets/item6.png'
import Item7 from './assets/item7.png'

const GridComponent = ({image, block1, block2, block3}) => {
    return (
        <div className={styles.gridBlock}>
            <img src={image} alt={"itemImage"}/>
            <div className={styles.textContainer}>
                <div className={styles.textBlock}>{block1}</div>
                <div className={styles.textBlock2}>{block2}</div>
                <div className={styles.textBlock3}>{block3}</div>

            </div>
        </div>
    )
}


function App() {
    return (
        <div className={styles.App}>
            <section className={styles.titleBg}>
                <div className={styles.logoBox}/>
                <div className={styles.titleBlock}>
                    <p className={styles.firstTitle}>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</p>
                    <p className={styles.twoTitle}>Побеждайте легко, побеждайте стильно с новыми коллекционными
                        изданиями «Аллодов Онлайн»!</p>
                </div>
            </section>
            <section className={styles.contentWall}>
                <div className={styles.content}>
                    <div className={styles.imageGlow}/>
                    <img src={Dog} alt={"dog"} className={styles.contentImage} height={860} width={440}/>
                    <div className={styles.gridContent}>
                        <div className={styles.itemTitle}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
                        <div className={styles.grid}>
                            <div className={styles.gridButtonsBlock}>
                                <button className={styles.gridButton}>Бесплатные сервера</button>
                                <button className={styles.gridButton}>Подписочный сервер</button>
                            </div>
                            <GridComponent image={Item1} block1={"Игровое время"} block2={"-"} block3={"30 дней"}/>
                            <GridComponent image={Item2} block1={"Запечатанный набор инструментов"} block2={"1"}
                                           block3={"1"}/>
                            <GridComponent image={Item3} block1={"Хрупкая чистая руна 10-й ступени"} block2={"1"}
                                           block3={"-"}/>
                            <GridComponent image={Item4} block1={"Большой символ изобилия творца"} block2={"10"}
                                           block3={"-"}/>
                            <GridComponent image={Item5} block1={"Мана-батарея"} block2={"-"} block3={"20"}/>
                            <GridComponent image={Item6} block1={"Модуль памяти"} block2={"-"} block3={"10"}/>
                            <GridComponent image={Item7} block1={"Помощник Вито "} block2={"1"} block3={"1"}/>
                            <div className={styles.buy}>
                                <img src={Box} alt={"box"} style={{marginTop: 20}}/>
                                <div>
                                    <div className={styles.price}>399 ₽</div>
                                    <button className={styles.buttonBuy}>ПРИОБРЕСТИ</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
