import CaseDetailContent from "./caseDetailContent";
import CaseDetailMeta from "./caseDetailMeta";
import CaseImage from "./caseImage";
import MonitorListOfNames from "./monitorListOfNames";
import { IIncludesCasesSection } from "@/types/cases/includesCasesSection.type";
import styles from "../index.module.scss";

const IncludesCasesSection = ({ 
    toggleCase,
    activeCase,
    filteredCase
 }: IIncludesCasesSection) => {
    return (
        <section id="cases-section">
            <div className={styles["root-cases"]}>
                <div className={styles["root-cases__title"]}>
                    <h2>Популярные работы</h2>
                </div>
                <div className={styles["root-cases__monitor"]}>
                    <div className={styles["root-cases__monitor__demo"]}>
                        <MonitorListOfNames
                            toggleCase={toggleCase}
                            activeCase={activeCase}
                        />
                        <div className={styles["root-cases__monitor__demo__case-details"]}>
                            {filteredCase && (
                                <>
                                    <CaseImage
                                        activeCase={activeCase}
                                        filteredCase={filteredCase}
                                    />
                                    <CaseDetailContent
                                        filteredCase={filteredCase}
                                    />
                                    <CaseDetailMeta
                                        filteredCase={filteredCase}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IncludesCasesSection;