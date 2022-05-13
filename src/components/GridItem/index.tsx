import { Level } from '../../helpers/imc'
import styles from './styles.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'
import { isTemplateLiteral } from '@babel/types'

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30}/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && 
                <div className={styles.yourImc}>Seu IMC é de <span>{item.yourImc} kg/m²</span></div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <span>{item.imc[0]}</span> e <span>{item.imc[1]}</span>
                </>
            </div>
        </div>
    )
}