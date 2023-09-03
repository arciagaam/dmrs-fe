import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.png'

const Australia = () => {
  return (
    <div className="flex flex-col w-full bg-white"> 
      <div className="z-10">
        <Hero>
          <div className="flex flex-col items-center justify-center w-full gap-3 text-white">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className='z-10 text-3xl font-bold text-center'>DMRS Australia</h1>
              <Button variant="outline" size="sm">Services</Button>
            </div>
          </div>
        </Hero>  
      </div>
      

      {/* DMRS Australia */}
      <section className="relative overflow-hidden navTrigger">
        <div className="flex items-center w-full gap-[6rem] p-[150px] tablet:flex-col">
          <div className="z-10 rounded-tl-[3.12rem] rounded-br-[3.12rem] flex w-1/2 h-full min-h-[450px] bg-no-repeat bg-center bg-cover bg-[url('assets/dmrs-australia-1.jpg')]">

          </div>

          <div className="z-10 flex flex-col w-1/2 h-full gap-10">
            <div>
              <p className="text-xl font-bold leading-[3rem] text-bg-dark">Dan Murdoch Risk Services</p>
              <p className="text-2xl font-bold text-primary-300">Australia</p>
            </div>
            
            <p className="z-10 max-w-lg text-small text-bg-dark">
              <strong className="text-accent-800">DMRS </strong> 
              <strong className="text-primary-400">Australia </strong> 
              Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.
            </p>
          </div>
        </div> 
        
        <img src={DMRSimg} alt="" className="absolute top-0 bottom-0 right-[-10px] w-auto m-auto min-h-[600px] max-h-[850px] z-0 tablet:hidden"/>
      </section>

      {/* Intelligent Intelligence */}
      <section>
        <div className="flex w-full gap-[6rem] p-[150px] ">
          <div className="flex flex-col items-center justify-center w-full h-full p-[5rem] rounded-[3.12rem] bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
            <p className="text-lg leading-[3rem] text-center text-bg-dark">
              <strong className="text-primary-300">Intelligent Intelligence</strong>
            </p>
            <p className="max-w-[80%] text-lg text-center text-accent-50 leading-[3rem]">
              <strong>leads to thoughtful investigations and evidence-filled undercover operations resulting in a safer pharmaceutical environment globally.</strong>
            </p>  
          </div>
        </div>  
      </section>

      {/* Services */}
      <section className=""> 
        <div className="flex flex-col h-[94vh]">
          <div className="flex flex-col w-full justify-center gap-5 px-[150px] py-[50px]">
            <p className="text-2xl font-bold text-center uppercase text-bg-dark ">Who are Dan Murdoch Risk Services?</p>
            <p className="self-center max-w-5xl min-w-[565px] text-center text-small text-bg-dark">
              <strong className="text-accent-800">DMRS </strong> 
              <strong className="text-primary-400">Australia </strong> 
              Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
            </p>
          </div>
          
          <div className="flex w-full h-screen overflow-x-scroll">
            <div className="flex flex-col items-center justify-center w-full flex-shrink-0 bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
              
            </div>  

            <div className="flex flex-col items-center justify-center w-full flex-shrink-0 bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
              
            </div>  
          </div>
          
        </div>
      </section>

      {/* Brochure */}
      <section>
        <div className="flex items-center w-full gap-[6rem] p-[150px]">
          <div className="flex flex-col w-1/2 h-full gap-10">
            <div>
              <p className="text-2xl font-bold uppercase text-bg-dark ">Intelligence Investigations</p>
            </div>
            
          </div>

          <div className="rounded-tl-[3.12rem] rounded-br-[3.12rem] flex w-1/2 h-full min-h-[450px] bg-primary-300">
          &emsp;&emsp;sdada
          </div>
        </div>  
      </section>


    </div>
  )
}

export default Australia