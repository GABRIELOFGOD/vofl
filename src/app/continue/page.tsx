import { Suspense } from "react"
import ContinuePage from "./_components/ContinuePage"

const Continue = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ContinuePage />
      </Suspense>
    </div>
  )
}
export default Continue