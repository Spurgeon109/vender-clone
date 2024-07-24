import { ClientProfit } from "../../interface/client-proft"

export default function MovingBanner(props: { profitData: ClientProfit[] }){
    const staticData = [
        {
            client: 'calendly',
            image: 'http://localhost:3001/images/calendly.png',
            percentage: '10%',
            amount: '2500'
        },
        {
            client: 'circleci',
            image: 'http://localhost:3001/images/circleci.png',
            percentage: '10%',
            amount: '2500'
        },
        {
            client: 'computershare',
            image: 'http://localhost:3001/images/computershare.png',
            percentage: '10%',
            amount: '2500'
        },
        {
            client: 'envoy',
            image: 'http://localhost:3001/images/computershare.png',
            percentage: '10%',
            amount: '2500'
        },
    ]
 return <div className="w-screen flex gap-2">
    {props.profitData.map((item)=> {
        return <div className="w-fit p-2 border-[1px] border-solid border-black">
            Hurray! We just saved a client {item.amount} Proft {item.percentage}. Deal with {item.client}
        </div>
    })}
 </div>   
}