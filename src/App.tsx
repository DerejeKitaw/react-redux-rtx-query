import { useState } from 'react';
import './App.css'
import { useAppDispatch } from './app/hooks';
// import { useFetchBreadQuery } from './dogs/dogs-api-slice';
import { useFetchProjectsQuery } from './projects/projects-api-slice';
import { useGetSupportQuery } from './projects/inverter-api-slice';
import { useGetProjectsQuery } from './projects/api';

function App() {
  const { data: projects } = useGetProjectsQuery()
  const dispatch = useAppDispatch()
  const [numDogs, setNumDogs] = useState(10);
  // const {data=[]}=useFetchBreadQuery(numDogs)
  // const {data}=useGetSupportQuery("forceFail",{skip:false})
  // const {data}=useFetchProjectsQuery()
  // const projectData = data?.projects
  console.log(projects)
  return (
    <div className="App">
      <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      {/* {data.map((bread)=><div>{bread.id}</div>)} */}
      {/* {projectData && projectData.map((project)=><div key={project.jobNumber}>{project.jobNumber}</div>)} */}
    </div>
  )
}

export default App
