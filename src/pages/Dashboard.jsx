import shop from '../assets/Shop.svg'
import user from '../assets/Users.svg'
import notification from '../assets/notifications.svg'
import car from '../assets/directions_car.svg'
import { LineChart, PieChart, useDrawingArea } from '@mui/x-charts'
import styled from '@emotion/styled'

export default function Dashboard() {
    
    const data = [
        { value: 5, label: 'A' },
        { value: 10, label: 'B' },
        { value: 15, label: 'C' },
        { value: 20, label: 'D' },
      ];
      
      const size = {
        width: 360,
        height: 200,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));
      
      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
      

  return (
    <div className="w-full">
        <nav className="py-[4px] bg-white border-sw">
            <h1 className='py-4 px-4 pl-9  text-3xl font-thin text-gray-700 inter-bold'>Dashboard</h1>
        </nav>
        <section className="pl-[36px] pt-[24px]">
            <div className="flex items-center gap-[20px]">
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">24</span>
                        <h3 className="text-[#6E8BB7]">Филиалы</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={shop} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Клиенты</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={user} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">110,823</span>
                        <h3 className="text-[#6E8BB7]">Подписчики</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={notification} alt=""/>
                </div>
                <div className="flex w-[271px] rounded-[6px] bg-white justify-between px-[24px] py-[35px] items-center">
                    <div>
                        <span className="inter-bold font-black pb-[10px] block text-[24px] text-[#4094F7]">75</span>
                        <h3 className="text-[#6E8BB7]">Курьеры</h3>
                    </div>
                    <img className="bg-[#4094F726] p-[20px] rounded-[6px]" src={car} alt=""/>
                </div>
            </div>
        </section>
        <section>
            <div className='flex items-start p-8'>
            <div>
            <div className='bg-white py-2 px-2 rounded-lg mb-6'>
            <LineChart
  xAxis={[{ data: [0, 1.5, 2.5, 5, 8, 10] }]}
  series={[
    {
      data: [1, 5.5, 2, 8.5, 1.5, 5],
      area: true,
      color:'#F8DD4E'
    },
  ]}
  width={350}
  height={200}
/>
            </div>
<div className='bg-white py-2 px-2 rounded-lg mb-6'>
<LineChart
  xAxis={[{ data: [0, 1.5, 2.5, 5, 8, 10] }]}
  series={[
    {
      data: [1, 5.5, 2, 8.5, 1.5, 5],
      area: true,
      color:'#A23FEE'
    },
  ]}
  width={350}
  height={200}
/>
</div>
<div className='bg-white py-2 px-1 rounded-lg'>
<LineChart
  xAxis={[{ data: [0, 1.5, 2.5, 5, 8, 10] }]}
  series={[
    {
      data: [1, 5.5, 2, 8.5, 1.5, 5],
      area: true,
      color:"#F2271C"
    },
  ]}
  width={350}
  height={200}
/>
</div>
            </div>
<div>
<div className='flex items-center'>
<div className='bg-white py-2 px-2 rounded-lg ml-4'>
<PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
</div>
    <div className='bg-white py-2 px-2 rounded-lg ml-4'>
    <PieChart series={[{ data,
       innerRadius: 80, 
      
       }]} {...size}>
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
    </div>
</div>
<div className='bg-white py-4 px-2 rounded-lg ml-4 mt-4'>
<LineChart
  xAxis={[{ data: [0, 1.5, 2.5, 5, 8, 10] }]}
  series={[
    {
      data: [1, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  width={700}
  height={400}
/>
</div>
</div>
            </div>
        </section>
    </div>
  )
}
