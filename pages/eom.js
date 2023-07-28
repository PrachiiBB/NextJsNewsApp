import styles from '../styles/eom.module.css';
import Toolbar from '@/components/toolbar'

const EOM = ({employee}) => {
    return(
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>Prachi Balla</h3>
                    <h6>{employee.position}</h6>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" />
                    <p>Dev enthusiast</p>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async pageContent => {
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');

    const employee = await apiResponse.json();

    return{
        props:{
            employee
        }
    }


}

export default EOM;