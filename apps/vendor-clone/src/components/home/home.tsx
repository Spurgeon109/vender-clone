import styles from './home.module.scss'

export default function Home(){
    return (
        <section>
            <div className='m-4 flex justify-between items-center h-[378px]'>
                <div className='flex flex-col gap-6 ml-14'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-[28px] text=[#27272f]'>
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
                            <input type="text" className='outline-none' placeholder='Enter a product name'/>
                            <button className='bg-[#6049f5] text-white p-2 rounded-[4px]'>Search</button>
                        </div>
                    </div>
                </div>
                <div className='w-2/4 h-'>
                    <img src='assets/product-images.webp' ></img>
                </div>
            </div>
            <div className='w-fullh-fit z-10 relative bg-white border-solid border-[#a0a0a1]'>
                <div className='absolute w-1/3 backdrop-blur top-[-10] left-1/2'>
                <span>Used by:</span>
                </div>
            </div>
        </section>
    )
}