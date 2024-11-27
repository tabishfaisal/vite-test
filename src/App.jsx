import './App.css'
const tasks = [
	{
		id: 1,
		title: 'Implementare la homepage',
		priority: 1,
		estimatedTime: 120,
		state: 'completed',
	},
	{
		id: 2,
		title: 'Sviluppare il menu di navigazione',
		priority: 2,
		estimatedTime: 60,
		state: 'completed',
	},
	{
		id: 3,
		title: 'Creare il footer del sito',
		priority: 3,
		estimatedTime: 30,
		state: 'completed',
	},
	{
		id: 4,
		title: 'Ottimizzare le performance',
		priority: 1,
		estimatedTime: 180,
		state: 'completed',
	},
	{
		id: 5,
		title: 'Scrivere test per i componenti',
		priority: 2,
		estimatedTime: 90,
		state: 'completed',
	},
	{
		id: 6,
		title: 'Implementare la pagina dei contatti',
		priority: 3,
		estimatedTime: 60,
		state: 'completed',
	},
	{
		id: 7,
		title: 'Aggiungere animazioni CSS',
		priority: 2,
		estimatedTime: 30,
		state: 'backlog',
	},
	{
		id: 8,
		title: "Integrare l'API di autenticazione",
		priority: 1,
		estimatedTime: 120,
		state: 'in_progress',
	},
	{
		id: 9,
		title: 'Aggiornare la documentazione',
		priority: 3,
		estimatedTime: 60,
		state: 'backlog',
	},
	{
		id: 10,
		title: 'Rifattorizzare il codice CSS',
		priority: 2,
		estimatedTime: 90,
		state: 'in_progress',
	},
]


function App() {
const completedTask = tasks.filter((task)=> task.state === "completed")

const currentTask = tasks.filter((task)=> task.state === "backlog" || task.state === "in_progress")


return (
  <>
  <h1>Task Manager </h1>
  <h2>Current Tasks ({currentTask.length})</h2>
    <ul>{
      currentTask.map((task)=>{
        return <li>
			<h3>{task.title} <button>{task.state}</button> </h3>
				<p>priority:{task.priority}</p>
				<p>Est. Time {task.estimatedTime}</p>
		    
		</li>
      })
	}
    </ul>
    <hr></hr>
    <h2>Task completed ({completedTask.length})</h2>
    <ul>
      {
        completedTask.map((task)=> {
          return <li>
			<h3>{task.title} <button>{task.state}</button> </h3>
				<p>priority:{task.priority}</p>
				<p>Est. Time {task.estimatedTime}</p>
		  </li>
      })
      }
    </ul>
  </>
)
}

export default App



/*const arr = [1, 2, 3, 4];
  const arrEl = [];
  for(let i = 0; i < arr.length; i++) {
    const el = (<h1 key={i}>{arr[i]}</h1>);
    arrEl.push(el);
  }
  return arrEl;
  */

  /*return arr.map((el, idx) => {
    return <div key={idx}>
      <h1>{el}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sint. Ducimus, magnam nisi dicta odit possimus praesentium natus provident reiciendis atque quisquam quas aperiam voluptatibus, commodi, velit voluptatum dolorem at!</p>
    </div>
  });*/