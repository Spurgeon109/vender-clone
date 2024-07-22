import styles from './home.module.scss'

export default function Home() {
    const steps = [
        {
            title: 'Share your purchase requirements',
            description: 'Provide our experts with the details of your desired purchase—specify the product, tier, licenses counts, usage, billing preference, and preferred terms.',
            image: ''
        },
        {
            title: 'Let us negotiate the best price',
            description: 'With pricing benchmarks, deep domain expertise, and over 35,000 SaaS negotiations under our belt, we broker incredible deals at no cost to you.',
            image: ''
        },
        {
            title: 'Sign the contract directly with the supplier',
            description: "Once we've negotiated the best terms, you finalize the agreement directly with the supplier, ensuring full transparency and control over your contract.",
            image: ''
        }
    ]
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
                <div className='flex gap-4 absolute w-fit backdrop-blur top-[-20px] left-1/2 translate-x-[-50%] p-4 rounded-2xl'>
                    <span>USED BY:</span>
                    <span className='font-bold'>B R E X</span>
                    <span className='font-bold'>C A N V A</span>
                    <span className='font-bold'>W E B F L O W</span>
                </div>
                <div className='w-1/1 flex justify-center m-14'>
                    <span className='text-[#0002119D] w-fit text-[14px]'>HOW VENDR WORKS</span>
                </div>
                <div>
                    {
                        steps.map((step) => <div>
                            <div className='flex'>
                                <span className='font-bold'>{step.title}</span>
                                <p>{step.description}</p>
                            </div>
                            <img src={step.image} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}