import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.png'
import Intelligence_img from '../../assets/intelligence-investigations.png' 
import Australia_img from '../../assets/dmrs-australia-1.jpg' 

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
      <section className="relative overflow-hidden navTrigger ">
        <div className="flex items-center w-full min-h-[768px] h-screen gap-[6rem] p-20 tablet:flex-col">
          <div className="z-10 flex w-1/2  max-h-[500px]">
            <img src={Australia_img} alt="" className="object-cover cover rounded-tl-[3.12rem] rounded-br-[3.12rem]"/>
          </div>

          <div className="z-10 flex flex-col w-1/2 gap-10">
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
        <div className="flex w-full h-screen items-center gap-[6rem] p-20">
          <div className="flex flex-col items-center justify-center w-full h-full max-h-[450px] p-[5rem] rounded-[3.12rem] bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
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
      <section className=''> 
        <div className="flex flex-col h-[95vh] laptop:min-w-[450px]">
          <div className="flex flex-col justify-center w-full gap-5 px-20 pt-20 pb-10">
            <p className="text-2xl font-bold text-center uppercase laptop:text-xl text-bg-dark ">Who are Dan Murdoch Risk Services?</p>
            <p className="self-center max-w-5xl min-w-[565px] text-center text-small text-bg-dark laptop:text-xs">
              <strong className="text-accent-800">DMRS </strong> 
              <strong className="text-primary-400">Australia </strong> 
              Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
            </p>
          </div>
          
          <div className="flex w-full h-full overflow-x-scroll">
            <div className="flex flex-col items-center justify-center w-full bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
              
            </div>  

          </div>
          
        </div>
      </section>

      {/* Brochure */}
      <section>
        <div className="flex items-center w-full h-full">
          <div className="flex flex-col items-center w-auto h-full gap-10 py-20 pl-20 mr-5">
            <p className="text-2xl font-bold uppercase laptop:text-xl text-bg-dark ">Intelligence Investigations</p>
          </div>

          <div className="flex flex-col w-auto h-full">
            <img src={Intelligence_img} alt="" className="h-full"/>
          </div>
        </div>  
      </section>
    </div>
  )
}

export default Australia