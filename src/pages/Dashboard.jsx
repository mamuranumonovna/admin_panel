import shop from '../assets/Shop.svg'
import user from '../assets/Users.svg'
import notification from '../assets/notifications.svg'
import car from '../assets/directions_car.svg'
export default function Dashboard() {

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
    </div>
  )
}
