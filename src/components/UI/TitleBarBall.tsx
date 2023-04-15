interface TitleBarBallProps {
  backgroundColor: string
}
const TitleBarBall = ({ backgroundColor }: TitleBarBallProps) => (
  <div className={`w-3 h-3 ${backgroundColor} rounded-full`} />
)
export default TitleBarBall
