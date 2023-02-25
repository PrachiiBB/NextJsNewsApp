import { useRouter } from "next/router";
import styles from '../styles/toolbar.module.css'
const Toolbar = ()=>{
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={()=> router.push('/')}>HOME</div>
            <div onClick={()=> router.push('/feed/1')}>FEED</div>
            <div onClick={()=> router.push('/eom')}>EOM</div>
            <div onClick={()=> router.push('./about')}>ABOUT</div>
        </div>
    )
}

export default Toolbar;