"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import styles from "./index.module.scss";


const LoaderComponent = () => {

    const [isLoading, setIsLoading] = useState(true);

    const pathname = usePathname();


    useLayoutEffect(() => {

        setIsLoading(true);

    }, [pathname]);


    useEffect(() => {

        const timer = setTimeout(() => {

            setIsLoading(false);

        },1700);


        return () => clearTimeout(timer);


    },[isLoading, pathname]);



    return (

        <AnimatePresence mode="wait">

            {isLoading && (

                <motion.div

                    className={styles["loader-block"]}

                    exit={{
                        opacity:0
                    }}

                    transition={{
                        duration:.25
                    }}

                >


                    <motion.div

                        className={styles["loader-block__line"]}

                        initial={{
                            width:0
                        }}

                        animate={{
                            width:"100%",
                            opacity:0
                        }}

                        transition={{

                            width:{
                                duration:.3
                            },

                            opacity:{
                                delay:.45,
                                duration:.2
                            }

                        }}

                    />



                    <motion.div

                        className={styles["loader-block__brand"]}

                        initial={{
                            opacity:0,
                            scale:.9
                        }}

                        animate={{
                            opacity:1,
                            scale:1
                        }}

                        transition={{
                            delay:.6,
                            duration:.3
                        }}

                    >

                        NEXSOL

                    </motion.div>



                    <div className={styles["loader-block__blocks"]}>


                        {Array.from({
                            length:5
                        }).map((_,index)=>(


                            <motion.div

                                key={index}

                                className={
                                    styles["loader-block__blocks__item"]
                                }


                                initial={{
                                    height:"0%"
                                }}


                                animate={{

                                    height:[
                                        "0%",
                                        "100%",
                                        "100%",
                                        "0%"
                                    ]

                                }}


                                transition={{

                                    duration:.7,

                                    delay:.8 + index*.08,

                                    times:[
                                        0,
                                        .45,
                                        .8,
                                        1
                                    ],


                                    ease:"easeInOut"


                                }}

                            />


                        ))}


                    </div>


                    <motion.div

                        className={
                            styles["loader-block__brand-cover"]
                        }

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                        transition={{
                            delay:1.35,
                            duration:.15
                        }}

                    />


                </motion.div>

            )}

        </AnimatePresence>

    )

}


export default LoaderComponent;