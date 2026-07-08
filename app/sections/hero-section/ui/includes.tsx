import PackageServiceCreator from "@/app/share/package-servcie-creator";
import BidForm from "./bidForm";
import BidFormContent from "./bidFormContent";
import RootSectionHeader from "./header";
import { IHeroSectionIncludes } from "@/types/hero-section/includes.type";
import styles from "../index.module.scss";

const HeroSectionIncludes = ({
    isPackageServiceCreatorOpen,
    setIsPackageServiceCreatorOpen,
    handleCustomPackageOrder,
    showMessageBox,
    isAnimate,
    handleSubmit,
    name,
    email,
    contact,
    message,
    showEditableMessage,
    servicePackage,
    setShowMessageBox,
    setName,
    setEmail,
    setContact,
    setMessage,
    formRef
}: IHeroSectionIncludes) => {
    return (
        <section id="hero-section">
            <PackageServiceCreator 
                isOPen={isPackageServiceCreatorOpen} 
                setIsOPen={setIsPackageServiceCreatorOpen}
                onOrder={handleCustomPackageOrder}
            />
            <div className={styles["root-hero-section"]}>
                <RootSectionHeader
                    isAnimate={isAnimate}
                />
                <div className={styles["root-hero-section__bid-form"]}>
                    <BidFormContent
                        isAnimate={isAnimate}
                        setIsPackageServiceCreatorOpen={setIsPackageServiceCreatorOpen}
                    />
                    <BidForm
                        showMessageBox={showMessageBox}
                        isAnimate={isAnimate}
                        handleSubmit={handleSubmit}
                        name={name}
                        email={email}
                        contact={contact}
                        message={message}
                        showEditableMessage={showEditableMessage}
                        servicePackage={servicePackage}
                        setShowMessageBox={setShowMessageBox}
                        setName={setName}
                        setEmail={setEmail}
                        setContact={setContact}
                        setMessage={setMessage}
                        formRef={formRef}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSectionIncludes;