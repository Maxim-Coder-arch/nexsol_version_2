import { casesData } from "@/configs-and-data/cases.data";
import { IMonitorListOfNames } from "@/types/cases/monitorListOfNames.type";
import styles from "../index.module.scss";

const MonitorListOfNames = ({ toggleCase, activeCase }: IMonitorListOfNames) => {
    return (
        <div className={styles["root-cases__monitor__demo__list-of-names"]}>
            <ol>
            {casesData.map(item => {
                return (
                <li 
                    key={item._id} 
                    onClick={() => toggleCase(item._id)}
                    className={
                    activeCase === parseInt(item._id) ? styles["active"] : ""
                    }
                >
                    {item.title}
                </li>
                )
            })}
            </ol>
        </div>
    )
}

export default MonitorListOfNames;