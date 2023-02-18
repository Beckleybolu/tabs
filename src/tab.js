import React,{useState,useEffect} from "react";
import './index.css';

const url = 'https://course-api.com/react-tabs-project'

const Tab = ()=>{
const[jobs,setJobs]=useState([])
const[loading,setLoading]=useState(true);
const[value,setValue]=useState(0);

const fetchData = async()=>{
    try {
        const data = await fetch(url);
        const res = await data.json();
        setJobs(res)
        setLoading(false)
        
    } catch (error) {
        setLoading(false)
        alert(error)
    }
  
}

useEffect(()=>{
    fetchData()
},[])


if(loading){
    return(
        <section className="loading">
            <h1>Loading...</h1>
        </section>
    )
}
const{id,company,dates,title,duties}=jobs[value]

 return(
        <section key={id} className='flex-container'>
                <div>
                  {
                    jobs.map((job,index)=>{
                        const{company}=job
                        console.log(index);
                        return(
                            <div className="btn-container" key={job.id}>
                                <button onClick={()=> setValue(index)}>{company}</button>
                                
                            </div>  
                        )
                    })
                  }
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    <div>
                        {
                            duties.map((duty,index)=>{
                                return(
                                    <ul key={index}>
                                        <li className="job-desc">{duty}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
        </section>
    )

}

export default Tab