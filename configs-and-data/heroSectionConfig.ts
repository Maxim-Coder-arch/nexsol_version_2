const titleData__heroSection = ["Nexsol -", "продвижение", "вашего бизнеса"]
const animationConfig__heroSection = {
  initial: {rotateX: 50, y: 100, opacity: 0},
  animate: {rotateX: 0, y: 0, opacity: 1}
}
const transitionAnimation__heroSection = {
  ease: "easeOut",
  duration: .9
} as const;

export {  titleData__heroSection, animationConfig__heroSection, transitionAnimation__heroSection }