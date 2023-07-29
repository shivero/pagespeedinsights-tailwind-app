
const ScoreIcon = ({ score }: { score?: number | null }) => {
  if (!score) return null;
  return (
    <>
      {score === 1 && <span className='bg-green-500 inline-block w-4 h-4 rounded-full basis-4 mr-2'></span>}
    </>
  )
}

export default ScoreIcon;
