import { useEffect, useState, useRef } from "react"
import MovingBanner from "../client-profits/client-profits"


export default function Home() {
    const stepRefs = useRef<HTMLElement[]>([]);
    const [clientProfitData, setClientProfitData] = useState([])
    const steps = [
        {
            title: 'Share your purchase requirements',
            description: 'Provide our experts with the details of your desired purchase—specify the product, tier, licenses counts, usage, billing preference, and preferred terms.',
            image: 'assets/step-1.webp'
        },
        {
            title: 'Let us negotiate the best price',
            description: 'With pricing benchmarks, deep domain expertise, and over 35,000 SaaS negotiations under our belt, we broker incredible deals at no cost to you.',
            image: 'assets/step-2.webp'
        },
        {
            title: 'Sign the contract directly with the supplier',
            description: "Once we've negotiated the best terms, you finalize the agreement directly with the supplier, ensuring full transparency and control over your contract.",
            image: 'assets/step-3.webp'
        }
    ]

    useEffect(()=>{
        
            fetch('http://localhost:3001/get-profited-clients').then(async (jsonPromise)=>{
                const data = await jsonPromise.json()
                setClientProfitData(data)
            }).catch((err)=>{console.log(err)})
    },[])
    return (
        <section>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-8 ml-14 items-center'>
                    <div className='flex flex-col gap-4'>
                        <span className='font-bold  text-[28px] text-[#27272f]'>
                            Skip the negotiations &
                            <br></br>
                            save thousands on SaaS
                        </span>
                        <span>
                            Get the best price on new software<strong>—100% free.</strong>
                        </span>
                    </div>
                    <div className='p-1 pl-4 border-solid border-[1px] border-[#a0a0a1] w-fit rounded-md'>
                        <div className='flex items-center'>
                            <input type="text" className='outline-none' placeholder='Enter a product name' />
                            <button className='bg-[#6049f5] text-white p-2 rounded-[4px]'>Search</button>
                        </div>
                    </div>
                </div>
                <div className='w-[700px]'>
                    <img src='assets/product-images.webp' className='w-full h-full'></img>
                </div>
            </div>
            <div className='w-full h-fit z-10 relative bg-white border-solid border-[#a0a0a1] border-t-[1px]'>
                <div className='flex gap-4 absolute w-fit backdrop-blur top-[-20px] left-1/2 translate-x-[-50%] p-4 rounded-2xl border-[1px] border-blue-50'>
                    <span>USED BY:</span>
                    <span className='font-bold'>B R E X</span>
                    <span className='font-bold'>C A N V A</span>
                    <span className='font-bold'>W E B F L O W</span>
                </div>
                <div className='w-1/1 flex justify-center m-14'>
                    <span className='text-[#0002119D] w-fit text-[14px]'>HOW VENDR WORKS</span>
                </div>
                <div className='[&>*:nth-child(odd)]:flex-row-reverse'>
                    {
                        steps.map((step, idx) => 
                        <div className='step flex gap-1 items-center justify-center'>
                            <div className='flex flex-col w-[30rem]'>
                                <span className='bg-[#ccccd1] rounded-full text-black font-bold w-fit h-fit px-[1rem] py-[0.5rem]'>{idx+1}</span>
                                <span className='font-bold'>{step.title}</span>
                                <p>{step.description}</p>
                            </div>
                            <img src={step.image} alt="" className='w-[30rem]'/>
                        </div>)
                    }
                </div>
            </div>
            <div>120000</div>
            <MovingBanner profitData={clientProfitData}></MovingBanner>
        </section>
    )
}