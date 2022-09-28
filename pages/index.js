import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar';

export default function Home() {

  const [value, setValue] = React.useState('sdas')

  const [loading, setLoading] = React.useState()

  console.log(value)

  function handleClick(event){
    setValue(event.target.value)
  }


  const [darkMode, setDarkMode] = React.useState(false);
    // checa o tema e reseta quando darkmode muda
      React.useEffect(() => {
        themeCheck();
      }, [darkMode]);

      // check  o tema no componente montado
      React.useEffect(()=>{
        themeCheck()
      },[])

      // função que checa e reseta o tema


      const themeCheck = () => {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          setDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setDarkMode(false);
        }
      }
    

        const toggleTheme = () => {
          const theme = localStorage.getItem("theme");
          if (theme) {
            localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
          } else {
            localStorage.setItem("theme", "dark");
          }
          setDarkMode(!darkMode);
        };
      

        


 
  {/*asdasdasdasd  

         return (

    <div className='dark:bg-slate-800 bg-slate-200 h-screen flex flex-row'>
        <Sidebar/>
      <button onClick={toggleTheme} className='m-8 px-4 py-1 bg-[blue]'>Switch</button>
          <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 ml-8">
              <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
      </div>
    </div>
  )
*/ }

return (


<div className=' grid lg:grid-cols-2 grid-cols-1 items-center bg-[#fafafa]  '>
  <div className='flex w-full justify-end border-r-[1.5px] dark:border-zinc-700 border-slate-200 h-32 lg:h-screen dark:bg-zinc-900'>
    <div className='max-w-[640px]  w-full items-center justify-center flex'>

         <button className='bg-[black] text-white px-6 py-2 rounded dark:text-black dark:bg-zinc-50' onClick={toggleTheme}>Dark / Ligth</button>
    </div>

  </div>

        <div className='w-full px-4 py-8 bg-[white] dark:bg-zinc-800 h-screen  '>
          <h1 className='text-[black] text-[21px] mb-8 dark:text-white'>Identificação</h1>
          <div>
            <h2 className='text-[black]  text-[16px] dark:text-zinc-400'>Seu telefone</h2>
            <input placeholder='Qual o seu telefone?' 
              onChange={handleClick}
              
              value={value} 
            
                className='
                
                  w-full 
                  rounded 
                  px-4 
                  text-sm 
                  font-light 
                  bg-[white] 
                  dark:bg-zinc-800 
        
                  dark:placeholder-gray-500
                  placeholder-slate-500 
         
        
                  focus:border-[black]
                  dark:focus:border-[white]
                  dark:border-zinc-600
                  dark:text-[white]
            
                  focus:outline-none 
                  focus:bg-white 
                  dark:focus:bg-zinc-800 
                  text-slate-600
                  border-2
                  border-slate-200
                  my-2
                  py-4
                  
                  '>

                  </input>

                  <span className=' text-slate-400 dark:text-zinc-600 text-sm  font-light'>
                           Este é o telefone que você usará para gerenciar seus pedidos
                  </span>
                  
          </div>
          <div className='py-8 '>
            <hr className='border-gray-300 dark:border-gray-800 '/>
          </div>

          




          <div className={ value.length >= 10 ?'' : 'opacity-25 pointer-events-none'}>
              <h2 className='text-[black]  text-[16px] pb-4 dark:text-zinc-400'>Forma de entrega</h2>

          <ul className="flex flex-col gap-5  mx-auto text-[black]">
            
              <li className="relative">
                  <input className="sr-only peer" defaultChecked type="radio" value="yes" name="answer" id="answer_yes"/>

                  <label className="flex flex-col p-5 dark:bg-zinc-900 dark:border-none border border-gray-300 rounded-lg cursor-pointer  focus:outline-none hover:bg-gray-50 peer-checked:ring-black dark:peer-checked:ring-white peer-checked:ring-1 peer-checked:border-transparent" for="answer_yes">
                    <span className='dark:text-zinc-300'>ENTREGA</span>
                    <span className='text-sm text-[#848484]'>Motoboy entrega na sua casa</span>

                  </label>

                  <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                    👍
                  </div>

              </li>

          <li class="relative ">
              <input  className="sr-only peer" type="radio" value="no" name="answer" id="answer_no"/>
              <label className="dark:bg-zinc-900 dark:border-0 flex flex-col p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-black dark:peer-checked:ring-white peer-checked:ring-1 peer-checked:border-transparent" for="answer_no">
              <span className='dark:text-zinc-300'>RETIRADA</span>
                    <span className='text-sm text-[#848484]'>Motoboy entrega na sua casa</span>
              </label>

              <div className="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                👎
              </div>
        </li>

          </ul>
      
          </div>
        </div>

</div>
)
 
}
