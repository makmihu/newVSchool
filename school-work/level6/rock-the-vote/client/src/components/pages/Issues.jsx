import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Issue from '../sections/Issue'

export default function Issues() {
  // const { allIssues } = useContext(UserContext)
  // console.log(allIssues)
  // const issuesMapped = allIssues.map(info => <Issue {...info} key={info._id} />)

  return (
    <>
      <header>All Issues</header>
      {/* {issuesMapped} */}
    </>
  )
}