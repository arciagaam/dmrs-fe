import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.png'
import Intelligence_img from '../../assets/intelligence-investigations.png' 
import Australia_img from '../../assets/dmrs-australia-1.jpg' 
import II_icon from '../../assets/intelligent-intelligence-icon.png'
import IntelligenceMb_img from '../../assets/intelligent-investigations-mb.png'

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
        <div className="flex items-center w-full laptop:min-h-[768px] laptop:h-full h-screen gap-[6rem] p-20 tablet:flex-col laptop:gap-10">
          <div className="z-10 flex w-1/2 tablet:w-full  max-h-[500px]">
            <img src={Australia_img} alt="" className="object-cover cover rounded-tl-[3.12rem] rounded-br-[3.12rem]"/>
          </div>

          <div className="z-10 flex flex-col w-1/2 gap-10 tablet:w-full">
            <div>
              <p className="text-xl laptop:text-lg font-bold leading-[3rem] text-bg-dark mobile:text-purple-300">Dan Murdoch Risk Services</p>
              <p className="text-2xl font-bold laptop:text-xl text-primary-300">Australia</p>
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
        <div className="flexh-full w-full items-center gap-[6rem] p-7 tablet:p-20">
          <div className="flex flex-col tablet:flex-row tablet:p-10 justify-center items-center w-full max-h-[450px] p-10 gap-2 mobile:gap-5 rounded-[3.12rem] bg-black">
            <img src={II_icon} alt="" className="object-contain w-1/4"/>
            <div className="flex flex-col justify-center text-center">
              <p className="text-sm tablet:text-md laptop:text-lg desktop:text-xl">
                <strong className="text-primary-300">Intelligent Intelligence</strong>
              </p>
              <p className="text-sm tablet:text-md laptop:text-lg desktop:text-xl text-accent-50 ">
                <strong>leads to thoughtful investigations and evidence-filled undercover operations resulting in a safer pharmaceutical environment globally.</strong>
              </p>    
            </div>
            
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
          
          <div className="flex w-full h-full">
            <div className="flex flex-col items-center justify-center w-full bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
              
            </div>  

          </div>
          
        </div>
      </section>

      {/* Brochure */} 
      <section>
        <div className="flex items-center w-full h-full">
          <div className="flex flex-col items-center w-auto h-full gap-5 py-20 pl-20 mr-5 laptop:mr-10 laptop:items-start">
            <p className="text-2xl font-bold uppercase laptop:text-lg tablet:text-lg mobile:text-medium text-bg-dark ">Intelligence Investigations</p>
            <Button variant="default" size="sm" >See Brochure</Button>
          </div>

          <div className="flex flex-col w-auto h-full laptop:h-full">
            <img src={Intelligence_img} alt="" className="h-full tablet:hidden mobile:hidden"/>
            <img src={IntelligenceMb_img} alt="" className="w-full desktop:hidden laptop:hidden "/>
          </div>

          
        </div>  
      </section>
    </div>
  )
}

export default Australia